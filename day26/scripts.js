import { Bug } from "./Bug.js";
import { Obstacle } from "./Obstacle.js";

// DECLARATIONS

const canvas1 = document.getElementById("gameCanvas");
const ctx1 = canvas1.getContext("2d");
const CANVAS_WIDTH = (canvas1.width = 1200);
const CANVAS_HEIGHT = (canvas1.height = 600);
const score = document.getElementById("score");
const highScore = document.getElementById("highScore");
const myScore = document.getElementById("myScore");
const myHighScore = document.getElementById("myHighScore");

let currentLine = canvas1.height / 2; 
const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio("music/move.mp3");
const musicSound = new Audio("music/music.mp3");

const instructionsButton = document.getElementById("instructionsButton");
const instructionsDialog = document.getElementById("instructionsDialog");
const scoreboardButton = document.getElementById("scoreboardButton");
const scoreboardDialog = document.getElementById("scoreboardDialog");
const characterButton = document.getElementById("characterButton");
const characterDialog = document.getElementById("characterDialog");

const bugImg = new Image();
bugImg.src = "./assets/sprite_images/Fighter/Run.png";

highScore.textContent = localStorage.getItem("highScore") || 0;

function setCharacter(character) {
  switch (character) {
    case "Fighter":
      bugImg.src = "./assets/sprite_images/Fighter/Run.png";
      break;
    case "Samurai":
      bugImg.src = "./assets/sprite_images/Samurai/Run.png";
      break;
    case "Shinobi":
      bugImg.src = "./assets/sprite_images/Shinobi/Run.png";
      break;
    default:
      bugImg.src = "./assets/sprite_images/Fighter/Run.png";
  }
}

document.getElementById("pickIchigo").addEventListener("click", function () {
  setCharacter("Fighter");
});

document.getElementById("pickSuyan").addEventListener("click", function () {
  setCharacter("Samurai");
});

document.getElementById("pickMadara").addEventListener("click", function () {
  setCharacter("Shinobi");
});

const obstacleImg = new Image();
obstacleImg.src = "./assets/star2.png";

const collisionMargin = 18;
let obstacleInterval;

let gameOver = false;

let bug = new Bug(ctx1, canvas1, 10, (currentLine = 200), 50, bugImg);

score.textContent = score.textContent.padStart(3, "0");

// DRAWING LINES
function drawLine(ctx, canvas, y) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.stroke();
}

// DRAWING OBSTACLES
let obstacles = [];
let gameProgress = 0;

obstacleInterval = setInterval(() => {
  gameProgress += 0.01;
  let obstacle = new Obstacle(
    ctx1,
    canvas1,
    2 + gameProgress,
    CANVAS_HEIGHT,
    obstacleImg
  );
  obstacles.push(obstacle);
}, 1000 - gameProgress * 100);

// RESTART THE GAME AFTER PRESSING SPACEBAR
function restartGame() {
  bug = new Bug(ctx1, canvas1, 10, currentLine, 50, bugImg);
  obstacles = [];
  gameProgress = 0;
  gameOver = false;
  score.textContent = 0;

  if (obstacleInterval) {
    clearInterval(obstacleInterval);
  }
  obstacleInterval = setInterval(() => {
    gameProgress += 0.01;
    let obstacle = new Obstacle(
      ctx1,
      canvas1,
      2 + gameProgress,
      CANVAS_HEIGHT,
      obstacleImg
    );
    obstacles.push(obstacle);
  }, 1000 - gameProgress * 100);

  animate();
}

// GAMEOVER AFTER COLLISION
function showGameOver() {
  musicSound.pause();
  myScore.textContent = score.textContent;
  document.getElementById("instructionScreen").style.display = "flex";
  document.querySelector(".canvas-div").style.display = "none";

  if (localStorage.getItem("highScore") < parseInt(score.textContent)) {
    localStorage.setItem("highScore", score.textContent);
  }
  highScore.textContent = localStorage.getItem("highScore");
  myHighScore.textContent = localStorage.getItem("highScore");
}

function animate() {
  if (gameOver) {
    setTimeout(showGameOver, 250);
    return;
  }
  ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // DRAWING BUG
  bug.draw();

  // DRAWING LINES
  drawLine(ctx1, canvas1, CANVAS_HEIGHT / 6);
  drawLine(ctx1, canvas1, CANVAS_HEIGHT / 2);
  drawLine(ctx1, canvas1, (CANVAS_HEIGHT / 6) * 5);

  // DRAWING OBSTACLES AND SCORING
  obstacles = obstacles.filter((obstacle) => {
    obstacle.draw();

    // COLLISION DETECTION
    if (
      bug.x <= obstacle.x &&
      bug.x + bug.size + collisionMargin >= obstacle.x &&
      bug.y === obstacle.y
    ) {
      console.log("Collision detected");
      gameOver = true;
      gameOverSound.play();
    }

    if (obstacle.x > 0) return obstacle;
    score.textContent = (parseInt(score.textContent) + 1)
      .toString()
      .padStart(3, "0");
  });

  requestAnimationFrame(animate);
}
animate();

// to show details in loading screen
const showDetails = (dialog, show) => {
  if (show) {
    dialog.classList.remove("hide");
    dialog.showModal();
    foodSound.play();
  } else {
    dialog.classList.add("hide");
    dialog.close();
    foodSound.play();
  }
};

// EVENT LISTENERS
window.addEventListener("keydown", function (event) {
  bug.update(event.key);

  // Check if any dialog is open
  let dialogs = document.querySelectorAll("dialog");
  for (let dialog of dialogs) {
    if (dialog.open) {
      return;
    }
  }

  // Instruction screen
  if (event.code === "Space") {
    document.getElementById("instructionScreen").style.display = "none";
    document.querySelector(".canvas-div").style.display = "block";
    instructionsDialog.classList.add("hide");
    musicSound.currentTime = 0;
    musicSound.play();
    restartGame();
  }
});

// EVENT LISTENERS FOR HOME SCREEN
instructionsButton.addEventListener("click", () =>
  showDetails(instructionsDialog, true)
);
instructionsDialog.addEventListener("click", () =>
  showDetails(instructionsDialog, false)
);
scoreboardButton.addEventListener("click", () =>
  showDetails(scoreboardDialog, true)
);
scoreboardDialog.addEventListener("click", () =>
  showDetails(scoreboardDialog, false)
);
characterButton.addEventListener("click", () =>
  showDetails(characterDialog, true)
);
characterDialog.addEventListener("click", () =>
  showDetails(characterDialog, false)
);
