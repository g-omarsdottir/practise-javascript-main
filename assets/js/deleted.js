// Deleted scenes
// Slack advice told me I needed to delete the const 
function getUserChoice(getUserChoice) {
    //Should I add const getComputerChoice = computerChoice() ?
    console.log("You chose " + getUserChoice);
    console.log("Computer chose " + computerChoice());
  }
// first attempt
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


function generateComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
// Slack advice told me I needed to delete the const
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
// second edit - total failure
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
      userChoice == paper &&
      (computerChoice == rock || computerChoice == spock)
    ) {
      console.log(winMessage);
    }
    if (userChoice == paper && computerChoice == paper) {
      console.log(tieMessage);
    }
    if (
      userChoice == paper &&
      (computerChoice == scissors || computerChoice == lizard)
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
