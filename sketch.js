const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground1(200,height,2000,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    pig1 = new Pig(800,350)
    log1 = new Log(800,260,300,PI/2)
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    pig2 = new Pig(800,220)
    log2 = new Log(800,190,300,PI/2)
    
    box5 = new Box(800,160,70,70)
    log3 = new Log(760,120,150,PI/6)
    log4 = new Log(850,120,150,-PI/6)

    bird = new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    
    bird.display();
}
