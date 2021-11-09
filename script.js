
// Setting the variable for the buttons to be called to the display screen 

const buttons = document.querySelectorAll(".calculator-btn");
const display = document.querySelector(".display");





buttons.forEach((button) => {
  button.addEventListener("click" ,(event) => {
        let number = event.target.value;
        display.innerHTML += number
  });
  
  
    }); 




  // Creating functions to use operators & numbers
