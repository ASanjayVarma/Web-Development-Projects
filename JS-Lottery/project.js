//1. Deposit money.
//2. Determine number of lines to bet on.
//3. Collect a bet amount.
//4. Spin the slot machine.
//5. Check if the user won.
//6. Give the user their winnings.
//7. Play again button.


const prompt = require("prompt-sync")();
//1
const deposit = () => {
    while(true){//we loop until we get a valid number, thats why this forever loop for
        const depositAmount = prompt("Enter your deposit: "); //returned as string, we gotta change to an integer
        //changing string type data to number type data
        //if user enters string, when conversion the result becomes NaN. Sanjay -> NaN(not a number)
        const numberDepositAmount = parseFloat(depositAmount);
    
        //dealing with not a number(NaN)
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount. Please enter a valid amount.");
        }
        else{
            return numberDepositAmount;
        }
    }
};
//1 ends

//2 starts
const getNumberOfLines = () => {//mostly same as above
    while(true){
        const lines = prompt("Enter the number of lines you wanna bet on(1-3): ");
        const numberOfLines = parseFloat(depositAmount);
    
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount. Please enter a valid amount.");
        }
        else{
            return numberDepositAmount;
        }
    }
}




const depositAmount = deposit();
