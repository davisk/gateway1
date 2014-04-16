/*
    These are specific functions that DIFFER between games
*/

var txtbox, txt1, txt2;

function getCanvasId() {
    return "startCanvas";
}

function initImages() {
    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene1_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},
        {id: "textbx", src: "/static/sprites/Textbox.png"},
        {id: "textbx1", src: "/static/sprites/Textbox.png"},
        {id: "textbx2", src: "/static/sprites/Textbox.png"}
    ];
}

function loadGameConfig() {

    var imgs = [];

    // Load our images as individual Bitmaps
    for (i = 0; i < manifest.length; i++) imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.6;

    // Setup and scale dash by the monitor
    imgs[1].x = 750;
    imgs[1].y = 180;
    imgs[1].scaleY = 0.8;
    imgs[1].scaleX = 0.8;

    txtbox = imgs[2];
    txt1 = imgs[3];
    txt2 = imgs[4];

    // Add our images to the canvas. This is specific to the number of images loaded
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
}

function getStartingPlayerConfig() {
    return {
        'pos': 'left1',
        'xloc': 1200,
        'yloc': 340,
        'scaleX': 1,
        'scaleY': 1
    };
}

function initInteraction() {

    //alert(window.location.pathname);
    //window.location = window.location.protocol + "//" + window.location.host + "/" + "minigame/aha";

    txtbox.x = 500;
    txtbox.y = 200;
    txtbox.scaleY = 0.4;
    txtbox.scaleX = 0.4;

    txtbox.addEventListener("click", function(event) {
        stage.removeChild(txtbox);
        alert("you clicked parent");
    });

    txt1.x = 400;
    txt1.y = 400;
    txt1.scaleY = 0.3;
    txt1.scaleX = 0.2;

    txt1.addEventListener("click", function(event) {
        stage.removeChild(txt1);
        alert("you clicked child1");
    });

    txt2.x = 700;
    txt2.y = 400;
    txt2.scaleY = 0.3;
    txt2.scaleX = 0.2;

    txt2.addEventListener("click", function(event) {
        stage.removeChild(txt2);
        alert("you clicked child2");
    });

    stage.addChild(txtbox, txt1, txt2);
}
