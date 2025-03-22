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

    let product = document.querySelector("#Produkt");

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
        image_pro.id = "bild";
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
};

























/* 
// Hold all your cart items
let cartItems = loadCartFromLocalStorage();
updateCartRepresentation();

// Loads the cart from local storage. If nothing
// was set, it sets it to an empty array.
function loadCartFromLocalStorage() {
  const items = localStorage.getItem('cart-Items');
  return items ? JSON.parse(items) : [];
}

function addItemToCart(item) {
  // Check if there already is an item with the given id in cart
  // by iterating through the global cart items and comparing it
  // with the items id that has been passed in.
  const targetCartItem = cartItems.find(cartItem => cartItem.id === item.id);
  
  // That item is in cart so we just increase the amount
  if (targetCartItem) {
    targetCartItem.amount += 1;
  } else {
    // Else add the item to the cart items
    cartItems.push(item);
  }

  // Update state in localStorage
  localStorage.setItem('cart-items', JSON.stringify(cartItems)
}

// 2 ways to do this, you can just opt to update the element that changed
// or the easier although messier way which I go for here is removing everything
// and rerendering it again.
function updateCartRepresentation() {
  // Get the products element
  const cartProducts = document.getElementById('#cartProducts');
  // Empty that sucker.
  cartProducts.innerHTML = '';

  // Loop over each item in the cart and generate the DOM elements appropriately.
  cartItems.forEach((item) => {
    // Create a root for the product element
    const productElement = document.createElement('div');
    cartProducts.appendChild(productElement);

    // Now create the other DOM elements for your product
    // like in your example, I'll leave that up to you.
  });
}
 */