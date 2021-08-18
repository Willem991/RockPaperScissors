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

//setting up playing loop variable

let playAgain = true;
let userThrow;
let pcThrow;
let yourScore = 0;
let pcScore = 0;

//Creating the loop

do{

    //Getting user input

    userThrow = prompt("What would you like to throw?").toLowerCase();
    pcThrow = computerplay().toLowerCase();




    // Testing to see who won
    if(userThrow !== "scissors" && userThrow !== "rock" && userThrow !== "paper"){
        alert("You didn't choose rock or paper or scissors!")
    }else if(userThrow === pcThrow){
        alert("The pc threw " + pcThrow + ". It's a tie! Your score is " + yourScore + ". Pc score is " + pcScore + ".")
    }else if(userThrow === "scissors" && pcThrow === "paper"){
        yourScore++;
        alert("The pc threw " + pcThrow + ". You win! Your score is " + yourScore + ". Pc score is " + pcScore + ".");
    }else if(userThrow === "rock" && pcThrow === "scissors"){
        yourScore++;
        alert("The pc threw " + pcThrow + ". You win! Your score is " + yourScore + ". Pc score is " + pcScore + ".");
    }else if(userThrow === "paper" && pcThrow === "rock"){
        yourScore++;
        alert("The pc threw " + pcThrow + ". You win! Your score is " + yourScore + ". Pc score is " + pcScore + ".");
    }else if((userThrow === "scissors" && pcThrow === "rock") || (userThrow === "paper" && pcThrow === "scissors") || userThrow === "rock" && pcThrow === "paper"){
        pcScore++;
        alert("The pc threw " + pcThrow + ". You lose! Your score is " + yourScore + ". Pc score is " + pcScore + ".");
    }else{
        alert("The pc threw " + pcThrow + ". Its a tie! Your score is " + yourScore + ". Pc score is " + pcScore + ".");
    }

    if(!confirm("Would you like to play again?")){
        playAgain = false;
    }

} while(playAgain);