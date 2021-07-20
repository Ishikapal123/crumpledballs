const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

let engine;
let world;
var ground;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  
  world = engine.world;
ground=new Ground(600,590,1200,20);
right=new Ground (1190,300,20,600);
left=new Ground(10,300,20,600);
topwall=new Ground(600,10,1200,20);
leftside=new Ground(900,550,20,120);
rightside=new Ground(1110,550,20,120);

var ball_options={
restitution:0.3,
friction:0,
density:1.2,
}

ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
ellipse(ball.position.x,ball.position.y,20)




  ground.show();
  right.show();
  left.show();
  topwall.show();
  leftside.show();
  rightside.show();
}
 
   


 function keyPressed(){
   if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
   }
 }
