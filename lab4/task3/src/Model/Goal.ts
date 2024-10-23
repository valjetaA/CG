import { Vector3 } from "../Vector3";

export class Goal {
  position: Vector3;
  radius: number;
  texturePath: string;

  constructor(_position: Vector3, _radius: number, _texturePath: string) {
    this.position = _position;
    this.radius = _radius;
    this.texturePath = _texturePath;
  }
}
