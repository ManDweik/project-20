var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1000,400);
  speed=random(55,90);
  weight=random(400,1500);



  
  car=createSprite(50,200,50,50);

car.velocityX=speed;
wall=createSprite(800,200,50,400);

}


function draw() {
  background(255,255,255);  

if (wall.x - car.x  < wall.width/2 + car.width/2){

  deformation=(0.5*weight*speed*speed)/22500;

car.velocityX=0;

}
if (deformation < 100){
car.shapeColor="green";
}
else
if(deformation>100&&deformation<180){
car.shapeColor="yellow";
}
else
if (deformation<180){
  car.shapeColor="red";
}

  drawSprites();
  




}