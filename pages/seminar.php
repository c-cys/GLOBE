<?php
$uploadDir = '../assets/data/uploads/';
$fileDescriptions = [];

$category = isset($_GET['category']) ? $_GET['category'] : '';
$categoryDir = $uploadDir . $category . '/';

if (!empty($category) && is_dir($categoryDir)) {
    $descriptionFilePath = $categoryDir . 'descriptions.json';
    $fileDescriptions = is_file($descriptionFilePath)
        ? json_decode(file_get_contents($descriptionFilePath), true) ?: []
        : [];
}

$uploadedFiles = is_dir($categoryDir) ? scandir($categoryDir) : [];
$filesToDisplay = array_diff($uploadedFiles, ['.', '..']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../stylesheets/seminar.css">
    <title>세미나 자료 목록</title>
</head>
<body>
<div id="navbar-container"></div>

<script src="../scripts/navbar.js"></script>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <h2 class="mt-3 mb-4">세미나 자료 목록</h2>
        </div>
        <div class="col-md-6">
            <div class="mb-3 mt-3 text-md-right">
            </div>
            <form action="seminar.php" method="get" class="form-inline mb-3">
                <div class="col-auto">
                    <label for="category" class="mr-2">카테고리 선택:</label>
                    <div class="input-group">
                        <select name="category" id="category" class="form-control mr-2">
                            <?php
                            $categories = array_filter(scandir($uploadDir), function ($item) {
                                return is_dir('../assets/data/uploads/'.$item) && !in_array($item, ['.', '..']);
                            });
                            foreach ($categories as $cat) {
                                $selected = ($cat == $category) ? 'selected' : '';
                                echo "<option value=\"$cat\" $selected>$cat</option>";
                            }
                            ?>
                        </select>
                        <button type="submit" class="btn btn-primary">선택</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="file-container row">
        <?php if (!empty($filesToDisplay)): ?>
            <?php foreach ($filesToDisplay as $file): ?>
                <?php if (pathinfo($file, PATHINFO_EXTENSION) == 'pdf'): ?>
                    <div class="col-md-3 mb-3 d-flex">
                        <div class="card flex-fill file-card">
                            <div class="card-body d-flex flex-column" id="file-card-body">
                                <div class="file-title">
                                    <?php
                                    $fontSize = '16px';
                                    ?>
                                    <h5 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: <?= $fontSize; ?>">
                                        <?= $file ?>
                                    </h5>
                                </div>
                                <embed src="<?= $categoryDir . $file ?>" type="application/pdf" style="height: 300px;">
                                <div class="file-description mt-3 flex-grow-3" style="font-size: 14px; height: 50px;">
                                    <?php
                                    $selectedCategoryDescription = isset($fileDescriptions[$file])
                                        ? $fileDescriptions[$file]
                                        : '';

                                    if (!empty($selectedCategoryDescription)):
                                        echo $selectedCategoryDescription;
                                    else:
                                        echo 'No description available.';
                                    endif;
                                    ?>
                                </div>
                                <div class="mt-auto text-center">
                                    <button class="btn btn-success">
                                        <a href="download.php?file=<?= urlencode($file) ?>&category=<?= urlencode($category) ?>" target="_blank" class="text-white">다운로드</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
        <?php else: ?>
            <p class="col-12 no-files-message">No files to display.</p>
        <?php endif; ?>
    </div>
</div>
<script src="../scripts/pdf_size.js"></script>
</body>
</html>
