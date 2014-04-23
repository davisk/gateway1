/**
 * These are the two textbox images that never leave the screen
 * until the questions are answered
 * @property canvasIDs
 * @type {image}
 */
var box_dialogue, box_answers;

/**
 * This hold the images that contain the user questions
 * @property canvasIDs
 * @type {array}
 */
var dialogue = [];

/**
 * This hold the images that contain the user answers
 * @property canvasIDs
 * @type {array}
 */
var answers = [];

var tokens = 7;

function getCanvasId() {
    return "gapCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd",     src: "/static/sprites/scene3_init.png"},
        {id: "game_guide",      src: "/static/sprites/Main_guy.png"},
        {id: "box_dialogue",    src: "/static/sprites/Textbox2.png"}, 
        {id: "box_answers",     src: "/static/sprites/Textbox.png"},   
        {id: "dialogue1",       src: "/static/sprites/s3_text/s3_1.png"},
        {id: "dialogue2",       src: "/static/sprites/s3_text/s3_2.png"},
        {id: "dialogue3",       src: "/static/sprites/s3_text/s3_3.png"},
        {id: "dialogue4",       src: "/static/sprites/s3_text/s3_4.png"},
        {id: "dialogue5",       src: "/static/sprites/s3_text/s3_5.png"},
        {id: "dialogue6",       src: "/static/sprites/s3_text/s3_6.png"},
        {id: "dialogue7",       src: "/static/sprites/s3_text/s3_7.png"},
        {id: "q1",              src: "/static/sprites/s3_text/s3_q1.png"},
        {id: "q1browse",        src: "/static/sprites/s3_text/s3_q1_browse.png"},
        {id: "q1learn",         src: "/static/sprites/s3_text/s3_q1_learn.png"},
        {id: "q1research",      src: "/static/sprites/s3_text/s3_q1_research.png"},
        {id: "q2",              src: "/static/sprites/s3_text/s3_q3.png"},
        {id: "q2browse",        src: "/static/sprites/s3_text/s3_q2_browse.png"},
        {id: "q2learn",         src: "/static/sprites/s3_text/s3_q2_learn.png"},
        {id: "q2research",      src: "/static/sprites/s3_text/s3_q2_research.png"},
        {id: "q3",              src: "/static/sprites/s3_text/s3_q2.png"},
        {id: "q3browse",        src: "/static/sprites/s3_text/s3_q3_browse.png"},
        {id: "q3learn",         src: "/static/sprites/s3_text/s3_q3_learn.png"},
        {id: "q3research",      src: "/static/sprites/s3_text/s3_q3_research.png"},
        {id: "token1",          src: "/static/sprites/s3_text/s3_a1.png"},
        {id: "token2",          src: "/static/sprites/s3_text/s3_a2.png"},
        {id: "token3",          src: "/static/sprites/s3_text/s3_a3.png"},
        {id: "token4",          src: "/static/sprites/s3_text/s3_a1.png"},
        {id: "token5",          src: "/static/sprites/s3_text/s3_a2.png"},
        {id: "token6",          src: "/static/sprites/s3_text/s3_a3.png"},
        {id: "token7",          src: "/static/sprites/s3_text/s3_a1.png"},
        {id: "token8",          src: "/static/sprites/s3_text/s3_a2.png"},
        {id: "token9",          src: "/static/sprites/s3_text/s3_a3.png"},
        {id: "first",           src: "/static/sprites/s3_text/s3_a4.png"},
        {id: "second",          src: "/static/sprites/s3_text/s3_a5.png"},
        {id: "third",           src: "/static/sprites/s3_text/s3_a6.png"},        
        {id: "dialogue8",       src: "/static/sprites/s3_text/s3_8.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];

    // Load our images as individual Bitmaps
    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Setup and scale dash by the monitor
    imgs[1].x = 330;
    imgs[1].y = 0;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    // Add our images to the canvas. This is specific to the number of images loaded
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);

    // Assign our textboxes to their global variables
    box_dialogue = imgs[2];
    box_answers = imgs[3];

    // Push all the dialogue images into an array
    for (i = 4; i < 23; i++) dialogue.push(imgs[i]);
    dialogue.push(imgs[35]);

    // Push all the answer images into an array
    for (i = 23; i < 35; i++) answers.push(imgs[i]);
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


/**
 * Settings up the sizing and locations for both textbox images
 */
function initTextBoxConfig() {

    // Location and sizing for the dialogue box (top-right)
    box_dialogue.x = 950;
    box_dialogue.y = 50;
    box_dialogue.scaleY = 0.6;
    box_dialogue.scaleX = 0.8;

    // Location and sizing for the answer box (bottom)
    box_answers.x = 170;
    box_answers.y = 440;
    box_answers.scaleX = 1.06;
    box_answers.scaleY = 0.55;
}

