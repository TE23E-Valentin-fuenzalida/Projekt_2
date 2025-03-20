
var Varukorg = document.getElementById("Varukorgen");

var btn = document.getElementById("Varukorg-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    Varukorg.style.display = "block";
}

span.onclick = function() {
    Varukorg.style.display = "none";
}

function Läggatill(Title) {
    let Eld = document
}