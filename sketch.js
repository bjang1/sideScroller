//hero.score
let millisecond;
var startTime=0;
var currentTime=0;
let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys=[];
let collect=[];
let img
let backdrop
let img3
let backdrop1
function setup() {
  startTime = millis();
  createCanvas(400, 400);
//laoding assets
  //soundFormats('mp3');
  mySound = loadSound("assets/energy.mp3");
   img = loadImage("boatt.png");
  let img2 = loadImage("treasure.png")
  backdrop= loadImage("ocean2.jpg")
  img3 = loadImage("diamond.png")
  backdrop1= loadImage("docks.png")
  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);
  
  for(let i=0;i<100; i++){
    enemys.push(new Baddies(img2))
  }
    for(let i=0;i<8; i++){
    collect.push(new jewels(img3))
  }

}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
  currentTime=round((millis()-startTime)/1000);
  print(currentTime)
}

function draw() {
  if (sNum%3 === 0) {
    open();
  } else if (sNum%3 === 1) {
    game();
  } else if (currentTime > 20){
    close();
  } else if (sNum%3 === 2) {
    close();
  }
}



//var currentTime=0;

function open() {
  background(backdrop1);
  textSize(30)
  text("Welcome to the Game!", 100,100);
  textSize(15)
  text("Right click to continue",112,120 )
      //mySound.play();


}

function close() {
  background(142,198,210);
  textSize(25)
  fill(255,255,255)
  text("Thanks for playing!", 100, 100);
  textSize(12)
  text("You collected " + hero.score + " out of 100 (The jewels were a bonus)", 53, 113)
  text("It took you " + currentTime + " seconds", 150,126)
}

function game() {
  background(backdrop)

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();
  
  for(let i=0; i<enemys.length; i++){
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
    
  }

    for(let i=0; i<collect.length; i++){
    collect[i].show();
    collect[i].update();
    hero.touch(collect[i]);
    
  }
  
  
  fill("blue");
  rect(200, 300, 20, 20);
}
