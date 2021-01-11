//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogImg,hDogImg;

function preload()
{
  //load images here
  dogImg = loadImage(dogImg.png);
  hDogImg = loadImage(dogImg1.png);

  

}

function setup() {
	createCanvas(500, 500);
  var dog = createSprite(250,250,20,20);
  


}


function draw() {  

  drawSprites();
  //add styles here

  

}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    
  })
}



