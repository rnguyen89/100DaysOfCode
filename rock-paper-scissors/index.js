console.log("hello world!");

const choice = ["rock", "paper", "scissor"];
let selection = "";

function playRound(playerSelection, computerSelection) {
  // your code here!
  console.log(playerSelection.toLowerCase() + " " + computerSelection);
  if (playerSelection === computerSelection) console.log("TIE");
  if (playerSelection === "rock" && computerSelection === "scissor")
    console.log("YOU WIN!");
  if (playerSelection === "rock" && computerSelection === "paper")
    console.log("YOU LOSE!");
}

function getComputerChoice() {
  selection = choice[Math.floor(Math.random() * choice.length)];
  return selection;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    console.log(computerSelection);
  }
}

// const playerSelection = prompt(`please type "rock", "paper", or "scissor"`);
const playerSelection = "rock";
const computerSelection = getComputerChoice();
game();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
