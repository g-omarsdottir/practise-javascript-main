//let message = "";
//let screenMessage = document.getElementById("screen-message")
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp

if (typeof document !== "undefined") {
  let element = document.querySelector(".class-name");
}
// Messages for results / user feedback
const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, that plan backfired! Better luck next time!";

// Scoreboard variables
let userScore = 0;
let getUserScore = document.getElementById("user-score")

// Choice-buttons variables
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
// following variables are for add.Event.Listener("click")
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

let displayUserChoice = "";
let getDisplayUserChoice = document.getElementById("display-user-choise");

//let displayUserChoice = document.getElementById("display-user-choise");
//let getDisplayComputerChoice = document.getElementById("display-computer-choice");

// Event listeners for choice-buttons
rock.addEventListener("click", function () {
  compareChoices(choices[0]);
});

paper.addEventListener("click", function () {
  compareChoices(choices[1]);
});

scissors.addEventListener("click", function () {
  compareChoices(choices[2]);
});

lizard.addEventListener("click", function () {
  compareChoices(choices[3]);
});

spock.addEventListener("click", function () {
  compareChoices(choices[4]);
});

// Feedback to user while playing. To-do: display on screen, not just on console. 
function showResult(message) {
  console.log("Show result: " + message);
}

// Function for when the outcome of comparing the choices is that user wins to increment user's score
function userWins () {
  userScore++;
  getUserScore.innerHTML = userScore;
}

// Compare choices: deciding which choice wins
function compareChoices(userChoice) {
  // Randomly generated computer's choice
  function generateComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  let computerChoice = generateComputerChoice();
  console.log("Computer's choice: " + computerChoice);
  console.log("User's choice: " + userChoice);
  if (userChoice === computerChoice) {
    showResult(tieMessage);
  } else if (
    (userChoice === "Rock" &&
      (computerChoice === "Scissors" || computerChoice === "Lizard")) ||
    (userChoice === "Paper" &&
      (computerChoice === "Rock" || computerChoice === "Spock")) ||
    (userChoice === "Scissors" &&
      (computerChoice === "Paper" || computerChoice === "Lizard")) ||
    (userChoice === "Lizard" &&
      (computerChoice === "Paper" || computerChoice === "Spock")) ||
    (userChoice === "Spock" &&
      (computerChoice === "Scissors" || computerChoice === "Rock"))
  ) {
    userWins();
    showResult(winMessage);
  } else {
    showResult(loseMessage);
  }
}

// Scoreboard functions, incrementing user-score

