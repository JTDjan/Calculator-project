
// Setting the variable for the buttons to be called to the display screen 

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator-btn");
const extraButtons =document.querySelectorAll(".extra-btn")
const equals = document.querySelector("#equals")

let firstNumber = "";
let secoundNumber = "";
let signs = "";




// To get numbers to display on screen
  numbers.forEach((number) => {
  number.addEventListener("click" ,(event) => {
        let number = event.target.value;
        display.innerHTML += number
  });
  
  
    }); 

// To save the firstNumber & display the operator as operator has been clicked. 
    operators.forEach((operator) => {
      operator.addEventListener("click" , (event) => {
          firstNumber = display.innerHTML;
         signs = event.target.value;
        display.innerHTML = signs
      })
    });


    // To save the secondNumber & carry out the equals operator
    
      equals.addEventListener("click" , () => {
        secoundNumber = display.innerHTML;
        console.log(signs);
        if ( signs == "+") {
            // addition
          let result =  Number.parseFloat(firstNumber) + Number.parseFloat(secoundNumber);
          display.innerHTML = `${result}`
          
        } else if (signs == "-") {
            // minus
          
          let result =  Number.parseFloat(firstNumber) - Number.parseFloat(secoundNumber);
          display.innerHTML = `${result}`

        } else if (signs == "*") {
           // multiply
          // console.log("string fuction fired");
          
          let result = Math.imul ( Number.parseFloat(firstNumber) , Number.parseFloat(secoundNumber) );
          display.innerHTML = `${result}`
          
        } else if (signs == "÷") {
          console.log(firstNumber); console.log(secoundNumber);
          let result =  Number.parseFloat(firstNumber) / Number.parseFloat(secoundNumber);
          display.innerHTML = `${result}`
          
        }

      });
     

  // Creating functions to use operators & numbers
