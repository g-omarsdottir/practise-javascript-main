//let message = "";
//let screenMessage = document.getElementById("screen-message")

//const winMessage = "You win! Yay!";
//const tieMessage = "It's a tie! Everybody wins!";
//const loseMessage = "Yaiks, that plan backfired! Better luck next time!";

const choices = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerChoice());
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
function userChoice() {
    rock.addEventListener("click", function () {
        userChoice("rock");
      });
    
      paper.addEventListener("click", function () {
        userChoice("paper");
      });
    
      scissors.addEventListener("click", function () {
        userChoice("scissors");
      });
    
      lizard.addEventListener("click", function () {
        userChoice("lizard");
      });
    
      spock.addEventListener("click", function () {
        userChoice("spock");
      });
}

console.log(userChoice());

function playGame() {
  
  if (
    userChoice == "rock" &&
    (computerChoice == "scissors" || computerChoice == "lizard")
  ) 
    console.log("You win! Yay!");
   else if (computerChoice == "Rock") {
    console.log("It's a tie! Everybody wins!");
  } else {
    console.log("Yaiks, that plan backfired! Better luck next time!");
  }

  if (
    userChoice == "Paper" &&
    (computerChoice == "Rock" || computerChoice == "Spock")
  ) {
    console.log("winMessage");
  } else if (computerChoice == "Paper") {
    console.log("tieMessage");
  } else {
    console.log("testing paper");
  }

  if (
    userChoice == "Scissors" &&
    (computerChoice == "Paper" || computerChoice == Lizard)
  ) {
    console.log("winMessage");
  } else if (computerChoice == "Scissors") {
    console.log("tieMessage");
  } else {
    console.log("testing scissors");
  }

  if (
    userChoice == "Lizard" &&
    (computerChoice == "Paper" || computerChoice == "Spock")
  ) {
    console.log("winMessage");
  } else if (computerChoice == "Lizard") {
    console.log("tieMessage");
  } else {
    console.log("testing lizard");
  }

  if (
    userChoice == "Spock" &&
    (computerChoice == "Rock" || computerChoice == "Scissors")
  ) {
    console.log("winMessage");
  } else if (computerChoice == "Spock") {
    console.log("tieMessage");
  } else {
    console.log("testing spock");
  }
}


// id="username" for local storage