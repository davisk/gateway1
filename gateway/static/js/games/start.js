/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "startCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene1_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];

    // Load our images as individual Bitmaps
    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Setup and scale dash by the monitor
    imgs[1].x = gameWidth * 0.2;
    imgs[1].y = gameHeight * 0.05;
    imgs[1].scaleY = 0.55;
    imgs[1].scaleX = 0.7;

    // Add our images to the canvas. This is specific to the number of images loaded
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

function getStartingPlayerConfig() {
    return {
        'pos': 'left1',
        'xloc': 100,
        'yloc': 100,
        'scaleX': 0.7,
        'scaleY': 0.55
    };
}
