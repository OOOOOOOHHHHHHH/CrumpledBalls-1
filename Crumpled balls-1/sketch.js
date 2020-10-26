var paperBall;
var dustbinL, dustbinM, dustbinR;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinM =Bodies.rectangle(400,670,200,40,{isStatic:true})
	World.add(world, dustbinM);
	dustbinL =Bodies.rectangle(300,630,40,200,{isStatic:true})
	World.add(world, dustbinL);
    dustbinR =Bodies.rectangle(500,630,40,200,{isStatic:true})
	World.add(world, dustbinR);


	ground =Bodies.rectangle(400,690,800,20,{isStatic:true})
	World.add(world, ground);

	paperBall = new paper(400,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,20);
  fill("brown");
  rect(dustbinM.position.x,dustbinM.position.y,200,20);
  rect(dustbinL.position.x,dustbinL.position.y,20,100);
  rect(dustbinR.position.x,dustbinR.position.y,20,100);
  paperBall.display();
  drawSprites();
 
}



