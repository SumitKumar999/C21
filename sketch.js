var movingRect, fixedRect, fixedRect2, fixedRect3;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200, 50,50);
  fixedRect = createSprite(400,100,50,100);
  fixedRect2 = createSprite(100,100,50,100);
  fixedRect3 = createSprite(700,100,50,100);
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  fixedRect2.shapeColor = "green"
  fixedRect3.shapeColor = "green"

}

function draw() {
  background("black");
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  console.log(fixedRect.x-movingRect.x);


  if(isTouch(fixedRect3,movingRect)) {//argument
    fixedRect3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}

