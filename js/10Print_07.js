let stepSize = 20; // Dimensione dei passi per il disegno dei rettangoli
let noiseScale = 0.02; // Scala del rumore per la variazione dei colori e delle posizioni
let maxRectSize = 40; // Dimensione massima dei rettangoli

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // Sfondo bianco
  noStroke(); // Senza contorni
  createTexture(); // Crea la texture xerografica
}

function createTexture() {
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      // Genera un valore di rumore per la variazione del colore e della posizione
      let noiseValue = noise(x * noiseScale, y * noiseScale) * 255;
      
      // Calcola la dimensione del rettangolo basata sul valore di rumore
      let rectSize = map(noiseValue, 0, 255, 0, maxRectSize);
      
      // Calcola il colore del rettangolo basato sul valore di rumore
      let baseColor = color(0, 0,0);
      
      fill(baseColor);
      rect(x, y, rectSize, rectSize);
    }
  }
}