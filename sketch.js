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


function characterbutton (config) {
	
 		this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width ||89;
    this.height = config.height || 0;
    this.label = config.label || "Click";
    this.color = config.color || color(212, 30, 30);
    this.onClick = config.onClick ||
  
function() {};
}
characterbutton.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(81, 242, 0);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 0);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};

characterbutton.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

characterbutton.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};


var ravenBtn = new characterbutton({

	x: 80,
  y: 398,
  widht: 20/2,
  height:30,
  label: "This one !",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3();
}  

                                   
})

ravenBtn.draw();

var omegaBtn = new characterbutton({

	x: 205,
  y: 398,
  widht: 2,
  height:30,
  label: "This one !",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3();
} 
	
                                   
})

omegaBtn.draw();  

  
var raptorBtn = new characterbutton({

	x: 350,
  y: 398,
  widht: 2,
  height:30,
  label: "This one !",
  color: (230,187,252),
  
  onClick: function() {
  drawScene3();
} 
	
                                   
})  
 
raptorBtn.draw();


function optionbutton(config){
 		this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width ||89;
    this.height = config.height || 0;
    this.label = config.label || "Click";
    this.color = config.color || color(212, 30, 30);
    this.onClick = config.onClick ||
  
function() {};

}
 
optionbutton.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(81, 242, 0);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 0);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};   

optionbutton.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

optionbutton.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }



};

var nextBTN = new optionbutton({
x: 383,
  y: 72,
  widht: 2,
  height:30,
  label: "next",
  color: (230,187,252),

  onClick: function() {
  drawScene3();
} 
  
})
nextBTN.draw();
}

//game Scene
var drawScene3= function(){
	currrentScene = 3;
  image(backgroundImg,0,0,451,451);  
  image(img,mouseX,mouseY,90,90)

}



 draw= function(){
 if (currentScene === 3){

 }
 }



// interavite part 
mouseClicked= function(){
  { 
    if(currentScene===1){
     drawScene2();
		} 
  		
else if(currentScene==2){
  drawScene3();
 }
    
    
}


};

  
