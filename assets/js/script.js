const choices = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];

// const userChoice()
const winMessage = "You win! Yay!"
const tieMessage = "It's a tie! Everybody wins!"
const loseMessage = "Yaiks, that plan backfired! Better luck next time!"

function computerChoice() {
    choices[Math.floor(Math.random() * choices.lenght)]
    console.log(computerChoice)
}

function playGame() {
if (userChoice == "Rock" && (computerChoice == "Scissors" || computerChoice == "Lizard")) {
console.log("winMessage")
} else if (computerChoice == "Rock") {
console.log("tieMessage")
} else {
console.log("loseMessage")
}

if (userChoice == "Paper" && (computerChoice == "Rock" || computerChoice == "Spock")) {
    console.log("winMessage")
    } else if (computerChoice == "Paper") {
    console.log("tieMessage")
    } else {
    console.log("loseMessage")
    }

if (userChoice == "Scissors" && (computerChoice == "Paper" || computerChoice == Lizard)) {
console.log("winMessage")
} else if (computerChoice == "Scissors"){
        console.log("tieMessage")
        } else {
        console.log("loseMessage")
}

if (userChoice == "Lizard" && (computerChoice == "Paper" || computerChoice == "Spock")) {
    console.log("winMessage")
    } else if (computerChoice == "Lizard") {
    console.log("tieMessage")
    } else {
    console.log("loseMessage")
    }

    if (userChoice == "Spock" && (computerChoice == "Rock" || computerChoice == "Scissors")) {
        console.log("winMessage")
        } else if (computerChoice == "Spock") {
        console.log("tieMessage")
        } else {
        console.log("loseMessage")
        }

}