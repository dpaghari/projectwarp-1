/*------------------- 
a player entity
-------------------------------- */
var LaserEntity = me.CollectableEntity.extend({
 
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
    /*onCollision: function(){
    	
    	alert("collided");
    	me.levelDirector.loadlevel("level1");
    	
    },
    */
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    
    	this.updateMovement();
    	
 	}
 	
 	// this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
    	var nextLevel = me.levelDirector.nextLevel();
        // do something when collected
 		me.levelDirector.loadLevel(currentLevel);
        // make sure it cannot be collected "again"
        this.collidable = false;
        // remove it
        me.game.remove(this);
    }
 
 
});

