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
		
		this.scroller = "DEVELOPED BY SUPERAWESOMEMEGASQUAD - 2013";
		this.scrollerpos = 740;   //(canvas.height) - 560?
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
		this.scrollerpos = 740;
		
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
		this.scrollerpos = 740;
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
			//me.state.change(me.state.LOADING);
			me.state.change(me.state.PLAY);
		}
		return true;
	},


	draw : function(context)
	{
		context.drawImage(this.title, 0,0);
		
		this.font.draw (context, "PRESS ENTER TO PLAY!", 70, 330);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		//this.font.draw (context, "LOAD GAME", 390, 330);
		//this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		//this.font.draw (context, "OPTIONS", 390, 390);
		//this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
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
		
		this.scroller = "HAVING TROUBLE? VISIT FACEBOOK.COM/GROUPS/273190622810667/";
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
		
		this.font.draw (context, "PRESS ESCAPE TO RESTART GAME",	 130, 270);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		
		//this.font.draw (context, "OPTIONS",	 130, 330);
		//this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
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
 
// create a custom loading screen
var CustomLoadingScreen = me.ScreenObject.extend(
{
   // constructor
   init: function()
   {
      // pass true to the parent constructor
      // as we draw our progress bar in the draw function
      this.parent(true);
      // a font logo
      this.logo = new me.Font('century gothic', 32, 'white');
      // flag to know if we need to refresh the display
      this.invalidate = false;
      // load progress in percent
      this.loadPercent = 0;
      // setup a callback
      me.loader.onProgress = this.onProgressUpdate.bind(this);

   },

   // will be fired by the loader each time a resource is loaded
   onProgressUpdate: function(progress)
   {
      this.loadPercent = progress;
      this.invalidate = true;
   },


   // make sure the screen is only refreshed on load progress
   update: function()
   {
      if (this.invalidate===true)
      {
         // clear the flag
         this.invalidate = false;
         // and return true
         return true;
      }
      // else return false
      return false;
   },

   // on destroy event
   onDestroyEvent : function ()
   {
      // "nullify" all fonts
      this.logo = null;
   },

   //	draw function
   draw : function(context)
   {
      // clear the screen
      me.video.clearSurface (context, "black");

	  //Display loading screen image
	  this.title = me.loader.getImage("loading_screen");
	  
      // measure the logo size
      logo_width = this.logo.measureText(context,"loading_screen").width;

      // draw our text somewhere in the middle
      this.logo.draw(context,
                     "loading_screen",
                     ((me.video.getWidth() - logo_width) / 2),
                     (me.video.getHeight() + 60) / 2);

      // display a progressive loading bar
      var width = Math.floor(this.loadPercent * me.video.getWidth());

      // draw the progress bar
      context.strokeStyle = "silver";
      context.strokeRect(0, (me.video.getHeight() / 2) + 40, me.video.getWidth(), 6);
      context.fillStyle = "#89b002";
      context.fillRect(2, (me.video.getHeight() / 2) + 42, width-4, 2);
   },
});