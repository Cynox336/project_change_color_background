//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
var clickButton = document.querySelector(".btn-outline-secondary");
clickButton.addEventListener("click", function() {
  var randomColorIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomColorIndex];
  document.body.style.backgroundColor = randomColor;
  console.log("Me has hecho click");
});
