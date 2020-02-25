/*------------------- 
a player entity
-------------------------------- */
var PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
                                    
    	// Set the sprite's height and width(important for spritesheet)
    	settings.spritewidth = 32;
    	settings.spriteheight = 44;
        // call the constructor
        this.parent(x, y, settings);
        bulletAlive = false;
        this.animationspeed = 1;
        
        // Assign Animations to each character state based on a single spritesheet
        this.addAnimation("die", [56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86]);
        this.addAnimation("jump",[42,43,44,45,46,47,48,49,50,51,52,53,54,55]);
        this.addAnimation("stand",[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);
        this.addAnimation("run",[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);
        this.isDeadz = false;
        armNum = 0;
        gotHit = false;
        isReading = false;
        
        // Set the keyboard
        me.input.bindKey(me.input.KEY.A, "left");
		me.input.bindKey(me.input.KEY.D, "right");
		me.input.bindKey(me.input.KEY.W, "jump", true);
		me.input.bindKey(me.input.KEY.S, "down", true);
		me.input.bindKey(me.input.KEY.SPACE, "warp", true);
		me.input.bindKey(me.input.KEY.R, "restart", true);
		me.input.bindKey(me.input.KEY.ESC, "pause", true);
		me.input.bindKey(me.input.KEY.E, "read", true);
       
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
            //console.log(time);
                                          
    	
    	
    		walkleft = walkright = true;
	    	var res = me.game.collide(this);
	    	
	    	// If the player collides with a glass wall restrict his movement
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
        	// If the player collides with a rubber wall restrict his movement
        	 if (res && (res.obj.type == "rubberWallv" || res.obj.type == "sentryguy")){	
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
                  if (res.y != 0){
              
              		if (res.y < 0){
              			this.vel.y = 0;	
              			
              		}
        		}
        	}
    	    
    	    // If the player has collected a note and presses E it allows the player to read the note depending on the level
    	    if(isReading == false && noteCollected == true && me.input.isKeyPressed("read")){
    	    			if(daCurLevel == "level1"){
    						noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note1"));
    						me.game.add(noteThing, this.z);
    						me.game.sort();
    					}
    	
    					if(daCurLevel == "level2"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note2"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}
    	
    					if(daCurLevel == "level3"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note3"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}
    	
    					if(daCurLevel == "level4"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note4"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}
    	
    					if(daCurLevel == "level5"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note5"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}
    	
    					if(daCurLevel == "level6"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note6"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}
    	
    					if(daCurLevel == "level7"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note7"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}
    	
    					if(daCurLevel == "level8"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note8"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}
    	
    					if(daCurLevel == "level9"){
    					noteThing = new me.SpriteObject(this.pos.x, this.pos.y - 200, me.loader.getImage("note9"));
    					me.game.add(noteThing, this.z);
    					me.game.sort();
    					}	
    	    	
    	    			isReading = true;

    	    }
    	    // Put Away Note to continue playing
    	    if(isReading == true && me.input.isKeyPressed("read")){
    	   		me.game.remove(noteThing);
    	   		me.game.sort();
        		isReading = false;
    	    }
    	    
    	   
    	    
    	    
    		// Attach Arm to Character
    		if(armNum == 0){
    	 	arm = new ArmEntity(this.pos.x, this.pos.y, {image: "arm", spritewidth: 20, spriteheight: 20});
        	me.game.add(arm, this.z+1); 
       		me.game.sort();
       		
       		armNum = 1;
       		}
       		// Arm Logic to keep arm at a "normal" position when the character moves
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

            arm.pos.x = this.pos.x + 10;
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
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
       		}
        }
		if (me.input.isKeyPressed("pause")) {
				me.state.pause();   			
    			var resume_loop = setInterval(function check_resume() {
        		if (me.input.isKeyPressed("pause")) {
            		clearInterval(resume_loop);
            		me.state.resume();
        		}
    			}, 100);
		}
		
		// If they press R
        if(me.input.isKeyPressed('restart')){
        		
        		var currentLevel = me.levelDirector.getCurrentLevelId();
        		me.levelDirector.loadLevel(currentLevel);        	
        }
        
        // If they press Space they activate the warp mechanic
        if(me.input.isKeyPressed('warp')) {
        	if(bulletAlive == true){
        	//warps to bullet's position
        	warpIn = new WarpEntity(this.pos.x, this.pos.y,{image:"warp_sheet", spritewidth: 32, spriteheight: 44});
        	me.game.add(warpIn, this.z);
        	me.game.sort();
        	this.pos.x = bullet.pos.x;
        	this.pos.y = bullet.pos.y;
        	isWarp = new WarpEntity(this.pos.x, this.pos.y,{image:"warp_sheet", spritewidth: 32, spriteheight: 44});
        	me.game.add(isWarp, this.z);
        	me.game.sort();
        	bulletAlive = false;
        	walkleft = true;
			walkright= true;  
        	me.game.remove(bullet, true);
        	}
        }
        // If the character falls past the death threshold
          if (this.pos.y > coordy){
    		this.isDeadz = true;
    	}
 
        // check & update player movement
        this.updateMovement();
        
      
    	var res = me.game.collide(this);
   		// If the player collides with an enemy object
    	if(res && (res.obj.type == me.game.ENEMY_OBJECT)){
    			this.isDeadz = true;
    			gotHit = true;
    		
    	}
 		// Disable controls when dead
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
var warpIn;
var isWarp;
PlayerEntity.prototype.isDeadz;
var isReading;
var pauseHudz;
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
var mouseY;			//mouse y position + offset of viewport
var magnitude;
var vectorX ;				
var vectorY;
var speed;
var direction;
