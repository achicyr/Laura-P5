//Récupérer les parametres de l'url avec URLSearchParams
var str = document.location;
var url = new URL(str);
var search_params = new URLSearchParams(url.search);
if (search_params.has('id')) {
    var id = search_params.get('id');
}
console.log(id);
let oneProduct
console.log(id)

// Vérifier si l'ID est défini
if (id) {
    // On récupère la liste d'un produit
    fetch('http://localhost:3000/api/products/' + id)  // on va chercher l'url que l'on souhaite
        .then((response) => response.json())  // on souhaite une reponse en json
        .then((json) => {
            console.log(json); // on voit ce qu'il en retourne
            produits(json);
            oneProduct = json;
        });
} else {
    let errorMessage = "Aucun produit trouvé pour l'ID spécifié";
    console.error(errorMessage);
    // Afficher un message d'erreur à l'utilisateur 
    document.getElementById("error").innerHTML = errorMessage;
}

// on défini la fonction pour qu'elle affiche les produits de l'api sur la page product.html
function produits(json) {

    // on récupère la class ".items__img" dans le div
    let div = document.querySelector(".item__img");
    console.log(div)

    // on créer un nouveau élément img
    let img = document.createElement('img');

    // on ajoute un nouvel attribut pour l'image
    img.src = json.imageUrl;
    img.alt = json.altTxt;

    // Ajout d'un élément au noeud
    div.appendChild(img);

    // on récupère les identifiants de la div __titlePrice et __description
    let title = document.querySelector('#title')
    let price = document.querySelector('#price')
    let description = document.querySelector('#description')

    // on ajoute les attributs
    title.innerText = json.name;
    price.innerText = json.price;
    description.innerText = json.description;

    // on fait une boucle for of 
    for (let colors of json.colors) {
        console.log(colors);

        // on créer l'élément option
        let productColors = document.createElement("option");

        // on récupère l'id colors et on l'ajoute au noeud
        document.querySelector("#colors").appendChild(productColors);

        // on ajoute les attributs
        productColors.value = colors;
        productColors.innerHTML = colors;
    }
    console.log("couleur ok");
}
// Ajouter un produit au panier d'achats. 
function addToCart() {
    console.log("click ok " + oneProduct)

    // on récupère les identifiants de la quantité et de la couleur
    let quantityDiv = document.querySelector("#quantity");
    let colorsSelect = document.querySelector("#colors");

    // on crée le produit avec ses caractéristiques; nom,id,couleur,image,quantité,prix et le texte alternatif
    let choice = {
        id: oneProduct._id,
        color: colorsSelect.value,
        quantity: quantityDiv.value,
    }

    console.log(choice)

    // on déclare le productId qui prend la valeur du nom + de la couleur
    let productId = oneProduct.name + colorsSelect.value;

    // on déclare productList en array vide
    let productsList = [];

    // on déclare le nouveau produit avec ses caractéristiques stockés dans choice
    let newProductQuantity = choice.quantity;

    let ls = localStorage.getItem('cart')
    
    // Si le panier est vide, on crée un objet vide dans le stockage local
    if (ls == null)
        localStorage.setItem("cart", "{}")

    // Convertir les données du panier en objet JavaScript avec JSON.parse
    let renderProduct = JSON.parse(localStorage.getItem("cart")); 
    console.log(renderProduct)
    // Récupèrer la quantité du produit dans le panier
    let renderProductQuantity = renderProduct[productId]?.quantity 

    // couleur et quantité

    // Vérifier si la couleur du produit a été sélectionnée, et si non, affiche une alerte demandant de choisir une couleur
    if (colorsSelect.value == "") {
        result = window.alert("Choisir la couleur")
    }
    // Vérifier si la quantité du produit est valide (comprise entre 1 et 100), et si non, affiche une alerte demandant de choisir une quantité valide
    else if (quantityDiv.value < 1 || quantityDiv.value >= 100) { 
        result = window.alert("Choisissez une quantité comprise entre 1 et 100 exemplaires")
        console.log(quantityDiv.value)
    } else {
        console.log(renderProduct)
        if (renderProduct[productId]) {
            console.log("existe deja")

            let total = parseInt(renderProductQuantity) + parseInt(newProductQuantity);
            console.log('total produit:' + total);

            renderProduct[productId].quantity = total
            renderProduct = JSON.stringify(renderProduct)
            localStorage.setItem('cart', renderProduct)

        } else {
            console.log('n existe pas encore')
            renderProduct[productId] = choice
            renderProduct = JSON.stringify(renderProduct)
            localStorage.setItem('cart', renderProduct)

        }
        let a = confirm(`Le canapé ${oneProduct.name} ${choice.color} a été ajouté en ${choice.quantity} exemplaires à votre panier.\nVoulez-vous aller au panier ?`)
        if (a) location.href = 'cart.html'
    }
}

let button = document.querySelector("#addToCart");


// enregistrer les donnees de selection de produit en local 
window.onload = function () {
    button.addEventListener("click", addToCart);
}
