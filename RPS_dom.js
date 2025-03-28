// get from localStorage
let score = JSON.parse(localStorage.getItem("score"));

// set a default value everytime score reseted on Local storage
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    teis: 0,
  };
}

// display the score by default
updateScoreElement();

function playGame(playerMove) {
  let computerMove = theComputerMove();
  let result = "";

  if (playerMove === "ROCK") {
    if (computerMove === "ROCK") {
      result = "Its a tei!";
    } else if (computerMove === "PAPER") {
      result = "You lose!";
    } else if (computerMove === "SCISOR") {
      result = "You win!";
    }
  } else if (playerMove === "PAPER") {
    if (computerMove === "ROCK") {
      result = "You win!";
    } else if (computerMove === "PAPER") {
      result = "Its a tei!";
    } else if (computerMove === "SCISOR") {
      result = "You lose!";
    }
  } else if (playerMove === "SCISOR") {
    if (computerMove === "ROCK") {
      result = "You lose!";
    } else if (computerMove === "PAPER") {
      result = "You win!";
    } else if (computerMove === "SCISOR") {
      result = "Its a tei!";
    }
  }

  // score update
  if (result === "You win!") {
    score.wins++;
  } else if (result === "You lose!") {
    score.losses++;
  } else if (result === "Its a tei!") {
    score.teis++;
  }

  // save to localStorage
  localStorage.setItem("score", JSON.stringify(score));

  // display result use DOM
  const resultElement = document.querySelector(".result-js");
  resultElement.innerHTML = result;

  // display compare use DOM
  const compareElement = document.querySelector(".compare-js");
  compareElement.innerHTML = `You
          <img class="hands" src="./resouces/${playerMove}-emoji.png"/>
          <img class="hands" src="./resouces/${computerMove}-emoji.png"/>
          Computer`;

  // display score use DOM
  updateScoreElement();
}

function theComputerMove() {
  let randomNum = Math.random() * 3;
  let computerMove = "";
  if (randomNum >= 0 && randomNum <= 1) {
    computerMove = "ROCK";
  } else if (randomNum >= 1 && randomNum <= 2) {
    computerMove = "PAPER";
  } else if (randomNum >= 2 && randomNum <= 3) {
    computerMove = "SCISOR";
  }
  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.teis = 0;

  localStorage.removeItem("score");
  updateScoreElement();
}

// display score use DOM function
function updateScoreElement() {
  const scoreElement = document.querySelector(".score-js");
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Teis: ${score.teis} `;
}
