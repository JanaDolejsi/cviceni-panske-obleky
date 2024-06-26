console.log("funguju");

/*
// Janči varianta
function changeColor(color) {
  var productImage = document.querySelector("#productImage");
  if (color === 'white') {
    productImage.style.filter = 'grayscale(0%)'; 
  } else if (color === 'black') {
    productImage.style.filter = 'grayscale(100%)'; 
  } 
}

var buttons = document.querySelectorAll('.color-button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var color = this.getAttribute('data-color');
    changeColor(color);
  });
});
//konec Janči varianty
*/

//Varianta bez znalosti array a for loop, není moc DRY, ale funguje
// element chosen
const shirt = document.getElementById("product-image");
const whiteBtn = document.getElementById("whiteBtn");
const blackBtn = document.getElementById("blackBtn");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const yellowBtn = document.getElementById("yellowBtn");
const greenBtn = document.getElementById("greenBtn");
const nakup = document.querySelector(".btn--action");

// variables declaration
let chosenColor;

whiteBtn.addEventListener("click", function () {
  const color = this.getAttribute("data-color");
  shirt.style = `fill: ${color}`;
  chosenColor = color;
});

blackBtn.addEventListener("click", function () {
  const color = this.getAttribute("data-color");
  shirt.style = `fill: ${color}`;
  chosenColor = color;
});

redBtn.addEventListener("click", function () {
  const color = this.getAttribute("data-color");
  shirt.style = `fill: ${color}`;
  chosenColor = color;
});

blueBtn.addEventListener("click", function () {
  const color = this.getAttribute("data-color");
  shirt.style = `fill: ${color}`;
  chosenColor = color;
});

yellowBtn.addEventListener("click", function () {
  const color = this.getAttribute("data-color");
  shirt.style = `fill: ${color}`;
  chosenColor = color;
});

greenBtn.addEventListener("click", function () {
  const color = this.getAttribute("data-color");
  shirt.style = `fill: ${color}`;
  chosenColor = color;
});
// konec dlouhé varianty

/*
// Varianta se znalostí array a for loop
// element chosen
const shirt = document.getElementById("product-image");
const nakup = document.querySelector(".btn--action");

// variables declaration
let chosenColor;

// pole barev
const colorPool = ["white", "black", "red", "blue", "yellow", "green"];

// funcionality of colorBtns
for (let i = 0; i < colorPool.length; i++) {
  const clickedBtn = document.getElementById(`${colorPool[i]}Btn`);
  clickedBtn.addEventListener("click", function () {
    shirt.style = `fill: ${colorPool[i]}`;
    chosenColor = colorPool[i];
  });
}
*/

// alert pro tlačítko Koupit
nakup.addEventListener("click", function () {
  alert(`Děkujeme za nákup košile v barvě ${chosenColor}`);
});
