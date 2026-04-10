<?php
// Catch fatal errors and return them as JSON
register_shutdown_function(function () {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        if (!headers_sent()) http_response_code(500);
        echo json_encode(['error' => 'PHP fatal: ' . $error['message']]);
    }
});

set_exception_handler(function ($e) {
    if (!headers_sent()) http_response_code(500);
    echo json_encode(['error' => 'Exception: ' . $e->getMessage()]);
    exit;
});

require_once __DIR__ . '/base.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

if (empty($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorised']);
    exit;
}

if (empty($_FILES['photo']) || $_FILES['photo']['error'] !== UPLOAD_ERR_OK) {
    $uploadErr = $_FILES['photo']['error'] ?? 'no file';
    http_response_code(400);
    echo json_encode(['error' => 'Upload error code: ' . $uploadErr]);
    exit;
}

$file = $_FILES['photo'];

// Validate MIME type — fall back to browser-reported type if fileinfo unavailable
if (function_exists('finfo_open')) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
} else {
    $mimeType = $file['type'];
}

$allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/gif' => 'gif', 'image/webp' => 'webp'];
if (!array_key_exists($mimeType, $allowed)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type: ' . $mimeType]);
    exit;
}

// Max 8MB
if ($file['size'] > 8 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'File too large (max 8MB)']);
    exit;
}

$uploadDir = __DIR__ . '/../media/hens/uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}
if (!is_writable($uploadDir)) {
    @chmod($uploadDir, 0755);
}
if (!is_writable($uploadDir)) {
    http_response_code(500);
    echo json_encode(['error' => 'Upload directory not writable: ' . $uploadDir]);
    exit;
}

$ext = $allowed[$mimeType];
$filename = 'hen_' . bin2hex(random_bytes(8)) . '.' . $ext;
$destination = $uploadDir . $filename;

if (!move_uploaded_file($file['tmp_name'], $destination)) {
    http_response_code(500);
    echo json_encode(['error' => 'move_uploaded_file failed — check permissions on ' . $uploadDir]);
    exit;
}

echo json_encode(['url' => '/egg/media/hens/uploads/' . $filename]);
