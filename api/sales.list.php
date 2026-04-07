<?php
require __DIR__ . '/bootstrap.php';

try {
$user = require_auth();
$pdo = db();
$userId = $user['id'];

$page = max(1, (int) ($_GET['page'] ?? 1));
$perPage = max(1, min(100, (int) ($_GET['perPage'] ?? 20)));
$type = trim((string) ($_GET['type'] ?? 'All'));
$status = trim((string) ($_GET['status'] ?? 'All'));
$dateRange = trim((string) ($_GET['dateRange'] ?? '1M'));
$dateFrom = trim((string) ($_GET['dateFrom'] ?? ''));
$dateTo = trim((string) ($_GET['dateTo'] ?? ''));

$conditions = [];
$params = [];

if ($type !== '' && strcasecmp($type, 'All') !== 0) {
    if (strcasecmp($type, 'Expenses') === 0) {
        $conditions[] = "record_type = 'expense'";
    } else {
        $conditions[] = "record_type = 'sale' AND category = :category";
        $params[':category'] = strtolower($type);
    }
}

if ($status !== '' && strcasecmp($status, 'All') !== 0) {
    $conditions[] = 'status = :status';
    $params[':status'] = strtolower($status);
}

switch (strtoupper($dateRange)) {
    case '1W':
        $conditions[] = 'record_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)';
        break;
    case '2W':
        $conditions[] = 'record_date >= DATE_SUB(CURDATE(), INTERVAL 14 DAY)';
        break;
    case '1M':
        $conditions[] = 'record_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)';
        break;
    case 'CUSTOM':
        if ($dateFrom !== '') {
            $conditions[] = 'record_date >= :date_from';
            $params[':date_from'] = $dateFrom;
        }
        if ($dateTo !== '') {
            $conditions[] = 'record_date <= :date_to';
            $params[':date_to'] = $dateTo;
        }
        break;
}

$where = $conditions ? (' AND ' . implode(' AND ', $conditions)) : '';

$baseSql = "
    SELECT
        'sale' AS record_type,
        id,
        sale_date AS record_date,
        category,
        item_name AS item,
        customer_name AS party,
        quantity,
        total_amount AS amount,
        status,
        due_date
    FROM sales
    WHERE user_id = :sales_user_id

    UNION ALL

    SELECT
        'expense' AS record_type,
        id,
        expense_date AS record_date,
        'expenses' AS category,
        description AS item,
        vendor AS party,
        COALESCE(quantity, 1) AS quantity,
        -amount AS amount,
        status,
        due_date
    FROM expenses
    WHERE user_id = :expenses_user_id
";

$wrappedSql = "SELECT * FROM (" . $baseSql . ") records WHERE 1=1" . $where;
$countSql = "SELECT COUNT(*) FROM (" . $wrappedSql . ") counted";
$dataSql = $wrappedSql . " ORDER BY record_date DESC, id DESC LIMIT :limit OFFSET :offset";

$countStmt = $pdo->prepare($countSql);
$countStmt->bindValue(':sales_user_id', $userId, PDO::PARAM_INT);
$countStmt->bindValue(':expenses_user_id', $userId, PDO::PARAM_INT);
foreach ($params as $key => $value) {
    $countStmt->bindValue($key, $value);
}
$countStmt->execute();
$total = (int) $countStmt->fetchColumn();
$totalPages = max(1, (int) ceil($total / $perPage));
$offset = ($page - 1) * $perPage;

$dataStmt = $pdo->prepare($dataSql);
$dataStmt->bindValue(':sales_user_id', $userId, PDO::PARAM_INT);
$dataStmt->bindValue(':expenses_user_id', $userId, PDO::PARAM_INT);
foreach ($params as $key => $value) {
    $dataStmt->bindValue($key, $value);
}
$dataStmt->bindValue(':limit', $perPage, PDO::PARAM_INT);
$dataStmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$dataStmt->execute();
$rows = $dataStmt->fetchAll();

$summaryStmt = $pdo->prepare("
    SELECT
      COALESCE((SELECT SUM(total_amount) FROM sales WHERE user_id = :summary_sales_user_id), 0) AS sales_total,
      COALESCE((SELECT SUM(amount) FROM expenses WHERE user_id = :summary_expenses_user_id), 0) AS expenses_total
");
$summaryStmt->bindValue(':summary_sales_user_id', $userId, PDO::PARAM_INT);
$summaryStmt->bindValue(':summary_expenses_user_id', $userId, PDO::PARAM_INT);
$summaryStmt->execute();
$summary = $summaryStmt->fetch();

$items = array_map(static function (array $row) {
    $category = strtolower((string) $row['category']);
    $icon = '/egg/media/icons/ico-plus.png';
    if ($category === 'eggs') $icon = '/egg/media/icons/ico-egg.png';
    if ($category === 'chicks') $icon = '/egg/media/icons/ico-chick.png';
    if ($category === 'chicken') $icon = '/egg/media/icons/ico-hen.png';

    return [
        'id' => (string) $row['id'],
        'recordType' => $row['record_type'],
        'date' => $row['record_date'],
        'type' => ucfirst($category),
        'item' => $row['item'],
        'party' => $row['party'] ?? '',
        'qty' => (string) $row['quantity'],
        'total' => (float) $row['amount'],
        'status' => ucfirst((string) $row['status']),
        'dueDate' => $row['due_date'],
        'icon' => $icon,
    ];
}, $rows);

respond([
    'summary' => [
        'salesTotal' => (float) $summary['sales_total'],
        'expensesTotal' => (float) $summary['expenses_total'],
        'allTimeNet' => (float) $summary['sales_total'] - (float) $summary['expenses_total'],
    ],
    'items' => $items,
    'pagination' => [
        'page' => $page,
        'perPage' => $perPage,
        'total' => $total,
        'totalPages' => $totalPages,
    ],
]);
} catch (Throwable $exception) {
    fail('Sales list failed', 500, $exception);
}
