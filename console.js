var playerChoice = "";
var computerChoice = "";
var result = "";
let computerPoints = 0;
let playerPoints = 0;
const result_p = document.querySelector(".result > p");

function computerPlay() {
  var options = ["Rock", "Paper", "Scissors"];
  var choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
  document.getElementById("computersChoice").innerHTML = choice;
  // options.setattribute("disabled", 1);
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
  }

  rewrite.innerHTML = `${result}. Player Score: ${playerPoints}. Computer Score: ${computerPoints}`;

  if (Number(playerPoints) + Number(computerPoints) === 5) {
    let finalResult;
    if (Number(playerPoints) > Number(computerPoints)) {
      finalResult = `Player Wins with score: ${playerPoints} - ${computerPoints}`;
    } else if (Number(computerPoints) > Number(playerPoints)) {
      finalResult = `Computer Wins with score: ${computerPoints} - ${playerPoints}`;
    }
    document.getElementById("finalResult").innerHTML = finalResult;

    document.getElementById("resetDiv").style.visibility = "visible";
  }
}

function resetGame() {
  window.location.reload();
}
