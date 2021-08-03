var ocean;
var ship ;
var seaImg , shipImg ;
function preload(){
 seaImg = loadImage ("sea.png")
 shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(900,670);
   ocean = createSprite (400,300)
   ocean.addImage("sea",seaImg);
   ocean.scale = 0.3 ;
   ocean.velocityX = -2;

  ship = createSprite(170,320)
  ship.addAnimation("ship_in_motion",shipImg)
  ship.scale = 0.5;
}

function draw() {
 
 if (ocean.x < 0){
    ocean.x = ocean.width / 8 ;
 }    
  

  drawSprites ();
}