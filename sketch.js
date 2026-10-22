function setup() {
  createCanvas(800, 784);
  background(240);
}

function draw() {
  background(240);

  strokeWeight(10);
  line(0, height/2.5, width, height/2.5);
  line(0, height/1.5, width, height/1.5);

  let tremor = random(-3, 3);
  line(width/2.2 + tremor, 0, width/2.2 + tremor, height);


  strokeWeight(7);
  line(width/1.3, 525, width/1.3, height/0.2);

  strokeWeight(5);
  line(width/9, 900, width/9, height/1.5);

  strokeWeight(7);
  line(width/2.2, height/1.05, width/1.3, height/1.05);

  fill(255, 0, 0);
  rect(-4, -4, 366, 317);

  fill(0, 0, 140);
  rect(365, 525, 249, 216);

  fill(255, 220, 0);
  rect(-4, 525, 89, 270);



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
