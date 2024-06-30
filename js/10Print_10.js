let cols, rows;                                                               
let scl = 40;
let w = 400;
let h = 400;

function setup() {
  createCanvas(windowWidth,windowHeight);
  cols = w / scl;
  rows = h / scl;
}

function draw() {
  background(255);
  translate(width / 2 - w / 2, height / 2 - h / 2);
  
  let lightDirection = createVector(mouseX - width / 2, mouseY - height / 2);
  lightDirection.normalize();

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let angle = atan2(y - rows / 2, x - cols / 2);
      let d = dist(x, y, cols / 2, rows / 2);
      let offset = map(d, 0, dist(0, 0, cols / 2, rows / 2), 0, PI);
      let r = map(sin(angle + offset), -1, 1, 10, scl / 2);

      let pos = createVector(x * scl + scl / 2, y * scl + scl / 2);
      let light = p5.Vector.dot(lightDirection, createVector(cos(angle), sin(angle)));
      let brightness = map(light, -1, 1, 50, 255);

      fill(brightness);
      noStroke();
      ellipse(pos.x, pos.y, r, r);
    }
  }
}