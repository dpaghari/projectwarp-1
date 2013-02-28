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
	name : "gametileset",
	type : "image",
	src : "data/tileset/gametileset.png"
}, {
	//Levels go here
	name : "level1",
	type : "tmx",
	src : "data/tileset/level1.tmx"
},{
	name : "loading_screen",
	type : "image",
	src : "data/loading_screen.jpg"
},{
	name: "metatiles32x32",
	type: "image",
	src: "data/tileset/metatiles32x32.png"
},{
	name : "player_stand",
	type : "image",
	src : "data/player_new.png"
}, {
	name : "bullet",
	type : "image",
	src : "data/bullet.png"
}, {
	name : "gun",
	type : "image",
	src : "data/gun.png"
}, {
	name : "title_screen",
	type : "image",
	src : "data/GUI/title_screen.png"
}, {
	name : "32x32_font",
	type : "image",
	src : "data/sprite/32x32_font.png"
}, {
	name: "stomp",
	type: "audio",
	src: "data/audio/",
},{
	name: "cling",
    type: "audio",
    src: "data/audio/",
    channel: 2
}];
var jsApp = {
	/* ---

	 Initialize the jsApp

	 ---			*/
	onload : function() {

		// init the video
		if (!me.video.init('jsapp', 1024, 720, false, 1.0)) {
			alert("Sorry but your browser does not support html 5 canvas.");
			return;
		}
		

		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
		
		// initialize the "audio"
		me.audio.init("mp3,ogg");

		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);

		// set all resources to be loaded
		me.loader.preload(g_resources);
	},

	/* ---

	 callback when everything is loaded

	 ---										*/
	loaded : function() {

		// set the title screen object
		me.state.set(me.state.MENU, new TitleScreen());

		// set the play screen object
		me.state.set(me.state.PLAY, new PlayScreen());

		// set the pause screen object
		me.state.set(me.state.PAUSE, new PauseScreen());
		
		// set the load screen object
		me.state.set(me.state.LOADING, new CustomLoadingScreen());

		// set a global fading transition for the screen
		me.state.transition("fade", "#0FFFFF", 250);

		// add our player entity in the entity pool
		me.entityPool.add("mainPlayer", PlayerEntity);
		me.entityPool.add("Collectable", Collectable);
		
		// enable the keyboard
		me.input.bindKey(me.input.KEY.A, "left");
		me.input.bindKey(me.input.KEY.D, "right");
		me.input.bindKey(me.input.KEY.W, "jump", true);
		me.input.bindKey(me.input.KEY.SPACE, "warp", true);
		me.input.bindKey(me.input.KEY.U, "shoot", true);
		me.input.bindKey(me.input.KEY.ESCAPE, "escape", true);
		me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.U);

		// start the game
		me.state.change(me.state.MENU);
	}
};

var Collectable = me.CollectableEntity.extend({
	// extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
    	alert("collided");
    	 // make sure it cannot be collected "again"
        this.collidable = false;
        // remove it
        me.game.remove(this);
        // do something when collected
        alert("Go to the next level bro");
        me.levelDirector.nextLevel();
    }
});

// jsApp

/* the in game stuff*/
var PlayScreen = me.ScreenObject.extend({

	onResetEvent : function() {
		// stuff to reset on state change
		// loads previous level
		me.levelDirector.loadLevel("level1");
	},

	/* ---

	 action to perform when game is finished (state change)

	 --- */
	onDestroyEvent : function() {
		
		//Go to the pause screen when ESCAPE is pressed
		me.input.bindKey(me.input.KEY.ESCAPE);
		me.state.change(me.state.PAUSE);

		//just in case
		this.scrollertween.stop();
	}
	
	/*
	//Update function	
	update : function(){
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
	*/
	
});

//bootstrap :)
window.onReady(function() {
	jsApp.onload();
});
