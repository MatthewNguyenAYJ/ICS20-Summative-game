function raptorShip(){

this.x = width/2;

  this.show = function(){
  var x = constrain(this.x, 10,775);
    image(Raptor, x, height- 90, 70, 90);
  }

this.move = function(dir){
  this.x += dir*10
  }
}