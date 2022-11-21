// Depuis la page panier récuperer le panier via localstorage 
// Parcourir l'array // boucle for in ou forEach 
// Créér et insérer des éléments dans la page panier 

// afficher les produit du panier
// afficher les totaux (nbre produits panier, prix total panier)
// permettre d'actualiser la quantité d'un produit directement dans le panier tout ceci pour la 1ere partie du panier.

//remplir le template 
// afficher les resultats -- boucle sur le localstorage
// faire le formulaire



fetch ('http://localhost:3000/api/products/')  
    .then((response) => response.json())  
    .then((json) => {
        console.log(json); 
        affectInCart(json);
        totalCart (json);
        document.querySelectorAll(".itemQuantity").forEach(item => {item.addEventListener('change', modifyQtt); item.JSON = json; });
        document.querySelectorAll(".deleteItem").forEach(item => {item.addEventListener('click', deleteArticle); item.JSON = json; });
    })

console.log(localStorage);

let renderProduct = JSON.parse(localStorage.getItem("cart"));
console.log(renderProduct)

let oneEmptyCart = document.querySelector("#cart__items");
console.log(oneEmptyCart)

// function si (if) le pannier est vide 
async function affectInCart(json) {
    if (renderProduct === null) {
        let emptyCart = "Votre panier est vide";
        oneEmptyCart.innerHTML = emptyCart;

    // sinon (else) : insertion des éléments
    } else {
        console.log(renderProduct)
        for (let cart in renderProduct) {
            console.log(json)
            let tmp = json.find(elt => elt._id == renderProduct[cart].id);
            
            let {altTxt, imageUrl, id, name, price} = tmp  // destucturing
            console.log(tmp)

            let productIterated = renderProduct[cart]
            let template = `<article class="cart__item" data-id="${productIterated.id}" data-color="${productIterated.color}">
                <div class="cart__item__img">
                  <img src="${imageUrl}" alt="${altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${name}</h2>
                    <p>${productIterated.color}</p>
                    <p>${price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productIterated.quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`
            
            cart__items.innerHTML += template
        }
    }
}


async function totalCart (json){
  let cart = JSON.parse(localStorage.getItem("cart"));
  totalQtt = 0;
  totalPrice = 0;

  for (item in cart) {
    let jsonItem = json.find(elt => elt._id == cart[item].id);
    totalQtt += Number(cart[item].quantity);
    totalPrice += jsonItem.price * Number(cart[item].quantity);
  }
  let productTotalQuantity = document.getElementById("totalQuantity");
  productTotalQuantity.innerHTML = totalQtt;
  // récupération du prix total
  let productTotalPrice = document.getElementById('totalPrice');
  productTotalPrice.innerHTML = totalPrice;

}

//modifier la quantité de la page panier avec addEentListener de type change et la méthode Element.closest

async function modifyQtt(e) {
  let article = e.target.closest("article");
  let dataColor = article.getAttribute("data-color");
  let dataName = article.getElementsByTagName("h2")[0].innerHTML;

  let cart = JSON.parse(localStorage.getItem('cart'));

  cart[dataName+dataColor].quantity = e.target.value;

  localStorage.setItem("cart", JSON.stringify(cart));
  totalCart(e.target.JSON)

}

//supprimer des produits 
async function deleteArticle(e){
  let article = e.target.closest("article");
  let dataColor = article.getAttribute("data-color");
  let dataName = article.getElementsByTagName("h2")[0].innerHTML;

  let cart = JSON.parse(localStorage.getItem('cart'));

  delete cart[dataName+dataColor];
  article.remove();

  localStorage.setItem("cart", JSON.stringify(cart));
  totalCart(e.target.JSON);

}


