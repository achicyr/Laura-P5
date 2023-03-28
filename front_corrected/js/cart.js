
// récupération des données
fetch('http://localhost:3000/api/products/')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    affectInCart(json);
    totalCart(json);
    // Ajout d'un gestionnaire d'évènement pour la modification de la quantité 
    document.querySelectorAll(".itemQuantity").forEach(item => { item.addEventListener('change', modifyQtt); item.JSON = json; });
    // Ajout d'un gestionnaire  d'évènement pour la supression d'un article
    document.querySelectorAll(".deleteItem").forEach(item => { item.addEventListener('click', deleteArticle); item.JSON = json; });
  })

console.log(localStorage);

// Récupérer les données du panier stockés dans le LS et le convertir en objet js
let renderProduct = JSON.parse(localStorage.getItem("cart"));
console.log(renderProduct)

// Récupérer l'élément HTML avec l'id "cart_items"
let oneEmptyCart = document.querySelector("#cart__items");
console.log(oneEmptyCart)

// Affichage des produits dans un panier
async function affectInCart(json) {
  // si (if) le pannier est vide 
  if (renderProduct === null) {
    let emptyCart = "Votre panier est vide";
    oneEmptyCart.innerHTML = emptyCart;

    // sinon (else) : insertion des éléments
  } else {
    console.log(renderProduct)
    for (let cart in renderProduct) {
      console.log(json)
      let tmp = json.find(elt => elt._id == renderProduct[cart].id);

      let { altTxt, imageUrl, name, price } = tmp  // destucturing
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

      cart__items.insertAdjacentHTML("beforeend", template);
    }
  }
}

// Total du pannier

async function totalCart(json) {
  // récupération du panier enregistré dans le localStorage
  let cart = JSON.parse(localStorage.getItem("cart"));

  // Initalisation des variables pour le calcul du total
  totalQtt = 0;
  totalPrice = 0;

  // Parcours du panier pour calculer le total
  for (item in cart) {
    let jsonItem = json.find(elt => elt._id == cart[item].id);
    totalQtt += Number(cart[item].quantity);
    totalPrice += jsonItem.price * Number(cart[item].quantity);
  }

  //recupération et MAJ de la quantité totale
  let productTotalQuantity = document.getElementById("totalQuantity");
  productTotalQuantity.innerHTML = totalQtt;

  // récupération et MAJ du prix total
  let productTotalPrice = document.getElementById('totalPrice');
  productTotalPrice.innerHTML = totalPrice;

}

//modifier la quantité de la page panier avec addEentListener de type change et la méthode Element.closest
async function modifyQtt(e) {
  let article = e.target.closest("article");
  let dataColor = article.getAttribute("data-color");
  let dataName = article.getElementsByTagName("h2")[0].innerHTML;

  let cart = JSON.parse(localStorage.getItem('cart'));

  //récupération de la quantité saisie par l'uitlisateur
  let quantityDiv = article.querySelector(".itemQuantity")

  // Ajout de la condition 
  if (quantityDiv.value >= 1 && quantityDiv.value < 100) {
    cart[dataName + dataColor].quantity = e.target.value;
    localStorage.setItem("cart", JSON.stringify(cart));
    totalCart(e.target.JSON)
  }
};

//Supprimer des produits 
async function deleteArticle(e) {
  let article = e.target.closest("article");
  let dataColor = article.getAttribute("data-color");
  let dataName = article.getElementsByTagName("h2")[0].innerHTML;

  let cart = JSON.parse(localStorage.getItem('cart'));

  delete cart[dataName + dataColor];
  article.remove();

  localStorage.setItem("cart", JSON.stringify(cart));
  totalCart(e.target.JSON);

};

