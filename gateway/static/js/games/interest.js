/*
    These are specific functions that DIFFER between games
*/


var txtbox;
var dialogue = [];

///var goToNextGame = false;

function getCanvasId() {
    return "interCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene5_init.png"},
        {id: "game_npc", src: "/static/sprites/Dash_2.png"},
        {id: "thebox", src: "/static/sprites/Textbox2.png"},
        {id: "int_txtbox", src: "/static/sprites/s5_text/s5_1.png"},
        {id: "sec_txtbox", src: "/static/sprites/s5_text/s5_2.png"},
        {id: "lst_txtbox", src: "/static/sprites/s5_text/s5_3.png"}
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
    for (i = 4; i < 11; i++) dialogue.push(imgs[i]);


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

function initTextBoxConfig() {

    txtbox.x = 950;
    txtbox.y = 50;
    txtbox.scaleX = 1.06;
    txtbox.scaleY = 0.55;
}

function initDialogueConfig() {

    for (i = 0; i < dialogue.length; i++) {
        dialogue[i].x = 950;
        dialogue[i].y = 50;
        dialogue[i].scaleY = 0.6;
        dialogue[i].scaleX = 0.8;

    }

    dialogue[0].addEventListener("click", function(event) {
        stage.removeChild(dialogue[0]);
        stage.addChild(dialogue[1]);
    });

    dialogue[1].addEventListener("click", function(event) {
        stage.removeChild(dialogue[1]);
        stage.addChild(dialogue[2]);
        goToNextGame = true;
    });
}

function initInteraction() {

    initTextBoxConfig();

    initDialogueConfig();

    stage.addChild(txtbox, dialogue[0]);
}
