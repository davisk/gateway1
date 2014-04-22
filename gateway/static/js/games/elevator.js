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
        {id: "user_back", src: "/static/sprites/user_back3.png"}, //2
        {id: "answer_text", src: "/static/sprites/Textbox.png"},//3
        {id: "question_text", src: "/static/sprites/Textbox2.png"},//4
        {id: "monologue_one", src: "/static/sprites/s6_text/s6_1.png"},//5
        {id: "monologue_two", src: "/static/sprites/s6_text/s6_2.png"},//6
        {id: "monologue_three", src: "/static/sprites/s6_text/s6_3.png"},//7
        {id: "monologue_four", src: "/static/sprites/s6_text/s6_4.png"},//8
        {id: "monologue_five", src: "/static/sprites/s6_text/s6_5.png"},//9
        {id: "monologue_six", src: "/static/sprites/s6_text/s6_6.png"},//10
        {id: "monologue_seven", src: "/static/sprites/s6_text/s6_7.png"},//11
        {id: "monologue_eight", src: "/static/sprites/s6_text/s6_8.png"},//12
        {id: "monologue_nine", src: "/static/sprites/s6_text/s6_9.png"},//13
        {id: "monologue_ten", src: "/static/sprites/s6_text/s6_10.png"},//14
        {id: "question_one", src: "/static/sprites/s6_text/s6_q1.png"},//15
        {id: "question_two", src: "/static/sprites/s6_text/s6_q2.png"},//16
        {id: "question_three", src: "/static/sprites/s6_text/s6_q3.png"},//17
        {id: "question_one_a1", src: "/static/sprites/s6_text/s6_q1_1.png"},//18
        {id: "question_one_a2", src: "/static/sprites/s6_text/s6_q1_2.png"},//19
        {id: "question_two_a1", src: "/static/sprites/s6_text/s6_q2_1.png"},//20
        {id: "question_two_a2", src: "/static/sprites/s6_text/s6_q2_2.png"},//21
        {id: "question_three_a1", src: "/static/sprites/s6_text/s6_q3_1.png"},//22
        {id: "question_three_a2", src: "/static/sprites/s6_text/s6_q3_2.png"}//23
    ];
}

function loadGame() {

    stage.enableMouseOver(60);

    game_index = 0;
    monologue_index = 0;

    answer_text_y = canvas.height - (canvas.height * 0.40);
    answer_text_x = canvas.width / 4.5;
    answer_text_width =  100;

    question_text_y = canvas.height - (canvas.height * 0.40);
    question_text_x = canvas.width / 5;
    question_text_width =  100;

    var question_number = 0;
    var answers = [];
    var initial_monologue = [];
    var answer_imgs = [];
    var question_imgs = [];
    var imgs = [];

    
    for (i = 0; i < 5; i++) {
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }
    n = 0;
    for (i = 5; i < 14; i++) {
        initial_monologue[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
    }
    n = 0;
    for (i = 14; i < 17; i++) {
        question_imgs[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
    }
    n = 0;
    for (i = 17; i < 22; i++) {
        answer_imgs[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
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

    
    imgs[1].scaleY = 2;
    imgs[1].scaleX = 2;
    imgs[1].x = 400;
    imgs[1].y = 150;
    imgs[3].scaleY = 1;
    imgs[3].scaleX = 1;
    imgs[4].scaleY = 0.8;
    imgs[4].scaleX = 1;

    imgs[2].scaleX = 2;
    imgs[2].scaleY = 2;
    imgs[2].x = 800;
    imgs[2].y = 150;

    txt = new createjs.Text("not Clicked", "32px Arial", "#000000");
    txt.y = 50;
    txt.x = 600;

    stage.addChild(txt);

    function handleAnswer() {
       // answers[game_index] = event.target.index;
       // game_index++;
        txt.Text = "clicked";
       // updateQuestion();
       // updateAnswer();
        stage.update();
    }

    function handleMonologue(){
        monologue_index++;
        txt.Text = "clicked";
//        updateMonologue();
        stage.update();
    }

    function handleMouse(event) {
        event.target.alpha = 0.75;
    }
    function handleMouseOut(event) {
        event.target.alpha = 1;
    }


    function updateAnswer(){
        for(i = 0; i < 2; i++) {
            answer_imgs[(((game_index -1) *2) + i)].clear();
            answer_imgs[((game_index *2) + i)].scaleY = imgs[3].scaleY;
            answer_imgs[((game_index *2) + i)].scaleX = imgs[3].scaleX;
            answer_imgs[((game_index *2) + i)].x =imgs[3].x + 75 + (i * 100);
            answer_imgs[((game_index *2) + i)].y =imgs[3].y;
            answer_imgs[((game_index *2) + i)].addEventListener("mouseover", handleMouse);
            answer_imgs[((game_index *2) + i)].addEventListener("click", handleAnswer);
            answer_imgs[((game_index *2) + i)].addEventListener("mouseout", handleMouseOut);
            stage.addChild(answer_imgs[(((game_index) *2) + i)]);
        }
    }

    function setAnswer(){
        for(i = 0; i < 2; i++) {
            answer_imgs[i].scaleY = imgs[3].scaleY;
            answer_imgs[i].scaleX = imgs[3].scaleX;
            answer_imgs[i].x =imgs[3].x + 75 +(i * 100);
            answer_imgs[i].y =imgs[3].y;
            answer_imgs[i].addEventListener("mouseover", handleMouse);
            answer_imgs[i].addEventListener("click", handleAnswer);
            answer_imgs[i].addEventListener("mouseout", handleMouseOut);
            stage.addChild(answer_imgs[(((game_index) *2) + i)]);
        }
    }

    function setMonoloque(){
        initial_monologue[0].scaleY = imgs[4].scaleY;
        initial_monologue[0].scaleX = imgs[4].scaleX;
        initial_monologue[0].x =imgs[4].x;
        initial_monologue[0].y =imgs[4].y;
        initial_monologue[0].cursor = "pointer";
        initial_monologue[0].on("click", handleMonologue);
        stage.addChild(initial_monologue[monologue_index]);
    }

    function updateMonologue() {
        if(initial_monologue <= monologue_index) {
            initial_monologue[monologue_index -1].clear();
            initial_monologue[monologue_index].scaleY = imgs[4].scaleY;
            initial_monologue[monologue_index].scaleX = imgs[4].scaleX;
            initial_monologue[monologue_index].x =imgs[4].x;
            initial_monologue[monologue_index].y =imgs[4].y;
            initial_monologue[monologue_index].cursor = "pointer";
            initial_monologue[monologue_index].on("click", handleMonologue);
            stage.addChild(initial_monologue[monologue_index]);
        }
        else {
            initial_monologue[monologue_index].clear();
            setQuestion();
            setAnswer();
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

    function setQuestion(){
        question_imgs[0].scaleY = imgs[4].scaleY;
        question_imgs[0].scaleX = imgs[4].scaleX;
        question_imgs[0].x =imgs[4].x;
        question_imgs[0].y =imgs[4].y;
        stage.addChild(question_imgs[game_index]);
    }
    /*
    function setAnswer(box, x_axis, y_axis, height, width, index) {
        box.x = answer_text_x;
        box.y = answer_texy_y;
        box.index = index;
        box.width = width;
        box.addEventListener("click", handleAnswer);
        stage.addChild(box);
        stage.update();
    }
    */
    //make external text array as global variable call on that and make questions from that?
    //make event handler in reference to main
    setMonoloque();
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
