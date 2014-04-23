/*
    These are specific functions that DIFFER between games
*/
/* storing answer values */
var final_answers;

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
        {id: "monologue_eleven", src: "/static/sprites/s6_text/s6_11.png"},//15
        {id: "question_one", src: "/static/sprites/s6_text/s6_q1.png"},//16
        {id: "question_two", src: "/static/sprites/s6_text/s6_q2.png"},//17
        {id: "question_three", src: "/static/sprites/s6_text/s6_q3.png"},//18
        {id: "question_one_a1", src: "/static/sprites/s6_text/s6_q1_1.png"},//19
        {id: "question_one_a2", src: "/static/sprites/s6_text/s6_q1_2.png"},//20
        {id: "question_two_a1", src: "/static/sprites/s6_text/s6_q2_1.png"},//21
        {id: "question_two_a2", src: "/static/sprites/s6_text/s6_q2_2.png"},//22
        {id: "question_three_a1", src: "/static/sprites/s6_text/s6_q3_1.png"},//23
        {id: "question_three_a2", src: "/static/sprites/s6_text/s6_q3_2.png"}//24
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

    var final_slides = [];
    var interlude = [];
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
    for (i = 5; i < 11; i++) {
        initial_monologue[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
    }
    n = 0;
    for (i = 11; i < 14; i++) {
        interlude[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
    }
    n = 0;
    for (i = 14; i < 16; i++) {
        final_slides[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
    }
    n = 0;
    for (i = 16; i < 19; i++) {
        question_imgs[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
    }
    n = 0;
    for (i = 19; i < 25; i++) {
        answer_imgs[n] = new createjs.Bitmap(preload.getResult(manifest[i].id));
        n++;
    }
       // Add our images and remove progress bar
    for (i = 0; i < imgs.length; i++) {
        if(i !== 3){
            stage.addChild(imgs[i]);
        }
    }
    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Scale characters
    imgs[1].x = 100;
    imgs[1].y = 100;

    imgs[3].x = answer_text_x;
    imgs[3].y = answer_text_y;
    /*
        setting textbox scales
    */
    
    imgs[1].scaleY = 2;
    imgs[1].scaleX = 2;
    imgs[1].x = 400;
    imgs[1].y = 160;
    imgs[3].scaleY = 1;
    imgs[3].scaleX = 1;
    imgs[4].scaleY = 0.8;
    imgs[4].scaleX = 1;
    imgs[2].rotation = -3;

    imgs[2].scaleX = 2;
    imgs[2].scaleY = 2;
    imgs[2].x = 800;
    imgs[2].y = 210;

    var interlude_hit = new createjs.Shape();
    var monologue_hit = new createjs.Shape();
    var answer_hit = [];
    answer_hit[0] = new createjs.Shape();
    answer_hit[1] = new createjs.Shape();
/*
    txt = new createjs.Text("not Clicked", "32px Arial", "#000000");
    txt.y = 50;
    txt.x = 600;

    stage.addChild(txt);
*/
    function exitInterlude(event) {
        removeInterlude();

        /*

        final answers recorded here


        */
        if(game_index === 3) {
            final_answers = answers;
           // txt.text = final_answers;
            showFinal(0);
            stage.removeChild(imgs[3]);
        }
        else {
            updateQuestion();
            updateAnswer();
        }


    }


    /*
        event handling functions
    */
    function handleAnswer_one(event) {
   //    txt.text = "one handled " + game_index;
       answers[game_index] = 1;
 //      event.target.mouseEnabled = false;  
       game_index++;
       stage.removeChild(imgs[3]);
       showInterlude();
       stage.update();
    }

    function handleAnswer_two(event) {
  //     txt.text = "two handled " + game_index;
       answers[game_index] = 2;
//       event.target.mouseEnabled = false;
       game_index++;
       showInterlude();
       stage.update();
    }

    function handleMonologue(event){
        monologue_index++;
 //       txt.text = monologue_index;
        updateMonologue();
        stage.update();
    }

    function handleMouse(event) {
    //    event.target.alpha = 0.75;
    }
    function handleMouseOut(event) {
    //    event.target.alpha = 1;
    }
    function handleBoxMouse_one(event) {
    //    answer_imgs[game_index *2].alpha = 0.75;
    }
    function handleBoxMouseOut_one(event) {
     //   answer_imgs[game_index *2].alpha = 1;
    }
    function handleBoxMouse_two(event) {
     //   answer_imgs[(game_index * 2) + 1].alpha = 0.75;
    }
    function handleBoxMouseOut_two(event) {
     //  answer_imgs[(game_index * 2) +1].alpha = 1;
    }
    function handleFinal(event) {
        stage.removeChild(final_slides[0]);
        showFinal(1);
    }
    function exit(event) {
       // switchGame("end");
    }


    /*
        functions for text display
    */
    function showFinal(index) {
        final_slides[index].scaleY = imgs[4].scaleY;
        final_slides[index].scaleX = imgs[4].scaleX;
        final_slides[index].x =imgs[4].x;
        final_slides[index].y =imgs[4].y;
            
        final_slides[index].cursor = "pointer";
        if(index === 0) {
            final_slides[index].addEventListener("click", handleFinal);
        }
        else{
            final_slides[index].addEventListener("click", exit);
        }
        stage.addChild(final_slides[index]);
    }


    function showInterlude() {

        
        stage.removeChild(answer_imgs[((game_index - 1) * 2)]);
        stage.removeChild(answer_imgs[(((game_index - 1) * 2) + 1)]);
        stage.removeChild(answer_hit[0]);
        stage.removeChild(answer_hit[1]);
        stage.removeChild(question_imgs[game_index -1]);

        
        interlude_hit.graphics.clear();
        interlude[game_index -1].scaleY = imgs[4].scaleY;
        interlude[game_index -1].scaleX = imgs[4].scaleX;
        interlude[game_index -1].x =imgs[4].x;
        interlude[game_index -1].y =imgs[4].y;
                

        interlude_hit.graphics.beginFill("#FFFFFF").drawRect(interlude[game_index -1].x +10, interlude[game_index -1].y +10,
        450 * interlude[game_index -1].scaleX -20, 500 * interlude[game_index -1].scaleY -20);
                
        interlude[game_index -1].cursor = "pointer";
        interlude_hit.cursor = "pointer";
        
        
        interlude_hit.addEventListener("click", exitInterlude);
        interlude[game_index-1].addEventListener("click", exitInterlude);

        stage.addChild(interlude_hit);
        stage.addChild(interlude[game_index -1]);

    }

    function removeInterlude() {
        stage.removeChild(interlude[game_index -1]);
        stage.removeChild(interlude_hit);
        stage.addChild(imgs[3]);
    }

    function updateAnswer(){
        for(i = 0; i < 2; i++) {

            answer_imgs[((game_index *2) + i)].scaleY = imgs[3].scaleY;
            answer_imgs[((game_index *2) + i)].scaleX = imgs[3].scaleX;
            answer_imgs[((game_index *2) + i)].x =imgs[3].x;
            answer_imgs[((game_index *2) + i)].y =imgs[3].y;
            
            answer_imgs[((game_index *2) + i)].addEventListener("mouseover", handleMouse);
            answer_imgs[((game_index *2) + i)].addEventListener("mouseout", handleMouseOut);
            answer_imgs[((game_index *2) + i)].name = i;
            answer_hit[i].mouseEnabled = true;
            answer_hit[i].name = game_index + i;
            
            if(i === 0) {
                answer_hit[i].addEventListener("mouseover", handleBoxMouse_one);
                answer_hit[i].addEventListener("mouseout", handleBoxMouseOut_one);
            }
            else {
                answer_hit[i].addEventListener("mouseover", handleBoxMouse_two);
                answer_hit[i].addEventListener("mouseout", handleBoxMouseOut_two);
            }
            answer_hit[i].graphics.beginFill("#FFFFFF").drawRect(answer_imgs[((game_index *2) + i)].x +10 + (500 * i),
            answer_imgs[((game_index *2) + i)].y +10, 500 * answer_imgs[((game_index *2) + i)].scaleX -20,
            200 * answer_imgs[((game_index *2) + i)].scaleY -20);
            
            answer_imgs[((game_index *2) + i)].cursor = "pointer";
            answer_hit[i].cursor = "pointer";
            
            if(i === 0){
                answer_hit[i].addEventListener("click", handleAnswer_one);
                answer_imgs[((game_index *2) + i)].addEventListener("click", handleAnswer_one);
            }
            else{
                answer_hit[i].addEventListener("click", handleAnswer_two);
                answer_imgs[((game_index *2) + i)].addEventListener("click", handleAnswer_two);
            }
            stage.addChild(answer_hit[i]);
            stage.addChild(answer_imgs[((game_index *2) + i)]);
            
        }
    }

    function setAnswer(){
         stage.addChild(imgs[3]);
        for(i = 0; i < 2; i++) {
            answer_imgs[i].scaleY = imgs[3].scaleY;
            answer_imgs[i].scaleX = imgs[3].scaleX;
            answer_imgs[i].x =imgs[3].x;
            answer_imgs[i].y =imgs[3].y;
            answer_imgs[((game_index *2) + i)].name = i;
            answer_imgs[((game_index *2) + i)].addEventListener("mouseover", handleMouse);
            answer_imgs[((game_index *2) + i)].addEventListener("mouseout", handleMouseOut);
            
            answer_hit[i].name = game_index + i;
            if(i === 0) {
                answer_hit[i].addEventListener("mouseover", handleBoxMouse_one);
                answer_hit[i].addEventListener("mouseout", handleBoxMouseOut_one);
            }
            else {
                answer_hit[i].addEventListener("mouseover", handleBoxMouse_two);
                answer_hit[i].addEventListener("mouseout", handleBoxMouseOut_two);
            }
            answer_hit[i].graphics.beginFill("#FFFFFF").drawRect(answer_imgs[((game_index *2) + i)].x +10 + (500 * i),
            answer_imgs[((game_index *2) + i)].y +10, 500 * answer_imgs[((game_index *2) + i)].scaleX -20,
            200 * answer_imgs[((game_index *2) + i)].scaleY -20);
            
            answer_imgs[i].cursor = "pointer";
            answer_hit[i].cursor = "pointer";
            
            if(i === 0){
                answer_hit[i].addEventListener("click", handleAnswer_one);
                answer_imgs[((game_index *2) + i)].addEventListener("click", handleAnswer_one);
            }
            else{
                answer_hit[i].addEventListener("click", handleAnswer_two);
                answer_imgs[((game_index *2) + i)].addEventListener("click", handleAnswer_two);
            }
            stage.addChild(answer_hit[i]);
            stage.addChild(answer_imgs[i]);
        }

    }

    function setMonoloque(){
        initial_monologue[0].scaleY = imgs[4].scaleY;
        initial_monologue[0].scaleX = imgs[4].scaleX;
        initial_monologue[0].x =imgs[4].x;
        initial_monologue[0].y =imgs[4].y;
        monologue_hit.graphics.beginFill("#FFFFFF").drawRect(initial_monologue[0].x +10, initial_monologue[0].y +10,
        450 * initial_monologue[0].scaleX -20, 500 * initial_monologue[0].scaleY -20);
        monologue_hit.cursor = "pointer";
        monologue_hit.addEventListener("click", handleMonologue);
        initial_monologue[0].addEventListener("click", handleMonologue);
        stage.addChild(monologue_hit);
        stage.addChild(initial_monologue[0]);
        
    }

    function updateMonologue() {
        if(initial_monologue.length -1 >= monologue_index) {
            
            stage.removeChild(initial_monologue[monologue_index -1]);
            stage.removeChild(monologue_hit);
            monologue_hit.graphics.clear();
            initial_monologue[monologue_index].scaleY = imgs[4].scaleY;
            initial_monologue[monologue_index].scaleX = imgs[4].scaleX;
            initial_monologue[monologue_index].x =imgs[4].x;
            initial_monologue[monologue_index].y =imgs[4].y;
            
            monologue_hit.graphics.beginFill("#FFFFFF").drawRect(initial_monologue[monologue_index].x +10,
            initial_monologue[monologue_index].y +10, 450 * initial_monologue[monologue_index].scaleX -20,
            500 * initial_monologue[monologue_index].scaleY -20);

            monologue_hit.cursor = "pointer";
            monologue_hit.addEventListener("click", handleMonologue);
            initial_monologue[monologue_index].addEventListener("click", handleMonologue);
            stage.addChild(monologue_hit);
            stage.addChild(initial_monologue[monologue_index]);
        }
        else {
            stage.removeChild(initial_monologue[monologue_index -1]);
            stage.removeChild(monologue_hit);
            setAnswer();
            setQuestion();
            
        }
    }


    function updateQuestion() {
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
