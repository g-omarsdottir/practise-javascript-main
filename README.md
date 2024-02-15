# Rock, Paper, Scissors, Lizard, Spock, Game
## Introduction
The game is an extended version of the well known Rock, Paper, Scissors game, just with an added twist. he game was originally created by Sam Kass with Karen Brylan, who intruduced two furhter variables into the game: 
a lizard and the character from the renowned TV series Star Trek, Spock. Even though it certainly gives the game a deeper meaning to be familiar with the character Spock and presumably makes it easier in the beginning to memorize the rules to play, it is not necessary to be able to play and enjoy the game.
The game was displayed on the TV sitcom The Big Bang Theory, after which it gained popularity.

How to play it: 
Both players choose one variable to place their bets similtaniously. When played in real life, the player's depict their choices by handsignals that each immitate the respective variable they represent, e.g. a fist represents a rock, the index and middle fingers form scissors, and so on, as depicted on the buttons in this javascript game. In this particular game, the user is playing against the computer, which is a randomly generated variable. This makes it impossible for the user to develop a strategy to foresee the oponont's choice based on his or her previous behaviour.

Rules: The winner is decided upon 
Each variable can beat or be beaten by two other variables as follows:
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors 

## Project and Site Owner Goals
The goal is to create an easy and enjoyable game that requires no previous knowledge.

## User Experience

### Target Audience
People who enjoy playing online games 
Fans of the sitcom The Big Bang Theory

### First Time Visitors Goals
To play a game for fun.
To play a familiar game that introduces additional variables and to enjoy learning new things.
To be able to easily understand and follow rules of the game.
To get instant feedback when playing the game because it doesn't require investing a lot of time to play or to plan a game strategy.

### Returning Visitors Goals
To have fun playing the game without having to read and understand a lot of rules.

### Frequent Visitors Goals
To play a game to pass time in a fun way and/or to clear the head between long working sessions.
To see if it's possible to create a strategy to win randomly generated play moves of the computer.

## Design

### Imagery

### Colors

### Fonts

## Features
The website is responsive on all device sizes.
The user lands on landing page. After entering a username and submitting it, the user is automatically forwarded to the game page. After completing the game, the user has the option to return to game page to play again. The user does not have the option to navigate between the pages.
Buttons have pseuodelinks to give users feedback when mouse is hovered over the buttons by increasing fontsize and slight change of color, as well as when a button is clicked by increasing fontsize and changing colors even more.

### Interactive Elements
Input element to enter a username chosen by the user. The user cannot move forward to playing game without entering a username. 
Buttons to choose which variable the user wants to play.
Return button to return to game and play another game.
A link to access the rules again, which open in a new window / OR blend rules in and out when clicked and then return to game button (To-do!) so that the game can resume.

### General Features of Each Page
Landing page
Game page
End screen "thank you [username] ..."

## Accessibility 

## Technology Used

### Languages Used
HTML5
CSS3
Markdown for this README

ddddd

## Bugs

### Solved Bugs
const vs. let: because computerChoice is randomly generated and never the same, it should be let and not const.
const computerChoice = generateComputerChoice(); changed to let computerChoice = generateComputerChoice();

Forgot to close parenthesis (see below as ### heading). I was stuck on this logic for ages, but glad I didn't give up.
function compareChoices(userChoice) {
  // Randomly generated computer's choice
  function generateComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  let computerChoice = generateComputerChoice();
  console.log("Computer's choice: " + computerChoice);
  console.log("User's choice: " + userChoice);
  if (userChoice === computerChoice) {
    showResult(tieMessage);
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
  ### ) {
    userWins();
    showResult(winMessage);
  } else {
    showResult(loseMessage);
  }
}



## Credits
randomly generated computer's choice: https://timonweb.com/javascript/how-to-get-a-random-value-from-a-javascript-array/ 
Tutorial for inspiration: https://www.youtube.com/watch?v=jaVNP3nIAv0