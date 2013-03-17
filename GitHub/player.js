/*------------------- 
a player entity
-------------------------------- */
var PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
    
    	settings.spritewidth = 32;
    	settings.spriteheight = 44;
        // call the constructor
        this.parent(x, y, settings);
        bulletAlive = false;
        this.animationspeed = 1;
        this.addAnimation("die", [56,57,58,59,60,61,62,63,64,65,66,67,68]);
        this.addAnimation("jump",[42,43,44,45,46,47,48,49,50,51,52,53,54,55]);
        this.addAnimation("stand",[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);
        this.addAnimation("run",[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);
        this.isDeadz = false;
        armNum = 0;
        
    	//me.game.remove(arm);
        me.input.bindKey(me.input.KEY.A, "left");
		me.input.bindKey(me.input.KEY.D, "right");
		me.input.bindKey(me.input.KEY.W, "jump", true);
		me.input.bindKey(me.input.KEY.S, "down", true);
		me.input.bindKey(me.input.KEY.SPACE, "warp", true);
		me.input.bindKey(me.input.KEY.R, "restart", true);
		
        
       //this.arm = new ArmEntity(this.pos.x, this.pos.y, {image: "arm", spritewidth: 20, spriteheight: 20});
			
        
 		this.gravity = 0.98;
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(4, 12);
		//this.setCurrentAnimation("stand");
 		this.updateColRect(-1, 32, -1, 44);
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		
    },

    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
	    	var res = me.game.collide(this);
    	         if (res && (res.obj.type == "glassWallv"||res.obj.type == "glassWallh")){
    		        if (res.x != 0){
                 // x axis
                    if (res.x<0){
                    	 walkleft = false;
			             walkright= true;
                    }  
                    else{
                    	 walkleft = true;
			             walkright= false;                    	
                    }
                      
                 }
        	}
        	
        	 if (res && (res.obj.type == "rubberWallv")){
    		        if (res.x != 0){
                 // x axis
                    if (res.x<0){
                    	 walkleft = false;
			             walkright= true;
                    }  
                    else{
                    	 walkleft = true;
			             walkright= false;                    	
                    }
                      
                 }
        	}
    	
    		console.log(coordy);
    		if(armNum == 0){
    	 	arm = new ArmEntity(this.pos.x, this.pos.y, {image: "arm", spritewidth: 20, spriteheight: 20});
        	me.game.add(arm, this.z+1); 
       		me.game.sort();
       		
       		armNum = 1;
       		}
        	if (faceRight == true){
			
			arm.pos.x = this.pos.x - 1;
			arm.pos.y = this.pos.y + 25;
			}
			else{
				
				arm.pos.x = this.pos.x + 19;
				arm.pos.y = this.pos.y + 25;
			}
			if (me.input.isKeyPressed('left')&&(walkleft == true)) {
        
            // flip the sprite on horizontal axis
            this.flipX(true);
            
            //arm.flipX(true);
            //arm.flipY(true);
            arm.pos.x = this.pos.x + 10;
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
            //sign = -1;
            //this.vel.x += sign * speed * me.timer.tick;
            walkright = true;
            faceRight = false;
            faceLeft = true;

   
           } else if (me.input.isKeyPressed('right')&&(walkright == true)) {
            // unflip the sprite
            
            this.flipX(false);
            arm.flipX(false);
            arm.pos.x = this.pos.x + 10;
            // update the entity velocity
            this.vel.x += this.accel.x* me.timer.tick;
            //sign = 1;
            //this.vel.x += sign * speed * me.timer.tick;
            walkleft = true;
            faceLeft = false;
            faceRight = true;

        } else {
            this.vel.x = 0;
        }
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
             if (!this.jumping && !this.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                //this.vel.y = -this.maxVel.y * me.timer.tick;
                this.vel.y -= 15 * me.timer.tick;
                // set the jumping flag
                this.jumping = true;
            }
			
			
        }
        
        if (me.input.isKeyPressed('shoot')) {
        	/*if(bulletAlive == true){		//if bullet exists
        		me.game.remove(bullet, true);		//remove it 
        		bulletAlive = false;
        	}
        	*/
        	if(bulletAlive == false){
        	//normalize vectors to make speed constant
        	mouseX = (me.input.mouse.pos.x+me.game.viewport.pos.x)-this.pos.x;		 //mouse x position + offset of viewport
        	mouseY = (me.input.mouse.pos.y+me.game.viewport.pos.y)-this.pos.y;		//mouse y position + offset of viewport
        	magnitude = (Math.sqrt(mouseX*mouseX + mouseY*mouseY));
        	vectorX = mouseX/magnitude;				
  		   	vectorY = mouseY/magnitude;
        	speed = 10;
       		direction = new me.Vector2d(vectorX*speed, vectorY*speed);
       		//create bullet
        	bullet = new BulletEntity(this.pos.x, this.pos.y, { image: 'bullet', spritewidth: 14 , spriteheight: 14});
        	bullet.vel = direction;
        	me.game.add(bullet, this.z);
      	  	me.game.sort();
      	  	 
    	  	bulletAlive = true;
       		//alert("lol");
       		}
        }

        if(me.input.isKeyPressed('restart')){
        		
        		var currentLevel = me.levelDirector.getCurrentLevelId();
        		me.levelDirector.loadLevel(currentLevel);
        		
        	
        	
        		
        	
        }
        if(me.input.isKeyPressed('warp')) {
        	if(bulletAlive == true){
        	//warps to bullet 
        	this.pos.x = bullet.pos.x;
        	this.pos.y = bullet.pos.y;
        	bulletAlive = false;
        	walkleft = true;
			walkright= true;  
        	me.game.remove(bullet, true);
        	}
        }
          if (this.pos.y > coordy){
    		
    		//alert("Game Over!");
    		me.game.remove(this);
    		bulletAlive = false;
    		var currentLevel = me.levelDirector.getCurrentLevelId();
    		me.levelDirector.loadLevel(currentLevel);
    	}
 
        // check & update player movement
        this.updateMovement();
        
      
    	var res = me.game.collide(this);
   		
    	if(res && (res.obj.type == me.game.ENEMY_OBJECT)){
    			this.isDeadz = true;
    		
    	}
 		
 		if(this.isDeadz){
 				me.game.remove(arm);
 				me.input.unbindKey(me.input.KEY.A);
    			me.input.unbindKey(me.input.KEY.W);
    			me.input.unbindKey(me.input.KEY.S);
    			me.input.unbindKey(me.input.KEY.D);
    			me.input.unbindKey(me.input.KEY.SPACE);
    			this.vel.y = 0;
    			this.gravity = 0;
    			
    			
    		this.setCurrentAnimation("die", function(){
    			
    			
    		
    			var currentLevel = me.levelDirector.getCurrentLevelId();
    			bulletAlive = false;
    			me.levelDirector.loadLevel(currentLevel);
    			me.game.remove(this)});
    			this.parent();
    		
    			return true;
 		}
        // update animation if necessary
        if (this.vel.x!=0 && this.vel.y==0) {
            // update object animation
            this.setCurrentAnimation("run");
            this.parent();
            return true;
        }
        else if (this.vel.y != 0 && this.vel.x !=0){
        	this.setCurrentAnimation("jump");
        	this.parent();
        	return true;
        }
        else if(this.vel.y != 0 && this.vel.x == 0){
        	this.setCurrentAnimation("jump");
        	this.parent();
        	return true;
        }
        else{
        	this.setCurrentAnimation("stand");
        	this.parent();
        	return true;
        }
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
        
        
    }   	  	 
});

PlayerEntity.prototype.isDeadz;

var arm;
var armNum = 0;
var walkleft = true;
var walkright = true;
var bulletAlive = false;
var hitright = false;
var hileft = false;
var bullet;
var faceLeft;
var faceRight;
        	var mouseX ;		 //mouse x position + offset of viewport
        	var mouseY;		//mouse y position + offset of viewport
        	var magnitude;
        	var vectorX ;				
  		   	var vectorY;
        	var speed;
       		var direction;
