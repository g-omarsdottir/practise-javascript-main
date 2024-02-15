//let message = "";
//let screenMessage = document.getElementById("screen-message")
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// Was supposed to get rid of error message node js: if (typeof document !== "undefined") {  let element = document.querySelector(".class-name"); }

//Username
let displayUsername = document.querySelector("test-username-input > span")
let getUsername = document.querySelector(".username-input");

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
// Outcome variables
let getOutcome = document.querySelector(".outcome > p");

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

// Store username
function storeUsername() {
localStorage.setItem(getUsername);
let displayUsername = localStorage.getItem(getUsername);
displayUsername.innerHTML = "This is your username" + getUsername;
console.log(getUsername);
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
  userScore++;
  getUserScore.innerHTML = userScore;
  getOutcome.innerHTML = "Your choice: " + userChoice + " beats " + "Computer's choice: " + computerChoice + ": " + winMessage;
}

function userTies(userChoice, computerChoice) {
  getOutcome.innerHTML = "Your choice: " + userChoice + " vs. " + "Computer's choice: " + computerChoice + ": " + tieMessage;
}

function userLoses(userChoice, computerChoice) {
  getOutcome.innerHTML = "Your choice: " + userChoice + " vs. " + "Computer's choice: " + computerChoice + ": " + loseMessage;
}

// Compare choices: deciding which choice wins
function compareChoices(userChoice) {
  // Randomly generated computer's choice
  function generateComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
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

