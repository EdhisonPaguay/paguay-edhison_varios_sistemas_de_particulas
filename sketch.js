let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Particula(width / 2, height / 2);
}

function draw() {
  if (p.isAlive) {
    p.update();
    p.display();
  }
}
