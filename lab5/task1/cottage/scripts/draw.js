import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

import {
    createArea,
    createCobblestone,
    createMossyCobblestone,
    createDoor,
    createWood,
    createFloor,
    createGlass,
    createWoodStairs,
    createCobblestoneStairs,
    createFlashlight,
    createLamp
} from './createElements.js'

function draw(scene) {
    drawArea(scene)
    drawCobblestone(scene)
    drawDoor(scene)
    drawWood(scene)
    drawGlass(scene)
    drawFloor(scene)
    drawStairs(scene)
    drawRoof(scene)
    drawFlashlight(scene)
    drawLamp(scene)
}

function drawArea(scene) {
    const area = createArea(30, 30)
    scene.add(area)
}

function drawCobblestone(scene) {
    // front side first layer
    let cobblestone = createMossyCobblestone(-5, 0, 5)
    scene.add(cobblestone)

    for (let i = -4; i <= -2; i++) {
        cobblestone = createCobblestone(i, 0, 5)
        scene.add(cobblestone)
    }

    cobblestone = createMossyCobblestone(-1, 0, 5)
    scene.add(cobblestone)

    for (let i = 0; i <= 2; i++) {
        cobblestone = createCobblestone(i, 0, 5)
        scene.add(cobblestone)
    }

    cobblestone = createMossyCobblestone(3, 0, 5)
    scene.add(cobblestone)

    // right side first layer
    cobblestone = createMossyCobblestone(3, 0, 4)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 0, 3)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 0, 2)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 0, 1)
    scene.add(cobblestone)

    // back side first layer
    for (let i = -5; i <= -2; i++) {
        cobblestone = createCobblestone(i, 0, 0)
        scene.add(cobblestone)
    }
    cobblestone = createMossyCobblestone(-1, 0, 0)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(0, 0, 0)
    scene.add(cobblestone)
    cobblestone = createCobblestone(1, 0, 0)
    scene.add(cobblestone)
    cobblestone = createCobblestone(2, 0, 0)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 0, 0)
    scene.add(cobblestone)

    // left side first layer
    cobblestone = createCobblestone(-5, 0, 4)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(-5, 0, 3)
    scene.add(cobblestone)
    cobblestone = createCobblestone(-5, 0, 2)
    scene.add(cobblestone)
    cobblestone = createCobblestone(-5, 0, 1)
    scene.add(cobblestone)

    // front side second layer
    cobblestone = createCobblestone(-5, 1, 5)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(-4, 1, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(-3, 1, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(-2, 1, 5)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(-1, 1, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(0, 1, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(1, 1, 5)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 1, 5)
    scene.add(cobblestone)

    // right side second layer
    cobblestone = createCobblestone(3, 1, 4)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 1, 3)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 1, 2)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 1, 1)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 1, 0)
    scene.add(cobblestone)

    // back side second layer
    cobblestone = createMossyCobblestone(-5, 1, 0)
    scene.add(cobblestone)

    for (let i = -4; i <= 0; i++) {
        cobblestone = createCobblestone(i, 1, 0)
        scene.add(cobblestone)
    }
    cobblestone = createCobblestone(0, 1, 0)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(1, 1, 0)
    scene.add(cobblestone)
    cobblestone = createCobblestone(2, 1, 0)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 1, 0)
    scene.add(cobblestone)

    // left side second layer
    cobblestone = createCobblestone(-5, 1, 4)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(-5, 1, 3)
    scene.add(cobblestone)
    cobblestone = createCobblestone(-5, 1, 2)
    scene.add(cobblestone)
    cobblestone = createCobblestone(-5, 1, 1)
    scene.add(cobblestone)

    // front side third layer
    cobblestone = createCobblestone(-5, 2, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 2, 5)
    scene.add(cobblestone)

    // back side third layer
    cobblestone = createMossyCobblestone(-5, 2, 0)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 2, 0)
    scene.add(cobblestone)

    // front side fourth layer
    cobblestone = createCobblestone(-5, 3, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 3, 5)
    scene.add(cobblestone)

    // back side fourth layer
    cobblestone = createMossyCobblestone(-5, 3, 0)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 3, 0)
    scene.add(cobblestone)

    // front side fifth layer
    cobblestone = createCobblestone(-5, 4, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 4, 5)
    scene.add(cobblestone)

    // back side fifth layer
    cobblestone = createCobblestone(-5, 4, 0)
    scene.add(cobblestone)
    cobblestone = createMossyCobblestone(3, 4, 0)
    scene.add(cobblestone)

    // front side sixth layer
    cobblestone = createCobblestone(-5, 5, 5)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 5, 5)
    scene.add(cobblestone)

    // right side sixth layer
    for (let i = 4; i >= 1; i--) {
        cobblestone = createCobblestone(3, 5, i)
        scene.add(cobblestone)
    }

    // back side sixth layer
    cobblestone = createCobblestone(-5, 5, 0)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 5, 0)
    scene.add(cobblestone)

    // left side sixth layer
    for (let i = 4; i >= 1; i--) {
        cobblestone = createCobblestone(-5, 5, i)
        scene.add(cobblestone)
    }
    // right side seventh layer
    for (let i = 4; i >= 1; i--) {
        cobblestone = createCobblestone(3, 6, i)
        scene.add(cobblestone)
    }
    // left side seventh layer
    for (let i = 4; i >= 1; i--) {
        cobblestone = createCobblestone(-5, 6, i)
        scene.add(cobblestone)
    }
    // right side eight layer
    cobblestone = createCobblestone(3, 7, 3)
    scene.add(cobblestone)
    cobblestone = createCobblestone(3, 7, 2)
    scene.add(cobblestone)

    // left side eight layer
    cobblestone = createCobblestone(-5, 7, 3)
    scene.add(cobblestone)
    cobblestone = createCobblestone(-5, 7, 2)
    scene.add(cobblestone)
}

