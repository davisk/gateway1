/*
    These are specific functions that DIFFER between games
*/


var txtbox;
var goToNextGame = false;

function getCanvasId() {
    return "interCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene5_init.png"},
        {id: "game_npc", src: "/static/sprites/Dash_2.png"},
        {id: "int_txtbox", src: "/static/sprites/Textbox.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];

    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;
    
    //Setup scale the bro
    
    imgs[1].x = 450;
    imgs[1].y = 200;
    imgs[1].scaleX = 0.8;
    imgs[1].scaleY = 0.8;

    txtbox = imgs[2];
    //txtbox = imgs[3];


    // Add our images to the canvas and remove the progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);


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

function initInteraction() {

    txtbox.x = 200;
    txtbox.y = 475;
    txtbox.scaleX = 1;
    txtbox.scaleY = 0.5;

    goToNextGame = true;

    stage.addChild(txtbox);
    stage.update();

}

function switchGame() {
    window.location = window.location.protocol + "//" + window.location.host + "/" + "minigame/elevator";
}

