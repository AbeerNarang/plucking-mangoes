
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree;
var stone;
var mng1,mng2,mng3,mng4,mng5,mng6,mng7,mng8,mng9,mng10;
var chain1;

function preload()
{

}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(400,395,800,10);
	tree = new Tree(600,230,300,375);
	boy = new Boy(200,340,150,200);
	stone = new Stone(155,295,30);
	mng1 = new Mango(550,120,40); 
	mng2 = new Mango(600,80,40); 
	mng3 = new Mango(650,100,40); 
	mng4 = new Mango(500,170,40); 
	mng5 = new Mango(600,130,40); 
	mng6 = new Mango(710,170,40); 
	mng7 = new Mango(680,130,40); 
	mng8 = new Mango(540,190,40); 
	mng9 = new Mango(650,180,40); 
	mng10 = new Mango(600,180,40); 
	chain1 = new Chain(stone.body,{x:155,y:295});
	
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(200);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mng1.display();
  mng2.display();
  mng3.display();
  mng4.display();
  mng5.display();
  mng6.display();
  mng7.display();
  mng8.display();
  mng9.display();
  mng10.display();
  chain1.display();
  detectCollision();

  function detectCollision(stone1,mango){
	mangoBodyPosition=1 * mng1.body.position
	stone1BodyPosition=1 * stone.body.position 
 
	var distance=dist(stone1BodyPosition.x,stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<= 1 * mng1.r + 1 * stone.r){
	Matter.Body.setStatic(1*mango.body,false);	   
	}
 
	}
 
  detectCollision(stone,mng1);
  detectCollision(stone,mng2);
  detectCollision(stone,mng3);
  detectCollision(stone,mng4);
  detectCollision(stone,mng5);
  detectCollision(stone,mng6);
  detectCollision(stone,mng7);
  detectCollision(stone,mng8);
  detectCollision(stone,mng9);
  detectCollision(stone,mng10);
  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}

	function mouseReleased(){
	chain1.fly();
	}