// Bug class (Ninja)
export class Bug {
  constructor(ctx, canvas, x, y, size, img) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.y = y;
    this.x = x;
    this.size = size;
    this.img = img;
    this.frame = 0;
    this.width = this.img.width / 8;
    this.height = this.img.height;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.frame * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y - this.size / 2,
      this.width,
      this.height
    );

    this.frame++;
    if (this.frame >= 8) this.frame = 0;
  }

  update(key) {
    let moveSound = new Audio("music/move.mp3");
    switch (key) {
      case "ArrowUp":
        if (this.y > Math.round(this.canvas.height / 6)) {
          this.y -= Math.round(this.canvas.height / 3);
          moveSound.play();
        }
        break;
      case "ArrowDown":
        if (this.y < Math.round((this.canvas.height / 6) * 5 - 100)) {
          this.y += Math.round(this.canvas.height / 3);
          moveSound.play();
        }
        break;
    }
  }
}
