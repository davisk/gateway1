/*
 * this is the core game logic
 * DO NOT PUT EVENT LISTENERS INTO THIS FILE
 * DO NOT PUT CREATE JS OR JQUERY INTO THIS FILE
 */

 /**
  * Allows an object to be moved based on key press integers
  * @param object to be moved
  * @param direction the object is moving in
  */

function move (player, direction) {

    var cid = getCanvasId();

    if (cid == 'ahaCanvas') {

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
                if (player.y > 140 || (player.x > 350 && player.x < 400 && player.y > 30)) {
                    player.y -= 10;
                }
                break;

            // Right
            case 39:
                if (player.x > 350 && player.x < 390 && player.y < 140) { // Stay within vertical sidewalk
                    player.x += 10;
                } else if (player.x < 710 && player.y > 130) { // Stay within horizontal sidewalk
                    player.x += 10;
                }
                break;

            // Down
            case 40:
                if (player.y < 170) {
                    player.y += 10;
                }
                break;

            default:
                break;
        }
    } else {

        switch (direction) {
            // Left
            case 37:
                player.x -= 5;
                break;

            // Up
            case 38:
                player.y -= 5;
                break;

            // Right
            case 39:
                player.x += 5;
                break;

            // Down
            case 40:
                player.y += 5;
                break;

            default:
                break;
        }
    }
}
