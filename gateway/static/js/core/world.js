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

var queue;

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


var preload;
var progressText;
var user;

function initSprite() {

    progressText = new createjs.Text("", "20px Arial", "#000000");
    progressText.x = 300 - progressText.getMeasuredWidth() / 2;
    progressText.y = 20;
    stage.addChild(progressText);

    setupManifest();
    startPreload();
}

function setupManifest() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene1_init.png"},
        {id: "user_front", src: "/static/sprites/user_front.png"},
        ()
        {id: "game_guide", src: "/static/sprites/Main_guy.png"}
    ];
}

function startPreload() {
    preload = new createjs.LoadQueue(true);
    preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);
}

function handleFileLoad(event) {
    console.log("A file has loaded of type: " + event.item.type);
}


function loadError(evt) {
    console.log("Error!",evt.text);
}


function handleFileProgress(event) {
    progressText.text = (preload.progress*100|0) + " % Loaded";
}

function loadComplete(event) {
    console.log("Finished Loading Assets");

    /*var bgImage = preload.getResult("canvas_bkgd").result;
    var bgBitmap = new createjs.Bitmap(bgImage);
    stage.addChild(bgBitmap);*/

    var image = preload.getResult("canvas_bkgd");
    var image2 = preload.getResult("game_user");
    var image3 = preload.getResult("game_guide");

    background = new createjs.Bitmap(image);
    user = new createjs.Bitmap(image2);

    background.scaleY = 0.4;
    background.scaleX = 0.6;

    user.y = 160;

    stage.addChild(background);
    stage.addChild(user);
    stage.removeChild(progressText);
}

function check() {
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
