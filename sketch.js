
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var box;
var ground;
var ball;
var bg;




function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	box=new Dustbin();
	ball=new Ball();
	ground = new Ground(200,670,9000,30);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  box.display();
  ball.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:450,y:-450})
	}
}

