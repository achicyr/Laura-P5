function main(){
    let orderIdHtml = document.getElementById("orderId");
    orderIdHtml.innerText = localStorage.getItem("orderId");
    
    console.log(localStorage.getItem("orderId"))
    localStorage.clear();
}
main();