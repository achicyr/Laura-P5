fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        addProductsInHome(json)
})

function addProductsInHome(json){
    for (let Kanap of json) 
    {
        let section = document.getElementById("items");
        

        let a = document.createElement("a");
        let article = document.createElement("article");
        let img = document.createElement('img');
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        a.setAttribute("href", "./product.html?id=42" + Kanap._id);

        img.setAttribute("src", Kanap.imageUrl);
        img.setAttribute("alt", Kanap.altTxt);

        h3.classList.add('productName')
        h3.innerText = Kanap.name
        /*h3.setAttribute("class", "productName");*/

        p.classList.add('productDescription')
        p.innerText = Kanap.description
        /*p.setAttribute("class","productDescription");*/

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        a.appendChild(article);
        section.appendChild(a);

        console.log(Kanap.name + "<br />");
    }
}