/*
 * this is the core game logic
 * DO NOT PUT EVENT LISTENERS INTO THIS FILE
 * DO NOT PUT CREATE JS OR JQUERY INTO THIS FILE
 */
function move (object, direction) {
    switch (direction) {
        // Left
        case 37:
            object.x -= 5;
            break;

        // Up
        case 38:
            object.y -= 5;
            break;

        // Right
        case 39:
            object.x += 5;
            break;

        // Down
        case 40:
            object.y += 5;
            break;

        default:
            break;
    }
}

function reset(object) {
    object.x = 100;
    object.y = 100;
}
