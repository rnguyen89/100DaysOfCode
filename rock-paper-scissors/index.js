const rockEl = document.querySelector("#rock-btn");
const paperEl = document.querySelector("#paper-btn");
const scissorEl = document.querySelector("#scissor-btn");

const winnerEl = document.querySelector("#winner");
const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");
const computerSelectionEl = document.querySelector("#computer-selection");

let playerScore = 0;
let computerScore = 0;

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

function renderPlayerScore(num) {
  num++;
  console.log(`Player score: ${num}`);
  playerScoreEl.textContent = `Player score: ${num}`;
}

function renderComputerScore(num) {
  num++;
  console.log(`Computer score: ${num}`);
  computerScoreEl.textContent = `Computer score: ${num}`;
}

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)].name;
}

rockEl.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  computerSelectionEl.textContent = computerSelection;

  if (computerSelection === "scissor") {
    console.log("Player wins!");
    console.log(renderPlayerScore(playerScore++));
  } else if (computerSelection === "paper") {
    console.log("Computer wins!");
    console.log(renderComputerScore(computerScore++));
  } else {
    console.log("TIE!");
  }
});

paperEl.addEventListener("click", function () {
  console.log(renderPlayerScore(playerScore++));
  console.log(renderComputerScore(computerScore++));
  computerSelectionEl.textContent = getComputerChoice();
});

scissorEl.addEventListener("click", function () {
  console.log(renderPlayerScore(playerScore++));
  console.log(renderComputerScore(computerScore++));
  computerSelectionEl.textContent = getComputerChoice();
});

// 1. create function that will run when selection is clicked
// 2. trigger the computer choice

// 3. compare player and computer choice to see who won
// 4. add point to winner
// 5. hide game container
// 6. create start btn to trigger game start
// 7. create game fn to track first to 5 wins
// 8. create final score fn to display results
// 9. create reset button that will wipe scores and reload to start screen
// 10. once features implemented, style the UI

//////////////////////////////////////////////////////

// this is V1 where we log each game to console

// function playRound(playerSelection, computerSelection) {
//   // your code here!

//   if (playerSelection === computerSelection) {
//     console.log(
//       "TIE!" +
//         "\n" +
//         "player: " +
//         playerSelection +
//         " ties with " +
//         "computer: " +
//         computerSelection
//     );
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissor") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissor" && computerSelection === "paper")
//   ) {
//     console.log(
//       "You Win!" +
//         "\n" +
//         "player: " +
//         playerSelection +
//         " beats " +
//         "computer: " +
//         computerSelection
//     );
//   } else {
//     console.log(
//       "You Lose!" +
//         "\n" +
//         "computer: " +
//         computerSelection +
//         " beats " +
//         "player: " +
//         playerSelection
//     );
//   }
// }

// function getComputerChoice() {
//   return choice[Math.floor(Math.random() * choice.length)].name;
// }

// function game() {
//   for (let i = 0; i < 5; i++) {
//     // let playerSelection = prompt(`please type "rock", "paper", or "scissor"`);
//     let playerSelection = "rock";
//     const computerSelection = getComputerChoice();

//     playRound(playerSelection, computerSelection);

//     console.log("-" + "\n" + "-" + "\n");
//   }
// }

// game();

//////////////////////////////////////////////////////
