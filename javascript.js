
var Varukorg = document.getElementById("Varukorgen");

var btn = document.getElementById("Varukorg-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    Varukorg.style.display = "block";
}

span.onclick = function () {
    Varukorg.style.display = "none";
}

const ul = document.querySelector("ul");
const MAX=5;
let count=0;

function Läggatill(title, photo, cost, remove) {

    Varukorg.style,display = "block";


    if (count<MAX) {
        let li = document.createElement("li");
        li.textContent= title + photo + cost + remove;
        ul.appendChild(li);
        count++;
    }

    let fält =[];
    let json = window.localStorage.getItem("min_nyckel");
    if (json) {
        fält = JSON.parse(json);
    }

    let obj = {
        title: title,
        photo: photo,
        cost: cost,
        remove: remove
    }
    fält.push(obj);
    json = JSON.stringify(fält);
    window.localStorage.setItem("min_nyckel", json)
}

function laddat_sidan() {
    let fält = [];
    let json = window.localStorage.getItem("min_nyckel");
    if (json) {
        fält = JSON.parse(json);
    }

    for (let i=0; i<array.length; i++) {
        
        
    }
}