function drawDoor(scene) {
    const door = createDoor(2, 1.5, 5.5)
    scene.add(door)
}

function drawWood(scene) {
    // front side third layer
    let wood = createWood(-4, 2, 5)
    scene.add(wood)
    wood = createWood(0, 2, 5)
    scene.add(wood)
    wood = createWood(1, 2, 5)
    scene.add(wood)

    // right side third layer
    wood = createWood(3, 2, 4)
    scene.add(wood)
    wood = createWood(3, 2, 1)
    scene.add(wood)

    // back side third layer
    wood = createWood(2, 2, 0)
    scene.add(wood)
    wood = createWood(-1, 2, 0)
    scene.add(wood)
    wood = createWood(-4, 2, 0)
    scene.add(wood)

    // left side third layer
    wood = createWood(-5, 2, 4)
    scene.add(wood)
    wood = createWood(-5, 2, 1)
    scene.add(wood)

    // front side fourth layer
    wood = createWood(-4, 3, 5)
    scene.add(wood)
    for (let i = 0; i <= 2; i++) {
        wood = createWood(i, 3, 5)
        scene.add(wood)
    }

    // right side fourth layer
    wood = createWood(3, 3, 4)
    scene.add(wood)
    wood = createWood(3, 3, 1)
    scene.add(wood)

    // back side fourth layer
    for (let i = 2; i >= -4; i--) {
        wood = createWood(i, 3, 0)
        scene.add(wood)
    }

    // left side fourth layer
    wood = createWood(-5, 3, 4)
    scene.add(wood)
    wood = createWood(-5, 3, 1)
    scene.add(wood)

    // front side fifth layer
    for (let i = -4; i <= 2; i++) {
        wood = createWood(i, 4, 5)
        scene.add(wood)
    }

    // right side fifth layer
    for (let i = 4; i >= 1; i--) {
        wood = createWood(3, 4, i)
        scene.add(wood)
    }

    // back side fifth layer
    for (let i = 2; i >= -4; i--) {
        wood = createWood(i, 4, 0)
        scene.add(wood)
    }

    // left side fifth layer
    for (let i = 4; i >= 1; i--) {
        wood = createWood(-5, 4, i)
        scene.add(wood)
    }
}

