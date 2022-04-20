// const THREE = require('three')
// import {OrbitControls} from 

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor()
document.body.appendChild( renderer.domElement )


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper)

camera.position.set(0, 10, 10);
// const controls =  new THREE.OrbitControls(camera, renderer.domElement);
//boxes
const boxGeometry = new THREE.BoxGeometry()
const boxMaterial =  new THREE.MeshBasicMaterial(
    {color: 0x85C7C5}
)
const box = new THREE.Mesh(boxGeometry, boxMaterial)
const orbit = new THREE.OrbitControls(camera, renderer.domElement);

orbit.update()
scene.add(orbit)
scene.add(box)

	function animate(){
    box.rotation.x += 0.01
    box.rotation.y += 0.01
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)
