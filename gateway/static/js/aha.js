/*
	The script running the Aha - Minigame
*/
	
<script>
	var canvas, stage; // Create our environment

	var update = true; // Updating our environment

	// Initialize the game
	function init() {

		// Create stage and point it to the canvas:
		canvas = document.getElementById("aha-mg");
		stage = new createjs.Stage(canvas);
	}

	// Stop our stage updating
	function stop() {

		createjs.Ticker.removeEventListener("tick", tick);
	}

	function tick(event) {

		// When our event handler determines a change occurs, rerender our stage
		if (update) {

			update = false; 	 // Ensure only one update
			stage.update(event);
		}
	}
</script>