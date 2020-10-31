function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200, 200, 80, 30);
  fixedRect=createSprite(400, 200, 50, 80);
  box1=createSprite(400,50,50,50)
  box2=createSprite(100,50,50,50)
  box1.velocityX=-3
  box2.velocityX=+3

}

function draw() {
  background(0);  

 // movingRect.x=mouseX
 // movingRect.y=mouseY

  bounceOff(box1,box2)

  if(isTouching(movingRect,fixedRect)){
      movingRect.shapeColor="red"
      fixedRect.shapeColor="red"

    }
    else{
      movingRect.shapeColor="green"
      fixedRect.shapeColor="green"
    }
  drawSprites();
}

