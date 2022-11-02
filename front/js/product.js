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
}
