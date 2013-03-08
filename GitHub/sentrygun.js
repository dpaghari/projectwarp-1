/*------------------- 
a player entity
-------------------------------- */
var SentryGunEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        //this.timeAlive = me.timer.getTime();
        //this.vel.x = 0;
		//this.vel.y = 0;
 
        // set the default horizontal & vertical speed (accel vector)
        //this.setVelocity(3.5, 8);

 
        // set the display to follow our position on both axis
        //me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		this.previousTime = me.timer.getTime();
    },

    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    
    	var elapsedTime = me.timer.getTime() - this.previousTime;//(Math.round(me.timer.getTime()))%500;
    	//delay = Math.random()*1800 + 800;
       //if(sbulletAlive = false){ 
       	if(elapsedTime >= delay){
       		
        	sbullet = new SentryBulletEntity(this.pos.x + 50, this.pos.y + 10, { image: 'gun', spritewidth: 32 , spriteheight: 32});
        	sbullet.vel.x = 8;
        	me.game.add(sbullet, this.z);
        	me.game.sort();
        	this.previousTime = me.timer.getTime();
        	
        }
       // sbulletAlive = true;
       //}
        /*
        	
        	//normalize vectors to make speed constant
        	targetX = (PlayerEntity.pos.x)-this.pos.x;		 //main player x position 
        	targetY = (PlayerEntity.pos.y)-this.pos.y;		//main player y position 
        	mag = (Math.sqrt(targetX*targetX + targetY*targetY));
        	vectX = targetX/magnitude;				
  		   	vectY = targetY/magnitude;
  		   	
        	speed = 10;
       		sdirection = new me.Vector2d(vectX*speed, vectY*speed);
       		//create bullet
        	sbullet = new BulletEntity(this.pos.x, this.pos.y, { image: 'bullet', spritewidth: 15 , spriteheight: 15});
        	sbullet.vel = sdirection;
        	me.game.add(sbullet, this.z);
      	  	me.game.sort();
    	  	
       		//alert("lol");
       		
        

        
        */
        
 
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
SentryGunEntity.prototype.timeAlive;
SentryGunEntity.prototype.previousTime;
var delay = 1500;
var sbulletAlive = false;