console.log('Hello, World!');

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

const getHumanChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let humanChoice = prompt('Enter your choice (rock, paper, scissors): ').toLowerCase();
    while (choices.includes(humanChoice) == false) {
        humanChoice = prompt('Try Again!!! Enter your choice (rock, paper, scissors): ').toLowerCase()
    }
    return humanChoice
    
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, ComputerChoice) => {
    if (humanChoice === ComputerChoice) {
        return 
    } else {
        
    }
}

