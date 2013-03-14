/*------------------- 
a Cursor entity
-------------------------------- */
var CursorScreen = me.ScreenObject.extend({
 
    init : function(){
		this.parent(true);
		
		// title screen image
		this.title         = null;
	},
	/* ---
		reset function
	   ----*/
	
	onResetEvent : function()
	{
		if (this.title == null){
			// init stuff if not yet done
			// Place image for playscreen on here
			this.title = me.loader.getImage("title_screen_play_game");
			me.input.bindKey(me.input.KEY.ENTER, "enter", true);
			me.input.bindKey(me.input.KEY.ESC, "escape", true);
			me.input.bindKey(me.input.KEY.NUM1, "one", true);
			me.input.bindKey(me.input.KEY.NUM2, "two", true);
			me.input.bindKey(me.input.KEY.NUM3, "three", true);
			me.input.bindKey(me.input.KEY.NUM4, "four", true);
			me.input.bindKey(me.input.KEY.NUM5, "five", true);
			me.input.bindKey(me.input.KEY.UP, "upz", true);
			me.input.bindKey(me.input.KEY.DOWN, "downz", true);
			//if(me.input.isKeyPressed('enter')){
			//	me.state.change(me.state.PLAY);
			//}		
			// enter pressed ?
				
		}
		
		// enable the keyboard
		//me.input.bindKey(me.input.KEY.ENTER, "enter", true);
      
		// play something
		me.audio.play("cling");
		
	},
	
	//Update function	
	update : function()
	{		
		/*if(me.input.isKeyPressed('three')){
			
			me.levelDirector.loadLevel("level3");
			//console.log("one");
		}*/
		if(this.title == me.loader.getImage("title_screen_play_game")){
			if(me.input.isKeyPressed('jump') || me.input.isKeyPressed("upz")){
				this.title = me.loader.getImage("title_screen_level_select");
				console.log("pressed up in play game");
			}
			else if(me.input.isKeyPressed('down') || me.input.isKeyPressed("downz")){
				this.title = me.loader.getImage("title_screen_options");
				console.log("pressed down in play game");
			}
			if(me.input.isKeyPressed('enter')){
				me.state.change(me.state.PLAY);
				console.log("pressed enter in play game");
			}
		}
		if(this.title == me.loader.getImage("title_screen_options")){
			if(me.input.isKeyPressed('jump') || me.input.isKeyPressed("upz")){
				this.title = me.loader.getImage("title_screen_play_game");
				console.log("pressed up in options");
			}
			else if(me.input.isKeyPressed('down') || me.input.isKeyPressed("downz")){
				this.title = me.loader.getImage("title_screen_level_select");
				console.log("pressed down in options");
			}
		}
		if(this.title == me.loader.getImage("title_screen_level_select")){
			if(me.input.isKeyPressed('jump') || me.input.isKeyPressed("upz")){
				this.title = me.loader.getImage("title_screen_options");
				console.log("pressed up in level");
			}
			if(me.input.isKeyPressed('down') || me.input.isKeyPressed("downz")){
				this.title = me.loader.getImage("title_screen_play_game");
				console.log("pressed down in level");
			}
			if(me.input.isKeyPressed('enter')){
				
				this.title = me.loader.getImage("level_select_screen");
				
			}
		
		}
		if(this.title == me.loader.getImage("level_select_screen")){
			if(me.input.isKeyPressed('one')){
					me.levelDirector.loadLevel("level1");
				}
				else if(me.input.isKeyPressed('two')){
					me.levelDirector.loadLevel("level2");
				}
				else if(me.input.isKeyPressed('three')){
					me.levelDirector.loadLevel("level3");
				}
				else if(me.input.isKeyPressed('four')){
					me.levelDirector.loadLevel("level4");
				}
				else if(me.input.isKeyPressed('five')){
					me.levelDirector.loadLevel("level5");
				}
				else if(me.input.isKeyPressed('escape')){
					this.title = me.loader.getImage("title_screen_play_game");
				}
		}
		return true;
	},


	draw : function(context)
	{
		context.drawImage(this.title, 0,0);
	},

	
	onDestroyEvent : function()
	{
		me.input.unbindKey(me.input.KEY.ENTER);
		
		//just in case
		//this.scrollertween.stop();
    }

});
