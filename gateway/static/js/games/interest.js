/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "interCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene5_init.png"},
        {id: "game_npc", src: "/static/sprites/Dash_2.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];
    var catch = 0;
    var timeoutID;

    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;
    imgs[1].scaleX = 0.8;
    imgs[1].scaleY = 0.8;
    //Setup scale the bro

    // Add our images to the canvas and remove the progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);

    imgs[1].

}

function getStartingPlayerConfig() {
    return {
        'pos': 'down1',
        'xloc': 650,
        'yloc': 10,
        'scaleX': 1,
        'scaleY': 1
    };
}


