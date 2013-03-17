/*----------------
 a Lab Note entity
------------------------ */

var NoteEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
        
       	noteCollected = false;
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
    	noteCollected = true;
        this.collidable = false;
        me.game.remove(this);
        daCurLevel = me.levelDirector.getCurrentLevelId();
        if(daCurLevel == "level1"){
        	alert("May 22nd, 2134: I have begun research on warp technology to be used in the development of\n rather astonishing warp technology. I have chosen Winston as my lab and research assistant,\n as he has proven to be a noble consort.\n~Everything seemed fine when we worked together, you and I~")
        }
        else if(daCurLevel == "level2"){
        	alert("June 10, 2134: Research is mostly complete. I have begun to prototype the aptly named warp\n gun. This gun will allow anyone to warp to any place in a given radius, so long as they are\n wielding the gun.\n~We’ve accomplished so much, and learned a great deal~")
        }
         else if(daCurLevel == "level3"){
        	alert("Septemeber 15, 2134: Warp gun doesn’t seem to be working as planned. For some reason,\n warping forces me into walls, and sticks me on the wall until I jump off...\n~But lately it seems that what we’ve done together~")
        }
         else if(daCurLevel == "level4"){
        	alert("January 1, 2135: A new year, a new set of prototypes to be tested. Winston has been testing\n these prototypes nonstop until they are fully functional. It seems as though we are very close to\n finalizing our design for the gun!\n~Just seems like a way to make things get better~")
        }
         else if(daCurLevel == "level5"){
        	alert("April 15, 2135: We have begun to further develop our finalized prototype, I have tested the gun\n against different forms of lasers and other weaponry, so the gun may withstand intense combat\n in the field. The gun is now able to shoot through lasers, and bullets can ricochet off of glass walls.\n ~It was after you neglected me that I began to see a change~")
        }
         else if(daCurLevel == "level6"){
        	alert("November 20, 2135: Warp gun experiments have become exhausting. If I make it through this\n month, I’ll be satisfied with my personal stamina. I have placed Winston in full charge of testing,\n allowing me to concentrate on the gun’s design.\n~From black to white, from mute to full volume~")
        }
         else if(daCurLevel == "level7"){
        	alert("May 12, 2136: The gun is nearly complete. With our testing coming to a close, Winston and I are\n putting the final touches on the gun- both in aesthetics and functionality. \n~Everything that was done has been built up to be broken down~")
        }
         else if(daCurLevel == "level8"){
        	alert("August 6, 2136: Disaster in the lab. Winston and I have become separated by some form of\n chemical discharge being strewn about the lab. It has alerted us to the fact that not everyone is\n safe around warp technology. We need to get out of this lab- NOW.\n ~Now what seems to be my only ticket to freedom~")
        }
         else if(daCurLevel == "level9"){
        	alert("November 5, 2136: Winston and I are lost. I have decided to destroy all evidence of the gun.\n Nobody will ever be able to see the terror caused by this device.\n ~Will be my ticket to escape~")
        }
        me.game.sort();
    }/*,
    update: function(){
    	this.updateMovement();
    }
 */
});

var noteCollected;
var daCurLevel;