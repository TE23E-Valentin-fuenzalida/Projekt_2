let nyckel = "produktNyckel";
var Varukorg = document.getElementById("Varukorgen");
var btn = document.getElementById("Varukorg-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    Varukorg.style.display = "block";
    btn.style.display = "none";
}

span.onclick = function () {
    Varukorg.style.display = "none";
    btn.style.display = "block";
}


const ul = document.querySelector("ul");
const MAX=5;
let counter=0;
let pris_tot = 0;

function removeFromVarukorg(product_info, price) {
    product_info.remove(); // Remove the product from the DOM
    console.log(`Removed product with price: ${price} kr`);
}

function Läggatill(title, image, price) {
    
    btn.style.display = "none";
    Varukorg.style.display = "block";

    let product = document.querySelector("#Produkt");
    product.classList.add("VarukorgVara");
    
    let product_info = document.createElement("div");
    product_info.classList.add("VarukorgVara_info");

    let image_pro = document.createElement("img");
    image_pro.src = image;
    image_pro.id = "bild";
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
    console.log(price + " | " + parseInt(pris_tot));

    summaTot.textContent = "Total summa: " + pris_tot + "kr";

    console.log(title + price + image);

    let fält = [];
    let json = window.localStorage.getItem("nyckel");
    if (json) {
        fält = JSON.parse(json);   
    }
        
    let item = {
        title_J: title,
        price_J: price,
        image_J: image,
    }

    fält.push(item);
    json = JSON.stringify(fält);
    window.localStorage.setItem(nyckel, json);
    
}

function laddat_sidan() {
    let fält =[];
    let json = window.localStorage.getItem("nyckel");
    if (json) {
        fält = JSON.parse(json);
    }

    for (let i= 0; i<fält.length; i++) {
        let obj = fält[i];
        
    }
}