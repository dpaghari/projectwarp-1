/*
 * Project Warp
 * 
 * lasers.js
 * Controls the laser entity.
 * 
 * Developed by Superawesomemegasquad
 */


var LaserEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
        // call the constructor
        //this.gravity = 0;
        this.parent(x, y, settings);
        this.collidable = true;

        this.type = me.game.ENEMY_OBJECT;	
        
        //this.setVelocity(10, 20);
        
        // returns current game time
        //this.timeAlive = me.timer.getTime();							
        //me.input.mouse.pos()
    },
    /*onCollision: function(){
    	
    	alert("collided");
    	me.levelDirector.loadlevel("level1");
    	
    },
    */
   onCollision: function(res, obj) {
    	
   },
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	var collision = this.collisionMap.checkCollision(this.collisionBox, this.vel);
		//var res = me.game.collide(this);
    	//this.updateMovement();
    	
 	}
 	
 	// this function is called by the engine, when
    // an object is touched by something (here collected)
    
 
 
});

