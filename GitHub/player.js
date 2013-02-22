/*------------------- 
a player entity
-------------------------------- */
var PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
 
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(5, 15);

 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		me.Viewport(20, 20,50, 50, 50, 50);
    },

    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
        	
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.jumping && !this.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.vel.y = -this.maxVel.y * me.timer.tick;
                // set the jumping flag
                this.jumping = true;
            }
 
        }
        
        
        
        if (me.input.isKeyPressed('shoot')) {
        	if(bulletAlive == true){		//if bullet exists
        		me.game.remove(bullet, true);		//remove it 
        		bulletAlive = false;
        	}
        	//normalize vectors to make speed constant
        	var mouseX = (me.input.mouse.pos.x+me.game.viewport.pos.x)-this.pos.x;		 //mouse x position + offset of viewport
        	var mouseY = (me.input.mouse.pos.y+me.game.viewport.pos.y)-this.pos.y;		//mouse y position + offset of viewport
        	var magnitude = (Math.sqrt(mouseX*mouseX + mouseY*mouseY));
        	var vectorX = mouseX/magnitude;				
  		   	var vectorY = mouseY/magnitude;
        	var speed = 10;
       		var direction = new me.Vector2d(vectorX*speed, vectorY*speed);
       		//create bullet
        	bullet = new BulletEntity(this.pos.x, this.pos.y, { image: 'bullet', spritewidth: 10 , spriteheight: 10});
        	bullet.vel = direction;
        	me.game.add(bullet, this.z);
      	  	me.game.sort();
    	  	bulletAlive = true;
       		//alert("lol");
        }
        
        if(me.input.isKeyPressed('warp')) {
        	if(bulletAlive == true){
        	//warps to bullet 
        	this.pos.x = bullet.pos.x;
        	this.pos.y = bullet.pos.y;
        	bulletAlive = false;
        	me.game.remove(bullet, true);
        	}
        }
        
 
        // check & update player movement
        this.updateMovement();
 
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return true;
        
        
    }   	  	 
});
var bulletAlive = false;
var bullet;
