let tiles = []; 
function setup() {
  createCanvas(windowWidth, 400);
  noLoop();
  let tileSize = 40; 
  for (let i = 0; i < width; i += tileSize) {
    for (let j = 0; j < height; j += tileSize) {
      let shapeType = random(['circle', 'square']);
      tiles.push(new Tile(i + tileSize / 2, j + tileSize / 2, tileSize, shapeType)); 
    }
  }
}

function draw() {
  
  for (let tile of tiles) {
    tile.display();
  }
}


class Tile {
  constructor(x, y, size, shapeType) {
    this.x = x;                    
    this.y = y;                     
    this.size = size;               
    this.shapeType = shapeType;     
    this.color = [random(100), random(0), random(255)]; 
  }
  
  
  display() {
    fill(this.color);             
    if (this.shapeType === 'circle') {
      ellipse(this.x, this.y, this.size);  
    } else if (this.shapeType === 'square') {
      rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size); 
    }
  }
}
