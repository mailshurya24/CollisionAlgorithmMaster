var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  
  rect1 = createSprite(200,100,50,50);
  rect1.shapeColor = "green";

  rect2 = createSprite(300,100,50,50);
  rect2.shapeColor = "green";

  rect3 = createSprite(400,100,50,50);
  rect3.shapeColor = "green";

  rect4 = createSprite(500,100,50,50);
  rect4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect2))
  {
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  else 
  {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  if(isTouching(movingRect,rect1))
  {
    movingRect.shapeColor = "white";
    rect1.shapeColor = "white";
  }
  else 
  {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }
  drawSprites();
}
