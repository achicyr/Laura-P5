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
    let quantityDiv = document.querySelector("#quantity");
    let colorsSelect = document.querySelector("#colors");

    let choice = {
        name: produits.name,
        id: produits._id,
        color: colorsSelect.value,
        quantity: quantityDiv.value,
        imageUrl: produits.imageUrl,
        altTxt: produits.altTxt,
        price: produits.price
    }
}