// validation du formulaire
function validateFormulaire() {
  // récupération du formulaire
  let form = document.querySelector(".cart__order__form");

  console.log(form.email);

  // Ajout d'un gestionnaire d'évènement pour écouter les modifications apportés à l'email
  form.email.addEventListener('change', function () {
    // Appel de la fonction de validation de l'email
    validEmail(this);
  });

  // Ajout d'un gestionnaire d'évènement pour écouter la soumission du formulaire 
  form.addEventListener('submit', function (e) {
    // Empêcher l'envoi du formulaire
    e.preventDefault();
    // Si les champs sont valides
    if (validEmail(form.email) && validFirstName(form.firstName) && validLastName(form.lastName) && validAddress(form.address) && validCity(form.city)) {
      // création d'un objet de requête avec les données du formulaire 
      const req = { contact: {}, products: [] }
      // Récupération des données dans l'objet de requête
      Array.from(new FormData(form).entries()).forEach(elt => {
        req.contact[elt[0]] = elt[1]
      })
      // Parcours des produits dans le panier
      for (let tmp in renderProduct) {
        // Ajout de l'identitfiant du produit dans la requête
        req.products.push(renderProduct[tmp].id)
      }
      console.log(req)
      // Envoie d'une requête POST à l'URL spécifiée en utilisant les données du formulaire
      fetch('http://localhost:3000/api/products/order', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      })
        // Récupération de la réponse
        .then(x => x.json())
        .then(resp => {
          console.log(resp);
          // Enregistrement de l'id de la commande dans le localStorage
          localStorage.setItem("orderId", resp.orderId)
          // Redirection vers la page de confirmation en utilisant l'id de la commande
          location.href = `confirmation.html?orderId=${resp.orderId}`
          console.log(address.validity);
        })
      // alerte si le formulaire n'est pas valide
    } else {
      alert("Le formulaire n'est pas valide")
    }
  })

  /********************************** Validation EMAIL ******************************/

  function validEmail(inputEmail) {
    // creation de la regExp pour validation email
    let emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );

    let testEmail = emailRegExp.test(inputEmail.value);

    // récupération de la balise suivante (p)
    let p = inputEmail.nextElementSibling;

    console.log(testEmail)

    // condition if/else
    if (testEmail) {
      p.innerHTML = 'Email valide';
      p.classList.toggle("ok")
      p.classList.remove("notok")
      return true;
    } else {
      p.innerHTML = 'Email non valide';
      p.classList.toggle("notok")
      p.classList.remove("ok")
      return false;
    }
  }

  /********************************** Validation FIRSTNAME ******************************/

  console.log(form.firstName)

  // Ecouter la modification du firstName
  form.firstName.addEventListener('change', function () {
    validFirstName(this);
  });

  function validFirstName(inputFirstName) {
    let firstNameRegExp = new RegExp(
      "^[a-zA-Z ,.'-]+$", 'g'
    );

    let testFirstName = firstNameRegExp.test(inputFirstName.value);

    // récupération de la balise suivante (p)
    let p = inputFirstName.nextElementSibling;
    console.log(testFirstName)

    // condition if/else
    if (testFirstName) {
      p.innerHTML = 'Prénom valide';
      p.classList.toggle("ok")
      p.classList.remove("notok")
      return true;
    } else {
      p.innerHTML = 'Prénom non valide';
      p.classList.toggle("notok")
      p.classList.remove("ok")
      return false;
    }
  }
  /********************************** Validation LASTNAME ******************************/

  console.log(form.lastName)

  // Ecouter la modification du lastName
  form.lastName.addEventListener('change', function () {
    validLastName(this);
  });


  function validLastName(inputLastName) {
    let lastNameRegExp = new RegExp(
      "^[a-zA-Z ,.'-]+$", 'g'
    );

    let testLastName = lastNameRegExp.test(inputLastName.value);

    // récupération de la balise suivante (p)
    let p = inputLastName.nextElementSibling;
    console.log(testLastName)

    // condition if/else
    if (testLastName) {
      p.innerHTML = 'Nom valide';
      p.classList.toggle("ok")
      p.classList.remove("notok")
      return true;
    } else {
      p.innerHTML = 'Nom non valide';
      p.classList.toggle("notok")
      p.classList.remove("ok")
      return false;
    }
  }
  /********************************** Validation ADRESSE ********************************/

  console.log(form.address);

  // Ecouter la modification de l'adresse
  form.address.addEventListener('change', function () {
    validAddress(this);
  });

  function validAddress(inputAddress) {
    // creation de la regExp pour validation de l'adresse
    let addressRegExp = new RegExp(
      "^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+", 'g'
    );

    let testAddress = addressRegExp.test(inputAddress.value);

    // récupération de la balise suivante (p)
    let p = inputAddress.nextElementSibling;

    console.log(testAddress)

    // condition if/else
    if (testAddress) {
      p.innerHTML = 'Adresse valide';
      p.classList.toggle("ok")
      p.classList.remove("notok")
      return true;
    } else {
      p.innerHTML = 'Adresse non valide';
      p.classList.toggle("notok")
      p.classList.remove("ok")
      return false;
    }
  }

  /********************************** Validation VILLE ********************************/

  console.log(form.city);

  // Ecouter la modification de l'adresse
  form.city.addEventListener('change', function () {
    validCity(this);
  });

  function validCity(inputCity) {
    // creation de la regExp pour validation de l'adresse
    let cityRegExp = new RegExp(
      "^[a-zA-Z ,.'-]+$", 'g'
    );

    let testCity = cityRegExp.test(inputCity.value);

    // récupération de la balise suivante (p)
    let p = inputCity.nextElementSibling;

    console.log(testCity)

    // condition if/else
    if (testCity) {
      p.innerHTML = 'Ville valide';
      p.classList.toggle("ok")
      p.classList.remove("notok")
      return true;
    } else {
      p.innerHTML = 'Ville non valide';
      p.classList.toggle("notok")
      p.classList.remove("ok")
      return false;
    }
  }
};

validateFormulaire()


