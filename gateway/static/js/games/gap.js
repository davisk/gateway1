/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// Game 2 (scene 3) of Gateway's Venture. Last edited 4/23/14 by Becca Little. //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////


// Global variables for images
var box_dialogue, box_answers;
var dialogue = [];
var answers = [];

// Start game with seven tokens
var tokens = 7;
var gap = {
    choices: 0
};

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
        {id: "q2",              src: "/static/sprites/s3_text/s3_q3.png"},              // Incorrectly named
        {id: "q2browse",        src: "/static/sprites/s3_text/s3_q2_browse.png"},
        {id: "q2learn",         src: "/static/sprites/s3_text/s3_q2_learn.png"},
        {id: "q2research",      src: "/static/sprites/s3_text/s3_q2_research.png"},
        {id: "q3",              src: "/static/sprites/s3_text/s3_q2.png"},              // Incorrectly named
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

    // Array of all images; setting up initial images (background, Dash)
    var imgs = [];
    for (i = 0; i < manifest.length; i++) 
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    imgs[0].scaleY = 0.6;
    imgs[1].x = 330;
    imgs[1].y = 0;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    for (i = 0; i < 2; i++) 
        stage.addChild(imgs[i]);


    // Global variable images: textboxes, dialogue texts, answer texts
    box_dialogue = imgs[2];
    box_answers = imgs[3];

    for (i = 4; i < 23; i++) dialogue.push(imgs[i]);
    dialogue.push(imgs[35]);

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

function initTextBoxConfig() {

    // Text box sizes and positions
    box_dialogue.x = 950;
    box_dialogue.y = 50;
    box_dialogue.scaleY = 0.6;
    box_dialogue.scaleX = 0.8;

    box_answers.x = 170;
    box_answers.y = 440;
    box_answers.scaleX = 1.06;
    box_answers.scaleY = 0.55;
}

function initDialogueConfig() {

    // Dialogue text sizes and positions
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
        for (i = 0; i < 3; i++) 
            stage.addChild(answers[i]);
    });


    // Based on which token is chosen, a different response is displayed
    dialogue[8].addEventListener("click", function(event) {
        stage.removeChild(dialogue[8]);
        stage.addChild(dialogue[11], box_answers);
        for (i = 3; i < 6; i++) 
            stage.addChild(answers[i]);
    });

    dialogue[9].addEventListener("click", function(event) {
        stage.removeChild(dialogue[9]);
        stage.addChild(dialogue[11], box_answers);
        for (i = 3; i < 6; i++) 
            stage.addChild(answers[i]);
    });

    dialogue[10].addEventListener("click", function(event) {
        stage.removeChild(dialogue[10]);
        stage.addChild(dialogue[11], box_answers);
        for (i = 3; i < 6; i++) 
            stage.addChild(answers[i]);
    });

    dialogue[12].addEventListener("click", function(event) {
        stage.removeChild(dialogue[12]);
        stage.addChild(dialogue[15], box_answers);
        if (tokens >= 3) 
            for (i = 6; i < 9; i++) 
                stage.addChild(answers[i]);
        else if (tokens == 2) 
            for (i = 6; i < 8; i++) 
                stage.addChild(answers[i]);
        else if (tokens == 1) 
            for (i = 6; i < 7; i++) 
                stage.addChild(answers[i]);
    });

    dialogue[13].addEventListener("click", function(event) {
        stage.removeChild(dialogue[13]);
        stage.addChild(dialogue[15], box_answers);
        if (tokens >= 3) 
            for (i = 6; i < 9; i++) 
                stage.addChild(answers[i]);
        else if (tokens == 2) 
            for (i = 6; i < 8; i++) 
                stage.addChild(answers[i]);
        else if (tokens == 1) 
            for (i = 6; i < 7; i++) 
                stage.addChild(answers[i]);
    });

    dialogue[14].addEventListener("click", function(event) {
        stage.removeChild(dialogue[14]);
        stage.addChild(dialogue[15], box_answers);
        if (tokens >= 3) 
            for (i = 6; i < 9; i++) 
                stage.addChild(answers[i]);
        else if (tokens == 2) 
            for (i = 6; i < 8; i++) 
                stage.addChild(answers[i]);
        else if (tokens == 1) 
            for (i = 6; i < 7; i++) 
                stage.addChild(answers[i]);
    });


    // Choose option based off information
    dialogue[16].addEventListener("click", function(event) {
        stage.removeChild(dialogue[16]);
        stage.addChild(dialogue[19], box_answers);
        for (i = 9; i < 12; i++) 
            stage.addChild(answers[i]);
    });

    dialogue[17].addEventListener("click", function(event) {
        stage.removeChild(dialogue[17]);
        stage.addChild(dialogue[19], box_answers);
        for (i = 9; i < 12; i++) 
            stage.addChild(answers[i]);
    });

    dialogue[18].addEventListener("click", function(event) {
        stage.removeChild(dialogue[18]);
        stage.addChild(dialogue[19], box_answers);
        for (i = 9; i < 12; i++) 
            stage.addChild(answers[i]);
    });


    // Final Discussion
    dialogue[5].addEventListener("click", function(event) {
        stage.removeChild(dialogue[5]);
        stage.addChild(dialogue[6]);
        goToNextGame = true;            // Elevator Access
    });
}

function initAnswersConfig() {

    // Answers text sizes and positions
    answers[0].x = answers[3].x = answers[6].x = answers[9].x = 180;
    answers[1].x = answers[4].x = answers[7].x = answers[10].x = 300;
    answers[2].x = answers[5].x = answers[8].x = answers[11].x = 425;

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
        if (tokens >=3) 
            stage.removeChild(answers[6], answers[7], answers[8],box_answers,dialogue[15]);
        else if (tokens == 2) 
            stage.removeChild(answers[6], answers[7],box_answers,dialogue[15]);
        else if (tokens == 1) 
            stage.removeChild(answers[6], box_answers,dialogue[15]);
        stage.addChild(dialogue[16]);
    }, false);

    answers[7].addEventListener("click", function(event) {
        if (tokens >=3) 
            stage.removeChild(answers[6], answers[7], answers[8],box_answers,dialogue[15]);
        else if (tokens == 2) 
            stage.removeChild(answers[6], answers[7],box_answers,dialogue[15]);
        else if (tokens == 1) 
            stage.removeChild(answers[6], box_answers,dialogue[15]);
        stage.addChild(dialogue[17]);
    }, false);

    answers[8].addEventListener("click", function(event) {
        if (tokens >=3) 
            stage.removeChild(answers[6], answers[7], answers[8],box_answers,dialogue[15]);
        else if (tokens == 2) 
            stage.removeChild(answers[6], answers[7],box_answers,dialogue[15]);
        else if (tokens == 1) 
            stage.removeChild(answers[6], box_answers,dialogue[15]);
        stage.addChild(dialogue[18]);
    }, false);


    // Question 4
    answers[9].addEventListener("click", function(event) {
        stage.removeChild(answers[9], answers[10], answers[11],box_answers,dialogue[15]);
        gap.choices = 0;
        stage.addChild(dialogue[5]);
    }, false);

    answers[10].addEventListener("click", function(event) {
        stage.removeChild(answers[9], answers[10], answers[11],box_answers,dialogue[15]);
        gap.choices = 1;
        stage.addChild(dialogue[5]);
    }, false);

    answers[11].addEventListener("click", function(event) {
        stage.removeChild(answers[9], answers[10], answers[11],box_answers,dialogue[15]);
        gap.choices = 2;
        stage.addChild(dialogue[5]);
    }, false);
}

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
