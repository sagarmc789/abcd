
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine,world;
var floor;
var stones,launch
var mango1
var boy,boyimg;
var tree;





function preload(){

boyimg=loadImage("boy.png")

}

function setup() {
	var canvas = createCanvas(1400,600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
floor = new Floor(400,1000,2000,1000);

stones=new Stone(200,300);

launch=new Launcher(stones.body,{x:100,y:370})


mango1=new Mango(900,150,40,40)
mango2=new Mango(800,100,40,40)
mango3=new Mango(1000,160,40,40)
mango4=new Mango(830,230,40,40)
mango5=new Mango(930,70,40,40)
mango6=new Mango(700,160,40,40)
mango7=new Mango(1100,170,40,40)

tree=new Tree(900,250,500,500)

boy=createSprite(150,440,50,50)
boy.addImage(boyimg);
boy.scale=0.1




Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  
launch.display();
  tree.display();
  floor.display();
  stones.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

detectcollision(stones,mango1)
detectcollision(stones,mango2)
detectcollision(stones,mango3)
detectcollision(stones,mango4)
detectcollision(stones,mango5)
detectcollision(stones,mango6)
detectcollision(stones,mango7)

textSize(20)
text("PRESS SPACE BUTTON TO THROW AGAIN",100,100)

drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

 launch.fly();
}

function detectcollision(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){

      Matter.Body.setStatic(object2.body,false)
}

}



  function keyPressed(){
if(keyCode===32){

  Matter.Body.setPosition(stones.body,{x:100,y:300})
  launch.attach(stones.body)
}

  }