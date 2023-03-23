// retrieve the value from localStorage
var numOfPizzas = Number(localStorage.getItem("fantasia-maara"));

// select the HTML element and set its innerHTML to the value of numOfPizzas
document.getElementById("numOfPizzas").innerHTML = numOfPizzas;

// select the container element
var container = document.getElementById("numOfPizzasContainer");

// hide the container element if numOfPizzas is less than or equal to 1
if (numOfPizzas == 0) {
  numOfPizzas = 1;
}