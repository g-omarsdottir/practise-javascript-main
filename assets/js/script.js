//let message = "";
//let screenMessage = document.getElementById("screen-message")
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp

if (typeof document !== "undefined") {
  let element = document.querySelector(".class-name");
}

const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, that plan backfired! Better luck next time!";

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
// following variables are for add.Event.Listener("click")
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

function clickingButtons() {
  rock.addEventListener("click", function () {
    userChoice(choices[0]);
  });

  paper.addEventListener("click", function () {
    userChoice(choices[1]);
  });

  scissors.addEventListener("click", function () {
    userChoice(choices[2]);
  });

  lizard.addEventListener("click", function () {
    userChoice(choices[3]);
  });

  spock.addEventListener("click", function () {
    userChoice(choices[4]);
  });
}
clickingButtons();

// substitute console.log(winMessage, tieMessage, loseMessage) with function to increment and keep score later.

function playGame(userChoice) {
  // Randomly generated computer's choice
  function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
  }
  console.log(computerChoice());
  // Do I use "Rock", as in an item from the array choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"], or
  // do I use rock, as in the const rock = document.getElementById("rock")
  // for this function?
  if (userChoice === computerChoice) {
    return tieMessage;
  } else if 
    (userChoice == "rock" && (computerChoice == "scissors" || computerChoice == "lizard"))
    (userChoice == "paper" && (computerChoice == "rock" || computerChoice == "spock"))
    (userChoice == "scissors" && (computerChoice == "paper" || computerChoice == "lizard"))
    (userChoice == "lizard" && (computerChoice == "paper" || computerChoice == "spock"))
    (userChoice == "spock" (computerChoice == "scissors" || computerChoice == "rock"))
   {
    return winMessage;
  } else {
    return loseMessage;
  }
  console.log("You chose " + userChoice);
  console.log("Computer chose " + computerChoice());
}

  // Local storage for username, gemini, doesn't work:
  let username = localStorage.getItem("username")
  usernameInput = {
  document.getElementById("username-input")
  const username = usernameInput
  localStorage.setItem("username", username)
  const storedUsername = localStorage.getItem("username")
  console.log(username)
  }
  