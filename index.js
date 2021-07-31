var readlineSync = require("readline-sync")
const chalk = require("chalk")


console.log(chalk.redBright.bgYellowBright("Welcome to DO YOU KNOW YASSK!"))
console.log(chalk.red("=============================="))
score = 0;

var highScores = [
  {
    name: "Yash",
    score: 6,
  },
]

var username = readlineSync.question(chalk.blueBright("What is your name? =>"))
console.log(chalk.cyan("Welcome!", username))
console.log(chalk.red("*****************"))
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("YaY! You were Right."))
    score += 1;
  } else {
    console.log(chalk.green.bgRed("Sorry,try again later!"))
  }
  console.log(chalk.red("*****************"))
}
play("where do yassk live?(Village) => ", "Charodiya")
play("Where yassk is studying(City) right now? => ", "Vadodara")
play("What is birthday month of Yassk? => ", "April")
play("Does Yassk love street Food? => ", "Yes")
play("What's Yassks favourite number ? => ", "29")
play("Does Yassk is in relationship with anyone? => ", "No")


console.log(chalk.redBright.bgGreen("\nYour score is " + "(" + score + ")" + " out of 6."))
if (score > 3) {
  console.log(chalk.black.bgYellow("\n\nHurray,You are Best Friend of Yassk!\n"))
} else if (score > 1) {
  console.log(chalk.black.bgYellow("\n\nYou both are good friends!\n"))
} else {
  console.log(chalk.black.bgYellow("\n\nYou don't know yassk very well!\n"))
}
console.log(chalk.green("High Score : "))
highScores.map(score => console.log(score.name, ":", score.score))

console.log("\n\nIF YOUR SCORE IS HIGH PLEASE LET ME KNOW!");