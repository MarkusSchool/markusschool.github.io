let hintayht = 0;
let kesto = 0;

const hintayhtHtml = document.getElementById("hintayht")
const tilausKesto = document.getElementById("tilausparagraph")
const tyhjennaOstoskoriNappi = document.getElementById("tyhjennäOstoskori")
const otsikko = document.getElementById("otsikko")

const TyhjennaOstoskori = () => {
  if (JSON.parse(localStorage.getItem("pizzaArray")).length > 0) { //estää turhan ostoskori tyhjennysnapin spammin
    localStorage.setItem("pizzaArray", JSON.stringify([]));
    hintayht = 0
    kesto = 0
    otsikko.textContent = "Sinulla ei ole mitään ostoskorissa"
    location.reload();
  }
}


tyhjennaOstoskoriNappi.addEventListener('click', TyhjennaOstoskori);

document.addEventListener("DOMContentLoaded", function () {

  const pizzaArray = JSON.parse(localStorage.getItem("pizzaArray"));

  if (pizzaArray && pizzaArray.length > 0) {
    
    tilausKesto.style.display = "";
    tyhjennaOstoskoriNappi.style.display = "";
    hintayhtHtml.style.display = "";

    pizzaArray.forEach((dict) => { // päästään dictionaryihin käsiksi, jotka ovat pizza arrayn sisällä
      console.log(dict);
      hintayht += Number(dict.hinta); //Lisätään yhteiseen hintaan dictionaryssa oleva hinta 
      kesto += dict.paistumisaika * dict['määrä']
    });

    console.log(hintayht) //Printataan yhteishinta
    // Muutetaan kesto tunneiksi ja minuuteiksi, jos kesto ylittää 60 minuuttia
    let kestoTunneiksi = Math.floor(kesto / 60);
    let kestoMinuuteiksi = kesto % 60;

    // Luodaan keston esitys tunteina ja minuutteina
    let kestoEsitys = "";
    if (kestoTunneiksi > 0) {
      kestoEsitys += `${kestoTunneiksi} tunti(a) `;
    }
    kestoEsitys += `${kestoMinuuteiksi} minuuttia`;

    console.log(hintayht) //Printataan yhteishinta

    hintayht = Number(hintayht).toFixed(2)

    hintayhtHtml.textContent = `Yhteishinta: ${hintayht}€`
    tilausKesto.textContent = `Tilauksessa kestää noin: ${kestoEsitys}`;

  } else { // kun käyttäjä ei ole laittanut tilaukseen mitään
    tilausKesto.style.display = "none";
    tyhjennaOstoskoriNappi.style.display = "none";
    otsikko.textContent = "Sinulla ei ole mitään ostoskorissa";
    hintayhtHtml.style.display = "none";

  }

});

