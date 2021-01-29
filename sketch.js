var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,800);
 speed=random(55,90);
 weight=random(400,1500);
 car=createSprite(50,200,50,50);
 car.velocityX=speed;
 wall=createSprite(1000,200,50,height/2)
 wall.shapeColor="red";
}

function draw() {
  background("black");
  if (wall.x-car.x<=wall.width/2+car.width/2 &&
    car.x-wall.x<=car.width/2+wall.width/2 )
{
car.velocityX=0;
var deformation=0.5*weight*speed
if(deformation>180){
  car.shapeColor="blue"
}
if(deformation<180 && deformation>100){
  car.shapeColor="yellow"
}
if(deformation<100){
  car.shapeColor="green"
}
  }
 
  drawSprites();
}
