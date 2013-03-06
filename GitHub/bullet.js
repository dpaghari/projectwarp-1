/*------------------- 
a player entity
-------------------------------- */
var BulletEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        var counter = 0;
        //this.setVelocity(10, 20);
        this.gravity = 0;
        // returns current game time
        this.timeAlive = me.timer.getTime();							
        //me.input.mouse.pos()
    },
    
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	var elapsedTime = me.timer.getTime() - this.timeAlive;	
    	var collision = this.collisionMap.checkCollision(this.collisionBox, this.vel);
		var res = me.game.collide(this);
    
        if (res && (res.obj.type == me.game.WALL_OBJECT)){
       	      if (res.x != 0)
              {
                           // x axis
                       if (res.x<0){
                           direction = new me.Vector2d(-vectorX*speed, vectorY*speed);
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
	      
	   if (!this.visible)
	      {
	      	me.audio.play("stomp"); 
		    me.game.remove(this);
		    
	      }
	   else if (collision.yprop.isSolid||collision.xprop.isSolid)
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
    	/*var count = me.timer.tick;
    	for(i = count; i < 60; i++){
    		if(count % 4 == 0){
    			me.game.remove(this);
    		}
    		
    	}
    	*/
   		
    	//if(this.collideType(solid, false)){
    	//	me.game.remove(this, true);
    	//}   	 
    	this.updateMovement();
    	
 	}
 
 
});

BulletEntity.prototype.timeAlive;