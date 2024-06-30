function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(228, 229, 224); // Colore di sfondo chiaro

  // Calcola i terzi
  let thirdX = 600 / 3;  // 200
let thirdY = 400 / 3;  // ~133.33

  // Disegna la griglia della regola dei terzi (opzionale)
  stroke(255, 150);
  strokeWeight(1);
  line(thirdX, 0, thirdX, height);
  line(thirdX * 2, 0, thirdX * 2, height);
  line(0, thirdY, width, thirdY);
  line(0, thirdY * 2, width, thirdY * 2);

  function drawShapes(x, y, size) {
    let shapeType = int(random(3));
    let colorChoice = random(1) < 0.5 ? color(0) : color(255); 
    fill(colorChoice); 

    switch (shapeType) {
      case 0:
        ellipse(x, y, size, size);
        break;
      case 1:
        rect(x - size / 2, y - size / 2, size, size);
        break;
      case 2:
        triangle(x, y - size / 2, x - size / 2, y + size / 2, x + size / 2, y + size / 2);
        break;
    }
  }

  // Disegna forme geometriche concentrate sui punti a sinistra della griglia dei terzi
  let numShapes = 100;
  for (let i = 0; i < numShapes; i++) {
    let x, y;

    // Maggior concentrazione intorno ai punti di intersezione dei terzi a sinistra
    if (random(1) < 0.7) {
      // 70% delle forme vicine ai punti di intersezione dei terzi a sinistra
      let offsetX = random(-thirdX / 2, thirdX / 2);
      let offsetY = random(-thirdY / 2, thirdY / 2);

      switch (int(random(2))) {
        case 0:
          x = thirdX + offsetX;
          y = thirdY + offsetY;
          break;
        case 1:
          x = thirdX + offsetX;
          y = thirdY * 2 + offsetY;
          break;
      }
    } else {
      // 30% delle forme sparse casualmente
      x = random(width);
      y = random(height);
    }

    let size = random(10, 50);
    drawShapes(x, y, size);
  }
}
