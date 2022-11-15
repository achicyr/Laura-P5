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
        affectInCart(json)
    })

console.log(localStorage);

let renderProduct = JSON.parse(localStorage.getItem("cart"));
console.log(renderProduct)

let oneEmptyCart = document.querySelector("#cart__items");
console.log(oneEmptyCart)

// function si (if) le pannier est vide 
async function affectInCart() {
    if (renderProduct === null) {
        let emptyCart = "Votre panier est vide";
        oneEmptyCart.innerHTML = emptyCart;

    // sinon (else) : insertion des éléments
    } else {
        
        for (let cart in renderProduct) {

            let article = document.createElement("article"); 
            document.querySelector("#cart__items").appendChild(article) 

            console.log(oneEmptyCart)

            let div1 = document.createElement("div"); 
            let img = document.createElement("img"); 
            let div2 = document.createElement("div"); 
            let div3 = document.createElement("div"); 
            let h2 = document.createElement("h2"); 
            let p1 = document.createElement("p"); 
            let p2 = document.createElement("p"); 
            let div4 = document.createElement("div"); 
            let div5 = document.createElement("div"); 
            let p3 = document.createElement("p"); 
            let input = document.createElement("input"); 
            let div6 = document.createElement("div"); 
            let p4 = document.createElement("p"); 


            article.classList.add("cart__item"); 
            article.setAttribute("data-id", renderProduct[cart].id); 
            article.setAttribute("data-color", renderProduct[cart].color);
            

            div1.classList.add("cart__item__img");  

            img.setAttribute("src", "${imageUrl}"); 
            img.setAttribute("alt", "${altTxt}");  

            div2.classList.add("cart__item__content"); 

            div3.classList.add("cart__item__content__description"); 

            h2.innerHTML = "${name}"; 

            p1.innerHTML = renderProduct[cart].color; 

            p2.innerHTML = "${price}" + "€"; 

            div4.classList.add('cart__item__content__settings'); 

            div5.classList.add('cart__item__content__settings__quantity'); 

            
            p3.innerHTML = "Qté : " 

            input.setAttribute("type", "number") 
            input.classList.add('itemQuantity') 
            input.setAttribute("name", "itemQuantity") 
            input.setAttribute("min", "1") 
            input.setAttribute("max", "100") 
            input.value = renderProduct[cart]?.quantity 

            div6.classList.add("cart__item__content__settings__delete") 

            p4.classList.add('deleteItem') 
            p4.innerHTML = "Supprimer" 

            article.appendChild(div1) 
            article.appendChild(div2) 

            div1.appendChild(img) 

            div2.appendChild(div3) 
            div2.appendChild(div4) 

            div3.appendChild(h2) 
            div3.appendChild(p1) 
            div3.appendChild(p2) 

            div4.appendChild(div5) 
            div4.appendChild(div6) 

            div5.appendChild(p3) 
            div5.appendChild(input) 

            div6.appendChild(p4) 

            
            let choice = {
                name: "${name}",
                imageUrl : "${renderProductimageUrl}",
                altTxt: "${altTxt}",
                price : "${price}"
            }
            console.log(choice)
        }
    }
}
affectInCart();












/**
     * * CRÉE UN NOEUD HTML CONTENANT LES INFOS À AFFICHER D'UN PRODUIT
     * @param {object} obj contient les données d'un produit
     * @param {object} order contient les données de commande d'un produit
     * @returns le noeud html contenant le produit à afficher sur la page panier
     */
    
/*cartProduct = (renderProduct, localStorage = false) => {
    let div = document.createElement('div')
    , { _id,imageUrl,altTxt,name,orders,orders_,price,color } = renderProduct
    div.innerHTML = `
        <article class="cart__item" data-id="${_id}" data-color="${color}" data-match="${_id+color}">
            <div class="cart__item__img">
                <img src="${imageUrl}" alt="${altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${name}</h2>
                    <p>${color}</p>
                    <p>${price} €</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${order?order["qty"]:orders[color]}">
                    </div>
                        <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
                </div>
            </div>
        </article>
    `
    return div.querySelector('article')
}*/

/*function totalCart (){

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

totalCart()*/