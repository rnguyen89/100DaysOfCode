console.log("hello world!");

const choice = ["rock", "paper", "scissor"];

let i = 0;

function playRound(playerSelection, computerSelection) {
  // your code here!
  console.log(playerSelection.toLowerCase() + " " + computerSelection);
  if (playerSelection === computerSelection) {
    console.log("TIE!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    console.log(
      "You Win! " +
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1) +
        " beats " +
        computerSelection.charAt(0).toUpperCase() +
        computerSelection.slice(1)
    );
  } else
    console.log(
      "You Lose! " +
        computerSelection.charAt(0).toUpperCase() +
        computerSelection.slice(1) +
        " beats " +
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1)
    );
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
