const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
divisions = []
var divisionHeight = 300;
var plinkos = [];
var particles = [];
var part1;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

  ground = new Ground(600,700,1200,20);
  part1 = new Particle(200,500,5);
}

function draw(){
    background("blue");
    Engine.update(engine);
    part1.display();
    
    ground.display();
}


