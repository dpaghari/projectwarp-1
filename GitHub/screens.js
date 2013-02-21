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
		
		this.font          =  null;
		this.scrollerfont  =  null;
		this.scrollertween = null;
		
		this.scroller = "DEVELOPED BY SUPERAWESOMEMEGASQUAD - 2013                       ";
		this.scrollerpos = 640;
	},
	/* ---
		reset function
	   ----*/
	
	onResetEvent : function()
	{
		if (this.title == null)
		{
			// init stuff if not yet done
			this.title = me.loader.getImage("title_screen");
			// font to display the menu items
			this.font = new me.BitmapFont("32x32_font", 32);
			this.font.set("left");
			
			// set the scroller
			this.scrollerfont = new me.BitmapFont("32x32_font", 32);
			this.scrollerfont.set("left");
						
		}
      
		// reset to default value
		this.scrollerpos = 540;
		
		// a tween to animate the arrow
		this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
		
		// enable the keyboard
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
      
		// play something
		me.audio.play("cling");
		
	},
	
	// some callback for the tween objects
	scrollover : function()
	{
		// reset to default value
		this.scrollerpos = 640;
		this.scrollertween.to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
	},
		
	//Update function	
	update : function()
	{
		// enter pressed ?
		if (me.input.isKeyPressed('escape')){
			me.state.change(me.state.PAUSE);
		}
		if (me.input.isKeyPressed('enter'))
		{
			me.state.change(me.state.PLAY);
		}
		return true;
	},


	draw : function(context)
	{
		context.drawImage(this.title, 0,0);
		
		this.font.draw (context, "NEW GAME",	 130, 270);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		this.font.draw (context, "LOAD GAME", 130, 330);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		this.font.draw (context, "OPTIONS", 130, 390);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
	},

	
	onDestroyEvent : function()
	{
		me.input.unbindKey(me.input.KEY.ENTER);
		
		//just in case
		this.scrollertween.stop();
    }

});

/*---------------------------------------------------------------------

	Pause screen

  ---------------------------------------------------------------------	*/
var PauseScreen = me.ScreenObject.extend({
	init : function()
	{
		this.parent(true);
		
		// title screen image
		this.title         = null;
		
		this.font          =  null;
		this.scrollerfont  =  null;
		this.scrollertween = null;
		
		this.scroller = "HAVING TROUBLE? VISIT FACEBOOK.COM/GROUPS/273190622810667/                       ";
		this.scrollerpos = 640;
	},

	//Reset function
	onResetEvent : function(){
		if (this.title == null){
			//Replace with a better pause screen image :)
			this.title = me.loader.getImage("title_screen");
			this.font = new me.BitmapFont("32x32_font", 32);
			this.font.set("left");
			
			// set the scroller
			this.scrollerfont = new me.BitmapFont("32x32_font", 32);
			this.scrollerfont.set("left");					
		}
		// reset to default value
		this.scrollerpos = 540;
		
		// a tween to animate the arrow
		this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
		
		// enable the keyboard
		me.input.bindKey(me.input.KEY.ESCAPE, "escape", true);
      
		// Change the audio here :)
		me.audio.play("cling");
		
	},
	
	
	// some callback for the tween objects
	scrollover : function()
	{
		// reset to default value
		this.scrollerpos = 640;
		this.scrollertween.to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
	},
		
    //Update function		
	update : function()
	{
		// enter pressed ?
		if (me.input.isKeyPressed('escape') || me.input.isKeyPressed('enter'))
		{
			me.state.change(me.state.PLAY);
		}
		return true;
	},

    //Menu drawing function
	draw : function(context)
	{
		context.drawImage(this.title, 0,0);
		
		this.font.draw (context, "RESUME GAME",	 130, 270);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		this.font.draw (context, "OPTIONS",	 130, 330);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
	},
	
    //Function used to change the screen	
	onDestroyEvent : function()
	{
		me.input.unbindKey(me.input.KEY.ESCAPE);
		
		//just in case
		this.scrollertween.stop();
   },

});

/*---------------------------------------------------------------------

	Options screen

  ---------------------------------------------------------------------	*/

/*---------------------------------------------------------------------

	Loading screen

  ---------------------------------------------------------------------	*/


