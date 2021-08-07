var snow=[]
function preload(){
  bg=loadImage("snow2.jpg")
}
function setup() {
  engine=Matter.Engine.create();
  world = engine.world;
  Matter.Engine.run(engine);
  createCanvas(800,400);
  
}

function draw() {
  background(bg); 
  var rand = Math.round(random(0,800));
  if(frameCount%5 === 0){
    snow.push(new Snow(rand,0,30))
  }
  for(var i = 0;i<snow.length;i++){
    snow[i].display();
  }
  drawSprites();
}