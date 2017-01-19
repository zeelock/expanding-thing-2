
function particle(){
  
  
  this.pos = createVector(random(100),random(100));
   this.vel = p5.Vector.random2D(100);
   this.ass = createVector(0,0);
  
  
  this.update = function(){
    
   this.vel.add(this.acc);
   this.acc.add(this.vel);
  this.acc.mult(0);
}
  
 this.applyForce = function(force){
 this.acc.add(force);
}
  
  this.show = function(){
  stroke(0);
  point(this.pos.x,this.pos.y);
  
}}