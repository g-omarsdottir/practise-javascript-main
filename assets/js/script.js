// Game variables array, possible choices for playing game
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
// Variables for user feedback to game status to improve UX.
// Apply method (document.getElementByID) to retrieve references for elements from the DOM 
//  for functions to update the displayed variables in the DOM.
// Using let because the choices and results are dynamic.
let userChoiceElement = document.getElementById("user-choice");
let computerChoiceElement = document.getElementById("computer-choice");
let resultElement = document.getElementById("result");
// Detailled result feedback referencing game rules. Constant variable because game rules are unchangeable.
const winConditions = {
  Rock: { Scissors: "crushes", Lizard: "crushes" },
  Paper: { Rock: "covers", Spock: "disproves" },
  Scissors: { Paper: "cuts", Lizard: "decapitates" },
  Lizard: { Spock: "poisons", Paper: "eats" },
  Spock: { Scissors: "smashes", Rock: "vaporizes" }
};

// Scoreboard variables for functions to increment scores and display updated scores in the DOM
// Default scores at game start are 0
let userScore = 0;
let userScoreElement = document.getElementById("user-score");
let computerScore = 0;
let computerScoreElement = document.getElementById("computer-score");
 
// Flow of the game: variables for displaying or hiding sections according to logical flow of the game.
let landingSection = document.getElementById("landing-section");
let gameSection = document.getElementById("game-section");
let completedSection = document.getElementById("completed-section");

// Display landing page, hide game section and game completed section as default. Use JavaScript to handle both hiding and displaying for better overview. 
gameSection.style.display = "none";
completedSection.style.display = "none";

// Event listeners for choice-buttons - a method to retrieve references for button elements from the DOM (document.getElementByID) and 
//  add button references to event listener method (addEventListeners). 
// When buttons are clicked, the function compareChoices, the game logic, is called.
// The string for each choice button from the array choices is passed as an argument to the function compareChoices.
document.getElementById("rock").addEventListener("click", function () {
    compareChoices("Rock");
  });
  
  document.getElementById("paper").addEventListener("click", function () {
    compareChoices("Paper");
  });
  
  document.getElementById("scissors").addEventListener("click", function () {
    compareChoices("Scissors");
  });
  
  document.getElementById("lizard").addEventListener("click", function () {
    compareChoices("Lizard");
  });
  
  document.getElementById("spock").addEventListener("click", function () {
    compareChoices("Spock");
  });

  // To-do: placement
  // Section for collecting username. To-do: place variables with other variables when code successfully completed.
  //Cache element references for performance
  let usernameInput = document.getElementById("username-input"); // Represents the raw input (temporary) value of input element (subject to change as user types). For initial validation of allowed character limit. Is passed as argument to function displayUsername to store and display in DOM.
let username = localStorage.getItem(usernameInput);  
//let username = document.getElementById("username"); // Stores the validated username for function displayUsername.
  //username.textContent = localStorage.getItem(username); // To display the most recent stored value of username in DOM. To-do: move in function to display message at game completion.
let usernameForm = document.getElementById("username-form"); // done

//done
  // Event listener when user clicks button "submit username". To validate username and to trigger the DOM display and storage of the validated username.
  usernameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (usernameInput.value.length > 10 || usernameInput.value.length < 1) {
      alert("Please choose a username between 1 and 10 characters.");
      //clear input field if invalid
      usernameInput.value = "";
      return false; // to prevent submission if username is invalid (more than 10 characters)
      // less than 1 character is also handled with the required attribute in the html input field for username.
    } else {
    collectUsername();
    setTimeout(() => {
      playGame();
    }, 500);
    }
  });

// Function for DOM display and manage local storage of collected username in DOM.
function collectUsername() {
  localStorage.setItem(username, usernameInput.value); // To store the username in local storage
  }


function playGame(){
  landingSection.style.display = "none";
  gameSection.style.display = "block";
  completedSection.style.display = "none";
  console.log("play game function activated");
}

// Generate random computer choice
function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Functions to increment scores
function incrementUserScore() {
  userScore++;
  handleScores(userScoreElement, userScore);
}

function incrementComputerScore() {
  computerScore++;
  handleScores(computerScoreElement, computerScore);
}

