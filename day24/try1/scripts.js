function draw2() {
  const canvas = document.getElementById("trialProj");
  canvas.width = 1500;
  canvas.height = 1500;

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

    // drawing line
    ctx.beginPath();
    ctx.moveTo(120, 200); // This is the starting point of the line
    ctx.lineTo(200, 200); // This is the ending point of the line
    ctx.stroke(); // This actually draws the line

    // another line
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.lineJoin = "square";
    ctx.moveTo(250, 250);
    ctx.lineTo(300, 250);
    ctx.lineTo(275, 200);
    ctx.stroke();
  }
}

draw2();

const img = new Image();
img.src =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fanime%2520wallpaper%2F&psig=AOvVaw3SH7QVOF7OCytmpSAJvKZd&ust=1719016660656000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLie9p2664YDFQAAAAAdAAAAABAE";

// Some animations
const canvas = document.getElementById("trialProj");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

const ball2 = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "black",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball2.draw();

  // this is for velocity, since ball's x and y position have got coordinates added, it will look like its moving
  ball.x += ball.vx;
  ball.y += ball.vy;

  // suppose i wanna do some acceleration
  ball.vy *= 1.001;
  ball.vy += 0.25;

  // for ball2
  ball2.x += ball2.vx;
  ball2.y += ball2.vy;

  ball2.vx *= 0.99;
  ball2.vx += 2.25;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx;
  }

  //ball2
  if (
    ball2.y + ball2.vy > canvas.height - ball2.radius ||
    ball2.y + ball2.vy < ball2.radius
  ) {
    ball2.vy = -ball2.vy;
  }
  if (
    ball2.x + ball2.vx > canvas.width - ball2.radius ||
    ball2.x + ball2.vx < ball2.radius
  ) {
    ball2.vx = -ball2.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
ball2.draw();

// // for scoreboard
const canvas2 = document.getElementById("scoreboard");
const ctx2 = canvas2.getContext("2d");

const ball3 = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 20,
  radius: 25,
  color: "blue",
  draw() {
    ctx2.beginPath();
    ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx2.closePath();
    ctx2.fillStyle = this.color;
    ctx2.fill();
  },
};

function draw3() {
  ctx2.font = "48px serif";
  ctx2.fillText("Hello World", 10, 50);

  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ball3.draw();

  ball3.y += ball3.vy;

  // Check for collision with top or bottom
  if (
    ball3.y + ball3.vy > canvas2.height - ball3.radius ||
    ball3.y + ball3.vy < ball3.radius
  ) {
    ball3.vy = -ball3.vy;
  }
}

function updateBallPosition(event) {
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  if (event.keyCode === LEFT_ARROW) {
    ball3.x -= 100;
  } else if (event.keyCode === RIGHT_ARROW) {
    ball3.x += 100;
  }

  draw3();
}

window.addEventListener("keydown", updateBallPosition);

draw3();
setInterval(draw3, 10);
