import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new
    THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
const controls = new OrbitControls( camera, renderer.domElement );

const sun = new THREE.DirectionalLight();
sun.position.set(1, 2, 5);
scene.add(sun);

const ambient = new THREE.AmbientLight();
ambient.intensity = 0.8;
scene.add(ambient);

scene.background = new THREE.Color( 0x87CEEB )

// Geometry declaration
const geometry1 = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const geometry2 = new THREE.CapsuleGeometry( 1, 2, 4, 8 );
const geometry3 = new THREE.SphereGeometry( 1, 32, 16 ); 

const material = new THREE.MeshStandardMaterial( { color: 0x5372a5 } );

const cube = new THREE.Mesh( geometry1, material );
const capsule = new THREE.Mesh( geometry2, material );
const sphere = new THREE.Mesh( geometry3, material );
const sphere2 = new THREE.Mesh( geometry3, material );

cube.rotation.x += 0.4;
cube.position.y += 3;
sphere.position.x += 1;
sphere.position.y -= 1.5;
sphere2.position.x -= 1;
sphere2.position.y -= 1.5;

scene.add( cube );
scene.add( capsule );
scene.add( sphere );
scene.add( sphere2 );

camera.position.z = 5;
controls.update();

// Renderer
function animate() {
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})