console.log("hello world!");

const choice = ["rock", "paper", "scissor"];

function playRound(playerSelection, computerSelection) {
  // your code here!
  console.log(playerSelection.toLowerCase() + " " + computerSelection);
}

function getComputerChoice() {
  let selection = choice[Math.floor(Math.random() * choice.length)];
  return selection;
}

const playerSelection = prompt(`please type "rock", "paper", or "scissor"`);
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
