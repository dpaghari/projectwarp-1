var glassWallEntity = me.ObjectEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
        this.collidable = true;
        this.type = me.game.WALL_OBJECT;
        this.gravity = 0;
    },
    onCollision: function(res, obj) {
 
        // res.y >0 means touched by something on the bottom
        // which mean at top position for this one

    },
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    update: function() {
        // do something when collected
 
        // make sure it cannot be collected "again"
              // remove it
    this.updateMovement();
    }
 
});