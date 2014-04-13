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

var moving = false;

function move (direction) {

    switch (direction) {

        // Left
        case 37:
            // Ugly way to handle sprite animation :(
            if (moving == false) {
                userPlayer.gotoAndPlay("left1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("left2");
                moving = false;
            }

            switch (canvasID) {
                case 'startCanvas':
                    //if (userPlayer.x > 360 && userPlayer.x < 400 && userPlayer.y < 140) {     // Stay within vertical sidewalk
                        //userPlayer.x -= 10;
                    //} else if (userPlayer.x > -10 && userPlayer.y > 130) {                    // Stay within horizontal sidewalk
                        //userPlayer.x -= 10;
                    //}
                    userPlayer.x -= 10;
                    break;

                case 'ahaCanvas':
                    userPlayer.x -= 10;
                    break;

                case 'gapCanvas':
                    if ((userPlayer.x > 0.375 * gameWidth) && (userPlayer.y < 0.07 * gameHeight)) {         // Plant
                        userPlayer.x -= 0.01 * gameWidth;
                    } else if ((userPlayer.x > 0.05 * gameWidth) && (userPlayer.y < 0.35 * gameHeight) && (userPlayer.y > 0.07 * gameHeight)) {
                        userPlayer.x -= 0.01 * gameWidth;
                    } else if ((userPlayer.x > 0.42 * gameWidth) && (userPlayer.y > 0.31 * gameHeight)) {   // Hallway
                        userPlayer.x -= 0.01 * gameWidth;
                    }
                    break;

                case 'survCanvas':
                    userPlayer.x -= 10;
                    break;

                case 'interCanvas':
                    userPlayer.x -= 10;
                    break;

                case 'elevCanvas':
                    userPlayer.x -= 10;
                    break;

                case 'endCanvas':
                    userPlayer.x -= 10;
                    break;
            }
            break;

        // Up
        case 38:
            // Ugly way to handle sprite animation :(
            // We also don't have sprites for up animation
            if (moving == false) {
                userPlayer.gotoAndPlay("down1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("down2");
                moving = false;
            }

            switch (canvasID) {
                case 'startCanvas':
                    //if (userPlayer.y > 140 || (userPlayer.x > 350 && userPlayer.x < 400 && userPlayer.y > 30)) {
                        //userPlayer.y -= 10;
                    //}
                    userPlayer.y -= 10;
                    break;

                case 'ahaCanvas':
                    userPlayer.y -= 10;
                    break;

                case 'gapCanvas':
                    if ((userPlayer.y > 0.05 * gameHeight) && (userPlayer.x < 0.2 * gameWidth)) {
                        userPlayer.y -= 0.02 * gameHeight;
                    } else if ((userPlayer.y > 0.07 * gameHeight) && (userPlayer.x > 0.2 * gameWidth) && (userPlayer.x < 0.375 * gameWidth)) { // Plant
                        userPlayer.y -= 0.02 * gameHeight;
                    } else if ((userPlayer.y > 0.05 * gameHeight) && (userPlayer.x > 0.375 * gameWidth) && (userPlayer.x < 0.55 * gameWidth)) {
                        userPlayer.y -= 0.02 * gameHeight;
                    } else if ((userPlayer.y > 0.1 * gameHeight) && (userPlayer.x > 0.55 * gameWidth)) {  // Chairs
                        userPlayer.y -= 0.02 * gameHeight;
                    }
                    break;

                case 'survCanvas':
                    userPlayer.y -= 10;
                    break;

                case 'interCanvas':
                    userPlayer.y -= 10;
                    break;

                case 'elevCanvas':
                    userPlayer.y -= 10;
                    break;

                case 'endCanvas':
                    userPlayer.y -= 10;
                    break;
            }
            break;

        // Right
        case 39:
            // Ugly way to handle sprite animation :(
            if (moving == false) {
                userPlayer.gotoAndPlay("right1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("right2");
                moving = false;
            }

            switch (canvasID) {
                case 'startCanvas':
                    //if (userPlayer.x > 350 && userPlayer.x < 390 && userPlayer.y < 140) {   // Stay within vertical sidewalk
                        //userPlayer.x += 10;
                    //} else if (userPlayer.x < 710 && userPlayer.y > 130) {              // Stay within horizontal sidewalk
                        //userPlayer.x += 10;
                    //}
                    userPlayer.x += 10;
                    break;

                case 'ahaCanvas':
                    userPlayer.x += 10;
                    break;

                case 'gapCanvas':
                    if ((userPlayer.x < 0.2 * gameWidth) && (userPlayer.y < 0.07 * gameHeight)) {           // Plant
                        userPlayer.x += 0.01 * gameWidth;
                    } else if ((userPlayer.x < 0.55 * gameWidth) && (userPlayer.y < 0.1)) {
                        userPlayer.x += 0.01 * gameWidth;
                    } else if ((userPlayer.x < 0.515 * gameWidth) && (userPlayer.y > 0.31 * gameHeight)) {
                        userPlayer.x += 0.01 * gameWidth;
                    } else if ((userPlayer.x < 0.9 * gameWidth) && (userPlayer.y > 0.1 * gameHeight)) {
                        userPlayer.x += 0.01 * gameWidth;
                    }
                    break;

                case 'survCanvas':
                    userPlayer.x += 10;
                    break;

                case 'interCanvas':
                    userPlayer.x += 10;
                    break;

                case 'elevCanvas':
                    userPlayer.x += 10;
                    break;

                case 'endCanvas':
                    userPlayer.x += 10;
                    break;
            }
            break;

        // Down
        case 40:
            // Ugly way to handle sprite animation :(
            if (moving == false) {
                userPlayer.gotoAndPlay("down1");
                moving = true;
            } else {
                userPlayer.gotoAndPlay("down2");
                moving = false;
            }

            switch (canvasID) {
                case 'startCanvas':
                    //if (userPlayer.y < 170) {
                        //userPlayer.y += 10;
                    //}
                    userPlayer.y += 10;
                    break;

                case 'ahaCanvas':
                    userPlayer.y += 10;
                    break;

                case 'gapCanvas':
                    if ((userPlayer.y < 0.31 * gameHeight) && (userPlayer.x < 0.42 * gameWidth)) {
                        userPlayer.y += 0.02 * gameHeight;
                    } else if ((userPlayer.y < gameHeight) && (userPlayer.x > 0.42 * gameWidth) && (userPlayer.x < 0.515 * gameWidth)) {  // Hallway
                        userPlayer.y += 0.02 * gameHeight;
                    } else if ((userPlayer.y < 0.31 * gameHeight) && (userPlayer.x > 0.515 * gameWidth)) {
                        userPlayer.y += 0.02 * gameHeight;
                    }
                    break;

                case 'survCanvas':
                    userPlayer.y += 10;
                    break;

                case 'interCanvas':
                    userPlayer.y += 10;
                    break;

                case 'elevCanvas':
                    userPlayer.y += 10;
                    break;

                case 'endCanvas':
                    userPlayer.y += 10;
                    break;
            }
            break;

        default:
            break;
    }
}
