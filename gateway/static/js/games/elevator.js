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
        {id: "question_text", src: "/static/sprites/Textbox.png"}, //2 
        {id: "answer_text", src: "/static/sprites/Textbox.png"}, //3 
    ];
}

function loadGame() {

    var question_list = new Array();
    var answer_list = new Array();
    var question_number = 0;
    var answers = new Array();
    
    var imgs = [];

    for (i = 0; i < manifest.length; i++) {
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Set our main guy up by the entrance
    imgs[1].x = canvas.width / 3;
    imgs[1].y = canvas.height * 0.125;
    imgs[1].scaleX = 1.6;
    imgs[1].scaleY = 1.6;
    imgs[1].alpha = 0.666;

    //setting question visual text box up

    imgs[2].x = canvas.width / 4.5;
    imgs[2].y = 350;
    imgs[2].scaleY = 1;
    imgs[2].scaleX = 1;

    imgs[3].x = 5;
    imgs[3].y = 20;
    imgs[3].width = canvas.width / 2.5;
    imgs[3].height = canvas.height * 0.4;

    imgs[3].scaleY = 5;
    imgs[3].scaleX = 0.5;
    // Add our images to the canvas and remove the progress bar

    for (i = 0; i < imgs.length; i++){
        stage.addChild(imgs[i]);
    }
    stage.addChild(userPlayer);

    stage.removeChild(progressText);

    txts = new createjs.Text("0", "36px Arial", "0x000000");
    txts.x = 300;
    stage.addChild(txts);

    for(var i = 0; i < 4; i++) {
        var answer_choices = new Array();
        answer_choices[0] = "quesition 1 - " + i.toString();
        answer_choices[1] = "question 2 - " + i.toString();
        answer_choices[2] = "question 3 - " + i.toString();
        answer_choices[3] = "question 4 - " + i.toString();
        answer_list[i] = answer_choices;
     }

        //make external text array as global variable call on that and make questions from that?
        //make event handler in reference to main
    function drawBox(name, index, text, height, width, x_axis, y_axis, selectable) {
    
        var txt = new createjs.Text(text, "18px Arial", "#000000");
        var shape = new createjs.Shape();

        if(name === null) {
            txt.name = index.toString;
            shape.name = index;
        }
        else{
            txt.name = name;
            shape.name = name;
        }

        txt.x = x_axis;
        txt.y = y_axis;
        txt.lineWidth = width -5;
        stage.addChild(txt);

        shape_size = height -10;
        shape.graphics.beginFill("#eeeeee").drawRect(x_axis, y_axis, width, height);


        shape.alpha = 0.75;
        if(selectable) {
            shape.addEventListener("click", handleClick);
            shape.addEventListener("mouseover", handleMouse);
            shape.addEventListener("mouseout", handleMouseOut);
        }
        
        stage.addChild(shape);
        return txt;
    }
    function createQuestion(text) {
        question_text = drawBox(null, i, "question", (canvas.height - canvas.height * 0.75),
            canvas.width /2, ((canvas.width/2.5) + 5), (canvas.height - canvas.height * 0.75), fal);
    }


    function createAnswers(num, question_num){
        var box_width = (canvas.width / 2.5);
        var box_height = -5;
        var x_axis = 5;

        for (var i=1; i <= num; i++){
            var y_axis = ((box_height + (100 * i)));
            var height = 90;
            var width = (box_width - 5);
            //(name, index, text, height, width, x_axis, y_axis, selectable)
            answers[(i-1)] = drawBox(null, i, answer_list[question_num][i-1], height, width, x_axis, y_axis, true);
        }
        return answers;
    }
    createAnswers(4, 0);

    function handleClick(event) {
        var answer_name = event.target.name;
        txts.text = answers[event.target.index];
        txts.x = 400;
        gamestate.elevator[question_number] = event.target.index;
        question_number++;
        setAnswers();
        stage.update();
    }
    function setAnswers(){
        for (var i=0; i < 4; i++){
            answers[i].text = answer_list[question_num][i];
        }
    }
    function handleMouse(event) {
        event.target.alpha = 0;
        stage.update();
    }
    function handleMouseOut(event) {
        event.target.alpha = 0.45;
        stage.upate();
    }
        stage.update();

    // Set our user image and location to the global variable
    function getStartingPlayerConfig() {
        return {
            'pos': 'left1',
            'xloc': 600,
            'yloc': (canvas.height * 0.125),
            'scaleX': 2.4,
            'scaleY': 2.4
        };
    }
}

