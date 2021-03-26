
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball
var ground1
var dustbin, dustbin2,dustbin3, dustIm, dust
var brick1, brick2,brick3
var papim, pap
function preload()
{ papim= loadImage("sprites/dust.png");
}

function setup() {
	createCanvas(8600, 800);
pap= createSprite(1280,570,0,0);
//brick1= createSprite(1160,600,10,340);
//brick2= createSprite(1410,600,10,340);
//brick3= createSprite(1410,700,200,20);
	engine = Engine.create();
	world = engine.world;

paperball = new Paper(175,250);
ground1 = new Ground(700,780,3000,200);
dustbin= new Bin(1380,600,25,270);
dustbin2= new Bin(1160,600,20,270);

pap.addImage(papim)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
//brick1.shapeColor("white")
  ground1.display();
  dustbin.display();
  dustbin2.display();

  //brick3.display();
  //brick1.display();
  //brick2.display();
  paperball.display();

  pap.display();

 // KeyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
   //setStatic(paperball,true)
  /// paperball.isStatic= true
     Body.applyForce(paperball.body, paperball.body.position,{x:24,y:-24});
    // Body.applyForce(paperball.body, .body.position,{x:-75,y:75});

    // Body.applyForce(paperball.body, paperball.body.position,{x:-5,y:85})
  }
 
}



