/**
 * manages the stage/world using easel js
 */

/**
 * This hold the dom of the canvas element
 * @property canvas
 * @type {DOM}
 */
var canvas;

/**
 * This hold the name of the id of the canvas
 * @property canvasID
 * @type {string}
 */
var canvasID;

/**
 * This is the character of the world
 * @property object
 * @type {createjs.Shape}
 */
var object;

/**
 * This is the holder for the images in the game
 * @property canvas
 * @type {array}
 */
var manifest;

/**
 * COMING SOON
 */
var spriteObj;

/**
 * This manages the easel js stage
 * @property
 * @type {createjs.Stage}
 */
var stage;

// Initialize our game environment
function initGame() {

    canvasID = getCanvasId();
    canvas = document.getElementById(canvasID);
    stage = new createjs.Stage(canvas);

    // Set game attributes
    createjs.Ticker.setFPS(60);
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


// Initialize our game sprite(s)
function initSprite() {

    var queue = new createjs.LoadQueue();
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
        {id: "myImage", src:"/static/sprites/scene1_init.png"}
    ]);
}

function handleComplete() {
    var image = queue.getResult("myImage");
    document.body.appendChild(image);
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
