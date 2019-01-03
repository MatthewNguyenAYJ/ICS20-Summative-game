var currentScene;
var backgroundImg;
var backgroundImg1;
var img;
var img1;
var img2;

var person; 

function setup()  {
  
  backgroundImg = loadImage("164833430-terraria-wallpapers.png");
  backgroundImg1 = loadImage("1391869903220.png");
  img= loadImage("raven.0.jpg");
  img1= loadImage("ePvlnjYQ_400x400.jpg");
	img2= loadImage("fortnite-outfit-raptor.jpg");

  createCanvas(450,450)
 
  var button= createButton(" hold then move to reset");{
   button.mousePressed(resetSketch);
  }
  
  drawScene1();
  
}

 

function resetSketch() {
drawScene1();
}

// intro scene
var drawScene1= function(){ 
  currentScene = 1;
  image(backgroundImg,10,10,450,450);  
  fill(148,209, 26);
  textSize(30);
  text("GALACTACRAFT",120,200);
  textSize(20);
  text("press anywhere to start", 131,230)
}

//Character scene
var drawScene2= function(){
  currentScene = 2;
	image(backgroundImg1,10,10,450,450);  
  ellipse(25,25,25,25);
	fill(255,255,70);
  textSize(20);
  text("Pick Your Character", 120, 100);
  fill(166, 77, 243);
  text("Raven", 35,215);
  image(img, 25,250,100,100);
	fill(252,179, 95);
  text("Omega", 170, 215);
  image(img1, 160,250, 99, 99);
 	fill(250,0,0);
  text("Raptor",320,215);
  image(img2, 300, 250,105,105)
}



 
   


//game Scene
var drawScene3= function(){
	currrentScene = 3;
  image(backgroundImg,0,0,451,451);  
  image(img,150,145,92,92);
}







// interavite part 
mouseClicked= function(createCanvas){
     {
       if(currentScene===1){
     drawScene2();
     } 
  else if(currentScene==2){
  drawScene3();
  }
  	} 
};

  
