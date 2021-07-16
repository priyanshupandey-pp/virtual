//Create variables here
var dog;
var foodS;
var dog1;
var addFood;
function preload()
{
 dogimg3=loadImage("images/dogimg1.png");
 dogimg2=loadImage("images/dogimg.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog1=createSprite(400,350,30,20)
  dog1.addImage("running",dogimg2)
  dog1.scale=0.3
}


function draw() {  
  background("green")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage("dog",dogimg3)
  }
  drawSprites();
  


  //add styles here
}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  if(x<0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}