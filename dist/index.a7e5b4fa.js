window.addEventListener("load",(async e=>{await fetch("http://localhost:3000/api/products").then((e=>e.json())).then((e=>{console.log(e),function(e){items.innerHTML="";for(let t of e){let e=document.getElementById("items"),n=document.createElement("a"),d=document.createElement("article"),a=document.createElement("img"),i=document.createElement("h3"),c=document.createElement("p");n.setAttribute("href","./product.html?id="+t._id),a.setAttribute("src",t.imageUrl),a.setAttribute("alt",t.altTxt),i.classList.add("productName"),i.innerText=t.name,c.classList.add("productDescription"),c.innerText=t.description,d.appendChild(a),d.appendChild(i),d.appendChild(c),n.appendChild(d),e.appendChild(n),console.log(t.name+"<br />")}}(e)}))}));
//# sourceMappingURL=index.a7e5b4fa.js.map
