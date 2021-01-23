var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(223, 321)
  weight=random(30, 52)

  bullet=createSprite(50, 200, 30, 70)
  bullet.velocityX=speed;
  bullet.shapeColor="black  ";

  wall=createSprite(1200, 200, thickness, height/2)
  wall.shapeColor="white";

  thickness=random(22, 83)
}

function draw() {
  background("grey");  
if(hasCollided(bullet, wall)) {
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10) {
  wall.shapeColor=color(255, 0, 0);
}

if(damage<10) {
  wall.shapeColor=color(0, 250, 0);
}

}

  drawSprites();
}

function hasCollided(Lbullet, Lwall) {
  bulletRightEdge = Lbullet.width+Lbullet.x;
  wallLeftEdge = Lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}