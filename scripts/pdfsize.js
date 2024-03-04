document.addEventListener('DOMContentLoaded', function () {
    // Get the card-body element
    var cardBody = document.getElementById('file-card-body');

    // Get the width of the card-body
    var cardBodyWidth = cardBody.offsetWidth;

    // Set the height of the card-body as 1.2 times its width
    var cardBodyHeight = 1.2 * cardBodyWidth;
    cardBody.style.height = cardBodyHeight + 'px';
});