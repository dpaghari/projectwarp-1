/*----------------
 a Lab Note entity
------------------------ */

var NoteEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
        this.gravity = 0;
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
    	var nextLevel = me.levelDirector.nextLevel();
        // do something when collected
        
        alert("May 22, 2120: I have begun research on developing a prototype\n that will revolutionize both travel and combat in the new age.\n I will begin selecting participants soon. Winston seems like a rather \ncapable individual- he is incredibly gifted\n I will gather resources necessary to begin this project over this \ncoming fortnight..\n.~~Everything seemed fine when we worked together, you and I\nWe have accomplished so much, and learned a great deal...~~");
        
        if(currentLevel == "level2"){
        	alert("Game over!");
        }
        
		
 		me.levelDirector.loadLevel(nextLevel);
        // make sure it cannot be collected "again"
        this.collidable = false;
        // remove it
        me.game.remove(this);
    }
 
});