const rockEl = document.querySelector("#rock-btn");
const paperEl = document.querySelector("#paper-btn");
const scissorEl = document.querySelector("#scissor-btn");

const winnerEl = document.querySelector("#winner");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

const choice = [
  {
    name: "rock",
    win: "rock beats scissor",
    lose: "rock lose paper",
  },

  {
    name: "paper",
    win: "paper beats rock",
    lose: "paper lose scissor",
  },

  {
    name: "scissor",
    win: "scissor beats paper",
    lose: "scissor lose rock",
  },
];

// let playerScore = 0;
// let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  // your code here!

  if (playerSelection === computerSelection) {
    console.log(
      "TIE!" +
        "\n" +
        "player: " +
        playerSelection +
        " ties with " +
        "computer: " +
        computerSelection
    );
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    console.log(
      "You Win!" +
        "\n" +
        "player: " +
        playerSelection +
        " beats " +
        "computer: " +
        computerSelection
    );
  } else {
    console.log(
      "You Lose!" +
        "\n" +
        "computer: " +
        computerSelection +
        " beats " +
        "player: " +
        playerSelection
    );
  }
}

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)].name;
}

function game() {
  for (let i = 0; i < 5; i++) {
    // let playerSelection = prompt(`please type "rock", "paper", or "scissor"`);
    let playerSelection = "rock";
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    console.log("-" + "\n" + "-" + "\n");
  }
}

game();
