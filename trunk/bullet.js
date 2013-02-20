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
        //this.setVelocity(10, 20);
        this.gravity = 0;
        //me.input.mouse.pos()
    },
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	this.vel.y -= 1;
    	this.updateMovement();
 	}
 	
 
});