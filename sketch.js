var M = 1;
var N = 1500;


function reset (){
  
  pos = createVector(60,400);
v = createVector(2,6);
B = new Array(N);
C = new Array(M);

 
 
  
 
 for (n = 0; n<N ; n++ ){
     B[n] = new ball(width/2,height-1);
  }
}

function setup() {
  
  createCanvas (windowWidth,windowHeight);


reset();


}

function draw(){
 background(255);


 for (n = 0;n < N ; n++){
   B[n].evolv_draw();
 }
  
  
}
function rotatex (point,center,angle){
  
  var output = createVector(0,0);
 
  var point1 = p5.Vector.sub(point,center);
  
  output.x = point1.x * cos(angle) - point1.y * sin(angle);
  
  output.y = point1.x * sin(angle) + point1.y * cos(angle);
 
  output.add(center);
 
 return output;
  
 
  
}
var ball = function(){
  
  this.pos = createVector(width*0.5,height*0.5);
   this.v = p5.Vector.random2D();
    this.v.mult(random(5,5));
    
     this.pas = createVector(width*0.5,height*0.5);
      this.b = p5.Vector.random2D();
       this.b.mult(random(5,5));
       
       

  this.moons = createVector(this.pas.x, this.pas.y + 50 );
 this.moon = createVector(this.pos.x, this.pos.y + 50 );
 
 
   this.ball1 = createVector(this.pos.x,this.pos.y);
   this.ball2 = createVector(this.pas.x,this.pas.y);
    
  this.evolv_draw = function(){
    
    this.pos.add(this.v);
      this.pas.add(this.b);
      
     
    if (this.pas.x >= width || this.pas.x < 0){
    this.b.x= this.b.x*-1;
    }
      
    if (this.pas.y >= height || this.pas.y < 0){
      this.b.y= this.b.y*-1;
    }
    
    
      this.moons.add(this.b);
      this.moons = rotatex(this.moons,this.pas,0.1);
  
      this.moon.add(this.v);
      this.moon = rotatex(this.moon,this.pos,0.1);
   
    
    if (this.pos.x >= width || this.pos.x < 0){
      this.v.x= this.v.x*-1;
    }
    
    if (this.pos.y >= height || this.pos.y < 0){
      this.v.y= this.v.y*-1;
    }
     
     
    //line( this.pos.x , this.pos.y , this.pas.x , this.pas.y );
    fill(0,0,255 );
      //ellipse (this.pos.x , this.pos.y ,5 ,5 );
     
      //ellipse (this.pas.x , this.pas.y ,5 ,5 );
     
        //ellipse (this.moon.x , this.moon.y ,5 ,5 );
       
        //ellipse (this.moons.x , this.moons.y ,5 ,5 );
        
        
  
        this.diss = this.pas.dist(this.pos);
        
        if (this.diss < 500 ) {
          
          line(this.pos.x , this.pos.y , this.pas.x , this.pas.y);
          fill(255,0,0);
           //ellipse (this.pos.x , this.pos.y ,5 ,5 );
     
          //ellipse (this.pas.x , this.pas.y ,5 ,5 );
        }
          //if(this.diss > width+00){
            
            //reset();
            
      //    }
        
        };
    
  };
  
  
