/*------------------- 
a player entity
-------------------------------- */
var SentryGun2Entity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        settings.spritewidth = 80;
        settings.spriteheight = 50;
        this.parent(x, y, settings);
        this.animationspeed = 1;
        this.addAnimation("shoot", [0,1,2,3,4,5,6,7,8]);
        this.addAnimation("chill", [0]);
		this.previousTime = me.timer.getTime();
		this.type = "sentryguy";
		this.collidable = true;
		//this.flipX(true);
		this.shooting = false;
    },
	
	  onCollision: function(res, obj) {
 
        // res.y >0 means touched by something on the bottom
        // which mean at top position for this one

    },
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
    	var res = me.game.collide(this);
    	
    	
    
    	var elapsedTime = me.timer.getTime() - this.previousTime;
    	this.updateMovement();
       	if(elapsedTime >= delay){
       		this.shooting = true;
       		sbullet = new SentryBulletEntity(this.pos.x - 15, this.pos.y + 18, { image: 'gun', spritewidth: 30 , spriteheight: 10});
        	sbullet.vel.x = -8;
        	me.game.add(sbullet, this.z);
        	me.game.sort();
        	this.previousTime = me.timer.getTime();
        	
        }
     	 if(this.shooting){
        		this.setCurrentAnimation("shoot", function(){
        			this.shooting = false;
        		});
        		this.parent();
        		this.previousTime = me.timer.getTime();
        		return true;
        	}
        	else{
        		this.setCurrentAnimation("chill");
        		this.parent();
        		return true;
        	}
       	
 
        // check & update player movement
        
 
        // update animation if necessary
    
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
        
        
    }   	  	 
});
SentryGunEntity.prototype.timeAlive;
SentryGunEntity.prototype.previousTime;
SentryGun2Entity.prototype.shooting;
var delay = 1500;
var sbulletAlive = false;