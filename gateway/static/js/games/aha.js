/*
    These are specific functions that DIFFER between games
*/

var txtbox, answer_txtbx;

var dialog = [];

var answers = [];

var goToNextGame = false;


function getCanvasId() {
    return "ahaCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene2_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},
        {id: "welcome_txtbox", src: "/static/sprites/Textbox2.png"},
        {id: "welcome_txt1", src: "/static/sprites/s2_text/s2_1.png"},
        {id: "welcome_txt2", src: "/static/sprites/s2_text/s2_2.png"},
        {id: "welcome_txt3", src: "/static/sprites/s2_text/s2_3.png"},
        {id: "welcome_txt4", src: "/static/sprites/s2_text/s2_4.png"},
        {id: "welcome_ans1", src: "/static/sprites/s2_text/s2_a1.png"},
        {id: "welcome_ans2", src: "/static/sprites/s2_text/s2_a2.png"},
        {id: "welcome_ans3", src: "/static/sprites/s2_text/s2_a3.png"},
        {id: "welcome_ans4", src: "/static/sprites/s2_text/s2_a4.png"},
        {id: "welcome_ans5", src: "/static/sprites/s2_text/s2_a5.png"},
        {id: "welcome_ans6", src: "/static/sprites/s2_text/s2_a6.png"},
        {id: "welcome_ans7", src: "/static/sprites/s2_text/s2_a7.png"},
        {id: "welcome_ans8", src: "/static/sprites/s2_text/s2_a8.png"},
        {id: "welcome_ans9", src: "/static/sprites/s2_text/s2_a9.png"},
        {id: "answer_txtbx", src: "/static/sprites/Textbox.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];

    // Load our images as individual Bitmaps
    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Scale & Set our main guy up by the entrance
    imgs[1].x = 470;
    imgs[1].y = 40;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    txtbox = imgs[2];

    for (i = 3; i < 7; i++) {
        dialog.push(imgs[i]);
    }

    for (i = 7; i < manifest.length - 1; i++) {
        answers.push(imgs[i]);
    }

    answer_txtbx = imgs[16];

    // Add our images and remove progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

function getStartingPlayerConfig() {
    return {
        'pos': 'down1',
        'xloc': 710,
        'yloc': 390,
        'scaleX': 1,
        'scaleY': 1
    };
}

function initInteraction() {

    txtbox.x = 950;
    txtbox.y = 50;
    txtbox.scaleY = 0.5;
    txtbox.scaleX = 0.8;

    answer_txtbx.x = 170;
    answer_txtbx.y = 440;

    answer_txtbx.scaleX = 1.06;
    answer_txtbx.scaleY = 0.55;

    for (i = 0; i < dialog.length; i++) {
        dialog[i].x = 950;
        dialog[i].y = 50;
        dialog[i].scaleY = 0.6;
        dialog[i].scaleX = 0.8;
    }

    answers[0].x = answers[3].x = answers[6].x = 180;
    answers[1].x = answers[4].x = answers[7].x = 300;
    answers[2].x = answers[5].x = answers[8].x = 425;

    for (i = 0; i < answers.length; i++) {
        answers[i].y = 440;
        answers[i].scaleY = 0.6;
        answers[i].scaleX = 0.8;
    }


    for (i = 0; i < 3; i++) {
        answers[i].addEventListener("click", function(event) {
            stage.removeChild(answers[0], answers[1], answers[2]);
            stage.addChild(answers[3], answers[4], answers[5]);
        }, false);
    }

    dialog[0].addEventListener("click", function(event) {
        stage.removeChild(dialog[0]);
        stage.addChild(dialog[1]);
    });

    dialog[1].addEventListener("click", function(event) {
        stage.removeChild(dialog[1]);
        stage.addChild(dialog[2]);
    });

    dialog[2].addEventListener("click", function(event) {
        stage.removeChild(dialog[2]);
        stage.addChild(dialog[3]);

        stage.addChild(answer_txtbx);

        for (i = 0; i < 3; i++) {
            stage.addChild(answers[i]);
        }
    });

    goToNextGame = true;

    stage.addChild(txtbox, dialog[0]);
    stage.update();
}

function switchGame() {
    window.location = window.location.protocol + "//" + window.location.host + "/" + "minigame/aha";
}
