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

function move (player, direction) {

    switch (direction) {
        // Left
        case 37:
            switch (canvasID) {
                case 'startCanvas':
                    //if (player.x > 360 && player.x < 400 && player.y < 140) {   // Stay within vertical sidewalk
                        userPlayer.x -= 10;
                    //} else if (player.x > -10 && player.y > 130) {              // Stay within horizontal sidewalk
                      //  player.x -= 10;
                    //}
                    break;

                case 'ahaCanvas':

                    break;

                case 'gapCanvas':

                    break;

                case 'survCanvas':

                    break;

                case 'interCanvas':

                    break;

                case 'elevCanvas':

                    break;

                case 'endCanvas':

                    break;
            }
            break;
        // Up
        case 38:
            switch (canvasID) {
                case 'startCanvas':
                    console.log("up");
                    //if (player.y > 140 || (player.x > 350 && player.x < 400 && player.y > 30)) {
                        userPlayer.y -= 10;
                    //}
                    break;

                case 'ahaCanvas':

                    break;

                case 'gapCanvas':

                    break;

                case 'survCanvas':

                    break;

                case 'interCanvas':

                    break;

                case 'elevCanvas':

                    break;

                case 'endCanvas':

                    break;
            }
            break;
        // Right
        case 39:
            switch (canvasID) {
                case 'startCanvas':
                    console.log("right");
                    //if (player.x > 350 && player.x < 390 && player.y < 140) {   // Stay within vertical sidewalk
                        userPlayer.x += 10;
                    //} else if (player.x < 710 && player.y > 130) {              // Stay within horizontal sidewalk
                      //  player.x += 10;
                    //}
                    break;

                case 'ahaCanvas':

                    break;

                case 'gapCanvas':

                    break;

                case 'survCanvas':

                    break;

                case 'interCanvas':

                    break;

                case 'elevCanvas':

                    break;

                case 'endCanvas':

                    break;
            }
            break;
        // Down
        case 40:
            switch (canvasID) {
                case 'startCanvas':
                    console.log("down");
                    //if (player.y < 170) {
                        userPlayer.y += 10;
                    //}
                    break;

                case 'ahaCanvas':

                    break;

                case 'gapCanvas':

                    break;

                case 'survCanvas':

                    break;

                case 'interCanvas':

                    break;

                case 'elevCanvas':

                    break;

                case 'endCanvas':

                    break;
            }
            break;

        default:
            break;
    }






    // SCENE 1: Start
    /*if (canvId == 'startCanvas') {
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
    }

    // SCENE 2: Aha!
    else if (canvId == 'ahaCanvas') {
        switch (direction) {
            // Left
            case 37:
                if (moving == false) {
                    player.gotoAndPlay("left1");
                    moving = true;
                } else {
                    player.gotoAndPlay("left2");
                    moving = false;
                }

                player.x -= 15;
                break;

            // Up
            case 38:

                if (moving == false) {
                    player.gotoAndPlay("up1");
                    moving = true;
                } else {
                    player.gotoAndPlay("up2");
                    moving = false;
                }

                player.y -= 15;
                break;

            // Right
            case 39:

                if (moving == false) {
                    player.gotoAndPlay("right1");
                    moving = true;
                } else {
                    player.gotoAndPlay("right2");
                    moving = false;
                }

                player.x += 15;
                break;

            // Down
            case 40:

                if (moving == false) {
                    player.gotoAndPlay("up1");
                    moving = true;
                } else {
                    player.gotoAndPlay("up2");
                    moving = false;
                }

                player.y += 15;
                break;

            default:
                break;
        }
    }

    // SCENE 3: Gap
    else if (canvId == 'gapCanvas') {
        switch (direction) {
            // Left
            case 37:
                if (player.x > 0.375*width && player.y < 0.07*height)
                    { player.x -=0.01*width; }                                                          // plant
                else if (player.x > 0.05*width && player.y < 0.35*height && player.y > 0.07*height)
                    { player.x -= 0.01*width; }
                else if (player.x > 0.42*width && player.y > 0.31*height)
                    { player.x -= 0.01*width; }                                                         // hallway
                break;

            // Up
            case 38:
                if (player.y > 0.05*height && player.x < 0.2*width)
                    {player.y -=0.02*height;}
                else if (player.y > 0.07*height && player.x > 0.2*width && player.x < 0.375*width)
                    { player.y -= 0.02*height; }                                                        // plant
                else if (player.y > 0.05*height && player.x > 0.375*width && player.x < 0.55*width)
                    { player.y -= 0.02*height; }
                else if (player.y > 0.1*height && player.x > 0.55*width)
                    { player.y -= 0.02*height; }                                                        // chairs
                break;

            // Right
            case 39:
                if (player.x < 0.2*width && player.y < 0.07*height)
                    { player.x +=0.01*width; }                                                          // plant
                else if (player.x < 0.55*width && player.y < 0.1)
                    { player.x += 0.01*width; }
                else if (player.x < 0.515*width && player.y > 0.31*height)
                    { player.x += 0.01*width; }
                else if (player.x < 0.9*width && player.y > 0.1*height)
                    { player.x += 0.01*width; }
                break;

            // Down
            case 40:
                if (player.y < 0.31*height && player.x < 0.42*width)
                    { player.y += 0.02*height; }
                else if (player.y < height && player.x > 0.42*width && player.x < 0.515*width)
                    { player.y += 0.02*height; }                                                        // hallway
                else if (player.y < 0.31*height && player.x > 0.515*width)
                    { player.y += 0.02*height; }
                break;

            default:
                break;
        }
    }

    // SCENE 4: Survey
    else if (canvId == 'survCanvas') {
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

    // SCENE 5: Interest
    else if (canvId == 'interCanvas') {
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

    // SCENE 6: Elevator
    else if (canvId == 'elevCanvas') {
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

    // Scene 7: End
    else {
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
    }*/
}