/**
 * Settings up the sizing, locations and event handlers for all dialogue images
 */
function initDialogueConfig() {

    /**
     * TODO: Find out why my event listeners can't be set within
     *       a for loop and using i as the index in the array
     *
     * TODO: Find a better method for moving across dialogues on click.
     *       Currently have to click on image text EXACTLY and it's annoying.
    */

    // Set location and sizing for all dialogue text
    for (i = 0; i < dialogue.length; i++) {
        dialogue[i].x = 950;
        dialogue[i].y = 50;
        dialogue[i].scaleY = 0.6;
        dialogue[i].scaleX = 0.8;
    }

    // Initial Explanation
    dialogue[0].addEventListener("click", function(event) {
        stage.removeChild(dialogue[0]);
        stage.addChild(dialogue[1]);
    });

    dialogue[1].addEventListener("click", function(event) {
        stage.removeChild(dialogue[1]);
        stage.addChild(dialogue[2]);
    });

    dialogue[2].addEventListener("click", function(event) {
        stage.removeChild(dialogue[2]);
        stage.addChild(dialogue[3]);
    });

    dialogue[3].addEventListener("click", function(event) {
        stage.removeChild(dialogue[3]);
        stage.addChild(dialogue[4]);
    });

    dialogue[4].addEventListener("click", function(event) {
        stage.removeChild(dialogue[4]);
        stage.addChild(dialogue[7], box_answers);
        for (i = 0; i < 3; i++) stage.addChild(answers[i]);
    });

    // Based on which token is chosen, a different response is displayed; listeners for each response here

    dialogue[8].addEventListener("click", function(event) {
        stage.removeChild(dialogue[8]);
        stage.addChild(dialogue[11], box_answers);
        for (i = 3; i < 6; i++) stage.addChild(answers[i]);
    });

    dialogue[9].addEventListener("click", function(event) {
        stage.removeChild(dialogue[9]);
        stage.addChild(dialogue[11], box_answers);
        for (i = 3; i < 6; i++) stage.addChild(answers[i]);
    });

    dialogue[10].addEventListener("click", function(event) {
        stage.removeChild(dialogue[10]);
        stage.addChild(dialogue[11], box_answers);
        for (i = 3; i < 6; i++) stage.addChild(answers[i]);
    });

    dialogue[12].addEventListener("click", function(event) {
        stage.removeChild(dialogue[12]);
        stage.addChild(dialogue[15], box_answers);
        if (tokens >= 3) for (i = 6; i < 9; i++) stage.addChild(answers[i]);
        else if (tokens = 2) for (i = 6; i < 8; i++) stage.addChild(answers[i]);
        else if (tokens = 1) for (i = 6; i < 7; i++) stage.addChild(answers[i]);
    });

    dialogue[13].addEventListener("click", function(event) {
        stage.removeChild(dialogue[13]);
        stage.addChild(dialogue[15], box_answers);
        if (tokens >= 3) for (i = 6; i < 9; i++) stage.addChild(answers[i]);
        else if (tokens = 2) for (i = 6; i < 8; i++) stage.addChild(answers[i]);
        else if (tokens = 1) for (i = 6; i < 7; i++) stage.addChild(answers[i]);
    });

    dialogue[14].addEventListener("click", function(event) {
        stage.removeChild(dialogue[14]);
        stage.addChild(dialogue[15], box_answers);
        if (tokens >= 3) for (i = 6; i < 9; i++) stage.addChild(answers[i]);
        else if (tokens == 2) for (i = 6; i < 8; i++) stage.addChild(answers[i]);
        else if (tokens == 1) for (i = 6; i < 7; i++) stage.addChild(answers[i]);
    });

    dialogue[16].addEventListener("click", function(event) {
        stage.removeChild(dialogue[16]);
        stage.addChild(dialogue[19], box_answers);
        for (i = 9; i < 12; i++) stage.addChild(answers[i]);
    });

    dialogue[17].addEventListener("click", function(event) {
        stage.removeChild(dialogue[17]);
        stage.addChild(dialogue[19], box_answers);
        for (i = 9; i < 12; i++) stage.addChild(answers[i]);
    });

    dialogue[18].addEventListener("click", function(event) {
        stage.removeChild(dialogue[18]);
        stage.addChild(dialogue[19], box_answers);
        for (i = 9; i < 12; i++) stage.addChild(answers[i]);
    });

    // Final Discussion
    dialogue[5].addEventListener("click", function(event) {
        stage.removeChild(dialogue[5]);
        stage.addChild(dialogue[6]);
        goToNextGame = true;        // Unlock access to walking to the elevator
    });
}

