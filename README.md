# Calculator-project

## Objective 
The aim of this project was to build a simple working calculator that was cable of computing simple calculations using javascript. 


## Tech stack used
- HTML
- CSS
- SCSS
- Java


## Steps taken 

The approach I took to build the calculator started with:

1. Building the HTMl elements. 
This started out by creating a <h1> tag to establish the title for the page. I then created a div id of "Calculator" and within that another div with the Id of "calaculator-frame" This allowed me centre the frame by applying a flex to the inital div then centering it by justify content. Within the div calculator-frame i then created two more divs to serpate the display screen from the buttons, with the latter being effected by a grid to give the ability to assign buttosn to specfic point. Each button was given a class & a value so that it could be targerted in javascript file & by css for styling elements. 

2. Linking HTML Element to Javascript using DOM
For the user to be able to interact with the HTML elements/calulator, the HTML had to be link to the js page by using creating variables & using querySelectors to attached the varables in js to the HTML elements.
3 let variable (firstNumber / secoundNumber / signs) were created to be able to store temporary numbers & operators to be able to call & interact with each other later on. 

3. Displaying the number on screen 
To get the numbers to display on the screen with the newly created "number" variable being linked to the button. I used a foreach function to loop the variable so that when the event would happen with a click it would target the value of number then with the "InnerHTML" 

## Problems encountered & there soloution 



## Addtional features i would like to add




