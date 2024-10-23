import * as THREE from "three";
import { Ground } from "../Model/Ground";
import { Wall } from "../Model/Wall";
import { Goal } from "../Model/Goal";
import { Enemy } from "../Model/Enemy";
import { Vector3 } from "../Vector3";

export class ThreeJSSceneDrawer {
  static DrawGround(scene: THREE.Scene, ground: Ground): void {
    const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
    const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(
      ground.width,
      ground.height
    );

    textureLoader.load(ground.texturePath, (groundTexture: THREE.Texture) => {
      const fillMaterial = new THREE.MeshLambertMaterial({
        map: groundTexture,
        side: THREE.FrontSide,
        fog: false,
      });
      const ground: THREE.Mesh = new THREE.Mesh(geometry, fillMaterial);
      ground.rotateX(-Math.PI / 2);
      ground.receiveShadow = true;

      scene.add(ground);
    });
  }

  static DrawMoonLight(scene: THREE.Scene, position: Vector3): void {
    const moonLight: THREE.PointLight = new THREE.PointLight(
      0xffffff,
      1000,
      600,
      1
    );
    moonLight.position.set(position.x, position.y, position.z);
    moonLight.castShadow = true;

    scene.add(moonLight);
  }

  static DrawFlashlightToTheCamera(camera: THREE.Camera): THREE.SpotLight {
    const flashlight = new THREE.SpotLight(
      0xffffff,
      100,
      100,
      Math.PI * 0.1,
      0.5,
      2
    );

    camera.add(flashlight);
    camera.add(flashlight.target);
    flashlight.target.position.z = -5;
    flashlight.target.position.x = 0;
    flashlight.target.position.y = 0;
    flashlight.castShadow = true;

    return flashlight;
  }

  static DrawMaze(scene: THREE.Scene, mazeWalls: Wall[]): void {
    const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
    const mapTexturePathToWall: Map<string, Wall[]> = new Map<string, Wall[]>();

    mazeWalls.forEach((wallData: Wall) => {
      if (!mapTexturePathToWall.has(wallData.texturePath)) {
        mapTexturePathToWall.set(wallData.texturePath, []);
      }
      mapTexturePathToWall.get(wallData.texturePath)!.push(wallData);
    });
    mapTexturePathToWall.forEach((walls: Wall[], texturePath: string) => {
      textureLoader.load(texturePath, (wallTexture: THREE.Texture) => {
        walls.forEach((wallData: Wall) => {
          const DEFAULT_WALL_HEIGHT: number = 10;

          const fillMaterial = new THREE.MeshLambertMaterial({
            map: wallTexture,
            side: THREE.FrontSide,
          });
          const wallGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(
            wallData.width,
            DEFAULT_WALL_HEIGHT,
            wallData.height
          );
          const wall: THREE.Mesh = new THREE.Mesh(wallGeometry, fillMaterial);

          wall.position.x = wallData.startCoordinate.x;
          wall.position.y = DEFAULT_WALL_HEIGHT / 2;
          wall.position.z = wallData.startCoordinate.y;
          wall.castShadow = true;

          scene.add(wall);
        });
      });
    });
  }

  static DrawFog(scene: THREE.Scene): void {
    scene.fog = new THREE.Fog(0x000000, 0.015, 100);
  }

  static DrawSkybox(scene: THREE.Scene, texturePath: string): void {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(texturePath, () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });
  }

  static DrawGoal(scene: THREE.Scene, goal: Goal): void {
    const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
    const geometry = new THREE.SphereGeometry(goal.radius, 64, 32);

    textureLoader.load(goal.texturePath, (goalTexture: THREE.Texture) => {
      const fillMaterial = new THREE.MeshLambertMaterial({
        map: goalTexture,
        side: THREE.FrontSide,
      });

      const goalMesh: THREE.Mesh = new THREE.Mesh(geometry, fillMaterial);
      goalMesh.position.x = goal.position.x;
      goalMesh.position.y = goal.position.y;
      goalMesh.position.z = goal.position.z;
      goalMesh.castShadow = true;

      scene.add(goalMesh);
    });
  }

  static DrawEnemy(scene: THREE.Scene, enemy: Enemy): void {
    const textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
    const geometry = new THREE.BoxGeometry(enemy.width, 3, enemy.height);

    textureLoader.load(enemy.texturePath, (enemyTexture: THREE.Texture) => {
      const fillMaterial = new THREE.MeshLambertMaterial({
        map: enemyTexture,
        side: THREE.FrontSide,
        transparent: true,
        opacity: 0.4,
      });

      const enemyMesh: THREE.Mesh = new THREE.Mesh(geometry, fillMaterial);
      enemyMesh.position.x = enemy.position.x;
      enemyMesh.position.y = enemy.position.y + 1.5;
      enemyMesh.position.z = enemy.position.z;

      scene.add(enemyMesh);
    });
  }
}