/**
 * Settings up the sizing, locations and event handlers for all answer images
 */
function initAnswersConfig() {

    /**
     * TODO: Save the answer the user chose to our DB
    */

    // Answers are broken into 3 at a time. Which means that 0,3,6 (etc) will have the same x locations
    answers[0].x = answers[3].x = answers[6].x = answers[9].x = 180;
    answers[1].x = answers[4].x = answers[7].x = answers[10].x = 300;
    answers[2].x = answers[5].x = answers[8].x = answers[11].x = 425;

    // These are locations/sizings that apply to all answers
    for (i = 0; i < answers.length; i++) {
        answers[i].y = 440;
        answers[i].scaleY = 0.6;
        answers[i].scaleX = 0.8;
    }

    // Question 1
    answers[0].addEventListener("click", function(event) {
        stage.removeChild(answers[0], answers[1], answers[2],box_answers,dialogue[7]);
        stage.addChild(dialogue[8]);
        tokens -= 1;
    }, false);

    answers[1].addEventListener("click", function(event) {
        stage.removeChild(answers[0], answers[1], answers[2],box_answers,dialogue[7]);
        stage.addChild(dialogue[9]);
        tokens -= 2;
    }, false);

    answers[2].addEventListener("click", function(event) {
        stage.removeChild(answers[0], answers[1], answers[2],box_answers,dialogue[7]);
        stage.addChild(dialogue[10]);
        tokens -= 3;
    }, false);

    // Question 2
    answers[3].addEventListener("click", function(event) {
        stage.removeChild(answers[3], answers[4], answers[5],box_answers,dialogue[11]);
        stage.addChild(dialogue[12]);
        tokens -= 1;
    }, false);

    answers[4].addEventListener("click", function(event) {
        stage.removeChild(answers[3], answers[4], answers[5],box_answers,dialogue[11]);
        stage.addChild(dialogue[13]);
        tokens -= 2;
    }, false);

    answers[5].addEventListener("click", function(event) {
        stage.removeChild(answers[3], answers[4], answers[5],box_answers,dialogue[11]);
        stage.addChild(dialogue[14]);
        tokens -= 3;
    }, false);

    // Question 3
    answers[6].addEventListener("click", function(event) {
        if (tokens >=3) stage.removeChild(answers[6], answers[7], answers[8],box_answers,dialogue[15]);
        else if (tokens == 2) stage.removeChild(answers[6], answers[7],box_answers,dialogue[15]);
        else if (tokens == 1) stage.removeChild(answers[6], box_answers,dialogue[15]);
        stage.addChild(dialogue[16]);
    }, false);

    answers[7].addEventListener("click", function(event) {
        if (tokens >=3) stage.removeChild(answers[6], answers[7], answers[8],box_answers,dialogue[15]);
        else if (tokens == 2) stage.removeChild(answers[6], answers[7],box_answers,dialogue[15]);
        else if (tokens == 1) stage.removeChild(answers[6], box_answers,dialogue[15]);
        stage.addChild(dialogue[17]);
    }, false);

    answers[8].addEventListener("click", function(event) {
        if (tokens >=3) stage.removeChild(answers[6], answers[7], answers[8],box_answers,dialogue[15]);
        else if (tokens == 2) stage.removeChild(answers[6], answers[7],box_answers,dialogue[15]);
        else if (tokens == 1) stage.removeChild(answers[6], box_answers,dialogue[15]);
        stage.addChild(dialogue[18]);
    }, false);

    // Question 4
    answers[9].addEventListener("click", function(event) {
        stage.removeChild(answers[9], answers[10], answers[11],box_answers,dialogue[15]);
        stage.addChild(dialogue[5]);
    }, false);

    answers[10].addEventListener("click", function(event) {
        stage.removeChild(answers[9], answers[10], answers[11],box_answers,dialogue[15]);
        stage.addChild(dialogue[5]);
    }, false);

    answers[11].addEventListener("click", function(event) {
        stage.removeChild(answers[9], answers[10], answers[11],box_answers,dialogue[15]);
        stage.addChild(dialogue[5]);
    }, false);
}

/**
 * Handles what happens once the game is started
 * (The user clicking start game)
 */
function initInteraction() {

    // Set our locations for the textboxes
    initTextBoxConfig();

    // Set our locations and event handlers for the dialogue
    initDialogueConfig();

    // Set our locations and event handlers for the answers
    initAnswersConfig();

    // Begin our interaction with the user with our first dialogue message
    stage.addChild(box_dialogue, dialogue[0]);
}