function drawGlass(scene) {
    let glass = undefined

    // front side third layer
    for (let i = -3; i <= -1; i++) {
        glass = createGlass(i, 2, 5)
        scene.add(glass)
    }

    // right side third layer
    for (let i = 3; i >= 2; i--) {
        glass = createGlass(3, 2, i, 'y')
        scene.add(glass)
    }

    // back side third layer
    for (let i = 1; i >= 0; i--) {
        glass = createGlass(i, 2, 0)
        scene.add(glass)
    }

    for (let i = -2; i >= -3; i--) {
        glass = createGlass(i, 2, 0)
        scene.add(glass)
    }

    // left side third layer
    for (let i = 3; i >= 2; i--) {
        glass = createGlass(-5, 2, i, 'y')
        scene.add(glass)
    }

    // front side fourth layer
    for (let i = -3; i <= -1; i++) {
        glass = createGlass(i, 3, 5)
        scene.add(glass)
    }

    // right side fourth layer
    for (let i = 3; i >= 2; i--) {
        glass = createGlass(3, 3, i, 'y')
        scene.add(glass)
    }

    // left side fourth layer
    for (let i = 3; i >= 2; i--) {
        glass = createGlass(-5, 3, i, 'y')
        scene.add(glass)
    }
}

function drawFloor(scene) {
    let floor = undefined

    for (let i = -4; i <= 2; i++) {
        for (let j = 1; j <= 4; j++) {
            floor = createFloor(i, 0, j)
            scene.add(floor)
        }
    }
}

function drawStairs(scene) {
    let stairs = createCobblestoneStairs(2, 0, 5.75)
    scene.add(stairs)
    stairs = createCobblestoneStairs(2, -0.25, 6, 'x')
    scene.add(stairs)
}

function drawRoof(scene) {
    let stairs = undefined
    for (let i = -5; i <= 3; i++) {
        // front side first layer stairs
        stairs = createWoodStairs(i, 5, 5.75)
        scene.add(stairs)
        stairs = createWoodStairs(i, 4.75, 6, 'x')
        scene.add(stairs)

        // back side first layer stairs
        stairs = createWoodStairs(i, 5, -0.75)
        scene.add(stairs)
        stairs = createWoodStairs(i, 4.75, -1, 'x')
        scene.add(stairs)

        // front side second layer stairs
        stairs = createWoodStairs(i, 6, 4.75)
        scene.add(stairs)
        stairs = createWoodStairs(i, 5.75, 5, 'x')
        scene.add(stairs)

        // back side second layer stairs
        stairs = createWoodStairs(i, 6, 0.25)
        scene.add(stairs)
        stairs = createWoodStairs(i, 5.75, 0, 'x')
        scene.add(stairs)

        // front side third layer stairs
        stairs = createWoodStairs(i, 7, 3.75)
        scene.add(stairs)
        stairs = createWoodStairs(i, 6.75, 4, 'x')
        scene.add(stairs)

        // back side third layer stairs
        stairs = createWoodStairs(i, 7, 1.25)
        scene.add(stairs)
        stairs = createWoodStairs(i, 6.75, 1, 'x')
        scene.add(stairs)

        // front side fourth layer stairs
        stairs = createWoodStairs(i, 8, 2.75)
        scene.add(stairs)
        stairs = createWoodStairs(i, 7.75, 3, 'x')
        scene.add(stairs)

        // back side fourth layer stairs
        stairs = createWoodStairs(i, 8, 2.25)
        scene.add(stairs)
        stairs = createWoodStairs(i, 7.75, 2, 'x')
        scene.add(stairs)
    }
}

function drawFlashlight(scene) {
    let flashLight = undefined

    for (let i = 0; i <= 3; i++) {
        flashLight = createFlashlight(0, i, -8)
        scene.add(flashLight)
    }
}

function drawLamp(scene) {
    let lamp = createLamp(0, 4, -8)
    scene.add(lamp)

    const spotLight = new THREE.SpotLight(0xffffff, 0.5)
    spotLight.position.set(0, 4, -8)
    spotLight.distance = 30
    spotLight.angle = Math.PI / 4

    spotLight.castShadow = true

    spotLight.shadow.mapSize.width = 1024
    spotLight.shadow.mapSize.height = 1024

    spotLight.shadow.camera.near = 500
    spotLight.shadow.camera.far = 4000
    spotLight.shadow.camera.fov = 30
    scene.add(spotLight)
}

export {draw}