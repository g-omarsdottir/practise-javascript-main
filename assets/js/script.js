//let message = "";
//let screenMessage = document.getElementById("screen-message")
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp

if (typeof document !== "undefined") {
  let element = document.querySelector(".class-name");
}

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

function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerChoice = generateComputerChoice();

console.log(computerChoice);

function getUserChoice(userChoice) {
  console.log("You chose " + userChoice);
  console.log("Computer chose " + computerChoice);
}

function clickingButtons() {
  rock.addEventListener("click", function () {
    getUserChoice(choices[0]);
  });

  paper.addEventListener("click", function () {
    getUserChoice(choices[1]);
  });

  scissors.addEventListener("click", function () {
    getUserChoice(choices[2]);
  });

  lizard.addEventListener("click", function () {
    getUserChoice(choices[3]);
  });

  spock.addEventListener("click", function () {
    getUserChoice(choices[4]);
  });
}

clickingButtons();

// substitute console.log(winMessage, tieMessage, loseMessage) with function to increment and keep score later.

function playGame(userChoice, computerChoice) {
  // Do I use "Rock", as in an item from the array choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"], or
  // do I use rock, as in the const rock = document.getElementById("rock")
  // for this function?
  if (
    userChoice == rock &&
    (computerChoice == scissors || computerChoice == lizard)
  ) {
    console.log(winMessage);
  }
  if (userChoice == rock && computerChoice == rock) {
    console.log(tieMessage);
    if (
      userChoice == rock &&
      (computerChoice == paper || computerChoice == spock)
    ) {
      console.log(loseMessage);
    }

    if (
      userChoice == "Paper" &&
      (computerChoice == "Rock" || computerChoice == "Spock")
    ) {
      console.log(winMessage);
    }
    if (userChoice == "Paper" && computerChoice == "Paper") {
      console.log(tieMessage);
    }
    if (
      userChoice == "Paper" &&
      (computerChoice == "Scissors" || computerChoice == "Lizard")
    ) {
      console.log(loseMessage);
    }

    if (
      userChoice == "Scissors" &&
      (computerChoice == "Paper" || computerChoice == "Lizard")
    ) {
      console.log(winMessage);
    }
    if (userChoice == "Scissors" && computerChoice == "Scissors") {
      console.log(tieMessage);
    }
    if (
      userChoice == "Scissors" &&
      (computerChoice == "Rock" || computerChoice == "Spock")
    ) {
      console.log(loseMessage);
    }

    if (
      userChoice == "Lizard" &&
      (computerChoice == "Paper" || computerChoice == "Spock")
    ) {
      console.log(winMessage);
    }
    if (userChoice == "Lizard" && computerChoice == "Lizard") {
      console.log(tieMessage);
    }
    if (
      userChoice == "Lizard" &&
      (computerChoice == "Rock" || computerChoice == "Scissors")
    ) {
      console.log(loseMessage);
    }

    if (
      userChoice == "Spock" &&
      (computerChoice == "Rock" || computerChoice == "Scissors")
    ) {
      console.log(winMessage);
    }
    if (userChoice == "Spock" && computerChoice == "Spock") {
      console.log(tieMessage);
    }
    if (
      userChoice == "Spock" &&
      (computerChoice == "Rock" || computerChoice == "Scissors")
    ) {
      console.log(loseMessage);
    }
  }
}
playGame();
