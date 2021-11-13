var bg,player,playerImg1,PlayerImg2;

function preload(){
bg=loadImage("assets/bg.jpeg")
playerImg1=loadImage("assets/shooter_2.png")
playerImg2=loadImage("assets/shooter_3.png")
}
function setup(){
createCanvas(windowWidth,windowHeight);
player=createSprite(250,50,15,15);
player.addImage(playerImg1);
player.scale=0.6;
}
function draw(){
background(bg);
if(keyDown("up")){
player.y=player.y-25;
}
if(keyDown("down")){
player.y=player.y+25;
}
if(keyWentDown("space")){
player.addImage(playerImg2)
}
if(keyWentUp("space")){
player.addImage(playerImg1)
}

drawSprites();
}