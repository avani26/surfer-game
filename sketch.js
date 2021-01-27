var invsibackground,bcgrndimg,background1;
var surfer,surferimg;
var stimg,treeimg;
var obstaclegrp;

function preload(){
  bcgrndimg=loadImage("sea.jpg");
  surferimg=loadImage("surfer.png");
  treeimg=loadImage("trees.jpg");
  stimg=loadImage("rock.jpg");
}

function setup() {
  createCanvas(800,350);
 // createSprite(400, 200, 50, 50);

 background1 = createSprite(400,0,800,350);
 background1.addImage(bcgrndimg);
 background1.velocityX=-3;

 invsibackground= createSprite(400,250,800,10);
 invsibackground.visible=false;

 surfer = createSprite(50,250,20,20);
 surfer.addImage(surferimg);
 surfer.velocityX=0;

 obstaclegrp= new Group();


}

function draw() {
  background(255);
  
  if(background1.x<100){
    background1.x=400;
  }
obstacles();
  surfer.collide(invsibackground);

  if(keyDown(UP_ARROW)){
    surfer.velocityY=-5;
  }
surfer.velocityY=surfer.velocityY+0.8;

  drawSprites();
}



function obstacles(){
if(frameCount%100===0){
  var obs=createSprite(800,250,20,20);
  obs.velocityX=-3;
  obs.scale=0.5;
  obs.lifetime=266;
  var rand= Math.round(random(1,2));
obstaclegrp.add(obs);

  if(rand===1){
    obs.addImage(stimg);
  }
  else{
    obs.addImage(treeimg);
  }
}
}