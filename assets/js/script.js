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

function generateUserChoice() {
  rock.addEventListener("click", function () {
    playGame(choices[0]);
  });

  paper.addEventListener("click", function () {
    playGame(choices[1]);
  });

  scissors.addEventListener("click", function () {
    playGame(choices[2]);
  });

  lizard.addEventListener("click", function () {
    playGame(choices[3]);
  });

  spock.addEventListener("click", function () {
    playGame(choices[4]);
  });
}
generateUserChoice();

//function clickingButtons() {
  //const clickedButton = document.querySelector(".choice-button:active")
  //return clickedButton.id;
//} 
  //const userChoice = clickingButtons();

const userChoice = generateUserChoice();
//const gameResult = playGame(userChoice);

//console.log(gameResult);
// substitute console.log(winMessage, tieMessage, loseMessage) with function to increment and keep score later.

function playGame(userChoice) {
  // Randomly generated computer's choice
  function generateComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  const computerChoice = generateComputerChoice();
console.log(computerChoice);

  if (userChoice === computerChoice) {
    return tieMessage;
  } else if (
    userChoice === "Rock" &&
    (computerChoice === "Scissors" || computerChoice === "Lizard")
  )
    //||
    (userChoice === "Paper" &&
      (computerChoice === "Rock" || computerChoice === "Spock")) ||
      (userChoice === "Scissors" &&
        (computerChoice === "Paper" || computerChoice === "Lizard")) ||
      (userChoice === "Lizard" &&
        (computerChoice === "Paper" || computerChoice === "Spock")) ||
      (userChoice === "Spock" &&
        (computerChoice === "Scissors" || computerChoice === "Rock"));
  {
    return winMessage;
  } //else {
  //return loseMessage;}
}