// Variables
var btnPreview = document.getElementById("btn-prev");

var redInEl = document.getElementById("red");
var greenInEl = document.getElementById("green");
var blueInEl = document.getElementById("blue");

var rgbStringOut = document.getElementById("pRGB");
var displayEl = document.getElementById("display");

// Event Listener
btnPreview.addEventListener("click", rgbPreview);

function rgbPreview() {
  // Input: red, green and blue values
  let redValue = +redInEl.value;
  let greenValue = +greenInEl.value;
  let blueValue = +blueInEl.value;

  // Validate Colors (Constrain colors between 0 - 255)
  if (redValue < 0) {
    redValue = 0;
    redInEl.value = 0;
  } else if (redValue > 255) {
    redValue = 255;
    redInEl.value = 255;
  }

  if (greenValue < 0) {
    greenValue = 0;
    greenInEl.value = 0;
  } else if (greenValue > 255) {
    greenValue = 255;
    greenInEl.value = 255;
  }

  if (blueValue < 0) {
    blueValue = 0;
    blueInEl.value = 0;
  } else if (blueValue > 255) {
    blueValue = 255;
    blueInEl.value = 255;
  }

  let rgbString =
    "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";

  // Output: display rgb string and update the color preview
  rgbStringOut.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

// Black and white btns

// Variables
var btnBlack = document.getElementById("btn-black");
var btnWhite = document.getElementById("btn-white");

// Event Listener
// Black button

btnBlack.addEventListener("click", blackDisplay);

function blackDisplay() {
  rgbStringOut.innerHTML = "rgb(0, 0, 0)";
  displayEl.style.background = "rgb(0, 0, 0)";
}

// White button

btnWhite.addEventListener("click", whiteDisplay);

function whiteDisplay() {
  rgbStringOut.innerHTML = "rgb(255, 255, 255)";
  displayEl.style.background = "rgb(255, 255, 255)";
}

// Size of the display (with parameters)

// Variables
var widthInp = document.getElementById("inp-width");
var heightInp = document.getElementById("inp-height");

// Event Listener
widthInp.addEventListener("change", changeWidth);

function changeWidth() {
  // Inputs:
  let widthValue = +widthInp.value;

  // Parameters
  // Width
  if (widthValue < 50) {
    widthValue = 50;
    widthInp.value = 50;
  } else if (widthValue > 400) {
    widthValue = 400;
    widthInp.value = 400;
  }

  // Main functionality
  displayEl.style.width = `${widthValue}px`;
}

// Event Listener
heightInp.addEventListener("change", changeHeight);

function changeHeight() {
  // Inputs:
  let heightValue = +heightInp.value;

  // Parameters
  //   Height
  if (heightValue < 50) {
    heightValue = 50;
    heightInp.value = 50;
  } else if (heightValue > 200) {
    heightValue = 200;
    heightInp.value = 200;
  }

  // Main functionality
  displayEl.style.height = `${heightValue}px`;
}
