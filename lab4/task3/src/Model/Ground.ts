export class Ground {
  public width: number;
  public height: number;
  public texturePath: string;

  constructor(_width: number, _height: number, _texturePath: string) {
    this.width = _width;
    this.height = _height;
    this.texturePath = _texturePath;
  }
}
