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

    // on récupère la class ".items__img" dans le DOM
    let div = document.querySelector(".item__img");
    console.log(div)
    
    // on créer de nouveaux éléments
    let img = document.createElement('img');

    // on ajoute un nouvel attribut
    img.src=json.imageUrl

    // Ajout d'un élément au noeud
    div.appendChild(img);
}


