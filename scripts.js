//Creating a function that will return a random integer between one and three and then based apon that number return either rock, paper, or scissors

function computerplay(){
    
    let decider = Math.floor(Math.random()*3) + 1;
    let throwVar = "Empty"

    switch(decider){

        case 1:
             throwVar = "scissors";
        break;
        case 2: 
            throwVar = "rock";
        break;
        case 3:
            throwVar = "paper";
        break;
        default:
            throwVar = "Something is broken"
    }

    return throwVar;
}

//Getting user input

let userThrow = prompt("What would you like to throw?").toLowerCase();
let pcThrow = computerplay().toLowerCase();




// Testing to see who won
if(userThrow === pcThrow){
    alert("the pc threw " + pcThrow + "It's a tie!")
}else if(userThrow === "scissors" && pcThrow === "paper"){
    alert("the pc threw " + pcThrow + "You win!");
}else if(userThrow === "rock" && pcThrow === "scissors"){
    alert("the pc threw " + pcThrow + "You win!");
}else if(userThrow === "paper" && pcThrow === "rock"){
    alert("the pc threw " + pcThrow + "You win!");
}else if((userThrow === "scissors" && pcThrow === "rock") || (userThrow === "paper" && pcThrow === "scissors") || userThrow === "rock" && pcThrow === "paper"){
    alert("the pc threw " + pcThrow + "You lose!");
}else{
    alert("the pc threw " + pcThrow + "Its a tie");
}