var playerChoice = "";
var result = "";
let computerPoints = 0;
let playerPoints = 0;
const result_p = document.querySelector(".result > p");

function computerPlay() {
  var options = ["Rock", "Paper", "Scissors"];
  var choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
  document.getElementById("computersChoice").innerHTML = choice;
  options.setattribute("disabled",1)
  conditions(playerChoice, choice);
}

function clicked(id) {
  playerChoice = id;
  var elements = document.getElementsByClassName("selected");
  while (elements.length > 0) {
    elements[0].classList.remove("selected");
  }

  console.log(id);
  const elem = document.getElementById(id);
  elem.classList.add("selected");
}

function conditions(playerChoice, computerChoice) {
  let rewrite = document.getElementById("result");
  //const result = document.querySelector('.result');
  //const playerScoreBoard = document.querySelector("playerChoice");
  //const computerScoreBoard = document.querySelector("computerChoice");
  //document.getElementById("reset").reset();

  if (playerChoice === computerChoice) {
    result = "This is a draw";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    computerPoints++;
    result = "Computer wins";
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    playerPoints++;
    result = "player wins";
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    computerPoints++;
    result = "Computer wins";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    playerPoints++;
    result = "player wins";
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    computerPoints++;
    result = "Computer wins";
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    playerPoints++;
    result = "player wins";
  } else if (
    (playerPoints == 3 && computerPoints == 2) ||
    computerPoints == 1 ||
    computerPoints == 0
  ) {
    result = "Player Wins the round";
    document.removeChild(document.documentElement);
  } else if (
    (computerPoints == 3 && playerPoints == 2) ||
    playerPoints == 1 ||
    playerPoints == 0
  ) {
    result = "Computer wins the round";
    document.removeChild(document.documentElement);
  }
  else if(userScore === 5){
    // show the result & show a button to play again
    result_p.innerHTML='Game over, you win! <button onclick="endGame()">Click here to play again</button>';
  
  rewrite.innerHTML =
    result +
    ". " +
    `Player Score: ${playerPoints}. Computer Score: ${computerPoints}`;
  // game();
  
}
conditions(playerChoice, computerChoice);

function game() {
  for (let i = 0; i < 5; i++) {
    if (result == "player wins") {
      playerPoints++;
      document.write("Player wins--> player has one point");
      document.write(playerPoints);
    } else if (result == "Computer wins") {
      computerPoints++;
      document.write("Computer wins--> computer has one point");
      document.write(computerPoints);
    } else if (result == "This is a draw") {
      document.write("This is a draw. No one has any point");
    }
  }
}
