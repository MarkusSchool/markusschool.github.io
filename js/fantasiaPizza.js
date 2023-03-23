const numberOfPizzas = 2; // Replace this with the actual number of pizzas chosen

const maara = document.querySelector('.maara');
const h3 = document.createElement('h3');

if (numberOfPizzas > 1) {
  h3.textContent = `#${numberOfPizzas}`;
  maara.appendChild(h3);
}
