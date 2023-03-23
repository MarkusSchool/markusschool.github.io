document.addEventListener("DOMContentLoaded", function () {

  const checkboxes = document.querySelectorAll('.checkbox');
  const pohjaSelectit = document.querySelector('#pohjaSelectit');
  const kokoSelectit = document.querySelector('#kokoSelectit')
  const kastikeSelectit = document.querySelector('#kastikeSelectit')
  const juustoSelectit = document.querySelector('#juustoSelectit')
  
  const valitutTaytteet = [];

  const perusFantasiaHinta = 10.00

  document.getElementById("fantasiaOstoskoriin").addEventListener('click', function () {
    let gluteeniton = "Ei"
    let hinta = 0;
    let valmistumisAika = 7;
    let koko = "Normaali";

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        valitutTaytteet.push(checkbox.id);
      }
    });

    const valittuPohja = pohjaSelectit.options[pohjaSelectit.selectedIndex].value;
    const valittuKoko = kokoSelectit.options[kokoSelectit.selectedIndex].value;

    if(valittuPohja == "gluteeniton") {
      gluteeniton = "Kyllä"
      valmistumisAika += 3
      hinta += perusFantasiaHinta + 2
    }

    if(valittuKoko == "iso") {
      hinta += 3
      valmistumisAika += 4
      koko = "Iso";
    }

    const tayteMaara = valitutTaytteet.length;

    const kokoPizza = {
      'määrä': 3,
      'nimi': 'Fantasia',
      'koko': koko,
      'paistumisaika': valmistumisAika,
      'gluteeniton': gluteeniton,
      'hinta': (hinta + tayteMaara).toFixed(2),
      'täytteet': valitutTaytteet
    };


    console.log(kokoPizza);
    // location.href = "./pizzanTilausSivu.html"

  });

});
