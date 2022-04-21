import * as THREE from 'https://unpkg.com/three@0.139.2/build/three.module.js';
import {ARButton} from 'https://unpkg.com/three@0.139.2/examples/jsm/webxr/ARButton.js';
// import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75, innerWidth / innerHeight, 0.1, 1000
)
const renderer = new THREE.WebGLRenderer()
renderer.xr.enabled = true;

const button = ARButton.createButton(renderer)
document.body.appendChild(button)

//from example: https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content
// document.body.appendChild( VRButton.createButton( renderer ) );
// renderer.xr.enabled = true;

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)

document.body.appendChild(renderer.domElement)
camera.position.z = 5


const PlaneGeometry = new THREE.PlaneGeometry(6, 5, 30, 10)
const planeMaterial = new THREE.MeshPhongMaterial({
	color:0xFF0000,
	side: THREE.DoubleSide
})
const planeMesh = new THREE.Mesh(PlaneGeometry, planeMaterial)
scene.add(planeMesh)


const light = new THREE.DirectionalLight(
	0xffffff, 1
)
light.position.set(0, 0, 1)
scene.add(light)


function animate () {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

//from example: https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content
// renderer.setAnimationLoop( function () {

// 	renderer.render( scene, camera );

// } );

animate()