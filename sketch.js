var bg;
var snowflakes;
var snowflakesImg;

function setup() {
  createCanvas(1200, 1000);
  //createSprite(400, 200, 50, 50);
}
function preload(){
  bg = loadImage("snow1.jpg");
  snowflakesImg = loadImage("snow4.webp");
}

function draw() {
  background(bg);  
  drawSprites();
  createSnowflakes();
}
function createSnowflakes(){
  if(frameCount%10 === 0){
    snowflake = createSprite(random(0, 800), 0, 50, 50);
    snowflake.velocityX = -2;
    snowflake.velocityY = 4;
    snowflake.addImage(snowflakesImg);
    snowflake.scale = 0.1
  }
}