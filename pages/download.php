<?php
$uploadDir = './uploads/';

if (isset($_GET['file']) && isset($_GET['category'])) {
    $fileName = $_GET['file'];
    $category = $_GET['category'];
    $categoryDir = $uploadDir . $category . '/';
    $filePath = $categoryDir . $fileName;

    // 파일이 존재하면 다운로드
    if (file_exists($filePath)) {
        // 파일 다운로드 설정
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
        header('Content-Length: ' . filesize($filePath));

        // 파일 출력
        readfile($filePath);
        exit;
    } else {
        // 파일이 존재하지 않는 경우
        echo '파일이 존재하지 않습니다.';
    }
} else {
    // 잘못된 요청인 경우
    echo '잘못된 요청입니다.';
}
?>