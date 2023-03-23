// retrieve the value from localStorage
let numOfPizzas = Number(localStorage.getItem("Fantasia-maara"));

const lisaaOstoskoriinNappi = document.getElementById("fantasiaOstoskoriin")
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// select the HTML element and set its innerHTML to the value of numOfPizzas
document.getElementById("numOfPizzas").innerHTML = numOfPizzas;

// select the container element
let container = document.getElementById("numOfPizzasContainer");

// hide the container element if numOfPizzas is less than or equal to 1
if (numOfPizzas <= 1) {
  container.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  lisaaOstoskoriinNappi.addEventListener('click', function () {

    checkboxes.forEach((checkbox) => {
      // Tarkista, onko checkbox valittu
      if (checkbox.checked) {
        console.log(`${checkbox.id} on valittu.`);
      } else {
        console.log(`${checkbox.id} ei ole valittu.`);
      }
    });

  });

});
