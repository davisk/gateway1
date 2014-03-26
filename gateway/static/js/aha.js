/*
	The script running the Aha - Minigame
*/


// Global variables
var canvas, 
	canvasID,
	object,
	spriteImg = new Image(), 
	spriteObj, 
	stage;

// Generate our game once everything is loaded
$(document).ready(function() {

	initGame();
	// initSprite();
	buildObject();

	// Set game attributes
	createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
});

// Initialize our game environment
function initGame() {
	
	canvasID = "ahaCanvas";
	canvas = document.getElementById(canvasID);
	stage = new createjs.Stage(canvas);

	// Setup our function for user input (key)
	document.onkeydown = handleKeyDown;

	// Setup our function for user mouse input ONLY in the canvas
	document.getElementById(canvasID).onmousedown = handleMouseDown;
}

// Initialize our game sprite(s)
/*function initSprite() {

    spriteImg.onload = handleImageLoad;
    spriteImg.onerror = handleImageError;
    spriteImg.src = "static/sprites/oursprite.xfc";
}*/

// Build our object for the game (test circle for now)
function buildObject() {

	object = new createjs.Shape();

	object.graphics.beginFill("blue").drawCircle(0, 0, 50);
	object.x = 100;
	object.y = 100;

	//Add the object to our stage
	stage.addChild(object);
}

// Not currently hooked up yet
/*
function buildSprite() {
	
	spriteSheetObj = new createjs.SpriteSheet({
    
	    // Sprite image
	    images: [spriteImg], 
	    
	    // Dimensions/Reg point of each sprite
	    frames: {width: 64, height: 64, regX: 32, regY: 32}, 

	    // Based off the complete sequence of the sprite
	    animations: {    
	        walk: [0, 9, "walk"]
    	}
	});
}
*/

function tick() {

    stage.update();
}

// Handle all user input through key events
function handleKeyDown(e) {

    e = e || window.event;

	switch (e.keyCode) {

		// Left
		case 37:
			object.x -= 5;
			break;

		// Up
		case 38:
			object.y -= 5;
			break;

		// Right
		case 39:
			object.x += 5;
			break;

		// Down
		case 40:
			object.y += 5;
			break;

		default:
			break;
	}
}

// Handle all user input through mouse events
function handleMouseDown() {
	
	// For right now, just reset to original position
	object.x = 100;
	object.y = 100;
}