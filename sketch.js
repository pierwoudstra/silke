let amt = 0;

let x = [];
let y = [];
let slope = [];

let color = 0;
let colorIncrement = 1;

function setup() {
  frameRate(20);

  // making canvas full size
  createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');

  for (let i = 0; i < 5000; i++) {    
    x.push(random() * width);
    y.push(random() * height);
    slope.push( sqrt(x[i] + y[i]) * (1 - amt) + ((x[i] / y[i]) * amt));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    amt += -0.01;
  } else if (keyCode === RIGHT_ARROW) {
    amt += 0.01;
  }
}

function draw() {

  background(100, 100, 255, 25);

  amt = mouseX / width;

  color++;

  stroke((amt * 255) - 200, (amt * 255) - 200, amt * 255);

  // stroke(amt * 100, 0, color - 100);

  strokeWeight(1);

  for (let i = 0; i < 5000; i++) {  
    
    if (x[i] + cos(slope[i]) < width && x[i] + cos(slope[i]) > 0 && y[i] + sin(slope[i]) < height && y[i] + sin(slope[i]) >= 0) {
      x[i] += cos(slope[i]);
      y[i] += sin(slope[i]);
      slope[i] = sqrt(x[i] + y[i]) * (1 - abs(amt)) + ((x[i] / y[i]) * abs(amt));
      line(x[i], y[i], x[i] + 20 * cos(slope[i]), y[i] + 20 * sin(slope[i]));
    } else {
      x[i] = random() * width;
      y[i] = random() * height;
      slope[i] = sqrt(x[i] + y[i]) * (1 - abs(amt)) + ((x[i] / y[i]) * abs(amt));
      line(x[i], y[i], x[i] + 20 * cos(slope[i]), y[i] + 20 * sin(slope[i]));
    }
  }

}