const rockEl = document.querySelector("#rock-btn");
const paperEl = document.querySelector("#paper-btn");
const scissorEl = document.querySelector("#scissor-btn");

const winnerEl = document.querySelector("#winner");
const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");
const computerSelectionEl = document.querySelector("#computer-selection");
const playerSelectionEl = document.querySelector("#player-selection");

const resetEl = document.querySelector("#reset-game");

// reset should promp modal to show who won the game
// modal should also include button to reset the game
// make modal in HTML and hide or dynamically create it?
// if dynamic, we will have to render it in the IF fn for render player and computer score

resetEl.addEventListener("click", function () {
  window.location.reload();
});

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

  if (num === 5) {
    alert("player wins!");
    window.location.reload();
  }
}

function renderComputerScore(num) {
  num++;
  console.log(`Computer score: ${num}`);
  computerScoreEl.textContent = `Computer score: ${num}`;

  if (num === 5) {
    alert("computer wins!");
    window.location.reload();
  }
}

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)].name;
}

rockEl.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  let playerSelection = "you chose rock";

  playerSelectionEl.textContent = playerSelection;
  computerSelectionEl.textContent = computerSelection;

  console.log(`Computer picked: ${computerSelection}`);

  if (computerSelection === "scissor") {
    console.log("Player wins!");
    console.log(choice[0].win);
    console.log(renderPlayerScore(playerScore++));
  } else if (computerSelection === "paper") {
    console.log("Computer wins!");
    console.log(choice[0].lose);
    console.log(renderComputerScore(computerScore++));
  } else {
    console.log("TIE!");
  }
});

paperEl.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  let playerSelection = "you chose paper";
  console.log(`Computer picked: ${computerSelection}`);

  playerSelectionEl.textContent = playerSelection;
  // computerSelectionEl.textContent = getComputerChoice();
  computerSelectionEl.textContent = computerSelection;

  if (computerSelection === "rock") {
    console.log("Player wins!");
    console.log(choice[1].win);

    console.log(renderPlayerScore(playerScore++));
  } else if (computerSelection === "scissor") {
    console.log("Computer wins!");
    console.log(choice[1].lose);

    console.log(renderComputerScore(computerScore++));
  } else {
    console.log("TIE!");
  }
});

scissorEl.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  let playerSelection = "you chose scissors";
  console.log(`Computer picked: ${computerSelection}`);

  playerSelectionEl.textContent = playerSelection;
  // computerSelectionEl.textContent = getComputerChoice();
  computerSelectionEl.textContent = computerSelection;

  if (computerSelection === "paper") {
    console.log("Player wins!");
    console.log(choice[2].win);

    console.log(renderPlayerScore(playerScore++));
  } else if (computerSelection === "rock") {
    console.log("Computer wins!");
    console.log(choice[2].lose);
    console.log(renderComputerScore(computerScore++));
  } else {
    console.log("TIE!");
  }
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
