const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var box1,bad1,bad2;
var rand;

function preload(){
    bg=loadImage("bank.jpg");
}
function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1500,20);
    ball = new Ball(200,200,200,200);
    box1 = new Box(700,100,300,500);
    bad1 = new Bad1(500,100,300,500);
    bad2 = new Bad2(700,100,300,500);
   // rope = new Rope(ball.body,{x:500 , y:50}) ;


}

function draw(){
    background(bg);
    Engine.update(engine);
    strokeWeight(4);
  rand=Math.round(random(1,12));
  if(rand===2 || rand===3 || rand===4 || rand===5){
    box1.display();
  }
else if( rand===6|| rand===7 || rand===8 || rand===9){
    bad1.display();
  }
  else if( rand===10 || rand===11 || rand===12 || rand===1){
    bad2.display();
  }
    
    
    ground.display();
   
    ball.display();
  ////  rope.display();
}

//function mouseDragged(){
    //Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
//}


