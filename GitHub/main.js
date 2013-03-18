/*!
*	Project Warp
*   A game by Superawesomemegasquad
* 	Daniel Pagharion
*   Nathan Nichols-Roy
*   John Bentley
*   John Mai
*   CMPS 20 & CMPE 131
*   Winter 2013
* 
* 	Created using melonjs game engine
*   melonJS
*   http://www.melonjs.org
**/

// GAME RESOURCES


var g_resources = 
	// LEVELS
	[{name : "gametileset",type : "image",src : "data/tileset/gametileset.png"}, {
	name : "level1",
	type : "tmx",
	src : "data/tileset/level1.tmx"
},{
	name: "level2",
	type: "tmx",
	src: "data/tileset/level2.tmx"
},{
	name: "level3",
	type: "tmx",
	src: "data/tileset/level3.tmx"
},{
	name : "level4",
	type: "tmx",
	src: "data/tileset/level4.tmx"
},{
	name: "level5",
	type: "tmx",
	src: "data/tileset/level5.tmx"
},{ 
	name: "level6",
	type: "tmx",
	src: "data/tileset/level6.tmx"
},{
	name: "level7",
	type: "tmx",
	src: "data/tileset/level7.tmx"
},{
	name: "level8",
	type: "tmx",
	src: "data/tileset/level8.tmx"
},{
	name: "level9",
	type: "tmx",
	src: "data/tileset/level9.tmx"
},{
	name : "loading_screen",
	type : "image",
	src : "data/loading_screen.jpg"
},{
	name: "metatiles32x32",
	type: "image",
	src: "data/tileset/metatiles32x32.png"
},{
	name : "player_sheet",
	type : "image",
	src : "data/Art/player_sheetnew.png"
}, {
	name : "bullet",
	type : "image",
	src : "data/Art/bullet_sheet.png"
}, {
	name : "gun",
	type : "image",
	src : "data/Art/bullet.png"
}, {
	name : "32x32_font",
	type : "image",
	src : "data/bitmap_fonts/32x32_font.png"
}, {
	name: "stomp",
	type: "audio",
	src: "data/audio/"
},{
	name: "cling",
    type: "audio",
    src: "data/audio/",
    channel: 2
},{
	name: "note",
	type: "image",
	src: "data/Art/note.png"
},{
	name: "clear",
	type: "image",
	src: "data/Art/clear.png"
},{
	name: "clearh",
	type: "image",
	src: "data/Art/clearh.png"
},{
	name: "clearv",
	type: "image",
	src: "data/Art/clearv.png"
},{
	name: "rubberv",
	type: "image",
	src: "data/Art/rubberv.png"
},{
	name: "sentrygun",
	type: "image",
	src: "data/Art/sentry_sheet.png"
},{
	name: "glaserv_mid",
	type: "image",
	src: "data/Art/glaser_ver_m.png"
},{
	name: "glaserv_top",
	type: "image",
	src: "data/Art/glaser_ver_t.png"
},{
	name: "glaserv_bot",
	type: "image",
	src: "data/Art/glaser_ver_b.png"
},{
	name: "glaserh_mid",
	type: "image",
	src: "data/Art/glaser_hor_m.png"
},{
	name: "glaserh_left",
	type: "image",
	src: "data/Art/glaser_hor_l.png"
},{
	name: "glaserh_right",
	type: "image",
	src: "data/Art/glaser_hor_r.png"
},{
	name: "laserv_mid",
	type: "image",
	src: "data/Art/laser_ver_m.png"
},{
	name: "laserv_top",
	type: "image",
	src: "data/Art/laser_ver_t.png"
},{
	name: "laserv_bot",
	type: "image",
	src: "data/Art/laser_ver_b.png"
},{
	name: "laserh_mid",
	type: "image",
	src: "data/Art/laser_hor_m.png"
},{
	name: "laserh_left",
	type: "image",
	src: "data/Art/laser_hor_l.png"
},{
	name: "laserh_right",
	type: "image",
	src: "data/Art/laser_hor_r.png"
},{
	name: "arm",
	type: "image",
	src: "data/Art/Arm.png"
},{
	name: "title_screen_press_enter",
	type: "image",
	src: "data/GUI/title_screen_press_enter.png"
},{
	name: "title_screen_play_game",
	type: "image",
	src: "data/GUI/title_screen_play_game.png"
},{
	name: "title_screen_level_select",
	type: "image",
	src: "data/GUI/title_screen_level_select.png"
},{
	name: "title_screen_options",
	type: "image",
	src: "data/GUI/title_screen_options.png"
},{
	name: "level_select_screen",
	type: "image",
	src: "data/GUI/level_select_screen.png"
},{
	name: "background",
	type: "image",
	src: "data/Art/background.png"	
},{
	name: "foreground",
	type: "image",
	src: "data/tileset/foreground.png"
},{
	name: "pauseguy",
	type: "image",
	src:  "data/Art/pause.png"
},{
	name: "bulletdie",
	type: "image",
	src: "data/Art/bulletdie_sheet.png"
},{
	name: "note1",
	type: "image",
	src: "data/labnotes/labnote1.png"
},{
	name: "note2",
	type: "image",
	src: "data/labnotes/labnote2.png"
},{
	name: "note3",
	type: "image",
	src: "data/labnotes/labnote3.png"
},{
	name: "note4",
	type: "image",
	src: "data/labnotes/labnote4.png"
},{
	name: "note5",
	type: "image",
	src: "data/labnotes/labnote5.png"
},{
	name: "note6",
	type: "image",
	src: "data/labnotes/labnote6.png"
},{
	name: "note7",
	type: "image",
	src: "data/labnotes/labnote7.png"
},{
	name: "note8",
	type: "image",
	src: "data/labnotes/labnote8.png"
},{
	name: "note9",
	type: "image",
	src: "data/labnotes/labnote9.png"
},{
	name: "No_Pass",
	type: "audio",
	src: "data/audio/",
	channel: 1
},{
	name: "warp_sheet",
	type:"image",
	src: "data/Art/warp.png"
},{
	name: "sentrygun2",
	type: "image",
	src: "data/Art/sentry_sheet2.png"
},{
	name: "Crescent",
	type: "audio",
	src: "data/audio/",
	channel: 1
},{
	name: "TheFever",
	type: "audio",
	src: "data/audio/",
	channel: 1
},{
	name: "Union",
	type: "audio",
	src: "data/audio/",
	channel: 1
}];
var jsApp = {
	/* ---

	 Initialize the jsApp

	 ---			*/
	onload : function() {

		//var canvasWidth = me.video.getWidth();
	    //var canvasHeight = me.video.getHeight();
		// init the video
		if (!me.video.init('jsapp', 800, 600, false, 1.0)) {
			alert("Sorry but your browser does not support html 5 canvas.");
			return;
		}
		
		//me.debug.renderHitBox = true;
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
		//me.state.set(me.state.PAUSE, new PauseScreen());
		
		// set the load screen object
		//me.state.set(me.state.LOADING, new CustomLoadingScreen());
		
		// set the cursor screen
		me.state.set(me.state.SELECT, new CursorScreen());

		// set a global fading transition for the screen
		me.state.transition("fade", "#FFFFFF", 250);

		// add our player entity in the entity pool
		me.entityPool.add("mainPlayer", PlayerEntity);							// Winston
		me.entityPool.add("NoteEntity", NoteEntity, true);						// Lab Notes
		me.entityPool.add("glassWallh", glassWallhEntity, true);				// Horizontal Glass Wall
		me.entityPool.add("glassWallv", glassWallvEntity, true);				// Vertical Glass Wall
		me.entityPool.add("rubberWallv", rubberWallvEntity, true);				// Rubber Wall
		me.entityPool.add("SentryGunEntity", SentryGunEntity);					// Right shooting Sentry Gun
		me.entityPool.add("SentryGun2Entity", SentryGun2Entity);				// Left Shooting Sentry Gun
		me.entityPool.add("sentrybullet", SentryBulletEntity, true);			// Sentry Gun Bullet
		me.entityPool.add("LaserEntity", LaserEntity, true); 					// Horizontal Laser Beam middle piece
		me.entityPool.add("Laser2Entity", Laser2Entity, true);					// Vertical Laser Beam middle piece
		me.entityPool.add("Laser3Entity", Laser3Entity, true);					// Vertical Laser Beam top piece
		me.entityPool.add("Laser4Entity", Laser4Entity, true);					// Vertical Laser Beam bot piece
		me.entityPool.add("Laser5Entity", Laser5Entity, true);					// Horizontal Laser Beam left piece
		me.entityPool.add("Laser6Entity", Laser6Entity, true);					// Horizontal Laser Beam right piece
		me.entityPool.add("Play_Game", PlayGameEntity);
		me.entityPool.add("MarkerEntity", MarkerEntity, true);						// Death Threshold
		me.entityPool.add("GreenLaserv", GreenLaservEntity, true);
		me.entityPool.add("GreenLaserh", GreenLaserhEntity, true);
		me.entityPool.add("BulletDeathEntity", BulletDeathEntity, true);
		
		
		
		
		
		// enable the keyboard
		me.input.bindKey(me.input.KEY.A, "left");
		me.input.bindKey(me.input.KEY.D, "right");
		me.input.bindKey(me.input.KEY.W, "jump", true);
		me.input.bindKey(me.input.KEY.S, "down", true);
		me.input.bindKey(me.input.KEY.SPACE, "warp", true);
		me.input.bindKey(me.input.KEY.U, "shoot", true);
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
		me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.U);
		

		// start the game
		me.state.change(me.state.MENU);
		//console.log("went to title screen (screens.js)");
	}
};

// jsApp

/* the in game stuff*/
var PlayScreen = me.ScreenObject.extend({

	/* 
	 * Stuff to reset to state change
	 */
	
	//var labNoteVector = me.Vector2D;

	onResetEvent : function() {
		// loads previous level
		me.levelDirector.loadLevel("level1");
		me.sys.gravity = 0.98;
		//me.sys.fps = 60;
		 me.audio.playTrack("No_Pass", 0.5);
		
		//Find a cleaner way to make the song repeat...
		
		
		me.game.sort();
	},

	//CollectableEntity.onCollision(labNoteVector, PlayerEntity);
	/* ---

	 action to perform when game is finished (state change)

	 --- */
	onDestroyEvent : function() {
		
		//Go to the pause screen when ESCAPE is pressed
		//me.input.bindKey(me.input.KEY.ESCAPE);
		//me.state.change(me.state.PAUSE);

		//just in case
		//this.scrollertween.stop();
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
		
		//return true;
		this.updateMovement();
	},
	*/
	
});

//bootstrap :)
window.onReady(function() {
	jsApp.onload();
});
