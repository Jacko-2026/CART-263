class Ball {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y - this.size/2 > height) {
      this.active = false;
    }
    // Constrain Ball to Canvas
    this.x = constrain(this.x, 0, width);
  }

  bounce(paddle) {
    if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) {

    // Bounce (Paddle)
    let dx = this.x - paddle.x;
    this.vx = this.vx + map(dx,-paddle.width/2,paddle.width/2,-2,2);
      this.vy = -this.vy;
      this.ay = 0;
    }

    if (this.y > height) {
      paddle.width -= 10;
    }
    paddle.width = constrain(paddle.width, 0, 90);

    if (paddle.width <= 0) {
      state = 'levelGameOver';
    }
  }

  bounceCanvas() {
    if (this.x + this.size/2 >= width) {
      this.x = width - this.size/2;
      this.vx = -this.vx;
    }
    else if (this.x - this.size/2 <= 0) {
      this.x = 0 + this.size/2;
      this.vx = -this.vx;
    }

    this.x += this.vx;
  }

  display() {
    push();
    fill(255,50,50);
    stroke(0);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
