const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, wall, ball, ground

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  
  world=engine.world;

  var wall_options={
    isStatic: true
  }
  
  var ball_options={
    restitution: 1
  }

  ball = Bodies.circle(200,200,20,ball_options);

  wall = Bodies.rectangle(200,380,400,20,wall_options);

  World.add(world, ball);

  World.add(world,wall);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(wall.position.x,wall.position.y,400,20);
}