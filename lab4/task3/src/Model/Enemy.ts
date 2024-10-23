import { Vector3 } from "../Vector3";

export class Enemy {
  public width: number;
  public height: number;
  public position: Vector3;
  public texturePath: string;

  constructor(
    _width: number,
    _height: number,
    _position: Vector3,
    _texturePath: string
  ) {
    this.width = _width;
    this.height = _height;
    this.position = _position;
    this.texturePath = _texturePath;
  }
}
