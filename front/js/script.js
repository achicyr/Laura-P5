window.addEventListener('load',async x=>{
    // On récupère la liste de tous les produits
    await fetch("http://localhost:3000/api/products")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            addProductsInHome(json)
    })
    // on ajoute une fonction pour qu'elle affiche les produits de l'api sur la page index

    function addProductsInHome(json){
items.innerHTML=""
    // on ajoute une boucle for of
        for (let Kanap of json) 
        {
            // on récupère l'ID "items" dans le DOM
            let section = document.getElementById("items");

            // on créer de nouveaux éléments
            let a = document.createElement("a");
            let article = document.createElement("article");
            let img = document.createElement('img');
            let h3 = document.createElement("h3");
            let p = document.createElement("p");

            // on ajoute un nouvel attribut avec setAttribute(nom, valeurs)
            a.setAttribute("href", "./product.html?id=" + Kanap._id);
            img.setAttribute("src", Kanap.imageUrl);
            img.setAttribute("alt", Kanap.altTxt);

            // on manipule le h3 en lui ajoutant 'productName'
            h3.classList.add('productName')

            //modification du h3 par = Kanap.name
            h3.innerText = Kanap.name

            p.classList.add('productDescription')
            p.innerText = Kanap.description
            
            // Ajout d'un élément au noeud 
            article.appendChild(img);
            article.appendChild(h3);
            article.appendChild(p);
            a.appendChild(article);
            section.appendChild(a);

            console.log(Kanap.name + "<br />");
        }
    }
})
