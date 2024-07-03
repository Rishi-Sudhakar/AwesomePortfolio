let scene, camera, renderer, model;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-background').appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Load the 3D model
    const loader = new THREE.GLTFLoader();
    loader.load('/models/LittlestTokyo.glb', (gltf) => {
        model = gltf.scene;
        model.scale.set(0.01, 0.01, 0.01); // Adjust scale as needed
        model.position.set(0, -1, -5); // Adjust position as needed
        scene.add(model);
    });

    camera.position.z = 5;

    // Event listener for mouse movement
    document.addEventListener('mousemove', onMouseMove);

    animate();
}

function onMouseMove(event) {
    if (model) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        model.rotation.y = mouseX * 0.5; // Adjust rotation speed as needed
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

init();
