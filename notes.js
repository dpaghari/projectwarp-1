/*----------------
 a Lab Note entity
------------------------ */

var NoteEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
        this.type = "noteguy";
        daCurLevel = me.levelDirector.getCurrentLevelId();
       	noteCollected = false;
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
    	
    	noteCollected = true;
    	this.collidable = false;
      	me.game.remove(this);
        me.game.sort();
    }/*,
    update: function(){
    	this.updateMovement();
    }
 */
});

var noteCollected;
var daCurLevel;
var noteThing;