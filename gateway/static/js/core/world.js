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
 * This manages the easel js stage
 * @property
 * @type {createjs.Stage}
 */
var stage;

/**
 * This is the character of the world
 * @property object
 * @type {}
 */
var object;

/**
 * This is the holder for the images in the game
 * @property canvas
 * @type {array}
 */
var manifest;

/**
 * This is what is loading our manifest images
 * @property canvas
 * @type {createjs.LoadQueue}
 */
var preload;

/**
 * This is the progress bar for loading the game
 * @property canvas
 * @type {createjs.Text}
 */
var progressText;


function initGame() {

    canvasID = getCanvasId();
    canvas = document.getElementById(canvasID);
    stage = new createjs.Stage(canvas);

    // Set game attributes
    createjs.Ticker.setFPS(60);

    // Create our progress bar
    initLoadProgress();
    // Setup our game image manifest
    initImages();
    // Queue & Preload our manifest
    startPreload();
}

function initLoadProgress() {

    progressText = new createjs.Text("", "20px Arial", "#000000");
    progressText.x = 300 - progressText.getMeasuredWidth() / 2;
    progressText.y = 20;
    stage.addChild(progressText);
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene1_init.png"},
        {id: "user_front", src: "/static/sprites/user_front.png"},
        {id: "user_left", src: "/static/sprites/user_side_left.png"},
        {id: "user_back", src: "/static/sprites/user_back.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},
    ];
}

function startPreload() {

    preload = new createjs.LoadQueue(true);
    preload.on("progress", handleGameProgress);
    preload.on("complete", loadGame);
    preload.loadManifest(manifest);
}

function handleGameProgress(event) {
    progressText.text = (preload.progress*100|0) + " % Loaded";
}

function loadGame(event) {

    canvas_bkgd = new createjs.Bitmap(preload.getResult("canvas_bkgd"));

    game_guide = new createjs.Bitmap(preload.getResult("game_guide"));

    user_front = new createjs.Bitmap(preload.getResult("user_front"));

    // Fix the background image for the canvas
    background.scaleY = 0.4;
    background.scaleX = 0.6;

    // Set our user image and location
    object = user_front;
    object.x = 700;
    object.y = 160;

    // Add our images to the canvas and remove the progress bar
    stage.addChild(background);
    stage.addChild(object);
    stage.removeChild(progressText);
}
