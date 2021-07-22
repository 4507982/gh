var issImg,iss,spaceCraft,spaceCraftImg,spacebg;

function preload(){
issImg = loadImage("Docking-undocking/iss.png");
spacebg= loadImage("Docking-undocking/spacebg.jpg");
spaceCraftImg = loadImage("Docking-undocking/spacecraft1.png");
}

function setup(){
createCanvas(1000,500);
iss = createSprite(500,250,20,20);
iss.addImage(issImg);

spaceCraft = createSprite(100,450,20,20);
spaceCraft.addImage(spaceCraftImg);
spaceCraft.scale = 0.2;

iss.setCollider("circle",50,30,275);
}

function draw(){
  background(spacebg)


if(keyDown(LEFT_ARROW)){
  spaceCraft.x = spaceCraft.x-2
}
if(keyDown(RIGHT_ARROW)){
  spaceCraft.x = spaceCraft.x+2
}
if(keyDown(UP_ARROW)){
  spaceCraft.y = spaceCraft.y-2
}
if(keyDown(DOWN_ARROW)){
  spaceCraft.y = spaceCraft.y+2
}
if(spaceCraft.isTouching(iss)){
  text("WE'VE DOCKED", 100, 25);
}
  drawSprites();
}