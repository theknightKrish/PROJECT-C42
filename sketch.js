var iSS_image , sE_image , sE_image1 , sE_image2, sE_image3;
var bg, iss , spaceCraft;
var hasDocked = false;



function preload(){

bg = loadImage("spacebg.jpg")
iSS_image = loadImage("iss.png")
sE_image = loadImage("spacecraft1.png")
sE_image1 = loadImage("spacecraft2.png")
sE_image2 = loadImage("spacecraft3.png")
sE_image3 = loadImage("spacecraft4.png")


}





function setup() {
  createCanvas(800,400);


 iss = createSprite(330,130);
iss.addImage(iSS_image);
iss.scale = 0.5; 

 spaceCraft = createSprite(280,240);
 spaceCraft.addImage(sE_image);
 spaceCraft.scale = 0.15;


}

function draw() {
  background(bg);  

if(!hasDocked){
  spaceCraft.x = spaceCraft.x + Math.random(-1,1)

  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(sE_image3);
    spaceCraft.x = spaceCraft.x -1 ;
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(sE_image2);
    spaceCraft.x = spaceCraft.x +1  ;
  }

  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y -2 ;
  }
 
  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(sE_image1);
  }

  

}


if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x - 10)){
  hasDocked = true;
  textSize(25);
  fill("white");
  text("DOCKING SUCCESSFUL ", 200,300)
}

  drawSprites();
  
}