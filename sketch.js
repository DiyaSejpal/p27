
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	bob1 = new Bob(200,450,30);
	bob2 = new Bob(300,450,30);
	bob3 = new Bob(400,450,30);
	bob4 = new Bob(500,450,30);
	bob5 = new Bob(600,450,30);



	roof = new Roof(400,200,500,10);

	rope1 = new Rope(bob1.body,roof.body,-30*2,0);
    rope2 = new Rope(bob2.body,roof.body,-30*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,-30*1,0);
	rope5 = new Rope(bob5.body,roof.body,-30*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  
roof.display();

bob1.display();
bob2.diplay();
bob3.diplay();
bob4.diplay();
bob5.diplay();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



  drawSprites();
 
}



