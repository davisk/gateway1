var camera, scene, renderer;
var cameraControls, effectController;
var clock = new THREE.Clock();
var ambientLight, light;
var material;
var sPosX = 0;
var sPosY = 0;
var sPosZ = 0;

function init() {
	var canvasWidth = window.innerWidth;
	var canvasHeight = window.innerHeight;

	// CAMERA
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20000 );
	camera.position.set( 0, 2, 10 );
	camera.lookAt(0,0,0);

	// LIGHTS
	//ambientLight = new THREE.AmbientLight( 0xCCCCCC );

	light = new THREE.DirectionalLight( 0xffffff, 0.7 );
	light.position.set( 300, 300, 300 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColorHex( 0xAAAAAA, 1.0 );

	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// EVENTS
	window.addEventListener( 'resize', onWindowResize, false );
	document.addEventListener( 'keydown', onDocumentKeyDown, false);

	// CONTROLS
	cameraControls = new THREE.OrbitAndPanControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	fillScene();
}

function fillScene() {
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x808080, 2000, 4000 );

	// LIGHTS
	//scene.add( ambientLight );
	scene.add( light );

    var headMaterial = new THREE.MeshPhongMaterial();
    var faceMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );

    var head = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.5, 0.1, 1, 50), headMaterial);
    head.position.x = sPosX;
    head.position.y = sPosY;
    head.position.z = sPosZ;
    scene.add( head );

    var nose = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.05, 0.05, 0.05, 6), faceMaterial);
    nose.rotation.x = 90;
    nose.position.x = sPosX;
    nose.position.z = 0.4 + sPosZ;
    nose.position.y = 0.125 + sPosY;
    scene.add( nose );

    var leftEye = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.07, 0.07, 0.05, 6), faceMaterial);
    leftEye.rotation.x = 90;
    leftEye.position.z = 0.4 + sPosZ;
    leftEye.position.y = 0.3 + sPosY;
    leftEye.position.x = 0.125 + sPosX;
    scene.add( leftEye );

    var rightEye = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.07, 0.07, 0.05, 6), faceMaterial);
    rightEye.rotation.x = 90;
    rightEye.position.z = 0.4 + sPosZ;
    rightEye.position.y = 0.3 + sPosY;
    rightEye.position.x = -0.125 + sPosX;
    scene.add( rightEye );

    var body = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.5, 0.2, 2, 50), headMaterial);
    body.scale.x = 2;
    body.scale.z = 1.2;
    body.position.y = -1.2 + sPosY;
    body.position.x = sPosX;
    body.position.z = sPosZ;
    scene.add(body);

    var firstBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.15), headMaterial);
    firstBall.scale.x = 2;
    firstBall.scale.y = 1.5;
    firstBall.position.y = -2.2 + sPosY;
    firstBall.position.x = sPosX;
    firstBall.position.z = sPosZ;
    scene.add(firstBall);


    var ground = new THREE.Mesh(
        new THREE.CubeGeometry(20,1,10), faceMaterial);
    ground.position.y = -2.9;
    scene.add(ground);

}

// EVENT HANDLERS

function onWindowResize() {

	var canvasWidth = window.innerWidth;
	var canvasHeight = window.innerHeight;

	renderer.setSize( canvasWidth, canvasHeight );

	camera.aspect = canvasWidth / canvasHeight;
	camera.updateProjectionMatrix();
}

function onDocumentKeyDown(event) {
	var keyCode = event.which;

	//Pressing 'Up arrow' makes it move fowards
    if(keyCode == 40) {
		sPosZ = sPosZ + 1;
	}

	//Pressing 'down arrow' makes it move backwards
	if(keyCode == 38) {
		sPosZ = sPosZ - 1;
	}

	//Pressing 'left arrow' makes it move left
    if(keyCode == 37) {
		sPosX = sPosX - 1;
	}

	//Pressing 'right arrow' makes it move right
	else if(keyCode == 39) {
		sPosX = sPosX + 1;
	}
}

function animate() {

	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	fillScene();
	renderer.render( scene, camera );

}

init();
animate();
