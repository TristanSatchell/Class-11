
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground1=loadAnimation("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)
 ground=createSprite(200,180,400,20)
 trex.scale=0.25
 ground.addAnimation("groundimage",ground1)

}

function draw(){
  background("white")
  if (keyDown("space")){
trex.velocityY=-2
  }
  drawSprites();

}
