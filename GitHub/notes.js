/*
 * Project Warp
 * 
 * notes.js
 * Controls the note entity.
 * 
 * Developed by Superawesomemegasquad
 */

/*----------------
 a Lab Note entity
------------------------ */

var NoteEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
       
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
    	//var nextLevel = me.levelDirector.nextLevel();
        // do something when collected
        //me.levelDirector.nextLevel();
        this.collidable = false;
        me.game.remove(this);
        me.game.sort();
    }/*,
    update: function(){
    	this.updateMovement();
    }
 */
});