console.log('Hello, World!');

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(choices[randomIndex]);
    return choices[randomIndex];
}

// console.log(getComputerChoice());

const getHumanChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let humanChoice = prompt('Enter your choice (rock, paper, scissors): ').toLowerCase();
    while (choices.includes(humanChoice) == false) {
        humanChoice = prompt('Try Again!!! Enter your choice (rock, paper, scissors): ').toLowerCase()
    }
    console.log(humanChoice); 
    return humanChoice;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return console.log(`It's A TIE!`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')) {

        return console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
    } else {

        return console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
    }
}

// console.log(playRound());

playRound(getHumanChoice(), getComputerChoice())

