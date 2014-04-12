/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "gapCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene3_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},
        {id: "user_front", src: "/static/sprites/user_front.png"},
        {id: "user_left", src: "/static/sprites/user_side_left.png"},
        {id: "user_back", src: "/static/sprites/user_back.png"}
    ];
}

function loadGame() {

    var imgs = [];
    var height = 0.85*window.innerHeight;
    var width = 0.75*window.innerWidth;

    for (i = 0; i < manifest.length; i++) {
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.55;
    imgs[0].scaleX = 0.7;

    // Scale characters
    imgs[1].scaleY = 0.55;
    imgs[1].scaleX = 0.7;
    imgs[2].scaleY = 0.55;
    imgs[2].scaleX = 0.7;

    // Dash by monitor
    imgs[1].x = width*0.2;
    imgs[1].y = height*0.05;

    // Set our user image and location to the global variable
    object = imgs[2];
    object.x = width*0.47;
    object.y = height*0.1;

    // Add our images to the canvas and remove the progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
    stage.addChild(object);
    stage.removeChild(progressText);
}
