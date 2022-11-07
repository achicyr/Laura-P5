//récupérer les parametres de l'url avec URLSearchParams
var str = document.location;
var url = new URL(str);
var search_params = new URLSearchParams(url.search); 
if(search_params.has('id')) {
  var id = search_params.get('id');
}

console.log(id)

// On récupère la liste d'un produit

fetch('http://localhost:3000/api/products/'+id)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        produits(json)
})

// on défini la fonction pour qu'elle affiche les produits de l'api sur la page product.html
function produits(json){

    // on récupère la class ".items__img" dans le div
    let div = document.querySelector(".item__img");
    console.log(div)

    // on créer un nouveau élément img
    let img = document.createElement('img');
    
    // on ajoute un nouvel attribut pour l'image
    img.src=json.imageUrl;
    img.alt=json.altTxt;

    // Ajout d'un élément au noeud
    div.appendChild(img);

    // on récupère les identifiants de la div __titlePrice et __description
    let title = document.querySelector('#title')
    let price = document.querySelector('#price')
    let description = document.querySelector('#description')

    // on ajoute les attributs
    title.innerText=json.name;
    price.innerText=json.price;
    description.innerText=json.description;

    // on fait une boucle for of 
    for (let colors of json.colors){
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

/*//On récupere : l'id du produit et de la couleur + la class de la quantité 
let button = document.querySelector("#addToCart");
let select = document.querySelector("#colors");
let div = document.querySelector("#quantity");

// on écoute le click sur l'ajout du panier
button.addEventListener('click',function (){
    console.log('click ok')
    // on récupere les valeurs de quantité et de couleurs du produit
    let valueQuantity = div.value;
    let valueColor = select.value;
    //recuperation du contenu du panier
    let buttonStr = localStorage.getItem('button');
    console.log('localStorage ok ')
    if (buttonStr == null){
        let button = {
            totalQuantity : 0,
            products: []
        }
    } else {
        let button=JSON.parse(buttonStr)
    }
    let produit = {
        id: produit.__id,
    }
} )*/

function addToCart(){
    console.log("click ok ")

    //// on récupère les identifiants de la quantité et de la couleur
    let quantityDiv = document.querySelector("#quantity");
    let colorsSelect = document.querySelector("#colors");

    //// on crée le produit avec ses caractéristiques; nom,id,couleur,image,quantité,prix et le texte alternatif
    let choice = {
        name: produits.name,
        id: produits._id,
        color: colorsSelect.value,
        quantity: quantityDiv.value,
        imageUrl: produits.imageUrl,
        altTxt: produits.altTxt,
        price: produits.price
    }
    // productName prend la valeur du nom + de la couleur
    let productName = produits.name + colorsSelect.value;
    // on déclare productList en array
    let productsList = [];
    // on déclare le nouveau produit avec ses caractéristiques stockés dans choice
    let newProductQuantity = choice.quantity;

    // si on renvoie notre tableau (productName)
    if(localStorage.getItem(productName)) {
        let renderProduct = JSON.parse(localStorage.getItem(productName)); // convertir du texte en objet Javascript avec JSON.parse
       
        let renderProductQuantity = renderProduct[0].quantity // renderProductQuantity prend la valeur de renderProduct[0].quantity

        let total = parseInt(renderProductQuantity) + parseInt(newProductQuantity); //parseInt analyse une string (renderProductQuantity et newProductQuantity) et renvoie un entier
        console.log("total produit:" + total);

        choice = {
            name: produits.name,
            id: produits._id,
            color: colorsSelect.value,
            quantity: total,
            imageUrl: produits.imageUrl,
            altTxt: produits.altTxt,
            price: produits.price
        };
        productsList.push(choice);// ajout de l'élément dans l'array
        choiceString = JSON.stringify(productsList);// il faut convertir une valeur en string
        localStorage.setItem(productName, choiceString);// ajout du duo clé-valeur dans le localStorage



        // couleur et quantité

        // lorsqu'on anjoute un produit au panier si celui ci n'était pas déja présent, on ajoute un nouvel élément dans l'array
        if (colorsSelect.value=""){ // si la couleur est = "" alors il faut retourner une alerte ("Choisir la couleur")
            result = window.alert("Choisir la couleur")
        } 
        console.log()
        if (quantityDiv=0){ // si la quantité est = 0 alors il faut retourner une alerte ("Quantité invalide")
            result = window.alert("Quantité invalide")
        }
        else {
            productsList.push(choice); // ajout de l'élément dans l'array
            choiceString = JSON.stringify(productsList); // il faut convertir une valeur en string
            localStorage.setItem(productName, choiceString); // ajout du duo clé-valeur dans le localStorage
        }
    }
}
let button = document.querySelector("#addToCart");

// enregistrer les donnees de selection de produit en local 
window.onload = function() {
    button.addEventListener("click", addToCart);
    }
