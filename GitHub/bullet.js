/*------------------- 
a player entity
-------------------------------- */
var BulletEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
    	settings.spritewidth = 14;
    	settings.spriteheight = 14;
        // call the constructor
        this.parent(x, y, settings);
        var counter = 0;
        this.animationspeed = 1;
        this.addAnimation("fly",[0,1,2,3,4,5,6,7,8,9,10,11]);
        //this.setVelocity(10, 20);
        this.gravity = 0;
        this.collidable = true;
        // returns current game time
        this.speed = 10;
        this.rubber = false;		//rubberwallv
        this.checkcol = 0;			//rubberwallv
        this.timeAlive = me.timer.getTime();
       
    },
    
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	var elapsedTime = me.timer.getTime() - this.timeAlive;	
    	var collision = this.collisionMap.checkCollision(this.collisionBox, this.vel);
		var res = me.game.collide(this);
		
    
    
    
     if (res && (res.obj.type === "greenLaserv")){											// if the bullet hits a vertical green laser
       	      if (res.x != 0)
              {
                           // x axis
                       if (res.x<0){																
                          me.game.remove(this);												// destroy it
                          bulletAlive = false;  
                       }
                    
                       
                       else{
                           me.game.remove(this);
                           bulletAlive = false;            	
                       }
                      
              }
           
       }
         if (res && (res.obj.type === "greenLaserh")){											// if the bullet hits a horizontal green laser
	   	   if (res.y != 0)
              {
              	if (res.y > 0){
              		me.game.remove(this);														// destroy it
              		bulletAlive = false;
              	}
              	else{
              		me.game.remove(this);
              		bulletAlive = false;
              	}
              }
	   	
	   } 
        if (res && (res.obj.type === "glassWallv")){											// if the bullet hits a vertical glass wall
       	      if (res.x != 0)
              {
                           // x axis
                       if (res.x<0){																
                           direction = new me.Vector2d(-vectorX*speed, vectorY*speed);				// reverse the direction of the bullet
                           this.vel=direction;      
                           me.audio.play("cling");     
                       }
                    
                       
                       else{
                           direction = new me.Vector2d(-vectorX*speed, vectorY*speed);
                           this.vel=direction;   
                           me.audio.play("cling");            	
                       }
                      
              }
           
       }
	    
	   if (res && (res.obj.type === "glassWallh")){											// if the bullet hits a horizontal glass wall
	   	   if (res.y != 0)
              {
              	if (res.y > 0){
              		direction = new me.Vector2d(vectorX*speed, -vectorY*speed);						// reverse the direction of the bullet
                           this.vel=direction;      
                           me.audio.play("cling");
              	}
              	else{
              		direction = new me.Vector2d(vectorX*speed, -vectorY*speed);
                           this.vel=direction;      
                           me.audio.play("cling");
              	}
              }
	   	
	   } 
	   if (res && (res.obj.type == "rubberWallv")){											// if the bullet hits a vertical rubber wall
       	      this.rubber = true
       	      this.checkcol++;
       	      /*if (res.x != 0)
              {
                           // x axis
                       if (res.x<0){																// kill the bullet's velocity
                           direction = new me.Vector2d(0, 0);
                           this.vel=direction;   
                           this.gravity = 5;  
                           
                       }
                    
                       
                       else{
                           direction = new me.Vector2d(0, 0);
                           this.vel=direction;   
                           this.gravity = 5;
                                  	
                       }
                      
              }*/
         
           
       } 
	 
	 if(this.rubber = true && this.checkcol == 1){
	 	this.vel.x = 0;
	 	this.vel.y = 0;
	 	this.gravity = .5;
	 	this.rubber = false;
	 	if(this.accel.y > 1)
	 		this.accel.y = 1;
	 }
	    
	    
	    
	    
	    if (collision.yprop.isSolid||collision.xprop.isSolid)
	      {
	      	me.audio.play("stomp"); 
		    me.game.remove(this);
			bulletAlive = false;
		  
	      }				
    					
    	// Bullet Lifetime				
    						
    	// If 1 second has passed					
    	if(elapsedTime > 1500){											
    		me.game.remove(this);
    		bulletAlive = false;
    		
    	}
    	this.updateMovement();
		if(this.vel.x != 0 || this.vel.y != 0){
			this.setCurrentAnimation("fly");
			this.parent();
			return true;
		}  	 
		
		return false;
    	
    	
 	}
 
 
});

BulletEntity.prototype.timeAlive;
BulletEntity.prototype.checkcol;
BulletEntity.prototype.rubber;