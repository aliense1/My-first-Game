var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimg;
var Ob1 , Ob2 , Ob3 , Ob4 , Ob5 , Ob6;

var rand;

var score;


var a=Math.round(random(1,10));
console.log('a')


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudimg = loadImage("cloud.png");
Ob1  = loadImage("obstacle1.png")
Ob2  = loadImage("obstacle2.png")
Ob3  = loadImage("obstacle3.png")
Ob4  = loadImage("obstacle4.png")
Ob5  = loadImage("obstacle5.png")
Ob6  = loadImage("obstacle6.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  

  
}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.4            
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds();
  
  spawnObstacles();

  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){

 
 if(frameCount %60 ==0){
  cloud=createSprite(600,100,40,10);
  cloud.y =Math.round(random(110,130))
  cloud.velocityX=-3;
  cloud.addAnimation("cloud",cloudimg)
  cloud.scale = 0.5;
  trex.depth = cloud.depth
  trex.depth = trex.depth+1
  cloud.lifetime=200   
}
}

function spawnObstacles() 
{
 if(frameCount %60 ==0){
  obstacle = createSprite(600,160,10,40)
  obstacle.velocityX = -3
  obstacle.scale = 0.5
  rand =  Math.round(random(1,6))
  switch(rand){
  case 1: obstacle.addImage(Ob1)
  break 
  case 2: obstacle.addImage(Ob2)
  break
  case 3 : obstacle.addImage(Ob3)
  break
  case 4 : obstacle.addImage(Ob4)
  break
  case 5 : obstacle.addImage(Ob5)
  break
  case 6 : obstacle.addImage(Ob6)
  break

  default:break
 }
 }
}
