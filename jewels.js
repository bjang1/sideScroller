class jewels {
  constructor(jewel) {
    this.pos = createVector(random(1000), random(400));
    //this.jewel.x=createVector(random(1000))
    //this.jewel.y=createVector(random(400))
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.pic = img3;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel   );
    this.acc.set(0, 0);
  }

  show() {
    fill("green");
    //lipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x, this.pos.y, 50, 50);
  }

//   applyForce(f) {
//     this.acc.add(f);
//   }

//   edges() {
//     if (this.pos.y > 350) {
//       this.vel.y *= -0.5;
//       this.pos.y = 350;
//     }
//   }
}
