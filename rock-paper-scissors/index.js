console.log("hello world!");

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

let playerScore = 0;
let computerScore = 0;

let i = 0;

// function playRound(playerSelection, computerSelection) {
//   // your code here!
//   console.log(playerSelection.toLowerCase() + " " + computerSelection);
//   if (playerSelection === computerSelection) {
//     console.log("TIE!");
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissor") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissor" && computerSelection === "paper")
//   ) {
//     console.log(
//       "You Win! " +
//         playerSelection.charAt(0).toUpperCase() +
//         playerSelection.slice(1) +
//         " beats " +
//         computerSelection.charAt(0).toUpperCase() +
//         computerSelection.slice(1)
//     );
//   } else
//     console.log(
//       "You Lose! " +
//         computerSelection.charAt(0).toUpperCase() +
//         computerSelection.slice(1) +
//         " beats " +
//         playerSelection.charAt(0).toUpperCase() +
//         playerSelection.slice(1)
//     );
// }

function playRound(playerSelection, computerSelection) {
  // your code here!

  console.log(playerSelection + " " + computerSelection.name);
}

// function playerSelection() {
//   prompt(`please type "rock", "paper", or "scissor"`);
// }

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)].name;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`please type "rock", "paper", or "scissor"`);

    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
      console.log("TIE!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissor") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissor" && computerSelection === "paper")
    ) {
      console.log(
        "You Win! " + playerSelection + " beats " + computerSelection
      );
    } else {
      console.log(
        "You Lose! " + computerSelection + " beats " + playerSelection
      );

      // console.log(playRound(playerSelection, computerSelection));
    }
  }
}

// const playerSelection = "rock";
// game();

// console.log(playRound(playerSelection, computerSelection));
// for (let i = 0; i < 5; i++) {
//   playRound(playerSelection, computerSelection);
// }

game();
