/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// Game 3 (scene 4) of Gateway's Venture. Last edited 4/23/14 by Becca Little. //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////


// Global variables for images
var box_dialogue, box_answers;
var dialogue = [];
var answers = [];

// Survey format chosen
var format;
var gap = {
    choices: [0,0,0,0,0,0,0,0]
};

function getCanvasId() {
    return "survCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd",     src: "/static/sprites/scene4_init.png"},
        {id: "game_guide",      src: "/static/sprites/Dash_2.png"},
        {id: "box_dialogue",    src: "/static/sprites/Textbox2.png"}, 
        {id: "box_answers",     src: "/static/sprites/Textbox.png"},   
        {id: "dialogue1",       src: "/static/sprites/s4_text/s4_1.png"},
        {id: "dialogue2",       src: "/static/sprites/s4_text/s4_2.png"},
        {id: "dialogue3",       src: "/static/sprites/s4_text/s4_3.png"},
        {id: "dialogue4",       src: "/static/sprites/s4_text/s4_4.png"},
        {id: "dialogue5",       src: "/static/sprites/s4_text/s4_5.png"},
        {id: "dialogue6",       src: "/static/sprites/s4_text/s4_6.png"},
        {id: "question1",       src: "/static/sprites/s4_text/s4_q1.png"},
        {id: "question2",       src: "/static/sprites/s4_text/s4_q2c.png"},
        {id: "question3",       src: "/static/sprites/s4_text/s4_q3c.png"},
        {id: "question4",       src: "/static/sprites/s4_text/s4_q4o.png"},
        {id: "question5",       src: "/static/sprites/s4_text/s4_q5o.png"},
        {id: "question6",       src: "/static/sprites/s4_text/s4_q6o.png"},
        {id: "question7",       src: "/static/sprites/s4_text/s4_q7s.png"},
        {id: "question8",       src: "/static/sprites/s4_text/s4_q8s.png"},
        {id: "answer1_1",       src: "/static/sprites/s4_text/s4_q1_1.png"},
        {id: "answer1_2",       src: "/static/sprites/s4_text/s4_q1_2.png"},
        {id: "answer2_1",       src: "/static/sprites/s4_text/s4_a2_1.png"},
        {id: "answer2_2",       src: "/static/sprites/s4_text/s4_a2_2.png"},
        {id: "answer3_1",       src: "/static/sprites/s4_text/s4_a3_1.png"},
        {id: "answer3_2",       src: "/static/sprites/s4_text/s4_a3_2.png"},
        {id: "answer4_1",       src: "/static/sprites/s4_text/s4_a4_1.png"},
        {id: "answer4_2",       src: "/static/sprites/s4_text/s4_a4_2.png"},
        {id: "answer5_1",       src: "/static/sprites/s4_text/s4_a5_1.png"},
        {id: "answer5_2",       src: "/static/sprites/s4_text/s4_a5_2.png"},
        {id: "answer6_1",       src: "/static/sprites/s4_text/s4_a6_1.png"},
        {id: "answer6_2",       src: "/static/sprites/s4_text/s4_a6_2.png"},
        {id: "answer7_1",       src: "/static/sprites/s4_text/s4_a7_1.png"},
        {id: "answer7_2",       src: "/static/sprites/s4_text/s4_a7_2.png"},
        {id: "answer8_1",       src: "/static/sprites/s4_text/s4_a8_1.png"},
        {id: "answer8_2",       src: "/static/sprites/s4_text/s4_a8_2.png"},

    ];
}

function loadGameConfig() {

    // Array of all images; setting up initial images (background, Dash)
    var imgs = [];
    for (i = 0; i < manifest.length; i++) 
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    imgs[0].scaleY = 0.6;
    imgs[1].x = 950;
    imgs[1].y = 0;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    for (i = 0; i < 2; i++) 
        stage.addChild(imgs[i]);

    // Global variable images: textboxes, dialogue texts, answer texts
    box_dialogue = imgs[2];
    box_answers = imgs[3];

    for (i = 4; i < 18; i++) 
        dialogue.push(imgs[i]);

    for (i = 18; i < 34; i++) 
        answers.push(imgs[i]);
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
        stage.addChild(dialogue[6], box_answers);
        stage.addChild(answers[0], answers[1]);
    });
}

