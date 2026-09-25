// get an uniformly randomly int beetween [1:n]
function getRandomInt(n){
    return Math.floor(Math.random() * n);
}

function getComputerChoice() {
    const maxChoice = 3;
    const computerChoice = getRandomInt(maxChoice);

    switch (computerChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

function getHumanChoice(){
    const userInput = prompt("Make your choice ! (Rock, Paper Or Scissors", "").toLowerCase();
    
    switch (userInput){
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    console.log("------- Round -------\n" + 
        `You played : ${humanChoice.toUpperCase()}\n` +
        `Computer played : ${computerChoice.toUpperCase()}`
    );

    if (humanChoice === computerChoice){ // Tie case
        console.log("Tie : Nobody Win");
    }
    else if ( // Case user LOSE
        humanChoice == "rock" && computerChoice == "paper" || 
        humanChoice == "paper" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "rock"
    ){
        console.log(`You LOSE! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        computerScore++;
    }
    else{ // Case user WIN
        console.log(`You WIN! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`); 
        humanScore++;
    }
}

function playGame(){
    // Play rounds
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    
    // Choose winner
    console.log(`Your score : ${humanScore} || Computer score : ${computerScore}`);
    if (humanScore == computerScore){
        console.log("It's Tie! \u{1F454}");
    }
    else if (humanScore > computerScore){
        console.log("You WIN !!! \u{1F3C6}");
    }
    else{
        console.log("You Lose \u{1F602}\u{1FAF5}");
    }
}

playGame();