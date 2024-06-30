let circles = [];
let lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Inizializza i cerchi e le linee
  for (let i = 0; i < 100; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      r: random(5, 15),
      dx: random(-1, 1),
      dy: random(-1, 1)
    });
    lines.push({
      x1: random(width),
      y1: random(height),
      x2: random(width),
      y2: random(height),
      dx1: random(-1, 1),
      dy1: random(-1, 1),
      dx2: random(-1, 1),
      dy2: random(-1, 1)
    });
  }
}

function draw() {
  background(255, 255, 255, 10); // Lascia una traccia delle forme in movimento

  // Disegna e muovi i cerchi
  noStroke();
  fill(0, 50); // Colore nero semi-trasparente
  for (let c of circles) {
    ellipse(c.x, c.y, c.r * 2);
    c.x += c.dx;
    c.y += c.dy;

    // Rimbalza ai bordi
    if (c.x < 0 || c.x > width) c.dx *= -1;
    if (c.y < 0 || c.y > height) c.dy *= -1;
  }

  // Disegna e muovi le linee
  stroke(0, 50); // Colore nero semi-trasparente
  for (let l of lines) {
    line(l.x1, l.y1, l.x2, l.y2);
    l.x1 += l.dx1;
    l.y1 += l.dy1;
    l.x2 += l.dx2;
    l.y2 += l.dy2;

    // Rimbalza ai bordi
    if (l.x1 < 0 || l.x1 > width) l.dx1 *= -1;
    if (l.y1 < 0 || l.y1 > height) l.dy1 *= -1;
    if (l.x2 < 0 || l.x2 > width) l.dx2 *= -1;
    if (l.y2 < 0 || l.y2 > height) l.dy2 *= -1;
  }
}