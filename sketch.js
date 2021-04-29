  
var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;

function setup() {

createCanvas(800,800);

fixedRect = createSprite(600, 400, 50, 80);
fixedRect.shapeColor = "green";

movingRect = createSprite(800, 400,80,30);
movingRect.shapeColor = "green";
 rect1=createSprite(100, 100, 50, 50);
 rect2=createSprite(200, 100, 50, 50);
 rect3=createSprite(300, 100, 50, 50);
 rect4=createSprite(400, 100, 50, 50);
 rect1.shapeColor = "green";
 rect2.shapeColor = "green";
 rect3.shapeColor = "green";
 rect4.shapeColor = "green";

}

function draw() {
  background("black");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect1)){
    movingRect.shapeColor = "blue";
    rect1.shapeColor  = "blue";
  }else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }

if(isTouching(movingRect,rect2)){
  movingRect.shapeColor="yellow";
  rect2.shapeColor="yellow";
}else{
  movingRect.shapeColor="green";
  rect2.shapeColor="green";
}

if(isTouching(movingRect,rect3)){
  movingRect.shapeColor="white";
  rect3.shapeColor="white";
}else{
  movingRect.shapeColor="green";
  rect3.shapeColor="green";
}


if(isTouching(movingRect,rect4)){
  movingRect.shapeColor="pink";
  rect4.shapeColor="pink";
}else{
  movingRect.shapeColor="green";
  rect4.shapeColor="green";
}










  
drawSprites();
}
