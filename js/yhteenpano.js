
let hintayht = 0;

const hintayhtHtml = document.getElementById("hintayht")

document.addEventListener("DOMContentLoaded", function() {

    const pizzaArray = JSON.parse(localStorage.getItem("pizzaArray"));
    
    if (pizzaArray && pizzaArray.length > 0) {
      console.log("arrayssa on jotain")

      pizzaArray.forEach((dict) => { // päästään dictionaryihin käsiksi, jotka ovat pizza arrayn sisällä
        console.log(dict); 
        hintayht += dict.hinta //Lisätään yhteiseen hintaan dictionaryssa oleva hinta
      });

      console.log(hintayht) //Printataan yhteishinta

      hintayhtHtml.textContent = `Yhteishinta: ${hintayht}€`

    }
    
});