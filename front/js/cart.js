// Depuis la page panier récuperer le panier via localstorage 
// Parcourir l'array // boucle for in ou forEach 
// Créér et insérer des éléments dans la page panier 

// afficher les produit du panier
// afficher les totaux (nbre produits panier, prix total panier)
// permettre d'actualiser la quantité d'un produit directement dans le panier tout ceci pour la 1ere partie du panier.

//remplir le template 
// afficher les resultats -- boucle sur le localstorage
// faire le formulaire

 /**
     * * CRÉE UN NOEUD HTML CONTENANT LES INFOS À AFFICHER D'UN PRODUIT
     * @param {name} obj contient les données d'un produit
     * @param {object} order contient les données de commande d'un produit
     * @returns le noeud html contenant le produit à afficher sur la page panier
     */

fetch ('http://localhost:3000/api/products/')  
    .then((response) => response.json())  
    .then((json) => {
        console.log(json); 
        affectInCart(json)
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
        
        for (let cart in renderProduct) {
            console.log(json)
            let tmp = json.find(elt=>elt.id==cart.id);
            let {altTxt, imageUrl, id,name, price,} = tmp  // destucturing
            console.log(tmp)
            console.log(cart)
            let productIterated = renderProduct[cart]
            let template = `<article class="cart__item" data-id="${id}" data-color="${productIterated.color}">
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
            
            cart__items.innerHTML= template
        }
    }
}
function totalCart (){

    // récupération de la quantité total
    let elemsQtt = document.getElementsByClassName('itemQuantity')
    let myLength = elemsQtt.length,
    totalQtt = 0;

    for (let i = 0; i < myLength; ++i){
        totalQtt += elemsQtt[i].valueAsNumber;
    }

    let productTotalQuantity = document.getElementById("totalQuantity");
    productTotalQuantity.innerHTML = totalQtt;
    console.log(totalQtt);

    totalPrice = 0;

    for (var i = 0; i < myLength; ++i){
        totalPrice += (elemsQtt[i].valueAsNumber * renderProduct[i]?.price)
    }

    let productTotalPrice = document.getElementById('totalPrice');
    productTotalPrice.innerHTML = totalPrice;
    console.log(totalPrice)
}




