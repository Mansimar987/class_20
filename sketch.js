var movingRect ,fixedRect ;



function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(60,50,50,30);
  fixedRect = createSprite(400, 200, 50, 40);
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
}

function draw() {
  background(0,0,0);
  
  movingRect.x = World.mouseX
movingRect.y = World.mouseY 

if(movingRect.x - fixedRect.x <movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x <movingRect.width/2 + fixedRect.width/2
 && movingRect.y - fixedRect.y <movingRect.width/2 + fixedRect.width/2
 && fixedRect.y - movingRect.y <movingRect.width/2 + fixedRect.width/2
  ){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } else{
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
  drawSprites();
}