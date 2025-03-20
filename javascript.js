var Varukorg = document.getElementById("Varukorgen");

var btn = document.getElementById("Varukorg-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    Varukorg.style.display = "block";
}

span.onclick = function() {
    Varukorg.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == Varukorg) {
        Varukorg.style.display = "none";
    }
}