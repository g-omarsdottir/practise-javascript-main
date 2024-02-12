// Deleted scenes

function getUserChoice(getUserChoice) {
    //Should I add const getComputerChoice = computerChoice() ?
    console.log("You chose " + getUserChoice);
    console.log("Computer chose " + computerChoice());
  }

function playGame() {
    // Do I use "Rock", as in an item from the array choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"], or
    // do I use rock, as in the const rock = document.getElementById("rock")
    // for this function?
    if (
      userChoice == rock &&
      (computerChoice == scissors || computerChoice == lizard)
    )
      console.log(winMessage);
    else if (computerChoice == rock) {
      console.log(tieMessage);
    } else {
      console.log(loseMessage);
    }
  
    if (
      userChoice == "Paper" &&
      (computerChoice == "Rock" || computerChoice == "Spock")
    ) {
      console.log(winMessage);
    } else if (computerChoice == "Paper") {
      console.log(tieMessage);
    } else {
      console.log(loseMessage);
    }
  
    if (
      userChoice == "Scissors" &&
      (computerChoice == "Paper" || computerChoice == "Lizard")
    ) {
      console.log(winMessage);
    } else if (computerChoice == "Scissors") {
      console.log(tieMessage);
    } else {
      console.log(loseMessage);
    }
  
    if (
      userChoice == "Lizard" &&
      (computerChoice == "Paper" || computerChoice == "Spock")
    ) {
      console.log(winMessage);
    } else if (computerChoice == "Lizard") {
      console.log(tieMessage);
    } else {
      console.log(loseMessage);
    }
  
    if (
      userChoice == "Spock" &&
      (computerChoice == "Rock" || computerChoice == "Scissors")
    ) {
      console.log(winMessage);
    } else if (computerChoice == "Spock") {
      console.log(tieMessage);
    } else {
      console.log(loseMessage);
    }
  }
  
  playGame();


  // Local storage for username, gemini:
let username = localStorage.getItem("username")
usernameInput = {
document.getElementById("username-input")
const username = usernameInput
localStorage.setItem("username", username)
const storedUsername = localStorage.getItem("username")
console.log(username)
}
