// Michael Sahadi
// Random Walker

let walker;
let can;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-canvas');
  // can = window.document.getElementById('canvas');
  // Setting the frame rate to 5
  frameRate(5);
  // Creating new walker
  walker = new Walker();
}

function draw() {
  background(255, 255, 255, 50);
  // Calling all the walker functions
  walker.update();
  walker.show();
  walker.edges();
}

class Walker {
  // 	Setting up the walker
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  update() {
    // Physics Engine which I am not using at this moment in time. I want the walker to move in a grid pattern
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // Rounding a random number between 0 - 3
    this.d = floor(random(4));
    // Switching direction and greyscale based on random number
    switch (this.d) {
      case 0:
        this.pos.x = this.pos.x + 11;
        stroke(207, 207, 207);
        break;
      case 1:
        this.pos.x = this.pos.x - 11;
        stroke(133, 133, 133);
        break;
      case 2:
        this.pos.y = this.pos.y + 11;
        stroke(93, 93, 93);
        break;
      case 3:
        this.pos.y = this.pos.y - 11;
        stroke(38, 38, 38);
        break;
    }
  }

  show() {
    // Creating a point to represent the walker
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
  }

  edges() {
    // wrapping the edges
    if (this.pos.x > width - 1) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width - 1;
    } else if (this.pos.y > height - 1) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height - 1;
    }
  }
}
