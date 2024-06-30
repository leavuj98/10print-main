function setup() {
  createCanvas(windowWidth, windowHeight); // Crea una tela di dimensioni 800x800 pixel
  noLoop(); // Ferma il loop di draw() dopo la prima esecuzione
  angleMode(DEGREES); // Imposta la modalità di calcolo degli angoli in gradi
}

function draw() {
  background(0, 0, 0); // Imposta lo sfondo a nero

  let x = width / 2; // Posizione iniziale x al centro della larghezza della tela
  let y = height / 2; // Posizione iniziale y al centro dell'altezza della tela
  let side = 1; // Lato del primo rettangolo
  let prevSide = 0; // Lato del rettangolo precedente
  let angle = 0; // Angolo di rotazione iniziale

  for (let i = 0; i < 15; i++) {
    let newSide = side + prevSide; // Calcola il lato del rettangolo corrente come somma del lato attuale e del lato precedente
    prevSide = side; // Memorizza il lato attuale come lato precedente per la prossima iterazione
    side = newSide; // Aggiorna il lato attuale al nuovo lato calcolato

    // Disegna il rettangolo
    fill(getColor(i)); // Ottiene il colore in base all'indice i
    stroke(0); // Colore del contorno nero
    strokeWeight(4); // Spessore del contorno
    rectMode(CENTER); // Imposta il punto di origine del rettangolo al centro
    rect(x, y, side * 20, side * 20); // Disegna il rettangolo al punto (x, y) con dimensioni proporzionali al lato e moltiplicate per 20

    // Disegna l'arco
    noFill(); // Nessun riempimento per l'arco
    arc(x, y, side * 40, side * 40, angle, angle + 90); // Disegna un arco al punto (x, y) con dimensioni proporzionali al lato moltiplicate per 40, da angle a angle + 90 gradi

    // Calcola la nuova posizione e l'angolo per il prossimo quadrato
    let nextX = x + cos(angle + 45) * side * 20; // Calcola la nuova posizione x con un'angolazione di 45 gradi rispetto all'angolo attuale
    let nextY = y + sin(angle + 45) * side * 20; // Calcola la nuova posizione y con un'angolazione di 45 gradi rispetto all'angolo attuale

    x = nextX; // Aggiorna x alla nuova posizione calcolata
    y = nextY; // Aggiorna y alla nuova posizione calcolata
    angle += 90; // Aggiorna l'angolo di rotazione di 90 gradi per il prossimo quadrato
  }
}

function getColor(index) {
  if (index % 3 == 0) return color(255, 255, 0); 
  if (index % 3 == 1) return color(255, 0, 0);
  return color(0, 0, 255);
}
