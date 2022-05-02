var forestimg,forest
var shinchanimg,shinchan
var invisibleground
var chocolateimg,chocolate

function preload(){
  forestimg = loadAnimation("forest.gif")
  shinchanimg = loadAnimation("shin1.png","shin2.png")
  chocolateimg = loadAnimation("shin.gif")
}
function setup(){
  createCanvas(900,400) 
  forest = createSprite(450,200,900,400)
  forest.addAnimation("moving",forestimg)
  forest.scale=1.75

  shinchan = createSprite(78,298,20,20)
  shinchan.addAnimation("running",shinchanimg)

  invisibleground=createSprite(450,380,900,20)
  invisibleground.visible=false
}
function draw(){ 
 background("blue") 

  if(keyDown("up") && shinchan.y>=120){
    shinchan.velocityY=-10
  }
  shinchan.velocityY=shinchan.velocityY+.8
  



  shinchan.collide(invisibleground)
  spawnchocolate()
 drawSprites()
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}
function spawnchocolate(){
  if(frameCount%200===0){
    chocolate=createSprite(837,304,20,20)
    chocolate.addAnimation("choclate",chocolateimg)
    chocolate.velocityX=-2
    chocolate.scale=0.5
  }
    
}