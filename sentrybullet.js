/*------------------- 
a player entity
-------------------------------- */
var SentryBulletEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        this.collidable = true;
        //var counter = 0;
        //this.setVelocity(10, 20);
        this.gravity = 0;
        // returns current game time
        this.timeAlive = me.timer.getTime();		
        this.type = me.game.ENEMY_OBJECT;					
        //me.input.mouse.pos()
    },
    
    onCollision: function(res, obj){
    	
    },
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	var elapsedTime = me.timer.getTime() - this.timeAlive;	
    	var collision = this.collisionMap.checkCollision(this.collisionBox, this.vel);
		
  			
    	// Bullet Lifetime				
    		
    	 if (collision.yprop.isSolid||collision.xprop.isSolid)
	      {
	      	me.audio.play("stomp"); 
	      	bullDie = new BulletDeathEntity(this.pos.x+10, this.pos.y,{image: "bulletdie", spritewidth: 18, spriteheight: 18}); 												// destroy it
                          me.game.add(bullDie, this.z);
                      	  me.game.sort();
		    me.game.remove(this);
			
		  
	      }							
    	// If 1 second has passed					
    	if(elapsedTime > 1500){		
    		sbulletAlive = false;	
    		bullDie = new BulletDeathEntity(this.pos.x+10, this.pos.y,{image: "bulletdie", spritewidth: 18, spriteheight: 18}); 												// destroy it
                          me.game.add(bullDie, this.z);
                      	  me.game.sort();								
    		me.game.remove(this);
    		
    		me.game.sort();
    		
    	}
    	
    	if(gotHit == true){
     		bullDie = new BulletDeathEntity(this.pos.x+10, this.pos.y,{image: "bulletdie", spritewidth: 18, spriteheight: 18}); 												// destroy it
                          me.game.add(bullDie, this.z);
                      	  me.game.sort();
     		me.game.remove(this);
     		
     	}
   		
    	//if(this.collideType(solid, false)){
    	//	me.game.remove(this, true);
    	//}   	 
    	this.updateMovement();
    	
 	}
 
 
});
SentryBulletEntity.prototype.timeAlive;
var gotHit;
