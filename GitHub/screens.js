/* -----

	gameScreens
		
	------			*/

/*---------------------------------------------------------------------

	Title screen

  ---------------------------------------------------------------------	*/

var TitleScreen = me.ScreenObject.extend({
	init : function(){
		this.parent(true);
		
		// title screen image
		this.title         = null;

		//this.scroller = "DEVELOPED BY SUPERAWESOMEMEGASQUAD - 2013";
		//this.scrollerpos = 740;   //(canvas.height) - 560?
	},
	/* ---
		reset function
	   ----*/
	onResetEvent : function()
	{
		// init stuff if not yet done
		this.title = me.loader.getImage("title_screen_press_enter");
		
		// enable the keyboard
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
      
		// play something
		me.audio.play("cling");
		
	},
		
	//Update function	
	update : function()
	{
		
		
		// enter pressed ?
		// init stuff if not yet done
		//me.loader.getImage("title_screen_press_enter");
		if (me.input.isKeyPressed('enter'))
		{
			//me.state.change(me.state.LOADING);
			me.state.change(me.state.SELECT);
			console.log("Went to cursor (cursor.js)");
		}
		
		return true;
	},


	draw : function(context)
	{
		context.drawImage(this.title, 0,0);
		
		//this.font.draw (context, "PRESS ENTER TO PLAY!", 70, 330);
		this.title = me.loader.getImage("title_screen_press_enter");
		//is.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		//this.font.draw (context, "LOAD GAME", 390, 330);
		//this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		//this.font.draw (context, "OPTIONS", 390, 390);
		//this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
	},

	
	onDestroyEvent : function()
	{
		me.input.unbindKey(me.input.KEY.ENTER);
		
		//just in case
		//this.scrollertween.stop();
    }

});

