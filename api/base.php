<?php
header('Content-Type: application/json; charset=utf-8');

$config = [];
if (file_exists(__DIR__ . '/config.php')) {
    $config = include __DIR__ . '/config.php';
}

$allowed_origins = $config['allowed_origins'] ?? ['http://localhost:3000'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

session_set_cookie_params(['lifetime' => 7 * 24 * 60 * 60, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => 'Lax']);
session_start();

$db = null;
if ($config && isset($config['db'])) {
    try {
        $db = new PDO(
            'mysql:host=' . $config['db']['host'] . ';dbname=' . $config['db']['name'] . ';charset=' . $config['db']['charset'],
            $config['db']['user'],
            $config['db']['password'],
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_THROW]
        );
    } catch (PDOException $e) {
        error_log('DB error: ' . $e->getMessage());
    }
}

function json_error($msg, $code = 400) { http_response_code($code); echo json_encode(['error' => $msg]); exit; }
function json_success($data) { echo json_encode($data); }
function require_auth() { if (!isset($_SESSION['user_id'])) json_error('Not authenticated', 401); }
function get_json() { return json_decode(file_get_contents('php://input'), true) ?? []; }
