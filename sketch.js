var ship ,shipImg1;
var sea,seaImg;

function preload(){
seaImg=loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
createCanvas(1500,500);
sea=createSprite(200,200,4168,1667);
sea.addImage("fondo",seaImg)
sea.scale=0.5
ship=createSprite(200,200,100,100);
ship.addAnimation("barco",shipImg1)
ship.scale=0.5
}

function draw() {
  background("white");
  if(sea.x <0){
    sea.x=sea.width/2;
  }
  ship.velocityX=1
  drawSprites()
}