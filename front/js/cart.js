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
        affectInCart(json);
        totalCart (json);
        document.querySelectorAll(".itemQuantity").forEach(item => {item.addEventListener('change', modifyQtt); item.JSON = json; });
        document.querySelectorAll(".deleteItem").forEach(item => {item.addEventListener('click', deleteArticle); item.JSON = json; });
        
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
        console.log(renderProduct)
        for (let cart in renderProduct) {
            console.log(json)
            let tmp = json.find(elt => elt._id == renderProduct[cart].id);
            
            let {altTxt, imageUrl, id, name, price} = tmp  // destucturing
            console.log(tmp)

            let productIterated = renderProduct[cart]
            let template = `<article class="cart__item" data-id="${productIterated.id}" data-color="${productIterated.color}">
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
            
            cart__items.innerHTML += template
        }
    }
}


async function totalCart (json){
  let cart = JSON.parse(localStorage.getItem("cart"));
  totalQtt = 0;
  totalPrice = 0;

  for (item in cart) {
    let jsonItem = json.find(elt => elt._id == cart[item].id);
    totalQtt += Number(cart[item].quantity);
    totalPrice += jsonItem.price * Number(cart[item].quantity);
  }
  let productTotalQuantity = document.getElementById("totalQuantity");
  productTotalQuantity.innerHTML = totalQtt;
  // récupération du prix total
  let productTotalPrice = document.getElementById('totalPrice');
  productTotalPrice.innerHTML = totalPrice;

}

//modifier la quantité de la page panier avec addEentListener de type change et la méthode Element.closest

async function modifyQtt(e) {
  let article = e.target.closest("article");
  let dataColor = article.getAttribute("data-color");
  let dataName = article.getElementsByTagName("h2")[0].innerHTML;

  let cart = JSON.parse(localStorage.getItem('cart'));

  cart[dataName+dataColor].quantity = e.target.value;

  localStorage.setItem("cart", JSON.stringify(cart));
  totalCart(e.target.JSON)

}

//Supprimer des produits 

async function deleteArticle(e){
  let article = e.target.closest("article");
  let dataColor = article.getAttribute("data-color");
  let dataName = article.getElementsByTagName("h2")[0].innerHTML;

  let cart = JSON.parse(localStorage.getItem('cart'));

  delete cart[dataName+dataColor];
  article.remove();

  localStorage.setItem("cart", JSON.stringify(cart));
  totalCart(e.target.JSON);

};

// formulaire avec Regexp

function validateFormulaire(){
  let form = document.querySelector(".cart__order__form");

  console.log(form.email);

  // Ecouter la modification de l'email
  form.email.addEventListener('change', function(){
    validEmail(this);
  });

  /********************************** Validation EMAIL ******************************/

  let validEmail = function(inputEmail){
    // creation de la regExp pour validation email
    let emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
      );

  let testEmail = emailRegExp.test(inputEmail.value);

  // récupération de la balise suivante (p)
  let p = inputEmail.nextElementSibling;

  console.log(testEmail)

  // condition if/else
  if (testEmail){
    p.innerHTML = 'Email valide';
  } else {
    p.innerHTML = 'Email non valide'
  }
  }
  console.log(form.firstName)

  // Ecouter la modification du firstName
  form.firstName.addEventListener('change', function(){
    validFirstName(this);
  });

  /********************************** Validation FIRSTNAME ******************************/

  let validFirstName = function(inputFirstName){
    let firstNameRegExp = new RegExp(
      "^[a-zA-Z ,.'-]+$", 'g'
      );

  let testFirstName = firstNameRegExp.test(inputFirstName.value);

  // récupération de la balise suivante (p)
  let p = inputFirstName.nextElementSibling;
  console.log(testFirstName)

  // condition if/else
  if (testFirstName){
    p.innerHTML = 'Prénom valide';
  } else {
    p.innerHTML = 'Prénom non valide'
  }

  console.log(form.lastName)

  // Ecouter la modification du lastName
  form.lastName.addEventListener('change', function(){
    validLastName(this);
  });

  /********************************** Validation LASTNAME ******************************/

  let validLastName = function(inputLastName){
    let lastNameRegExp = new RegExp(
      "^[a-zA-Z ,.'-]+$", 'g'
      );

  let testLastName = lastNameRegExp.test(inputLastName.value);

  // récupération de la balise suivante (p)
  let p = inputLastName.nextElementSibling;
  console.log(testLastName)

  // condition if/else
  if (testLastName){
    p.innerHTML = 'Nom valide';
  } else {
    p.innerHTML = 'Nom non valide'
  }
  }

  console.log(form.address);

  // Ecouter la modification de l'adresse
  form.address.addEventListener('change', function(){
    validAddress(this);
  });

  /********************************** Validation ADRESSE ********************************/

  let validAddress = function(inputAddress){
    // creation de la regExp pour validation de l'adresse
    let addressRegExp = new RegExp(
      "^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+", 'g'
      );

  let testAddress = addressRegExp.test(inputAddress.value);

  // récupération de la balise suivante (p)
  let p = inputAddress.nextElementSibling;
    
  console.log(testAddress)
    
  // condition if/else
  if (testAddress){
    p.innerHTML = 'Adresse valide';
    } else {
    p.innerHTML = 'Adresse non valide'
    }
    }
    console.log(form.city);

    // Ecouter la modification de l'adresse
  form.city.addEventListener('change', function(){
    validCity(this);
  });

  /********************************** Validation VILLE ********************************/
  let validCity = function(inputCity){
    // creation de la regExp pour validation de l'adresse
    let cityRegExp = new RegExp(
      "^[a-zA-Z ,.'-]+$", 'g'
      );

  let testCity = cityRegExp.test(inputCity.value);
  
  // récupération de la balise suivante (p)
  let p = inputCity.nextElementSibling;

  console.log(testCity)
    
  // condition if/else
  if (testCity){
    p.innerHTML = 'Ville valide';
    } else {
    p.innerHTML = 'Ville non valide'
    }
    }




}};
validateFormulaire()

/*Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs firstName,
lastName, address, city et email. Le tableau des produits envoyé au back-end doit être un
array de strings product-ID. Les types de ces champs et leur présence doivent être validés
avant l’envoi des données au serveur.*/

/*form.email pour récuperer les different elements du form ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');*/