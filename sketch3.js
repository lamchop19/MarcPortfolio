

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  vid = createCapture(VIDEO);
  vid.hide;
}

function draw() {
  noStroke()
  vid.loadPixels();
  let x1 = random(vid.width);
  let y1 = random(vid.height);
  let v = vid.get(x1, y1);
  
  let reds = map(x1, 0, vid.width, 255, 0);
    let greens = v[1];
  let blues = v[2];
  fill(reds, greens, blues);
  rect(x1, y1, random(25, 50), 15);
  

}