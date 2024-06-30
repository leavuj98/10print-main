let startColor;
let targetColor;
let lerpedColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  startColor = color(255); // Colore iniziale (nero)
  targetColor = color(0, 0, 255); // Colore target (blu)
}

function draw() {
  background(0);

  let numCircles = 100;
  let maxDiameter = min(width, height) - 100;

  // Calcoliamo il colore corrente usando lerpColor
  let t = map(sin(frameCount / 100), -1, 1, 0, 1); // Usiamo sin per un effetto oscillante
  lerpedColor = lerpColor(startColor, targetColor, t);

  stroke(lerpedColor); // Applichiamo il colore del contorno

  for (let i = 0; i < numCircles; i++) {
    let diameter = map(sin(frameCount / 500 + i), -1, 1, 10, maxDiameter);
    let posX = width / 2;
    let posY = height / 2;
    ellipse(posX, posY, diameter * i / numCircles);
  }
}