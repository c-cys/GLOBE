document.write(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <img class="navbar-brand" src="../assets/images/logo.png" width="50px" height="60px">
            <a class="navbar-brand" href="../pages/index.html" style="font-size:33px; font-weight:450">
                GLOBE
            </a>
            
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" style="font-size:20px">
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link" href="../pages/monthly.html">2024 활동 계획</a>
                </li>
                
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link" href="../pages/awards.html">대회 실적</a>
                </li>
                
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link" href="#" id="navbarDropdown2" role="menubar" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        세미나 자료
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                        <a class="dropdown-item" href="../pages/seminar_biology.html">생명</a>
                        <a class="dropdown-item" href="../pages/seminar_chemistry.html">화학</a>
                        <a class="dropdown-item" href="../pages/seminar_challenges.html">대회</a>
                        <a class="dropdown-item" href="../pages/seminar_others.html">기타</a>
                    </div>
                </li>
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link" href="../pages/research.html">연구 활동</a>
                </li>
            </ul>
            </div>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
`)