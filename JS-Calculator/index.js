//CALCULATOR PROGRAM

const display = document.getElementById("display");

//function to display input and output on screen when typed
function appendToDisplay(input){
    display.value += input;
}

//stuff to show nothing in display when C is clicked 
function clearDisplay(){
    display.value = "";
}

//function to calculate the value
//eval() is basically an inbuilt calculator
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}