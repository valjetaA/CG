import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls'
import {draw} from './draw.js'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const loader = new THREE.TextureLoader()

const FOG_COLOR = 0xcccccc
const SUN_COLOR = 0xf2cb24
const SKY_DAY = './images/anotherTexture/sky.jpg'
const DEBUG_COLOR = 0xff55ff

const scene = new THREE.Scene()
scene.background = loader.load(SKY_DAY)
scene.fog = new THREE.FogExp2(FOG_COLOR, 0.1, 15)
let fogIsOn = true

window.addEventListener('keydown', (e) => {
    if (e.code !== 'Escape') {
        return
    }

    if (fogIsOn) {
        scene.fog = new THREE.FogExp2(0, 0, 0)
        fogIsOn = false
    }
    else {
        scene.fog = new THREE.FogExp2(FOG_COLOR, 0.1, 15)
        fogIsOn = true
    }
})

const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 1000)
camera.position.set(0, 7, 15)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const light = new THREE.DirectionalLight(0xffffff, 0.5)
light.position.setScalar(10)
scene.add(light)

// scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const box = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('./images/blocks/gold.webp')
})

const lightBox = new THREE.Mesh(box, material)
lightBox.position.setScalar(10)
scene.add(lightBox)

draw(scene)

function animate() {
    requestAnimationFrame(animate)
    scene.rotation.y += 0.004
    renderer.render(scene, camera)
    controls.update()
}

animate()

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)