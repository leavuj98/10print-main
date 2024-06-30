function setup() {
    createCanvas(800, 600); // Dimensioni della tela
    background(135, 206, 235); // Colore di sfondo azzurro (Sky Blue)
  }
  
  function draw() {
    noStroke();
    fill(255, 255, 255, 150); // Colore delle bolle con un po' di trasparenza
    let x = random(width); // Posizione orizzontale casuale
    let y = random(height); // Posizione verticale casuale
    let r = random(10, 50); // Raggio casuale tra 10 e 50
    ellipse(x, y, r); // Disegna il cerchio
  }