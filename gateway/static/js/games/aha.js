/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "ahaCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene2_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},
        {id: "user_front", src: "/static/sprites/user_front.png"},
        {id: "user_left", src: "/static/sprites/user_side_left.png"},
        {id: "user_back", src: "/static/sprites/user_back.png"}
    ];
}

function loadGame() {

    var imgs = [];

    for (i = 0; i < manifest.length; i++) {
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id));
    }

    var data = {
     images: ["/static/sprites/Sprite_Sheet.png"],
     frames: {width:100, height:200},
     animations: {
        right: {
            frames: [0,1,2],
            speed: 5
        },
        left: {
            frames: [5,4,3],
            speed: 12
        },
        up: {
            frames: [8,7,6],
            speed: 9
        }
     }
    };

    var spriteSheet = new createjs.SpriteSheet(data);
    var animation = new createjs.Sprite(spriteSheet, "up");
    //animation.x = 120;
    //animation.y = 80;

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.55;
    imgs[0].scaleX = 0.7;

    // Scale characters
    imgs[1].scaleY = 0.55;
    imgs[1].scaleX = 0.7;
    imgs[2].scaleY = 0.55;
    imgs[2].scaleX = 0.7;

    // Set our main guy up by the entrance
    imgs[1].x = 120;
    imgs[1].y = 80;

    // Set our user image and location to the global variable
    //object = imgs[2];
    object = animation;
    object.x = 700;
    object.y = 160;

    // Add our images to the canvas and remove the progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
    stage.addChild(object);
    stage.removeChild(progressText);
}
