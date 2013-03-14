/*------------------- 
a Cursor entity
-------------------------------- */
var CursorEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
    	settings.spritewidth = 32;
    	settings.spriteheight = 32;
        // call the constructor
        this.parent(x, y, settings);
        this.curChoice = 1;
        //this.animationspeed = 1;
        
        //this.addAnimation("stand",[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);
        
    },

    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    		
		if(me.input.isKeyPressed('jump')){
			
			
		}
		if(me.input.isKeyPressed("down")){
			
		}
        // check & update player movement
        this.updateMovement();
        
      

         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
        
        
    }   	  	 
});

CursorEntity.prototype.curChoice = 1;
