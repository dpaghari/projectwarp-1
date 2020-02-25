/*------------------- 
a player entity
-------------------------------- */
var BulletDeathEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
        // call the constructor
        settings.spritewidth = 18;
        settings.spriteheight = 18;
        this.parent(x, y, settings);
        this.animationspeed = 1;
        this.addAnimation("die",[0,1,2,3,4,5,6]);
       
    	
        this.gravity = 0;
        // returns current game time
        
    },
    
    
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    		 
    	this.updateMovement();
   	 this.setCurrentAnimation("die", function(){
    		
    		me.game.remove(this);
    	});
    	this.parent();
    	
   		return false;   
    	
 	}
 
 
});
SentryBulletEntity.prototype.timeAlive;
var gotHit;
