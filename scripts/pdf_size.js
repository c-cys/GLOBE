/*
var file_list = [];
let file_count = file_list.length;
let remainder = file_count%3;
let quotient = (file_count - remainder) / 3

var n = 0;

function viewpdf(quotient, margin, array) {
    console.log(quotient)
    for (let i = 0; i < quotient; i++) {
        for (let k = 0; k < 3; k++) {
            n += 1
            document.write(` 
                <div class="container-fluid" style="margin-left:10%">
                    <br><br></br></br>
                    <div class="file-container row">
                        <div class="col-md-3 mb-3 d-flex">
                            <div class="card flex-fill file-card">
                                <div class="card-body d-flex flex-column" id="file-card-body">
                                    <div class="file-title">
                                        <h5 class="card-title" style="text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 16px">
                                            <a href="javascript::file_list">GLOBE</a> GLOBE 바이오 플라스틱 프로젝트 
                                        </h5>
                                    </div>
                                    <iframe src="../assets/data/uploads/생명/GLOBE%20바이오플라스틱%20프로젝트%20(실습).pdf" style="height:1000px;"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        }
    }
}

// remainder

*/

document.addEventListener('DOMContentLoaded', function () {
    // Get the card-body element
    var cardBody = document.getElementById('file-card-body');

    // Get the width of the card-body
    var cardBodyWidth = cardBody.offsetWidth;

    // Set the height of the card-body as 1.2 times its width
    var cardBodyHeight = 1.3 * cardBodyWidth;
    cardBody.style.height = cardBodyHeight + 'px';
});