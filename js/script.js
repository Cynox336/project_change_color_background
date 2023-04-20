//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

let clickButton = document.querySelector(".btn-outline-secondary");
clickButton.addEventListener("click", function() {
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIndex];
  document.body.style.backgroundColor = randomColor;
  console.log("Me has hecho click, GG WP");
});