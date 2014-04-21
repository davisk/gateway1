/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "elevCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene6_init.png"}, // 0
        {id: "game_guide", src: "/static/sprites/Main_guy.png"}, //1
        {id: "user_back", src: "/static/sprites/user_back.png"}, //2
        {id: "answer_text", src: "/static/sprites/Textbox.png"},//3
        {id: "question_text", src: "/static/sprites/Textbox2.png"},//4
        //4
    ];
}

function loadGame() {

    game_index = 0;
    answer_text_y = canvas.height - (canvas.height * 0.40);
    answer_text_x = canvas.width / 4.5;
    answer_text_width =  100;
  

    question_text_y = canvas.height - (canvas.height * 0.40);
    question_text_x = canvas.width / 5;
    question_text_width =  100;


    var question_number = 0;
    var answers = [];
    var answer_imgs = [];
    var question_imgs = [];
    var imgs = [];

    for (i = 0; i < 5; i++) {
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }
    for (i = 0; i < 0; i++) {
        question_imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }
    for (i = 0; i < 0; i++) {
        answer_imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }

       // Add our images and remove progress bar
    for (i = 0; i < imgs.length; i++) stage.addChild(imgs[i]);

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Scale characters
    imgs[1].x = 100;
    imgs[1].y = 100;

    imgs[3].x = answer_text_x;
    imgs[3].y = answer_text_y;

    
    imgs[1].scaleY = 1.5;
    imgs[1].scaleX = 1.5;
    imgs[1].x = 450;
    imgs[1].y = 25;
    imgs[3].scaleY = 1;
    imgs[3].scaleX = 1;
    imgs[4].scaleY = 0.8;
    imgs[4].scaleX = 1;

    imgs[2].scaleX = 2.2;
    imgs[2].scaleY = 2.2;
    imgs[2].x = 650;
    imgs[2].y = 150;

    function handleAnswer(event) {
        answers[game_index] = event.target.index;
        game_index++;
        updateQuestion();
        updateAnswer();
        stage.update();
    }

    function updateAnswer(){
        for(i = 0; i < 2; i++) {
            answer_imgs[(((game_index -1) *2) + 1)].clear();
            answer_imgs[((game_index *2) + 1)].scaleY = imgs[3].scaleY;
            answer_imgs[((game_index *2) + 1)].scaleX = imgs[3].scaleX;
            answer_imgs[((game_index *2) + 1)].x =imgs[3].x;
            answer_imgs[((game_index *2) + 1)].y =imgs[3].y;
            stage.addChild(question_imgs[game_index]);
        }
    }

    function setAnswer(){
        for(i = 0; i < 2; i++) {
            answer_imgs[((game_index *2) + 1)].scaleY = imgs[3].scaleY;
            answer_imgs[((game_index *2) + 1)].scaleX = imgs[3].scaleX;
            answer_imgs[((game_index *2) + 1)].x =imgs[3].x;
            answer_imgs[((game_index *2) + 1)].y =imgs[3].y;
            stage.addChild(question_imgs[game_index]);
        }
    }


    function updateQuestion() {
        question_imgs[game_index -1].clear();
        question_imgs[game_index].scaleY = imgs[4].scaleY;
        question_imgs[game_index].scaleX = imgs[4].scaleX;
        question_imgs[game_index].x =imgs[4].x;
        question_imgs[game_index].y =imgs[4].y;
        stage.addChild(question_imgs[game_index]);
    }

    function setQuesiont(){
        question_imgs[game_index].scaleY = imgs[4].scaleY;
        question_imgs[game_index].scaleX = imgs[4].scaleX;
        question_imgs[game_index].x =imgs[4].x;
        question_imgs[game_index].y =imgs[4].y;
        stage.addChild(question_imgs[game_index]);
    }

    function setAnswer(box, x_axis, y_axis, height, width, index) {
        box.x = answer_text_x;
        box.y = answer_texy_y;
        box.index = index;
        box.width = width;
        box.addEventListener("click", handleAnswer);
        stage.addChild(box);
        stage.update();
    }

    //make external text array as global variable call on that and make questions from that?
    //make event handler in reference to main



    stage.update();
}
   // Set our user image and location to the global variable
function getStartingPlayerConfig() {
    return {
        'pos': 'left1',
        'xloc': 650,
        'yloc': 10,
        'scaleX': 5,
        'scaleY': 5
    };
}
