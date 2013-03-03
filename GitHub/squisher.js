/*------------------- 
a player entity
-------------------------------- */
var LaserEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        
        //this.setVelocity(10, 20);
        
        // returns current game time
        //this.timeAlive = me.timer.getTime();							
        //me.input.mouse.pos()
    },
    
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    
    	this.updateMovement();
 	}
 
 
});

