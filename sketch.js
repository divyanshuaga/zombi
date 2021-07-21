const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var bridge , base , base2;
var jointpoint,link,ground;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8;
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  bridge = new Bridge (14,{x:width/2-400,y:height/2});
  jointpoint=new Base(width-600,height/2+10,40,20);
 base = new Base(300,height/2+50,600,100);
 base2 = new Base(width-300,height/2+50,600,100);
 ground = new Base(0,height-10,width*2,20);
 Matter.Composite.add(bridge.body,jointpoint);
 link = new Link(bridge,jointpoint);
 ball1 = new Stone(random(100,600,),random(-10,140),60);
 ball2 = new Stone(random(100,600,),random(-10,140),60);
 ball3 = new Stone(random(100,600,),random(-10,140),60);
 ball4 = new Stone(random(100,600,),random(-10,140),60);
 ball5 = new Stone(random(100,600,),random(-10,140),60);
 ball6 = new Stone(random(100,600,),random(-10,140),60);
 ball7 = new Stone(random(100,600,),random(-10,140),60);
 ball8 = new Stone(random(100,600,),random(-10,140),60);
}

function draw() {
  background(51);
  Engine.update(engine);
 base.display();
 base2.display();
 ground.display();
 bridge.show();
 jointpoint.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 ball6.display();
 ball7.display();
 ball8.display();
}
