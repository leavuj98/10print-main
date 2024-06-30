let cols, rows; // Numero di colonne e righe nella griglia
let triangleSize = 20; // Dimensione dei triangoli
let noiseScale = 0.1; // Scala del rumore per la variazione dei colori

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = width / triangleSize; // Calcola il numero di colonne basato sulla dimensione dei triangoli
  rows = height / triangleSize; // Calcola il numero di righe basato sulla dimensione dei triangoli
  noLoop(); // Disegna solo una volta
  noStroke();
}

function draw() {
  background(0); // Sfondo nero
  colorMode(HSB, 360, 100, 100); // Imposta il sistema colore su HSB
  createTexture(); // Crea la texture con triangoli
}

function createTexture() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let posX = x * triangleSize; // Calcola la posizione x del triangolo
      let posY = y * triangleSize; // Calcola la posizione y del triangolo
      
      // Calcola un valore di rumore per la variazione del colore
      let noiseValue = noise(posX * noiseScale, posY * noiseScale) * 255;
      
      // Mappa il valore di rumore a una tonalità di colore tra 0 e 360
      let hue = map(noiseValue, 0, 255, 0, 360);
      
      // Imposta il colore di riempimento basato sulla tonalità (e saturazione e luminosità fisse)
      let baseColor = color(hue, 80, 80);
      fill(baseColor);
      
      // Disegna il triangolo equilatero orientato verso il basso
      if ((x + y) % 2 === 0) {
        // Triangolo verso il basso
        triangle(posX, posY + triangleSize,
                 posX + triangleSize / 2, posY,
                 posX + triangleSize, posY + triangleSize);
      } else {
        // Triangolo verso l'alto
        triangle(posX, posY,
                 posX + triangleSize, posY,
                 posX + triangleSize / 2, posY + triangleSize);
      }
    }
  }
}