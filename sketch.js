var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var score;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	score = 0;

}


function draw() {
  background(bgImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(keyDown("left")){
	  fairy.velocityX = -6;
  }
  if(keyDown("right")){
	  fairy.velocityX = 6;
  }
  //if(keyDown("down")){
	//  star.velocityY = 6;
	  //starBody = Bodies.circle(650,30,5,{retitution:0.5, isStatic:false});
  //}
  keyPressed();

  drawSprites();
  fill("lightblue");
  textSize(17);
  text("press side arrow key to move the fairy; press down arrow key to make the star fall",100,360);
  
  fill("white");
  textSize(20);
  text("Score: "+score,100,100);
}

function keyPressed() {
	//write code here
	if (keyCode === DOWN_ARROW) { 
		Matter.Body.setStatic(starBody,false);
		}
	if(starBody.position.y > 470){
	  // World.add(world);
	  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world,starBody);
	score = score+1;
	}
	
	
}
