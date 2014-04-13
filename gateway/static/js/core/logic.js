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
                    //if (userPlayer.x > 360 && userPlayer.x < 400 && userPlayer.y < 140) {   // Stay within vertical sidewalk
                        userPlayer.x -= 10;
                    //} else if (userPlayer.x > -10 && userPlayer.y > 130) {              // Stay within horizontal sidewalk
                      //  userPlayer.x -= 10;
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
                        userPlayer.x += 10;
                    //} else if (userPlayer.x < 710 && userPlayer.y > 130) {              // Stay within horizontal sidewalk
                      //  userPlayer.x += 10;
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
                if (userPlayer.x > 360 && userPlayer.x < 400 && userPlayer.y < 140) { // Stay within vertical sidewalk
                    userPlayer.x -= 10;
                } else if (userPlayer.x > -10 && userPlayer.y > 130) { // Stay within horizontal sidewalk
                    userPlayer.x -= 10;
                }
                break;

            // Up
            case 38:
                if (userPlayer.y > 140 || (userPlayer.x > 350 && userPlayer.x < 400 && userPlayer.y > 30)) {
                    userPlayer.y -= 10;
                }
                break;

            // Right
            case 39:
                if (userPlayer.x > 350 && userPlayer.x < 390 && userPlayer.y < 140) { // Stay within vertical sidewalk
                    userPlayer.x += 10;
                } else if (userPlayer.x < 710 && userPlayer.y > 130) { // Stay within horizontal sidewalk
                    userPlayer.x += 10;
                }
                break;

            // Down
            case 40:
                if (userPlayer.y < 170) {
                    userPlayer.y += 10;
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
                    userPlayer.gotoAndPlay("left1");
                    moving = true;
                } else {
                    userPlayer.gotoAndPlay("left2");
                    moving = false;
                }

                userPlayer.x -= 15;
                break;

            // Up
            case 38:

                if (moving == false) {
                    userPlayer.gotoAndPlay("up1");
                    moving = true;
                } else {
                    userPlayer.gotoAndPlay("up2");
                    moving = false;
                }

                userPlayer.y -= 15;
                break;

            // Right
            case 39:

                if (moving == false) {
                    userPlayer.gotoAndPlay("right1");
                    moving = true;
                } else {
                    userPlayer.gotoAndPlay("right2");
                    moving = false;
                }

                userPlayer.x += 15;
                break;

            // Down
            case 40:

                if (moving == false) {
                    userPlayer.gotoAndPlay("up1");
                    moving = true;
                } else {
                    userPlayer.gotoAndPlay("up2");
                    moving = false;
                }

                userPlayer.y += 15;
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
                if (userPlayer.x > 0.375*width && userPlayer.y < 0.07*height)
                    { userPlayer.x -=0.01*width; }                                                          // plant
                else if (userPlayer.x > 0.05*width && userPlayer.y < 0.35*height && userPlayer.y > 0.07*height)
                    { userPlayer.x -= 0.01*width; }
                else if (userPlayer.x > 0.42*width && userPlayer.y > 0.31*height)
                    { userPlayer.x -= 0.01*width; }                                                         // hallway
                break;

            // Up
            case 38:
                if (userPlayer.y > 0.05*height && userPlayer.x < 0.2*width)
                    {userPlayer.y -=0.02*height;}
                else if (userPlayer.y > 0.07*height && userPlayer.x > 0.2*width && userPlayer.x < 0.375*width)
                    { userPlayer.y -= 0.02*height; }                                                        // plant
                else if (userPlayer.y > 0.05*height && userPlayer.x > 0.375*width && userPlayer.x < 0.55*width)
                    { userPlayer.y -= 0.02*height; }
                else if (userPlayer.y > 0.1*height && userPlayer.x > 0.55*width)
                    { userPlayer.y -= 0.02*height; }                                                        // chairs
                break;

            // Right
            case 39:
                if (userPlayer.x < 0.2*width && userPlayer.y < 0.07*height)
                    { userPlayer.x +=0.01*width; }                                                          // plant
                else if (userPlayer.x < 0.55*width && userPlayer.y < 0.1)
                    { userPlayer.x += 0.01*width; }
                else if (userPlayer.x < 0.515*width && userPlayer.y > 0.31*height)
                    { userPlayer.x += 0.01*width; }
                else if (userPlayer.x < 0.9*width && userPlayer.y > 0.1*height)
                    { userPlayer.x += 0.01*width; }
                break;

            // Down
            case 40:
                if (userPlayer.y < 0.31*height && userPlayer.x < 0.42*width)
                    { userPlayer.y += 0.02*height; }
                else if (userPlayer.y < height && userPlayer.x > 0.42*width && userPlayer.x < 0.515*width)
                    { userPlayer.y += 0.02*height; }                                                        // hallway
                else if (userPlayer.y < 0.31*height && userPlayer.x > 0.515*width)
                    { userPlayer.y += 0.02*height; }
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
                userPlayer.x -= 5;
                break;

            // Up
            case 38:
                userPlayer.y -= 5;
                break;

            // Right
            case 39:
                userPlayer.x += 5;
                break;

            // Down
            case 40:
                userPlayer.y += 5;
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
                userPlayer.x -= 5;
                break;

            // Up
            case 38:
                userPlayer.y -= 5;
                break;

            // Right
            case 39:
                userPlayer.x += 5;
                break;

            // Down
            case 40:
                userPlayer.y += 5;
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
                userPlayer.x -= 5;
                break;

            // Up
            case 38:
                userPlayer.y -= 5;
                break;

            // Right
            case 39:
                userPlayer.x += 5;
                break;

            // Down
            case 40:
                userPlayer.y += 5;
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
                userPlayer.x -= 5;
                break;

            // Up
            case 38:
                userPlayer.y -= 5;
                break;

            // Right
            case 39:
                userPlayer.x += 5;
                break;

            // Down
            case 40:
                userPlayer.y += 5;
                break;

            default:
                break;
        }
    }*/
}
