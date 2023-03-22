
let hintayht = 0;
let kesto = 0;

const hintayhtHtml = document.getElementById("hintayht")
const tilausKesto = document.getElementById("tilausparagraph")

document.addEventListener("DOMContentLoaded", function() {

    const pizzaArray = JSON.parse(localStorage.getItem("pizzaArray"));
    
    if (pizzaArray && pizzaArray.length > 0) {
      console.log("arrayssa on jotain")

      pizzaArray.forEach((dict) => { // päästään dictionaryihin käsiksi, jotka ovat pizza arrayn sisällä
        console.log(dict); 
        hintayht += Number(dict.hinta).toFixed(2); //Lisätään yhteiseen hintaan dictionaryssa oleva hinta 
        kesto += dict.paistumisaika
      });

      console.log(hintayht) //Printataan yhteishinta 

      hintayhtHtml.textContent = `Yhteishinta: ${hintayht.toFixed(2)  }€`
      tilausKesto.textContent = `Tilauksessa kestää noin: ${kesto} min.`

    }
    
});