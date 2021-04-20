var movingRect, FixedRect;

function setup() {

  createCanvas(800,400);
  movingRect=createSprite(400,200,80,30);
  FixedRect=createSprite(400,200,50,80);
  movingRect.shapeColor="red";
  FixedRect.shapeColor="green";
  
}

function draw() {
  background(0);  
  drawSprites();
  movingRect.x=mouseX;
  movingRect.y=mouseY;
if(movingRect.x-FixedRect.x<FixedRect.width/2+movingRect.width/2 && FixedRect.x-movingRect.x<movingRect.width/2+FixedRect.width/2
  && movingRect.y-FixedRect.y<FixedRect.width/2+movingRect.width/2 && FixedRect.y-movingRect.y<movingRect.width/2+FixedRect.width/2) {
movingRect.shapeColor="yellow";
FixedRect.shapeColor="yellow";
}
else{
 movingRect.shapeColor="red";
 FixedRect.shapeColor="green";
}

}