function initAnswersConfig() {

    // Answers text sizes and positions
    answers[0].x = answers[4].x = answers[8].x = answers[12].x = 180;
    answers[1].x = answers[5].x = answers[9].x = answers[13].x = 300;
    answers[2].x = answers[6].x = answers[10].x = answers[14].x = 180;
    answers[3].x = answers[7].x = answers[11].x = answers[15].x = 300;

    for (i = 0; i < answers.length; i++) {
        answers[i].y = 440;
        answers[i].scaleY = 0.6;
        answers[i].scaleX = 0.8;
    }


    // Question 1: survey format
    answers[0].addEventListener("click", function(event) {
        stage.removeChild(dialogue[6]);
        stage.removeChild(answers[0], answers[1]);
        gap.choices[0] = 0;
        stage.addChild(dialogue[7]);
        stage.addChild(answers[2], answers[3]);
        format = 1;
    });

    answers[1].addEventListener("click", function(event) {
        stage.removeChild(dialogue[6]);
        stage.removeChild(answers[0], answers[1]);
        gap.choices[0] = 1;
        stage.addChild(dialogue[7]);
        stage.addChild(answers[2], answers[3]);
        format = 2;
    });


    // Question 2
    answers[2].addEventListener("click", function(event) {
        stage.removeChild(dialogue[7]);
        stage.removeChild(answers[2], answers[3]);
        gap.choices[1] = 0;
        if (format == 1) {
            stage.addChild(dialogue[8]);
            stage.addChild(answers[4], answers[5]);
        } else if (format == 2) {
            stage.addChild(dialogue[9]);
            stage.addChild(answers[6], answers[7]);
        } 
    });

    answers[3].addEventListener("click", function(event) {
        stage.removeChild(dialogue[7]);
        stage.removeChild(answers[2], answers[3]);
        gap.choices[1] = 1;
        if (format == 1) {
            stage.addChild(dialogue[8]);
            stage.addChild(answers[4], answers[5]);
        } else if (format == 2) {
            stage.addChild(dialogue[9]);
            stage.addChild(answers[6], answers[7]);
        } 
    });


    // Question 3
    answers[4].addEventListener("click", function(event) {
        stage.removeChild(dialogue[8]);
        stage.removeChild(answers[4], answers[5]);
        gap.choices[2] = 0;
        stage.addChild(dialogue[9]);
        stage.addChild(answers[6], answers[7]);
    });

    answers[5].addEventListener("click", function(event) {
        stage.removeChild(dialogue[8]);
        stage.removeChild(answers[4], answers[5]);
        gap.choices[2] = 1;
        stage.addChild(dialogue[9]);
        stage.addChild(answers[6], answers[7]);
    });


    // Question 4
    answers[6].addEventListener("click", function(event) {
        stage.removeChild(dialogue[9]);
        stage.removeChild(answers[6], answers[7]);
        gap.choices[3] = 0;
        stage.addChild(dialogue[10]);
        stage.addChild(answers[8], answers[9]);
    });

    answers[7].addEventListener("click", function(event) {
        stage.removeChild(dialogue[9]);
        stage.removeChild(answers[6], answers[7]);
        gap.choices[3] = 1;
        stage.addChild(dialogue[10]);
        stage.addChild(answers[8], answers[9]);
    });


    // Question 5
    answers[8].addEventListener("click", function(event) {
        stage.removeChild(dialogue[10]);
        stage.removeChild(answers[8], answers[9]);
        gap.choices[4] = 0;
        if (format == 1) {
            stage.addChild(dialogue[12]);
            stage.addChild(answers[12], answers[13]);
        } else if (format == 2) {
            stage.addChild(dialogue[11]);
            stage.addChild(answers[10], answers[11]);
        } 
    });

    answers[9].addEventListener("click", function(event) {
        stage.removeChild(dialogue[10]);
        stage.removeChild(answers[8], answers[9]);
        gap.choices[4] = 1;
        if (format == 1) {
            stage.addChild(dialogue[12]);
            stage.addChild(answers[12], answers[13]);
        } else if (format == 2) {
            stage.addChild(dialogue[11]);
            stage.addChild(answers[10], answers[11]);
        } 
    });

    // Question 6
    answers[10].addEventListener("click", function(event) {
        stage.removeChild(dialogue[11]);
        stage.removeChild(answers[10], answers[11]);
        gap.choices[5] = 0;
        stage.addChild(dialogue[12]);
        stage.addChild(answers[12], answers[13]);
    });

    answers[11].addEventListener("click", function(event) {
        stage.removeChild(dialogue[11]);
        stage.removeChild(answers[10], answers[11]);
        gap.choices[5] = 1;
        stage.addChild(dialogue[12]);
        stage.addChild(answers[12], answers[13]);
    });


    // Question 7
    answers[12].addEventListener("click", function(event) {
        stage.removeChild(dialogue[12]);
        stage.removeChild(answers[12], answers[13]);
        gap.choices[6] = 0;
        stage.addChild(dialogue[13]);
        stage.addChild(answers[14], answers[15]);
    });

    answers[13].addEventListener("click", function(event) {
        stage.removeChild(dialogue[12]);
        stage.removeChild(answers[12], answers[13]);
        gap.choices[6] = 1;
        stage.addChild(dialogue[13]);
        stage.addChild(answers[14], answers[15]);
    });


    // Question 8
    answers[14].addEventListener("click", function(event) {
        stage.removeChild(dialogue[13]);
        stage.removeChild(answers[14], answers[15], box_answers);
        gap.choices[7] = 0;
        stage.addChild(dialogue[5]);
        goToNextGame = true;            // Elevator Access
    });

    answers[15].addEventListener("click", function(event) {
        stage.removeChild(dialogue[13]);
        stage.removeChild(answers[14], answers[15], box_answers);
        gap.choices[7] = 1;
        stage.addChild(dialogue[5]);
        goToNextGame = true;            // Elevator Access
    });
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
