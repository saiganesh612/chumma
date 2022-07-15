import { GLTFLoader } from "./GLTFLoader.js"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    .01,
    1000
)
camera.position.set(0, 10, 50)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const loader = new GLTFLoader()
let obj

loader.load("./Cudillero Diorama.glb", (gltf) => {
    obj = gltf.scene
    scene.add(gltf.scene)
})

scene.background = new THREE.Color(0xffffff)
const light = new THREE.HemisphereLight(0xffffff, 0x000000, 10)
scene.add(light)

function animate() {
    requestAnimationFrame(animate)
    obj.rotation.y += .01
    renderer.render(scene, camera)
}
animate()
