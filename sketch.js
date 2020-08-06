
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,a,b,c,engine,world,a1;
function preload()
{
	
}

function setup() {
  a1 = 0
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball = Bodies.circle(200,200,15,{restitution:0.4,density:1.2});
  World.add(world,ball);
	ground = Bodies.rectangle(640,390,1280,20,{isStatic:true});
	World.add(world,ground);
	a = new Can(1000,370,200,20);
	b = new Can(900,325,20,100);
	c = new Can(1100,325,20,100);

}


function draw() {
	
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);  
  drawSprites();
  push(); 
  fill("white");
  ellipse(ball.position.x,ball.position.y,15,15);
  pop();
  rect(ground.position.x,ground.position.y,1280,15);
  a.display();
  b.display();
  c.display();
   if(keyCode === UP_ARROW && a1 === 0)
   {
     a1 = 1
     Matter.Body.applyForce(ball,ball.position,{x:40,y:-45});
  }
}



