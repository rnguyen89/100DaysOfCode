console.log("hello world!");

const choice = ["rock", "paper", "scissor"];

let i = 0;

function playRound(playerSelection, computerSelection) {
  // your code here!
  console.log(playerSelection.toLowerCase() + " " + computerSelection);
  if (playerSelection === computerSelection) {
    console.log("TIE");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    console.log("You win");
  } else console.log("YOU LOSE!");
}

function getComputerChoice() {
  let selection = choice[Math.floor(Math.random() * choice.length)];
  return selection;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    // prompt("type something");
  }
}

const playerSelection = prompt(`please type "rock", "paper", or "scissor"`);
// const playerSelection = "rock";
const computerSelection = getComputerChoice();
game();

// console.log(playRound(playerSelection, computerSelection));
