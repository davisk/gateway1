/**
 * Listener handles browser events
 * This file should only contain
 * event listener registration
 * and event handlers that calls game logic.
 */

/**
 * when the page to completely load
 * then generates the game world
 * and registers all listeners
 */
$(document).ready(function() {

    initGame();

    // Setup our function for user input (key)
    document.onkeydown = handleKeyDown;
    createjs.Ticker.addEventListener("tick", stage);
});

/**
 * when a key has been pressed
 * move the character
 * @param e event that has been triggered
 */
function handleKeyDown(e) {

    // If e is defined, use it. Else use the event
    e = e || window.event;

    move(userPlayer, e.keyCode);
}

/**
 * When timer is triggered
 * update the stage
 */
function tick() {
    stage.update();
}

