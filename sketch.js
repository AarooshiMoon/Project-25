
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(100,80,20);
    ground=new Ground(750,580,1500,20);
	dustbin1=new Dustbin(1118,560,225,20);
	dustbin2=new Dustbin(1015,440,20,220);
	dustbin3=new Dustbin(1220,440,20,220);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 100, y: -90});
	}
}



