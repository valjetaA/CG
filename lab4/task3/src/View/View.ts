import * as THREE from "three";
import { Model } from "../Model/Model";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { Controller } from "../Controller/Controller";
import { ThreeJSSceneDrawer } from "./ThreeJSSceneDrawer";
import { ISubscriber } from "../ISubscriber";

export class View implements ISubscriber {
  private _model: Model;
  private _controller: Controller;

  private _camera: THREE.PerspectiveCamera;
  private _flashlight: THREE.SpotLight;

  constructor(model: Model, controller: Controller) {
    this._model = model;
    this._controller = controller;
  }

  public drawThreeJSScene(): void {
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const SCENE_SIZE: number = 500;
    const BACKGROUND_COLOR: number = 0x000000;
    const BACKGROUND_OPACITY: number = 1;

    renderer.setSize(SCENE_SIZE, SCENE_SIZE);
    renderer.setClearColor(BACKGROUND_COLOR, BACKGROUND_OPACITY);
    document.body.appendChild(renderer.domElement);

    const scene: THREE.Scene = new THREE.Scene();
    this._camera = new THREE.PerspectiveCamera(25, 1, 1, 500);
    const controls = new PointerLockControls(this._camera, document.body);

    window.addEventListener("click", () => {
      controls.lock();
    });

    this._camera.position.set(
      this._model.positionCoordinates.x,
      this._model.positionCoordinates.y,
      this._model.positionCoordinates.z
    );
    this._camera.lookAt(
      this._model.lookCoordinates.x,
      this._model.lookCoordinates.y,
      this._model.lookCoordinates.z
    );
    scene.add(this._camera);

    const animate = (): void => {
      requestAnimationFrame(animate);

      renderer.render(scene, this._camera);
    };

    const axesHelper = new THREE.AxesHelper(this._model.axesHelperLength);
    scene.add(axesHelper);

    ThreeJSSceneDrawer.DrawGround(scene, this._model.ground);
    ThreeJSSceneDrawer.DrawMoonLight(scene, this._model.moonLightPosition);
    this._flashlight = ThreeJSSceneDrawer.DrawFlashlightToTheCamera(
      this._camera
    );
    ThreeJSSceneDrawer.DrawMaze(scene, this._model.maze);
    ThreeJSSceneDrawer.DrawFog(scene);
    ThreeJSSceneDrawer.DrawSkybox(scene, this._model.skyboxTexturePath);
    ThreeJSSceneDrawer.DrawGoal(scene, this._model.goal);
    ThreeJSSceneDrawer.DrawEnemy(scene, this._model.enemy);

    animate();
    this._controller.addKeyboardListeners(controls);
  }

  public update(): void {
    this._camera.position.set(
      this._model.positionCoordinates.x,
      this._model.positionCoordinates.y,
      this._model.positionCoordinates.z
    );
    this._flashlight.visible = this._model.isFlashlightTurnedOn;
  }
}
