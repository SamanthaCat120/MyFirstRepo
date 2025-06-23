window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   // grabbing of elements

   //add event listener for the button
   const btn = document.getElementById("convertButton")
   btn.addEventListener("click", convertButtonClicked)

   //grab two input text boxes
   const celsInput = document.getElementById("cInput")
   const fahrInput = document.getElementById("fInput")

   //add event listener and clear the opposite box when you are typing input
   celsInput.addEventListener("input", function() {clearTextBox(fahrInput)});
   fahrInput.addEventListener("input", function() {clearTextBox(celsInput)});
}

//clears text boxes
function clearTextBox(textInput) {
   textInput.value = ""
}


function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5 / 9;
}

function convertButtonClicked() {
   const celsInput = document.getElementById("cInput");
   const fahrInput = document.getElementById("fInput");
   const weatherImg = document.getElementById("weatherImage");
   const errMsg = document.getElementById("errorMessage");

   errMsg.innerHTML = "";

   let fahr;

   if (celsInput.value.length > 0) {
      const celsius = parseFloat(celsInput.value);
      if (!isNaN(celsius)) {
         fahr = convertCtoF(celsius);
         fahrInput.value = fahr.toFixed(2);
      } else {
         errMsg.innerHTML = celsInput.value + " is not a valid number";
         return;
      }
   } else if (fahrInput.value.length > 0) {
      const fahrenheit = parseFloat(fahrInput.value);
      if (!isNaN(fahrenheit)) {
         fahr = fahrenheit;
         celsInput.value = convertFtoC(fahrenheit).toFixed(2);
      } else {
         errMsg.innerHTML = fahrInput.value + " is not a valid number";
         return;
      }
   } else {
      errMsg.innerHTML = "Please enter a value in one text box.";
      return;
   }

   // Now set the image based on fahrenheit temperature
   if (fahr < 32) {
      weatherImg.src = "images/cold.png";
      weatherImg.alt = "Cold";
   } else if (fahr > 50) {
      weatherImg.src = "images/warm.png";
      weatherImg.alt = "Warm";
   } else {
      weatherImg.src = "images/cool.png";
      weatherImg.alt = "Cool";
   }
}
  