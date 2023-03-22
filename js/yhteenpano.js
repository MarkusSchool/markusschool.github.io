
let hintayht = 0;

const hintayhtHtml = document.getElementById("hintayht")

document.addEventListener("DOMContentLoaded", function() {

    const pizzaArray = JSON.parse(localStorage.getItem("pizzaArray"));

    console.log(pizzaArray);
    
    if (pizzaArray && pizzaArray.length > 0) {
      console.log(pizzaArray)
    }
    
});