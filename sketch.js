
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500);
monkey = createSprite(50,400,30,30);
monkey.addAnimation("monkeyAni",monkey_running);
monkey.scale = 0.15;

ground = createSprite (250,450,500,10);
  
  
FoodGroup = createGroup();

obstacleGroup = createGroup();
  }


function draw() {
background(136,206,325);
ground.velocityX = -2;
    if (ground.x < 220){
      ground.x = ground.width/2;
    }
  
if(keyDown("space")&& monkey.y < 420){
monkey.velocityY = -12;
}

monkey.velocityY = monkey.velocityY + 0.8;
  
food();
obstacles();
 
  if (monkey.isTouching(FoodGroup)){
  survivalTime = survivalTime + 20;
}
survivalTime = Math.ceil(frameCount/frameRate())
fill("black")
textSize(20)
text("Survival Time :"+ survivalTime, 250,60)

monkey.collide(ground) ;
  

drawSprites();
  
}

function food(){
if (World.frameCount%150 === 0){
lb = Math.round(random(200,350));
banana = createSprite (500,lb,3,3);
banana.addImage(bananaImage);
banana.scale = 0.11;
banana.velocityX = -2;
FoodGroup.add(banana)}
}

function obstacles(){
  if (World.frameCount%300=== 0){
    obstacle = createSprite (500,429,30,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;
    obstacleGroup.add(obstacle);
  }
}






