import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd0d0f0);

// Caméra
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(500, 250); //(window.innerWidth, window.innerHeight);
const canvas = renderer.domElement;
canvas.style.border = "1px solid blue";
canvas.style.borderRadius = "50%"; //arrondir les angles de la bordure pour faire une ellipse
document
	.getElementById('viewer')
	.appendChild(canvas);

// Géométrie
const geometry = new THREE.BoxGeometry();

// Matériau
const material = new THREE.MeshStandardMaterial({
    color: 0xff9900
});

// Objet 3D
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lumière
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(2, 2, 5);
scene.add(light);

const light2 = new THREE.DirectionalLight(0x00ff00, 3);
light2.position.set(5, 2, 2);
scene.add(light2);

// Animation
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Redimensionnement
window.addEventListener('resize', () => {
    camera.aspect =
        window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
});
