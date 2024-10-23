import {
    createBoxGeometry,
    createPlaneGeometry,
    createStairsGeometry,
    createFlashLightHull
} from './createGeometry.js'

const GRASS = './images/planes/grass.png'
const COBBLESTONE = './images/blocks/cobblestone.png'
const MOSSY_COBBLESTONE = './images/blocks/mossy-cobblestone.png'
const DOOR = './images/planes/door.png'
const WOOD = './images/blocks/woodPlank.png'
const FLOOR = './images/blocks/floor.jpg'
const GLASS = './images/planes/glass.png'
const LAMP = './images/blocks/gold.webp'

function createArea(widthX, widthY) {
    return createPlaneGeometry(widthX, widthY, GRASS, 0, -0.51, 0, false, 'x')
}

function createCobblestone(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(COBBLESTONE, offsetX, offsetY, offsetZ, false)
}

function createMossyCobblestone(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(MOSSY_COBBLESTONE, offsetX, offsetY, offsetZ, false)
}

function createDoor(offsetX, offsetY, offsetZ) {
    return createPlaneGeometry(1, 2, DOOR, offsetX, offsetY, offsetZ, true)
}

function createWood(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(WOOD, offsetX, offsetY, offsetZ, false)
}

function createFloor(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(FLOOR, offsetX, offsetY, offsetZ, false)
}

function createGlass(offsetX, offsetY, offsetZ, rotateAxis) {
    return createPlaneGeometry(1, 1, GLASS, offsetX, offsetY, offsetZ, true, rotateAxis)
}

function createWoodStairs(offsetX, offsetY, offsetZ, rotateAxis) {
    return createStairsGeometry(WOOD, offsetX, offsetY, offsetZ, rotateAxis)
}

function createCobblestoneStairs(offsetX, offsetY, offsetZ, rotateAxis) {
    return createStairsGeometry(COBBLESTONE, offsetX, offsetY, offsetZ, rotateAxis)
}

function createFlashlight(offsetX, offsetY, offsetZ) {
    return createFlashLightHull(WOOD, offsetX, offsetY, offsetZ)
}

function createLamp(offsetX, offsetY, offsetZ) {
    return createBoxGeometry(LAMP, offsetX, offsetY, offsetZ, false)
}

export {
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
}