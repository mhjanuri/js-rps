console.log('Rock, Paper, Scissors');

const headlineDIV = document.querySelector('#headline')
const humanScoreDIV = document.querySelector('.human-score');
const computerScoreDIV = document.querySelector('.computer-score');
const choices = document.querySelectorAll('.choice');
const resultDIV = document.querySelector('#result');
const computerChoiceDIV = document.querySelector('#computer-choice');
const playAgainBTN = document.querySelector('#play-again');

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    // console.log(choices[randomIndex]);
    return choices[randomIndex];
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        resultDIV.innerHTML = `It's A TIE!`;
        computerChoiceDIV.innerHTML = `Computer choose ${computerChoice}`;
        // return console.log(`It's A TIE!`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        resultDIV.innerHTML = `You WIN! ${humanChoice} beats ${computerChoice}`;
        computerChoiceDIV.innerHTML = `Computer choose ${computerChoice}`;
        humanScore++;
        humanScoreDIV.innerHTML = `Human: ${humanScore}`;
        // return console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
    } else {
        resultDIV.innerHTML = `You LOSE! ${computerChoice} beats ${humanChoice}`;
        computerChoiceDIV.innerHTML = `Computer choose ${computerChoice}`;
        computerScore++;
        computerScoreDIV.innerHTML = `Computer: ${computerScore}`;
        // return console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
    }

    if (humanScore == 5) {
        headlineDIV.innerHTML = `YOU WIN THIS MATCH!!!`;
        document.getElementById('headline').style.color = 'green';
        document.getElementById('btn-play-again').style.display = 'block';
        disableOptions();
    } else if (computerScore == 5) {
        headlineDIV.innerHTML = `YOU LOSE THIS MATCH!!!`;
        document.getElementById('headline').style.color = 'red';
        document.getElementById('btn-play-again').style.display = 'block';
        disableOptions();
    }
}


function selectWeapon() {
    const playerWeapon = this.id;
    const computerWeapon = getComputerChoice();
    playRound(playerWeapon, computerWeapon)
}

const disableOptions = () => {
    choices.forEach((choice) => {
        choice.style.pointerEvents = 'none';
    });
}

const resetGame = () => {
    location.reload();
}

// Event listeners
choices.forEach((choice) => choice.addEventListener('click', selectWeapon));
playAgainBTN.addEventListener('click', resetGame)