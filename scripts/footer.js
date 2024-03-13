document.write(`
    <!-- 부트스트랩 CDN 추가 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-pEX6qRdC5QCc3+a2vEA6jngsHk83R/2zAJl9+pr8f1jV4VAvVb/uHAHR3mzrsXgT" crossorigin="anonymous">
    <!-- 직접 작성한 CSS -->
    <link rel="stylesheet" href="../stylesheets/footer.css">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 align-items-center">
            <img src="../assets/images/logo.png" alt="Logo" width="30" height="30">
            <p class="mb-0">경기북과학고등학교 유일 환경·에너지 동아리 GLOBE <br> Global Learning and Observations to Benefit the Environment</p>
        </div>
    
        <div class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </div>
    
        <div class="col-md-4 align-items-center justify-content-end">
            <p class="mb-0">경기도 의정부시 체육로135번길 32</p>
            <p class="mb-0">Instagram: @gbs_globe</p>
        </div>
    </footer>
`);