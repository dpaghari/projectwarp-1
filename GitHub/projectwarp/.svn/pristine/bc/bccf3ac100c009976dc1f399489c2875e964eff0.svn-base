function teleport(){
		guy.x = bullet.x;
		guy.y = bullet.y;	
		world.removeChild(bullet);
		bulletAlive = false;
		
	}
function Flux(){
	
	var spr = new Sprite();
	spr.xoffset = -spr.width / 2;
	spr.yoffset = -spr.height / 2;
	spr.image = Textures.load("http://people.ucsc.edu/~dpaghari/sprites/fatkid.jpg");
	this.addChild(spr);
}


Flux.prototype = new Sprite();
Flux.prototype.width = 50;
Flux.prototype.height = 50;
var gravity = 0.5;
var acceleration = 0;
var bulletAlive = false;
var bulletAmount = 0;
var bullet;
gInput.addBool(32, "space");
// A
gInput.addBool(65, "left");
// D
gInput.addBool(68, "right");
// S
gInput.addBool(83, "down");
// W
gInput.addBool(87, "up");

Flux.prototype.shootBullet = function(){
	

	if(bulletAlive == false){
		
		var minX = this.x;
		var maxX = this.x + this.width;
		var minY = this.y;
		var maxY = this.y + this.height;
		var mx = gInput.mouse.x;
		var my = gInput.mouse.y;
		
		
		bullet = new Sprite();
		bullet.width = 10;
		bullet.height = 10;
		bullet.x = guy.x;
		bullet.y = guy.y;
		
		var directionX = (mx - bullet.x);
		var directionY = (my - bullet.y);
		var unit = Math.sqrt(directionX*directionX + directionY*directionY);		// unit vector
		directionX /= unit;
		directionY /= unit;
		bullet.image = Textures.load("http://people.ucsc.edu/~dpaghari/sprites/fries.png");
		world.addChild(bullet);
			bullet.update = function(d){
				var speed = 15;
				
				this.x += directionX*speed;
				this.y += directionY*speed;	
				
				if(this.x < 0){
        		//Reverse the direction
        		directionX = -directionX;
        		//Position the sprite so that it's back within the bounds
        		this.x = 0;

    			//If it hits the right edge
    			}else if(this.x > canvas.width){
        		//Reverse the direction
        		directionX = -directionX;

        		//Position the sprite so that it's back within the bounds
        		this.x = canvas.width;
    			}
    
    			//If it hits the top edge (the top left corner of the canvas is 0,0)
    			if(this.y < 0){
        		//Reverse the direction
        		directionY = -directionY;

        		//Position the sprite so that it's back within the bounds
        		this.y = 0;

    			//If it hits the bottom edge
   			 	}if(this.y > canvas.height){
       			 //Reverse the direction
        		directionY = -directionY;

        		//Position the sprite so that it's back within the bounds
        		this.y = canvas.height;
    			}
				
				
			}
			bulletAlive = true;
		
			
	}
				
}



Flux.prototype.update = function(d){
	var speed = 3;						// main character's movespeed
	
	
	gInput.addLBtnFunc(this.shootBullet);
	//moves to the left
	if (gInput.left) {
        this.x -= speed;
    }
    //moves to the right.
    if (gInput.right) {
        this.x += speed;
    }
    //gravity pulls the guy down
    if (this.y < 500) {
    	acceleration += gravity;		// increases speed when falling so as to simulate gravity better
        this.y += acceleration;
    }
    else{
    	acceleration = 0;
    }
    // jump
    if (gInput.up) {
          this.y -= 15;
          
          
    }
    //teleport when space is pressed.
    if (gInput.space){
    	if(bulletAlive == true){
    		teleport();
    	}
    }
    
    // Find horizontal & vertical  distance between sprite and mouse
    var xDis = gInput.mouse.x - this.x;
    var yDis = gInput.mouse.y - this.y;
    // Use those distances and the arctan to calculate angle from sprite to mouse
    var t = Math.atan2(yDis, xDis);
    var angle = (t > 85) ? 85 : t;
    this.rotation = angle;
			
}

Flux.prototype.draw = function(ctx){
	
	this.drawChildren(ctx);
}
