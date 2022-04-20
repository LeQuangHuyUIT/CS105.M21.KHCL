const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor("#c6d4e9")
document.body.appendChild( renderer.domElement )

camera.position.set(0,1,10)

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})


function getBox(w, h, d){
    var geometry = new THREE.BoxGeometry(w, h, d)
    var material = new THREE.MeshStandardMaterial( { color: 0xffc752 })
    var cube = new THREE.Mesh ( geometry, material )

    return cube
}


// ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 30, 30, 25 );
scene.add( pointLight );

var cube = getBox(3, 3, 3)
cube.rotation.x += 0.29;
cube.rotation.y += 0.51;
cube.rotation.z += 0.01;

cube.position.x += 1;
cube.position.z += 1;
scene.add(cube)

const planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 10), 
    new THREE.MeshBasicMaterial(
        {
            side: THREE.DoubleSide, 
            color: 0x8bc8cb
        }
    )
)

planeMesh.rotateX(360)
planeMesh.rotateY(0.01)
planeMesh.rotateZ(-0.01)
planeMesh.position.set(2, -2.5, -3)
scene.add(planeMesh)

renderer.render(scene, camera)