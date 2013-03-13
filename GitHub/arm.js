/*------------------- 
a player entity
-------------------------------- */
var ArmEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
        // call the constructor
        //this.gravity = 0.98;
        
        settings.spritewidth = 20;
        settings.spriteheight = 20;
        this.parent(x, y, settings);
     	
     	
    	
    	
    },

    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	var xDis = me.input.mouse.pos.x + me.game.viewport.pos.x - this.pos.x;
    	var yDis = me.input.mouse.pos.y + me.game.viewport.pos.y - this.pos.y;

    	this.anchorPoint = new me.Vector2d(0.35, 0.1);
    	var anglez = Math.atan2(yDis,xDis) - Math.PI/2;
    	//anglez *= (xDis < 0 || yDis < 0) ? 1 : -1;
    	if(faceLeft == true){
    		this.flipX(true);
    		anglez *= -1;
    	}
    	
    	this.angle = anglez;
    	
    	
    	//console.log(this.anchorPoint);
    	//console.log(anchor);
    	//console.log(this.pos.x);
    	//console.log(this.pos.y);
    	
    	return false;
    	
 	}
 	
 	
 
 
});

