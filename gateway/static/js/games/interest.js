/*
    These are specific functions that DIFFER between games
*/


var box_dialogue;
var score;
var timeout;
var dialogue = [];
var imgs = [];

///var goToNextGame = false;

function getCanvasId() {
    return "interCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene5_init.png"},
        {id: "game_npc", src: "/static/sprites/Dash_2.png"},
        {id: "box_dialogue", src: "/static/sprites/Textbox2.png"},
        {id: "dialogue1", src: "/static/sprites/s5_text/s5_1.png"},
        {id: "dialogue2", src: "/static/sprites/s5_text/s5_2.png"},
        {id: "dialogue3", src: "/static/sprites/s5_text/s5_3.png"}
    ];
}

function loadGameConfig() {

    //var imgs = [];

    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;
    
    //Setup scale the bro
    
    imgs[1].x = 450;
    imgs[1].y = 200;
    imgs[1].scaleX = 0.8;
    imgs[1].scaleY = 0.8;

    box_dialogue = imgs[2];

    for (i = 3; i < 6; i++) dialogue.push(imgs[i]);


    // Add our images to the canvas and remove the progress bar
    //for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
    stage.addChild(imgs[0]);

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

    box_dialogue.x = 950;
    box_dialogue.y = 50;
    box_dialogue.scaleX = 1.06;
    box_dialogue.scaleY = 0.55;
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
        theGame();
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

    stage.addChild(box_dialogue, dialogue[0]);
}

function theGame() {

    while(true) {
        timeout = window.setTimeout(function(){return}, 60000);
        stage.addChild(imgs[1]);
        if (userPlayer.x >= 450 && userPlayer.x <= 650 && userPlayer.y >= 10 && userPlayer.y <= 20) {
            stage.RemoveChild(imgs[1]);
        }
    }
}
