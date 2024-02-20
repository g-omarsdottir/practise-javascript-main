// Was supposed to get rid of error message node js: if (typeof document !== "undefined") {  let element = document.querySelector(".class-name"); }

//Username
let displayUsername = document.querySelector("test-username-input > span");
let getUsername = document.querySelector(".username-input");

// Messages for results / user feedback variables
const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, that plan backfired! Better luck next time!";

// Scoreboard variables
let userScore = 0;
let getUserScore = document.getElementById("user-score");
let computerScore = 0;
let getComputerScore = document.getElementById("computer-score");

// Choice-buttons variables
const choicesArray = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
// following variables are for add.Event.Listener("click")
const rockVar = document.getElementById("rock");
const paperVar = document.getElementById("paper");
const scissorsVar = document.getElementById("scissors");
const lizardVar = document.getElementById("lizard");
const spockVar = document.getElementById("spock");
const choiceButtons = (rockVar, paperVar, scissorsVar, lizardVar, spockVar);
// Outcome variables
let getOutcome = document.getElementById("outcome");
let displayUserChoiceMessage = document.querySelector(".display-user-choice-message>p");
let displayUserChoice = document.querySelector(".display-user-choice>p");
//displayUserChoice.innerText = displayUserChoice;
let displayComputerChoiceMessage = document.querySelector(".display-computer-choice-message>p");
let displayComputerChoice = document.querySelector(".display-computer-choice>p");
//displayComputerChoice.innerHTML = displayComputerChoice;

//let displayUserChoice = document.getElementById("display-user-choise");
//let getDisplayComputerChoice = document.getElementById("display-computer-choice");

// Event listeners for choice-buttons
rockVar.addEventListener("click", function () {
  compareChoices(choicesArray[0]);
});

paperVar.addEventListener("click", function () {
  compareChoices(choicesArray[1]);
});

scissorsVar.addEventListener("click", function () {
  compareChoices(choicesArray[2]);
});

lizardVar.addEventListener("click", function () {
  compareChoices(choicesArray[3]);
});

spockVar.addEventListener("click", function () {
  compareChoices(choicesArray[4]);
});

// Store username
function storeUsername() {
  localStorage.setItem(user, value);
  let displayUsername = localStorage.getItem(getUsername);
  displayUsername.innerHTML = "This is your username" + getUsername;
  console.log(getUsername);
}

function generateComputerChoice() {
  return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

// Increment Scores
function incrementUserScore() {
  userScore++;
  getUserScore.innerHTML = userScore;
}

function incrementComputerScore() {
  computerScore++;
  getComputerScore.innerHTML = computerScore;
}

// Feedback to user while playing. Replaced by get.Outcome.innerHTML and displayed on browser.
//function showResult(message) {
// console.log("Show result: " + message);
//}

//Function to show actual reason for win/tie/lose
//function showActualResult(option) {
//if (option === "Rock") return
//}

// Function for when the outcome of comparing the choices is that user wins to increment user's score
function userWins(userChoice, computerChoice) {
  incrementUserScore();
  getOutcome.innerHTML =
    "Your choice: " +
    userChoice +
    " beats " +
    "Computer's choice: " +
    computerChoice +
    ": " +
    winMessage;
    displayUserChoiceMessage.innerHTML = "Your choice:" + userChoice;
    displayUserChoice.innerHTML = userChoice;
    displayComputerChoiceMessage.innerHTML = "Computer's choice:";
    displayComputerChoice.innerHTML = computerChoice;
}

function userTies(userChoice, computerChoice) {
  getOutcome.innerHTML =
    "Your choice: " +
    userChoice +
    " vs. " +
    "Computer's choice: " +
    computerChoice +
    ": " +
    tieMessage;
}

function userLoses(userChoice, computerChoice) {
  incrementComputerScore();
  getOutcome.innerHTML =
    "Your choice: " +
    userChoice +
    " vs. " +
    "Computer's choice: " +
    computerChoice +
    ": " +
    loseMessage;
}

// Compare choices: deciding which choice wins
function compareChoices(userChoice) {
  // Randomly generated computer's choice
  let computerChoice = generateComputerChoice();
  //console.log("User's choice: " + userChoice);
  //console.log("Computer's choice: " + computerChoice);
  if (userChoice === computerChoice) {
    userTies(userChoice, computerChoice);
    //showResult(tieMessage);
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
    userWins(userChoice, computerChoice);
    //showResult(winMessage);
  } else {
    userLoses(userChoice, computerChoice);
    //showResult(loseMessage);
  }
}

//if (userScore === 10) {
//window.location.assign("end.html")
//}

//while (userScore < 11) {
//compareChoices();
//}
