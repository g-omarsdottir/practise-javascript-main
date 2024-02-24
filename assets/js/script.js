//Username


// Messages for results / user feedback variables
const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, that plan backfired! Better luck next time!";
const rockVsScissors = "Rock crushes Scissors";
const rockVsLizward = "Rock crushes Lizard";
const paperVsRock = "Paper covers Rock";
const paperVsSpock = "Paper disproves Spock";
const scissorsVsPaper = "Scissors cut Paper";
const scissorsVsLizard = "Scissors decapitate Lizard";
const lizardVsSpock = "Lizard poisons Spock";
const lizardVsPaper = "Lizard eats Paper";
const spockVsScissors = "Spock smashes Scissors";
const spockVsRock = "Spock vaporizes Rock";

//done
// Scoreboard variables
let userScore = 0;
let userScoreElement = document.getElementById("user-score");
let computerScore = 0;
let computerScoreElement = document.getElementById("computer-score");

//done
// Choice-buttons variables
const choicesArray = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Outcome variables
let getOutcome = document.getElementById("outcome");

//done
// Variables for user feedback to game status for improved UX.
// Apply method (document.getElementByID) to retrieve references for elements from the DOM
//  for functions to display the updated choices and results in the DOM.
// Using let because  choices and results are dynamic.
let userChoiceElement = document.getElementById("user-choice");
let computerChoiceElement = document.getElementById("computer-choice");
let resultElement = document.getElementById("result");
// done
// Event listeners for choice-buttons - a method to retrieve references for button elements from the DOM (document.getElementByID) and
//  add button references to event listener method (addEventListeners).
//When buttons are clicked, the function compareChoices, the game logic, is called.
//The string for each choice button from the array choices is passed as an argument to the function compareChoices.
document.getElementById("rock").addEventListener("click", function () {
  compareChoices("Rock");
});
// done
document.getElementById("paper").addEventListener("click", function () {
  compareChoices("Paper");
});
// done
document.getElementById("scissors").addEventListener("click", function () {
  compareChoices("Scissors");
});
// done
document.getElementById("lizard").addEventListener("click", function () {
  compareChoices("Lizard");
});
// done
document.getElementById("spock").addEventListener("click", function () {
  compareChoices("Spock");
});

//to-do
// Get the username

//Below is https://www.w3schools.com/jsref/prop_text_value.asp
// Store username

/*Consistency: Using addEventListener consistently throughout your code ensures a more consistent and predictable approach to event handling.

Browser Compatibility: While onclick is widely supported, addEventListener has broader compatibility across modern browsers.
*/

// Cache element references for performance
const usernameInput = document.getElementById("username");
const collectedUsernameElement = document.getElementById("collected-username"); 

// Function to display collected username and handle storage
function displayUsername() {
const username = usernameInput.value;

localStorage.setItem(username, usernameInput.value); // To store the username in local storage
collectedUsernameElement.innerHTML = localStorage.getItem(username); // To display username in DOM in html element with id="collected-username"
}

// Event listener when user clicks submit username
document.getElementById("submit").addEventListener("click", function () {
  if (usernameInput.value.length > 10) {
    alert("A bit over the top, don't you think? Try again and use less than 10 characters."); // less than 1 character is handled by required in the html input field for username.
    return false; // to prevent submission if invalid
  } 

  collectUsername();
});

// Function to collect and display username after validation
function collectUsername() {
  displayUsername(); // Call displayUsername for final display and storage
  console.log("Username collected:", usernameInput.value);
}


//function storeUsername(){
//const username = prompt("Enter Username", "");


//username = localStorage.getItem(collectUsername);

//console.log("This is your username" + username);
//}

//document.querySelector(.enter-game-button).addEventListener("click", function()) {
// Unhide game buttons
//}

// done
function generateComputerChoice() {
  return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

//done
// Function to update the displayed user and computer choices in the DOM
//  to increase UX
function updateChoiceElements(
  userChoiceElement,
  computerChoiceElement,
  userChoice,
  computerChoice
) {
  userChoiceElement.innerHTML = "Your choice: " + userChoice;
  computerChoiceElement.innerHTML = "Computer choice: " + computerChoice;
}

// done
// Functions to increment scores
function incrementUserScore() {
  userScore++;
  updateScoreElement(userScoreElement, userScore);
}

//done
function incrementComputerScore() {
  computerScore++;
  updateScoreElement(computerScoreElement, computerScore);
}

//done
// Function to display updated scores in the DOM
function updateScoreElement(element, score) {
  element.innerHTML = score;
}

function updateResultElement(resultElement, result) {
  resultElement.innerHTML = result;
}

//function showOutcome (displayUserChoice) {
//if (userChoice === "Rock" && computerChoice === "Paper") return
//displayUserChoice.innerHTML = rockVsScissors;
//}

// Remember to include bug . see README, Bugs: Forgot to close parenthesis (see below as ### heading)

// Function for when the outcome of comparing the choices is that user wins to increment user's score
function userWins(userChoice, computerChoice) {
  incrementUserScore();
  updateResultElement(result, winMessage);
  getOutcome.innerHTML =
    "Your choice: " +
    userChoice +
    " beats " +
    "Computer's choice: " +
    computerChoice +
    ": " +
    winMessage;
}

function userTies(userChoice, computerChoice) {
  updateResultElement(result, tieMessage);
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
  updateResultElement(result, loseMessage);
  getOutcome.innerHTML =
    "Your choice: " +
    userChoice +
    " vs. " +
    "Computer's choice: " +
    computerChoice +
    ": " +
    loseMessage;
}

//done
// Compare choices: deciding which choice wins
function compareChoices(userChoice) {
  // Randomly generated computer's choice
  let computerChoice = generateComputerChoice();
  updateChoiceElements(
    userChoiceElement,
    computerChoiceElement,
    userChoice,
    computerChoice
  );
  if (userChoice === computerChoice) {
    userTies(userChoice, computerChoice);
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
  } else {
    userLoses(userChoice, computerChoice);
  }
}
