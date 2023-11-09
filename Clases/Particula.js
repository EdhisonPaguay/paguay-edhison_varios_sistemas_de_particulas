class particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 200));
    this.isAlive = true;
    this.side = Math.ceil(random(3, 15));
    this.color = random(150);
  }
  update() {
    this.r = random(100);
    if (this.r < 25) {
      this.pos.y -= this.side;
    } else if (this.r < 50) {
      this.pos.x += this.side;
    } else if (this.r < 75) {
      this.pos.y += this.side;
    } else {
      this.pos.x -= this.side;
    }
    this.lifespan -= 1;
    if (this.lifespan <= 0) {
      this.isAlive = false;
    }
  }
  display() {
    fill(this.color);
    square(this.pos.x, this.pos.y, this.side);
  }
}
