
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const con= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var engine, world;

function setup() {
	createCanvas(1200, 700);

  engine = Engine.create();
	world = engine.world;
  bobDiameter=50

	//Create the Bodies Here.
	bob1=new Bobs(100,300,bobDiameter)
	bob2=new Bobs(150,300,bobDiameter)
	bob3=new Bobs(200,300,bobDiameter)
	bob4=new Bobs(250,300,bobDiameter)
	bob5=new Bobs(300,300,bobDiameter)
  
  roof=new Roof(500,100,700,50)
 
  rope1=new Chain(bob1.body,roof.body,-bobDiameter*2,0)
  rope2=new Chain(bob2.body,roof.body,-bobDiameter*1, 0)
  rope3=new Chain(bob3.body,roof.body,0, 0)
  rope4=new Chain(bob4.body,roof.body,bobDiameter*1, 0)
  rope5=new Chain(bob5.body,roof.body,bobDiameter*2, 0)
	Engine.run(engine)  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:-45});
   }
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



