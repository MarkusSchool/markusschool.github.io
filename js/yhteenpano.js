
let hintayht = 0;
let kesto = 0;

const hintayhtHtml = document.getElementById("hintayht")
const tilausKesto = document.getElementById("tilausparagraph")

document.addEventListener("DOMContentLoaded", function () {

  const pizzaArray = JSON.parse(localStorage.getItem("pizzaArray"));

  if (pizzaArray && pizzaArray.length > 0) {
    console.log("arrayssa on jotain")

    pizzaArray.forEach((dict) => { // päästään dictionaryihin käsiksi, jotka ovat pizza arrayn sisällä
      console.log(dict);
      hintayht += Number(dict.hinta); //Lisätään yhteiseen hintaan dictionaryssa oleva hinta 
      kesto += dict.paistumisaika
    });
 
    console.log(hintayht) //Printataan yhteishinta
    // Muutetaan kesto tunneiksi ja minuuteiksi, jos kesto ylittää 60 minuuttia
    let kestoTunneiksi = Math.floor(kesto / 60);
    let kestoMinuuteiksi = kesto % 60;

    // Luodaan keston esitys tunteina ja minuutteina
    let kestoEsitys = "";
    if (kestoTunneiksi > 0) {
      kestoEsitys += `${kestoTunneiksi}h `;
    }
    kestoEsitys += `${kestoMinuuteiksi}min`;

    // Päivitetään HTML-elementti tilausKesto
    tilausKesto.textContent = `Tilauksessa kestää noin: ${kestoEsitys}`;

      console.log(hintayht) //Printataan yhteishinta

    hintayht = Number(hintayht).toFixed(2)

    hintayhtHtml.textContent = `Yhteishinta: ${hintayht}€`
    tilausKesto.textContent = `Tilauksessa kestää noin: ${kestoEsitys}`;

  }

});

