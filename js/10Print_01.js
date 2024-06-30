let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Nessun riempimento per i cerchi
  noFill(); 
  
  // Spessore del contorno delle forme
  strokeWeight(2); 
  
  for (let i = 0; i < 100; i++) {
    
    let x = random(width);
    let y = random(height);
    let radius = random(20, 50);
    let opacity = random(50, 200);
    let color1 = color(random(50, 200), random(50, 200), random(50, 200), opacity);
    let color2 = color(random(50, 200), random(50, 200), random(50, 200), opacity);
    
    // Gradients per ogni cerchio
    let gradient = [color1, color2]; 
    let xSpeed = random(-1, 1);
    let ySpeed = random(-1, 1);

    circles.push(new Circle(x, y, radius, gradient,                             xSpeed, ySpeed));
  }
}


function draw() {
  
  // Sfondo nero
  background(0); 
  for (let circle of circles) {
    circle.move();
    circle.display();
  }
}


class Circle {
  constructor(x, y, radius, gradient, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.gradient = gradient;
    this.rotationSpeed = random(-0.02, 0.02);
    this.rotationAngle = 0;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Controlla i bordi e inverti la direzione se necessario
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  
  display() {
    this.rotationAngle += this.rotationSpeed;
    let d = this.radius * 2;
    push();
    translate(this.x, this.y);
    rotate(this.rotationAngle);
    for (let i = 0; i < d; i += 4) {
      let inter = map(i, 0, d, 0, 1);
      let c = lerpColor(this.gradient[0], this.gradient[1], inter);
      stroke(c);
      ellipse(0, 0, i);
    }
    pop();
  }
}