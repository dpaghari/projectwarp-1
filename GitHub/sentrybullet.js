/*
 * Project Warp
 * 
 * sentrybullet.js
 * Controls the sentry's bullet entity. 
 * 
 * Developed by Superawesomemegasquad
 */





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
		//var res = me.game.collide(this);
  			
    	// Bullet Lifetime				
    						
    	// If 1 second has passed					
    	if(elapsedTime > 1000){		
    		sbulletAlive = false;									
    		me.game.remove(this);
    		
    		me.game.sort();
    		
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
SentryBulletEntity.prototype.timeAlive;
//BulletEntity.prototype.timeAlive;