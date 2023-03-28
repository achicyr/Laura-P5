// Afficher un identifiant de commande enregistré dans le localStorage et le supprimer
function main() {
    //Récupération de l'élément HTML avec l'ID "orderId"
    let orderIdHtml = document.getElementById("orderId");

    //Remplacer le contenu de cet élement HTML par l'identifiant de commande stocké dans le localStorage
    orderIdHtml.innerText = localStorage.getItem("orderId");

    //Afficher l'identifiant de commande stocké dans le LS dans la console
    console.log(localStorage.getItem("orderId"))

    // Effacer toutes les données stockées dans le LS
    localStorage.clear();
}
main();