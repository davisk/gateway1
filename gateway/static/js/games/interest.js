/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "interCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene5_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"}
    ];
}

function loadGame() {

    var imgs = [];

    for (i = 0; i < manifest.length; i++) {
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Scale characters
    imgs[1].scaleY = 0.55;
    imgs[1].scaleX = 0.7;

    // Set our main guy up by the entrance
    imgs[1].x = 120;
    imgs[1].y = 80;

    // Add our images to the canvas and remove the progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
    stage.addChild(object);
    stage.removeChild(progressText);
}
