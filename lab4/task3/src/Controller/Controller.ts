import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { Model } from "../Model/Model";

export class Controller {
  private _model: Model;

  constructor(model: Model) {
    this._model = model;
  }

  public addKeyboardListeners(controls: PointerLockControls): void {
    enum MOVEMENT_CODE {
      FORWARD = "KeyW",
      BACKWARD = "KeyS",
      LEFT = "KeyA",
      RIGHT = "KeyD",
    }
    const FLASHLIGH_TOGGLE_CODE: string = "KeyF";

    document.addEventListener("keydown", (e: KeyboardEvent) => {
      e.preventDefault();

      switch (e.code) {
        case MOVEMENT_CODE.LEFT:
          controls.moveRight(-1);
          this._model.setPosition(controls.camera.position);
          break;
        case MOVEMENT_CODE.RIGHT:
          controls.moveRight(1);
          this._model.setPosition(controls.camera.position);
          break;
        case MOVEMENT_CODE.FORWARD:
          controls.moveForward(1);
          this._model.setPosition(controls.camera.position);
          break;
        case MOVEMENT_CODE.BACKWARD:
          controls.moveForward(-1);
          this._model.setPosition(controls.camera.position);
          break;
        case FLASHLIGH_TOGGLE_CODE:
          this._model.toggleFlashlight();
        default:
          break;
      }
    });
  }
}
