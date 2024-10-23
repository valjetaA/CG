import { Vector2 } from "../Vector2";

export class Wall {
  public width: number;
  public height: number;
  public startCoordinate: Vector2;
  public texturePath: string;
  public isRigid: boolean;

  constructor(
    _width: number,
    _height: number,
    _startCoordinate: Vector2,
    _texturePath: string,
    _isRigid: boolean = true
  ) {
    this.width = _width;
    this.height = _height;
    this.startCoordinate = _startCoordinate;
    this.texturePath = _texturePath;
    this.isRigid = _isRigid;
  }
}
