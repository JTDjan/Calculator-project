
// Setting the variable for the buttons to be called to the display screen 

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator-btn");
const extraButtons =document.querySelectorAll(".extra-btn")
const equals = document.querySelector("#equals")

let firstNumber = "";
let secoundNumber = "";
let signs = "";
let extBtn = "";




// To get numbers to display on screen
  numbers.forEach((number) => {
  number.addEventListener("click" ,(event) => {
      // if (signs == true){
      //   display.innerHTML = "";
      //   console.log("IT WORKING!!!!!!!!");
      // };    
   
        let number = event.target.value;
         

        display.innerHTML += number;

  });
  
  
    }); 

// To save the firstNumber & display the operator as operator has been clicked. 
    operators.forEach((operator) => {
      operator.addEventListener("click" , (event) => {
         firstNumber = display.innerHTML;
         signs = event.target.value;
        display.innerHTML = ""
      })
    });


    // To save the secondNumber & carry out the equals operator & other operators
    
      equals.addEventListener("click" , () => {
        secoundNumber = display.innerHTML;
        if ( signs == "+") {
            // addition
          let result =  Number.parseFloat(firstNumber) + Number.parseFloat(secoundNumber);
          display.innerHTML = `${result}`
          
        } else if (signs == "-") {
            // minus
            let result =  Number.parseFloat(firstNumber) - Number.parseFloat(secoundNumber);
            display.innerHTML = `${result}`
            
            display.innerHTML = Number.parseFloat(firstNumber) - Number.parseFloat(secoundNumber);
            
          } else if (signs == "x") {
            // multiply
            
            let result = (Number.parseFloat(firstNumber) * Number.parseFloat(secoundNumber));
            display.innerHTML = `${result}`
            
            console.log(firstNumber); console.log(secoundNumber);
          } else if (signs == "÷") {
            console.log("string fuction fired");
            let result =  Number.parseFloat(firstNumber) / Number.parseFloat(secoundNumber);
            display.innerHTML = `${result}`
            
            
            
          }
          
        });
        
        
        // extra buttons (AC/Del/[+/-]/)
        extraButtons.forEach((btn) => {
          btn.addEventListener("click" , (event)=> {
            let button = event.target.value;

            console.log(button);
            if ( button == "ac") {
              firstNumber = "";
              secoundNumber = "";
              signs = "";
              display.innerHTML = "";
              
            } else if (button == "del") {



            } else if ( button === "%") {
                  

            } else if ( button === "+/-") {


            }


          });
        })
        
        
        