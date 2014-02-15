/*
 *
 * This is the code for Gateway's little robot dude. 
 *
 * Last updated 2/15/14.
 *
 */


// Sets up the scene, camera, and renderer as global variables.
var scene, camera, renderer;

init();
animate();

// Sets up the scene.
function init() {

    // Scene
    scene = new THREE.Scene();
        var WIDTH = window.innerWidth,
            HEIGHT = window.innerHeight;

        // Renderer
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild(renderer.domElement);

        // Camera
        camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
        camera.position.set(0,0,10);
        scene.add(camera);

        // Resize renderer with browser window
        window.addEventListener('resize', function() {
            var WIDTH = window.innerWidth,
                    HEIGHT = window.innerHeight;
            renderer.setSize(WIDTH, HEIGHT);
            camera.aspect = WIDTH / HEIGHT;
            camera.updateProjectionMatrix();
        });

        // Background and light
        renderer.setClearColorHex(0x333F47, 1);
    var frontLight  = new THREE.DirectionalLight('white', 0.75);
    frontLight.position.set(0.5, 0.5, 2);
    scene.add( frontLight );

        // OrbitControls
        controls = new THREE.OrbitControls(camera, renderer.domElement);


    // Robot Dude
    var headMaterial = new THREE.MeshPhongMaterial();
    var faceMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );

    var head = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.5, 0.1, 1, 50), headMaterial);
    scene.add( head );

    var nose = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.05, 0.05, 0.05, 6), faceMaterial);
    nose.rotation.x = 90;
    nose.position.z = 0.4;
    nose.position.y = 0.125;
    scene.add( nose );

    var leftEye = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.07, 0.07, 0.05, 6), faceMaterial);
    leftEye.rotation.x = 90;
    leftEye.position.z = 0.4;
    leftEye.position.y = 0.3;
    leftEye.position.x = 0.125;
    scene.add( leftEye );

    var rightEye = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.07, 0.07, 0.05, 6), faceMaterial);
    rightEye.rotation.x = 90;
    rightEye.position.z = 0.4;
    rightEye.position.y = 0.3;
    rightEye.position.x = -0.125;
    scene.add( rightEye );

    var body = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.5, 0.2, 2, 50), headMaterial);
    body.scale.x = 2;
    body.scale.z = 1.2;
    body.position.y = -1.2;
    scene.add(body);

    var firstBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.15), headMaterial);
    firstBall.scale.x = 2;
    firstBall.scale.y = 1.5;
    firstBall.position.y = -2.2;
    scene.add(firstBall);   
}

// Renders the scene.
function animate() {

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        controls.update();

}

