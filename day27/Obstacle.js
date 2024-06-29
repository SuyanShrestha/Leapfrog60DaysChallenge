// Obstacle class (Ninja Star)
export class Obstacle {
  constructor(ctx, canvas, dv, CANVAS_HEIGHT, img) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.y = [CANVAS_HEIGHT / 6, CANVAS_HEIGHT / 2, (CANVAS_HEIGHT / 6) * 5][
      Math.floor(Math.random() * 3)
    ] - 100; 
    this.x = this.canvas.width;
    this.speed = Math.floor(2 + Math.random() * dv); 
    this.width = 60;
    this.img = img;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x + this.width / 2, this.y + this.width / 2 );
    this.ctx.rotate((Math.PI / 180) * (this.x % 360));
    this.ctx.drawImage(
      this.img,
      -this.width / 2,
      -this.width / 2,
      this.width,
      this.width
    );
    this.ctx.restore();
    this.x -= this.speed;
  }
}
