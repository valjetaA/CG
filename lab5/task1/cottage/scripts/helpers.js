import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

const rotateAroundObjectAxis = function (object, axis, radians = Math.PI / 2) {
    const rotObjectMatrix = new THREE.Matrix4()
    rotObjectMatrix.makeRotationAxis(axis.normalize(), radians)
    object.matrix.multiply(rotObjectMatrix)
    object.rotation.setFromRotationMatrix(object.matrix)
}

const rotateAroundWorldAxis = function (object, axis, radians = Math.PI / 2) {
    const rotWorldMatrix = new THREE.Matrix4()
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians)

    const currentPos = new THREE.Vector4(object.position.x, object.position.y, object.position.z, 1)
    const newPos = currentPos.applyMatrix4(rotWorldMatrix)

    rotWorldMatrix.multiply(object.matrix)
    object.matrix = rotWorldMatrix
    object.rotation.setFromRotationMatrix(object.matrix)

    object.position.x = newPos.x
    object.position.y = newPos.y
    object.position.z = newPos.z
}

export {
    rotateAroundObjectAxis,
    rotateAroundWorldAxis
}