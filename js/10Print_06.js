let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(60); // Frame rate realistico
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  let angle = 0;
  let radius = 5;
  let prevX = 0;
  let prevY = 0;

  // Definisci i colori di partenza (blu) e di arrivo (giallo)
  let startColor = color(0, 0, 255);
  let endColor = color(0,0,0);

  for (let i = 0; i < 500; i++) {
    let x = radius * cos(angle + time * 0.01);
    let y = radius * sin(angle + time * 0.01);
    
    // Calcola il colore interpolato
    let interColor = lerpColor(startColor, endColor, i / 600);
    fill(interColor);
    ellipse(x, y, 4, 2);
    
    if (i > 0) {
      stroke(interColor);
      line(prevX, prevY, x, y);
    }
    
    angle += PI / 8;
    radius += 0.7;

    prevX = x;
    prevY = y;
  }

  time += 0.5; // Incremento del tempo per creare il movimento
}