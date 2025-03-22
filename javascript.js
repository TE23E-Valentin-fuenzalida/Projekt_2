let nyckel = "produktNyckel";
var Varukorg = document.getElementById("Varukorgen");
var btn = document.getElementById("Varukorg-btn");
var span = document.getElementsByClassName("close")[0];
var btnNav = document.getElementById("Nav");
var Nav = document.getElementById("NAV");
var span2 = document.getElementsByClassName("close2")[0];;

btnNav.onclick = function () {
    Nav.style.display = "block";
    btnNav.style.display = "none";
    btn.style.display = "none";
}

span2.onclick = function () {
    Nav.style.display = "none";
    btnNav.style.display = "block";
    btn.style.display = "block";
}


btn.onclick = function () {
    Varukorg.style.display = "block";
    btn.style.display = "none";
    btnNav.style.display = "none";
}

span.onclick = function () {
    Varukorg.style.display = "none";
    btn.style.display = "block";
    btnNav.style.display = "block";
}


const ul = document.querySelector("ul");
const MAX=5;
let counter=0;
let pris_tot = 0;

function removeFromVarukorg(product_info, price) {
    product_info.remove();
    
    let fält = JSON.parse(localStorage.getItem(nyckel)) || [];
    
    // Hitta produkten att ta bort
    fält = fält.filter(item => item.price !== price);
    
    localStorage.setItem(nyckel, JSON.stringify(fält));

    // Uppdatera totalpriset
    pris_tot -= parseInt(price);
    document.querySelector("#summa_nr").textContent = "Total summa: " + pris_tot + " kr";
}

function Läggatill(title, image, price) {
    btn.style.display = "none";
    Varukorg.style.display = "block";
    btnNav.style.display = "none";

    let product = document.querySelector("#Produkt");

    let product_info = document.createElement("div");
    product_info.classList.add("VarukorgVara_info");

    let image_pro = document.createElement("img");
    image_pro.src = image;
    image_pro.id = "Bilder";
    product_info.appendChild(image_pro);

    let första_rad = document.createElement("div");
    let titel = document.createElement("p");
    let pris = document.createElement("p");
    pris.id = "pris";

    titel.textContent = title;
    pris.textContent = price + " kr";
    första_rad.appendChild(titel);
    första_rad.appendChild(pris);
    product_info.appendChild(första_rad);

    let knapp = document.createElement("button");
    knapp.textContent = "Ta bort";
    knapp.addEventListener("click", function () { 
        removeFromVarukorg(product_info, price);
    });

    product_info.appendChild(knapp);
    product.appendChild(product_info);
    
    let summaTot = document.querySelector("#summa_nr");
    pris_tot = parseInt(price) + parseInt(pris_tot);
    summaTot.textContent = "Total summa: " + pris_tot + " kr";

    // Spara till localStorage
    let fält = JSON.parse(localStorage.getItem(nyckel)) || [];

    let item = {
        title: title,
        price: price,
        image: image
    };

    fält.push(item);
    localStorage.setItem(nyckel, JSON.stringify(fält));
}


function ladda_varukorg() {
    let fält = JSON.parse(localStorage.getItem(nyckel)) || [];

    let product = document.querySelector("#Produkt");
    let summaTot = document.querySelector("#summa_nr");
    pris_tot = 0; // Nollställ totalsumman

    fält.forEach(item => {
        let product_info = document.createElement("div");
        product_info.classList.add("VarukorgVara_info");

        let image_pro = document.createElement("img");
        image_pro.src = item.image;
        image_pro.id = "Bilder";
        product_info.appendChild(image_pro);

        let första_rad = document.createElement("div");
        let titel = document.createElement("p");
        let pris = document.createElement("p");
        pris.id = "pris";

        titel.textContent = item.title;
        pris.textContent = item.price + " kr";
        första_rad.appendChild(titel);
        första_rad.appendChild(pris);
        product_info.appendChild(första_rad);

        let knapp = document.createElement("button");
        knapp.textContent = "Ta bort";
        knapp.addEventListener("click", function () { 
            removeFromVarukorg(product_info, item.price);
        });

        product_info.appendChild(knapp);
        product.appendChild(product_info);

        pris_tot += parseInt(item.price);
    });

    summaTot.textContent = "Total summa: " + pris_tot + " kr";
}

window.onload = function () {
    ladda_varukorg();
    Varukorg.style.display = "none";
}