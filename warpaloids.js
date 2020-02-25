/*------------------- 
a player entity
-------------------------------- */
var WarpEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
        // call the constructor
        settings.spritewidth = 32;
        settings.spriteheight = 44;
        this.parent(x, y, settings);
        this.animationspeed = 1;
        this.addAnimation("happen",[0,1,2,3,4,5,6,7,8]);
       
    	
        this.gravity = 0;
        // returns current game time
        
    },
    
    
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    		 
    	this.updateMovement();
   	 this.setCurrentAnimation("happen", function(){
    		
    		me.game.remove(this);
    	});
    	this.parent();
    	
   		return false;   
    	
 	}
 
 
});
