# Calculator-project

## Objective 
The aim of this project was to build a simple working calculator that was cable of computing simple calculations using javascript. 


## Tech stack used
- HTML
- CSS
- SCSS
- Java


## Design
The design inspiration original came from the iPhone calculator app although this was achieved with button color style, i found the rest of the body frame would look better to model after a simple pocket calculator. 

 
## Problems encountered & there solution 
- initially the when carrying out a calculation, the second number would have been saved what was shown on the screen when the equals button was clicked. This meant that the operator would have been part of the second number i.e (+7  or -3) this lead the the desired calculation be wrong because of the added operator ( "5" - "-5" = "10" instead of "5" - "5" = "0").
Solution: For the operation function i found the best solution was to return an empty string every time an operator was pushed. This would allow the second number to store only the number displayed on screen when the equal button was clicked. 

- The multiplication operator was unresponsive when clicked. 
Solution: Through console logging the function, it came to my attention that the function was not being called. Upon reviewing the code with another person set of eyes & perspective, I came to realise that the value set in my HTML for the operator function did not match the value in my IF Function expression, causing the function to always be false. Changing the values to match rectify this problem. 

- If a user was to input a long string of numbers greater than the width of the display screen, it would cause the screen to expand to accommodate the number inputed.
Solution: To fixed this, i set an property to the display screen know as "Overflow" and set it to hidden so that any number entered that exceed the frame would be hidden from view. 



## Additional features i would like to add
- I would have liked to add a "+/-" function that would have been able to toggle the integer display on screen to a positive integer or negative integer.
- I would have wanted to properly fixed the "del" button to enable me to delete the last number entered on screen. 
- A second screen shown within the display view that showed the user's input of the firstnumber or previous number. 
- Redesign the calculation function that would enable the user to calculate multiple set of numbers at one given equation (e.g 10 + 20 + 30 + 40 = 100) instead of being limited to two sets of numbers (e.g 50 + 50 = 100).





