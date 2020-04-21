var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".random");



function gradientBackground() {
    body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomColor(){
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#"+randomColor1;
    color2.value = "#"+randomColor2;
    gradientBackground();
}

color1.addEventListener("input", gradientBackground);

color2.addEventListener("input", gradientBackground);


button.addEventListener("click", randomColor);