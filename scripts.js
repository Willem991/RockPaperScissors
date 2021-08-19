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

let yourScore = 0;
let pcScore = 0;

const score = document.querySelector('#score');

//Creating the loop

function Checker(throwVal){

    let userThrow = throwVal.toLowerCase();
    let pcThrow = computerplay().toLowerCase();

    console.log(userThrow);

    // Testing to see who won
    if(userThrow === pcThrow){
        score.textContent = "The pc threw " + pcThrow + ". It's a tie! Your score is " + yourScore + ". Pc score is " + pcScore + ".";
    }else if(userThrow === "scissors" && pcThrow === "paper"){
        yourScore++;
        score.textContent = "The pc threw " + pcThrow + ". You win! Your score is " + yourScore + ". Pc score is " + pcScore + ".";
    }else if(userThrow === "rock" && pcThrow === "scissors"){
        yourScore++;
        score.textContent = "The pc threw " + pcThrow + ". You win! Your score is " + yourScore + ". Pc score is " + pcScore + ".";
    }else if(userThrow === "paper" && pcThrow === "rock"){
        yourScore++;
        score.textContent = "The pc threw " + pcThrow + ". You win! Your score is " + yourScore + ". Pc score is " + pcScore + ".";
    }else if((userThrow === "scissors" && pcThrow === "rock") || (userThrow === "paper" && pcThrow === "scissors") || userThrow === "rock" && pcThrow === "paper"){
        pcScore++;
        score.textContent = "The pc threw " + pcThrow + ". You lose! Your score is " + yourScore + ". Pc score is " + pcScore + ".";
    }else{
        score.textContent = "The pc threw " + pcThrow + ". Its a tie! Your score is " + yourScore + ". Pc score is " + pcScore + ".";
    };

    if(yourScore == 5 ){
        alert("Bloody Hell! You actually won! Well done!");
        pcScore = 0;
        yourScore = 0;
    }else if(pcScore == 5){
        alert("Well, you lost. Better luck next time.")
        pcScore = 0;
        yourScore = 0;
    }

}; 

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    Checker("rock")
});

paperBtn.addEventListener('click', () => {
    Checker("paper")
});

scissorsBtn.addEventListener('click', () => {
    Checker("scissors")
});