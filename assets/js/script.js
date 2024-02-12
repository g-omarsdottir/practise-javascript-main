//let message = "";
//let screenMessage = document.getElementById("screen-message")
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// Following 3 const are more for practise:
const winMessage = "You win! Yay!";
const tieMessage = "It's a tie! Everybody wins!";
const loseMessage = "Yaiks, that plan backfired! Better luck next time!";

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
// following const are for add.Event.Listener("click")
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerChoice());

function userChoice(getUserChoice) {
  //Should I add const getComputerChoice = computerChoice() ?
  console.log("You chose " + getUserChoice);
  console.log("Computer chose " + computerChoice());
}

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
