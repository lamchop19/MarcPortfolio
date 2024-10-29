let body;
let hammerheads = [];  
function preload() {
  body = loadImage('assets/hammerhead.png');
}

function setup() {
  createCanvas(150, 150);
  canvas.parent('sketch-container');
  hammerheads.push(new Hammerhead(width / 2, height / 2));
}

function draw() {
  background(0,0,255);
  for (let hammerhead of hammerheads) {
    hammerhead.display();
  }
}

function mouseDragged() {
  hammerheads.push(new Hammerhead(mouseX, mouseY)); 
  
}
class Hammerhead {
  constructor(x, y) {
    this.x = x; 
    this.y = y; 
    this.imgWidth = random(50,25);  
    this.imgHeight = random(50, 25);  
  }
  
  display() {
    push(); 
    translate(this.x, this.y); 
    imageMode(CENTER);
    image(body, 0, 0, this.imgWidth, this.imgHeight);
    pop();
  }
}
