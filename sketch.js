
var monkey,monkey_running,ground
var banana,bananaImage,obstacle,obstacleImage
var FoodGroup,StoneGroup,survivalTime = 0;
var score = 0;

function preload()
{  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() 
{
   createCanvas(600,600); 
    background(225); 

  ground = createSprite(300,560,600,10);
   ground.velocityX = -4;
   
  monkey = createSprite(100,560,20,200);    
  monkey.addAnimation("moving",monkey_running); 
  
 // if(monkey.isTouching(FoodGroup))
  //{
    //foodGroup.destroyEach();
  //}

  
}


function draw() 
{  
 
background(225); 
  textSize(20);
  survivalTime = Math.round(World.frameCount/7);
  text("survivalTime:  "+survivalTime,400,100)
  
  textSize(20);
   
  text("score:  "+score,200,50);
  
   if(ground.x<300)
    {
       ground.x = ground.width/2;
    }
  monkey.collide(ground);
  monkey.scale = 0.2;
   //monkey.velocityX = 2;
    if (keyWentDown("space") && monkey.x >= 50)
    {
          monkey.velocityY =  -15; 
      
    }    
   monkey.velocityY = monkey.velocityY + 0.3;

  
    food();
  stone();
   
  StoneGroup = createGroup();
  FoodGroup = createGroup();
  
 if(monkey.isTouching(FoodGroup))
 {
    banana.destroy();
    score = score+2; 
 }

drawSprites();  
  
}

function stone()
{
 if(World.frameCount%300 == 0)
 { 
  obstacle = createSprite(600,500,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.3;
  obstacle.velocityX = ground.velocityX;
  }
  //StoneGroup.add(obstacle);
  }
function food()
{
if(World.frameCount%80 == 0){ 
  banana = createSprite(500,200,200,200);
  banana.addImage(bananaImage);
  
  banana.velocityX = -3;
  banana.setLifetime = 100;
  banana.scale = 0.2;
  FoodGroup.add(banana);
}
}
 
 