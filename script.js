function changeColor(squareId) {
    var square = document.getElementById(squareId);
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randColor(box) {
    box.style.backgroundColor = getRandomColor();
}

function flashColors(){
    (document.querySelectorAll(".flash")).forEach(randColor);
}

setInterval(flashColors, 100);