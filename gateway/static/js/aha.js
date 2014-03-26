/*
	The script running the Aha - Minigame
*/


// Global attrs
var canvas, id, object, stage;

// Generate our game once everything is loaded
$(document).ready(function() {

	initGame();
	buildObject();

	// Set game attributes
	createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
});

// Initialize our game environment
function initGame() {
	
	id = "ahaCanvas";
	canvas = document.getElementById(id);
	stage = new createjs.Stage(canvas);

	// Setup our function for user input (key)
	document.onkeydown = handleKeyDown;

	// Setup our function for user mouse input ONLY in the canvas
	document.getElementById(id).onmousedown = handleMouseDown;
}

// Build our object for the game (test circle for now)
function buildObject() {

	object = new createjs.Shape();
	object.graphics.beginFill("blue").drawCircle(0, 0, 50);
	object.x = 100;
	object.y = 100;

	//Add the object to our stage
	stage.addChild(object);
}

function tick() {

    stage.update();
}

// Handle all user input through key events
function handleKeyDown() {

	object.x += 5;
}

// Handle all user input through mouse events
function handleMouseDown() {
	
	object.x -= 10;
}