/*
    These are specific functions that DIFFER between games
*/


var box_dialogue;
var score = 0;
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
        {id: "game_npc", src: "/static/sprites/bro.png"},
        {id: "box_dialogue", src: "/static/sprites/Textbox2.png"},
        {id: "dialogue1", src: "/static/sprites/s5_text/s5_1.png"},
        {id: "dialogue2", src: "/static/sprites/s5_text/s5_2.png"},
        {id: "dialogue3", src: "/static/sprites/s5_text/s5_3.png"},
        {id: "npc_2", src: "/static/sprites/bro.png"},
        {id: "npc_3", src: "/static/sprites/bro.png"},
        {id: "npc_4", src: "/static/sprites/bro.png"}
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
    imgs[6].x = 220;
    imgs[6].y = 30;
    imgs[6].scaleX = 0.8;
    imgs[6].scaleY = 0.8;
    imgs[7].x = 600;
    imgs[7].y = 300;
    imgs[7].scaleX = 0.8;
    imgs[7].scaleY = 0.8;
    imgs[8].x = 1130;
    imgs[8].y = 390;
    imgs[8].scaleX = 0.8;
    imgs[8].scaleY = 0.8;

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
    box_dialogue.scaleX = 1;
    box_dialogue.scaleY = 0.65;
}

function initDialogueConfig() {

    for (i = 0; i < dialogue.length; i++) {
        dialogue[i].x = 950;
        dialogue[i].y = 50;
        dialogue[i].scaleY = 0.6;
        dialogue[i].scaleX = 0.8;

    }

    dialogue[0].addEventListener("click", function(event) {
        stage.removeChild(dialogue[0], box_dialogue);
        theGame();
    });

}

function initInteraction() {

    initTextBoxConfig();

    initDialogueConfig();

    stage.addChild(box_dialogue, dialogue[0]);
}

function theGame() {

    timeout = window.setTimeout(afterGame, 60000);

     stage.addChild(imgs[1], imgs[6], imgs[7], imgs[8]);
     imgs[1].addEventListener("click", function(event) {
         stage.removeChild(imgs[1]);
         score += 10;
         stage.removeChild(sText);
        });
     imgs[6].addEventListener("click", function(event) {
         stage.removeChild(imgs[6]);
         score += 5;
         stage.removeChild(sText);
     });
     imgs[7].addEventListener("click", function(event) {
         stage.removeChild(imgs[7]);
         score += 20;
         stage.removeChild(sText);
     });
     imgs[8].addEventListener("click", function(event) {
         stage.removeChild(imgs[8]);
         score += 35;
         stage.removeChild(sText);
     });

}

function afterGame() {

    stage.removeChild(imgs[1]); 
    stage.removeChild(imgs[6]); 
    stage.removeChild(imgs[7]); 
    stage.removeChild(imgs[8]);
    stage.removeChild(sText);
    stage.addChild(box_dialogue, dialogue[1]);
    dialogue[1].addEventListener("click", function(event) {
        stage.removeChild(dialogue[1]);
        stage.addChild(dialogue[2]);
        goToNextGame = true;
    });
}
