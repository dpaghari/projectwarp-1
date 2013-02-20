/*!
 * 
 *   melonJS
 *   http://www.melonjs.org
 *		
 *   Step by step game creation tutorial
 *
 **/

// game resources

var g_resources = [{
    name: "cyberpunk_main",
    type: "image",
    src: "data/futuristic_tileset/cyberpunk_main.png"
}, {
    name: "SpaceTest",
    type: "tmx",
    src: "data/SpaceTest.tmx"
}, {
    name: "gripe_run_right",
    type: "image",
    src: "data/sprite/gripe_run_right.png"
}, {
	name: "metatiles32x32",
	type: "image",
	src: "data/metatiles32x32.png"
}, {
	name: "bullet",
	type: "image",
	src: "data/penis.png"
}, {
	name: "title_screen",
	type: "image",
	src: "data/GUI/title_screen.jpg"
}, {
	name: "32x32_font",
	type: "image",
	src: "data/sprite/32x32_font.png"
}, {
	name: "cling",
    type: "audio",
    src: "data/audio/",
    channel: 2
}];
var jsApp	= 
{	
	/* ---
	
		Initialize the jsApp
		
		---			*/
	onload: function()
	{
		
		// init the video
		if (!me.video.init('jsapp', 1280, 720, false, 1.0))
		{
			alert("Sorry but your browser does not support html 5 canvas.");
         return;
		}
				
		// initialize the "audio"
		me.audio.init("mp3,ogg");
		
		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);
		
		// set all resources to be loaded
		me.loader.preload(g_resources);

		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},
	
	
	/* ---
	
		callback when everything is loaded
		
		---										*/
	loaded: function (){
		
	// set the "Play/Ingame" Screen Object
    me.state.set(me.state.MENU, new TitleScreen());
		
   // set the "Play/Ingame" Screen Object
   me.state.set(me.state.PLAY, new PlayScreen());
   
   // set a global fading transition for the screen
   me.state.transition("fade", "#0FFFFF", 250);
     
   // add our player entity in the entity pool
   me.entityPool.add("mainPlayer", PlayerEntity);
   me.entityPool.add("bullet", BulletEntity);
          
   // enable the keyboard
   me.input.bindKey(me.input.KEY.A,  "left");
   me.input.bindKey(me.input.KEY.D, "right");
   me.input.bindKey(me.input.KEY.W, "jump", true);
   me.input.bindKey(me.input.KEY.U, "shoot", true);
   me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.U);
        
   // start the game 
   me.state.change(me.state.MENU);
	}

}; // jsApp

/* the in game stuff*/
var PlayScreen = me.ScreenObject.extend({
 
    onResetEvent: function() {
        // stuff to reset on state change
        // loads previous level
        me.levelDirector.loadLevel("SpaceTest");
    },
 
    /* ---
 
    action to perform when game is finished (state change)
 
    --- */
    onDestroyEvent: function() {
}
 
});

//bootstrap :)
window.onReady(function() 
{
	jsApp.onload();
});
