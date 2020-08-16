const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(400,800);

  engine= Engine.create();
  world= engine.world;

  ground= new Ground(240, 785, 480, 20)

 // plinko= new Plinko(200, 200, 5, 5)

  //particle= new Particle(200,200,20)

  //division= new Division(240,400,20,480)

  for (var k= 0; k<=width; k= k+80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

for (var j = 40; j <= width; j= j+50)
 {
   plinkos.push(new Plinko(j,75));
 }

 for (var j = 15; j <= width-10; j= j+50)
 {
   plinkos.push(new Plinko(j, 175))
 }

 for (var j = 40; j <= width-10; j= j+50)
 {
   plinkos.push(new Plinko(j, 275))
 }

 for (var j = 15; j <= width-10; j= j+50)
 {
   plinkos.push(new Plinko(j, 375))
 }
 
}

function draw() {
  background(0);  

  Engine.run(engine);
  ground.display();
  

  for (var t = 0; t < plinkos.length; t++) {
    plinkos[t].display();
  }

 if (frameCount % 60 === 0) {
  particles.push(new Particle(random(width/2-10, width/2+10),10,10));
 }

 for (var j = 0; j < particles.length; j++) {
   particles[j].display();
 }

 for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
}

}
