console.log('funguju');


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