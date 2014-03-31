/*
    These are specific functions that DIFFER between games
*/


function getCanvasId() {
    return "ahaCanvas";
}

function initImages() {

    manifest = [
        {id: "canvas_bkgd", src: "/static/sprites/scene1_init.png"},
        {id: "game_guide", src: "/static/sprites/Main_guy.png"},
        {id: "user_front", src: "/static/sprites/user_front.png"},
        {id: "user_left", src: "/static/sprites/user_side_left.png"},
        {id: "user_back", src: "/static/sprites/user_back.png"}
    ];
}

function loadGame() {

    var imgs = new Array();

    for (i = 0; i < manifest.length; i++) {
        imgs[i] = new createjs.Bitmap(preload.getResult(manifest[i].id))
    }

    // Fix the background image for the canvas
    imgs[0].scaleY = 0.4;
    imgs[0].scaleX = 0.6;

    // Set our main guy up by the entrance
    imgs[1].x = 120;
    imgs[1].y = 80;

    // Set our user image and location to the global variable
    object = imgs[2];
    object.x = 700;
    object.y = 160;

    // Add our images to the canvas and remove the progress bar
    for (i = 0; i < 2; i++) stage.addChild(imgs[i]);
    stage.addChild(object);
    stage.removeChild(progressText);
}

 /**
  * Allows an object to be moved based on key press integers
  * @param object to be moved
  * @param direction the object is moving in
  */

function move (player, direction) {

    switch (direction) {
        // Left
        case 37:
            if (player.x > 360 && player.x < 400 && player.y < 140) { // Stay within vertical sidewalk
                player.x -= 10;
            } else if (player.x > -10 && player.y > 130) { // Stay within horizontal sidewalk
                player.x -= 10;
            }
            break;

        // Up
        case 38:
            if (player.y > 140 || (player.x > 350 && player.x < 400 && player.y > 30)) player.y -= 10;
            break;

        // Right
        case 39:

            if (player.x > 350 && player.x < 390 && player.y < 140) { // Stay within vertical sidewalk
                player.x += 10;
            } else if (player.x < 710 && player.y > 130) { // Stay within horizontal sidewalk
                player.x += 10;
            }
            //if (player.x < 710) player.x += 10;
            break;

        // Down
        case 40:
            if (player.y < 170) player.y += 10;
            break;

        default:
            break;
    }
}
