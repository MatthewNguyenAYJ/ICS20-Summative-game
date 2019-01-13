var currentScene;
var person; 
var buttonsX = 165;
var CharactersX = 80;
var AsteroidsShip

function setup()  {
  
  backgroundImg = loadImage("164833430-terraria-wallpapers.png");
  
  backgroundImg1 = loadImage("Character Screen Blurred With Title.png");
  
  IntroductionTitle = loadImage("Introduction Title.png");
  
  SpaceInvaders = loadImage("ScreenshotStarfield.png");
 
  WinBackground = loadImage("space-cartoon-001.jpg ")
  
  LoseBackground = loadImage("space01.jpg")
  
  omega = loadImage("(Character Buttons) Omega.png");
  Raven= loadImage("(Character Buttons) Raven .png");
  Ginger= loadImage("(Character Buttons) Ginger Gunne4r.png");
	Raptor= loadImage("(Character Buttons) Raptor.png");
  SkullTrooper = loadImage("(Character Buttons) Skull Trooper.png");

  createCanvas(840,560)
 
  var button= createButton(" Hold and Move To Start!");{
   button.mousePressed(resetSketch);
  }
  
  drawScene1();
  
  oShip= new omegaShip();
  rShip = new ravenShip();
  gShip = new gingerShip();
  raShip = new raptorShip();
  skullShip = new SkullTrooperShip();
  RavensAsteroidShip = new AsteroidsShip();

}

function resetSketch() {
drawScene1();
}

// Scene 1 (introduction screen)

var drawScene1= function(){ 
  currentScene = 1;
  
  image(backgroundImg,10,10,860,580);  
  fill(148,209, 26);
  
  image(IntroductionTitle,40,50,750,500);  

}

//Scene 2 (Character Screen)

var drawScene2= function(){
  currentScene = 2;

  image(backgroundImg1,10,10,840,560);  
	  
  image(Raven, CharactersX ,250, 175 , 175);

  image(Ginger, CharactersX + 250 , 250, 175 , 175);
 	
  image(Raptor, CharactersX + 500 , 250, 175 , 175)

 var Raptorbtn = new characterbutton({

	x: buttonsX + 505,
  y: 450,
  widht: 2,
  height:30,
  label: "Press 3!",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3();
  } 
	
                                   
  })

  Raptorbtn.draw();  

  var Ravenbtn = new characterbutton({

	x: buttonsX ,
  y: 450,
  widht: 2,
  height:30,
  label: "Press 1!",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3(); 
  } 
	
                                   
  })

  Ravenbtn.draw();  

  
  var GingerBtn = new characterbutton({

	x: buttonsX + 250,
  y: 450,
  widht: 2,
  height:30,
  label: "Press 2!",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3();
  } 
	                               
  })  
 
  GingerBtn.draw();
 
  }  

  // Scene 3 (second character screen)

  var drawScene3= function(){
	currentScene = 3;
  
  image(backgroundImg1,10,10,840,560);
  image(SkullTrooper, CharactersX , 225 , 225 , 225 );
  image(omega, CharactersX+460 , 225 , 225 , 225);

  var Skullbtn = new characterbutton({

	x: buttonsX+25 ,
  y: 500,
  widht: 2,
  height:30,
  label: "Press 4!",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3();
  }                                    
  })

  Skullbtn.draw();  

  
  var OmegaBtn = new characterbutton({

	x: buttonsX + 490,
  y: 500,
  widht: 2,
  height:30,
  label: "Press 5!",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3();
  }                                
  })  
 
OmegaBtn.draw(); 
     
}

// Scene 4 (Game Scene / space invaders)

var drawScene4= function(){
currentScene = 4;
image(SpaceInvaders,10,10,840,560);
}
  
// Scene 5 (Game Scene/ space invaders)

var drawScene5 = function(){
currentScene = 5;
background(SpaceInvaders, 10, 10, 840, 560)
}

var drawScene6 = function(){
currentScene = 6;
background(SpaceInvaders, 10, 10, 840, 560)
}

var drawScene7 = function(){
currentScene = 7;
background(SpaceInvaders, 10, 10, 840, 560)
}
 
var drawScene8 = function(){
currentScene = 8;
background(SpaceInvaders, 10, 10, 840, 560)
}

var drawScene9 = function(){
  currentScene = 9;
  background(SpaceInvaders, 10, 10, 840, 560)
  
}

// the win scene 
var drawScene10 = function(){
currentScene = 10;
background(WinBackground,10,10,840,560)
}


// Draw Functions

  draw = function(){
  if (currentScene === 3){
  drawScene3();
  } 
   
   else if (currentScene === 4) {
      drawScene4();
      rShip.show();          
  }
   
   else if ( currentScene === 5){
      drawScene5();
      gShip.show();
  } 
   else if ( currentScene ===6) {
      drawScene6();
      raShip.show();
  }
    else if (currentScene ===7) {
      drawScene7();
      skullShip.show();
  }
    else if(currentScene ===8) {
      drawScene8();
      oShip.show();
  }
    else if(currentScene ===9) {
      drawScene9();
      RavensAsteroidShip.render();
      RavensAsteroidShip.turn();
      RavensAsteroidShip.update();
  }

}
 
 // Scene Switch

 mouseClicked= function(){
 {  
 if (currentScene === 1) {
        drawScene2();
    } 
  
    else if (currentScene === 2) {
        drawScene3();
    } 
    
    else if (currentScene === 3) {
        drawScene4();
    }
  
   else if (currentScene === 4){
   	
   }
   
 }

 };
 
 

//Game interavite part

mouseClicked= function(){
  
if (currentScene === 1 ) {
        drawScene2();
} 
  else if(currentScene === 2 ){
    drawScene3();
}
};
       
    function keyReleased() {
      
    RavensAsteroidShip.setRotation(0);
      
    }

    keyPressed= function(){
   
   	if (currentScene=== 2 && keyCode=== 49){
    drawScene4();
    }
    else if (currentScene=== 2 && keyCode === 50) {
    drawScene5();
    } 
    else if (currentScene=== 2 && keyCode === 51) {
    drawScene6();
    }
    else if(currentScene ===3 && keyCode === 52){
    drawScene7();
    }
    else if(currentScene ===3 && keyCode === 53){
    drawScene8();
    }
    else if(currentScene ===3 && keyCode === 54){
    drawScene9();
    }
       
    if(keyCode === 68) {
    oShip.move (2);
    skullShip.move (2);
    rShip.move(2);
    gShip.move(2);
    raShip.move(2);
    console.log("68");
   }
  
   else if (keyCode === 65){
   oShip.move (-2);
   skullShip.move(-2);
   rShip.move(-2);
   gShip.move(-2);
   raShip.move(-2);
   console.log("65");
  }
   
  if( keyCode == 65) {
    RavensAsteroidShip.setRotation(0.1);
  }
  else if (keyCode == 68) {
    RavensAsteroidShip.setRotation(-0.1);
  }
  else if (keyCode == 87);
      RavensAsteroidShip.boost();
  }
    
    
    
    
  