// To-do:
// Function to update the displayed score in the DOM. Using "element" provides flexibility and concise code, updating both user and computer score at once.
function handleScores(element, score) {
  element.innerHTML = score;
  if (score === 10) {
    setTimeout(() => {
      completedGame();
      //completedSection.style.display = "block";
      //gameSection.style.display = "none";
      }, 300);
  }
}

// Function to update the displayed user and computer choices in the DOM.
function updateChoiceElements(userChoiceElement, computerChoiceElement, userChoice, computerChoice) {
  userChoiceElement.innerHTML = "Your choice:" + "<br>" + userChoice;
  computerChoiceElement.innerHTML = "Computer choice:" + "<br>"  + computerChoice;
}

// Function to update the displayed game result (win, lose, tie) in the DOM.
function updateResultElement(resultElement, result) {
  resultElement.innerHTML = result;
}

// Functions for actions depending on results of compareChoices
function userWins(userChoice, computerChoice) {
  incrementUserScore();  
  const reason = winConditions[userChoice][computerChoice]; 
  const resultMessageWins = userChoice + " " + reason + " " + computerChoice + "!" + "<br>" + " You win!" ;
  updateResultElement(result, resultMessageWins);
}

function userTies(userChoice, computerChoice) {
  const resultMessageTies = userChoice + " " + "equals" + " " + computerChoice + "!" + "<br>" + "It's a tie! Everybody wins!"
  updateResultElement(result, resultMessageTies);
}

function userLoses(userChoice, computerChoice) {
    incrementComputerScore();
    const reason = winConditions[computerChoice][userChoice]; // Note the switched order
    const resultMessageLoses = computerChoice + " " + reason + " " + userChoice + "!" + "<br>" + " You lose!";
    updateResultElement(result, resultMessageLoses);
}

// Function to compare choices based on game rules
function compareChoices(userChoice) {
  let computerChoice = generateComputerChoice();
  updateChoiceElements(userChoiceElement, computerChoiceElement, userChoice, computerChoice);
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



function resetGame() {
  // Scores and display of scores in the DOM
  userScore = 0;
  computerScore = 0;
  computerScoreElement.innerHTML = 0;
  userScoreElement.innerHTML = 0;
  // Display of choices and game results of each round in the DOM
  userChoiceElement.innerHTML = "";
  computerChoiceElement.innerHTML = "";
  resultElement.innerHTML = "";
  gameSection.style.display = "none";
}

 // Event listener for play again button - seems to be working
  document.getElementById("play-again").addEventListener("click", function () {
    resetGame();
     playGame();  
    });

// To-do
let finalResultMessage = document.getElementById("final-result");
let finalUserScore = document.getElementById("final-score");

function completedGame() {
    landingSection.style.display = "none";
    gameSection.style.display = "none";
    completedSection.style.display = "block";
  if (userScore === 10) {
    finalUserScore.innerHTML = "Your score: " + userScore;
    finalResultMessage.innerHTML = "Congratulations, " + localStorage.getItem(username) + ", you win!"
  } else {
    finalUserScore.innerHTML = "Your score: " + userScore;
    finalResultMessage.innerHTML = "Too bad, " + localStorage.getItem(username) + ", you lost this time around." + "<br>" + "Better luck next time!"
  }
  console.log("completetGame");
}

let usernameDisplay = localStorage.getItem(username);


/*
With this, the vorletzte Username is displayed:

function completedGame() {
    landingSection.style.display = "none";
    gameSection.style.display = "none";
    completedSection.style.display = "block";
  if (userScore === 10) {
    finalUserScore.innerHTML = "Your score: " + userScore;
    finalResultMessage.innerHTML = "Congratulations, " + usernameDisplay + ", you win!"
  } else {
    finalUserScore.innerHTML = "Your score: " + userScore;
    finalResultMessage.innerHTML = "Too bad, " + usernameDisplay + ", you lost this time around." + "<br>" + "Better luck next time!"
  }
  console.log("completetGame");
}

let usernameDisplay = localStorage.getItem(username);
 

function updateFinalResultElement 

function updateResultElement(resultElement, result) {
  resultElement.innerHTML = result;
}
let resultElement = document.getElementById("result");

*/


