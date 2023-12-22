class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(100, 2000));
    this.isAlive = true;
    this.side = Math.ceil(random(3, 15));
    this.color = color(random(0, 50), random(100, 200), 200);

    this.echoes = []; // Array para almacenar las copias (ecos)
    this.echoInterval = 30; // Intervalo de tiempo para crear ecos
    this.echoCounter = this.echoInterval;
  }

  update() {
    let r = random(100);
    if (r < 25) {
      this.pos.y -= this.side;
    } else if (r < 50) {
      this.pos.x += this.side;
    } else if (r < 75) {
      this.pos.y += this.side;
    } else {
      this.pos.x -= this.side;
    }
    this.lifespan -= 0.5;
    if (this.lifespan <= 0) {
      this.isAlive = false;
    }

    this.echoCounter--;
    if (this.echoCounter <= 0) {
      this.createEcho();
      this.echoCounter = this.echoInterval;
    }

    for (let i = this.echoes.length - 1; i >= 0; i--) {
      this.echoes[i].update();

      if (!this.echoes[i].isAlive) {
        this.echoes.splice(i, 3);
      }
    }
  }

  display() {
    stroke(255);
    fill(this.color);
    square(this.pos.x, this.pos.y, this.side);

    for (let i = 0; i < this.echoes.length; i++) {
      this.echoes[i].display();
    }
  }

  createEcho() {
    let echo = new Particula(this.pos.x, this.pos.y);
    echo.lifespan *= 0.03;
    echo.side *= 0.9;

    echo.color = color(255, 0, 255);

    this.echoes.push(echo);
  }
}
