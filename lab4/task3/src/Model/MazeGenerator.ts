import { Vector2 } from "../Vector2";
import { Wall } from "./Wall";

export class MazeGenerator {
  private static GenerateBox(
    position: Vector2,
    texturePath: string,
    isRigid: boolean
  ): Wall {
    return new Wall(10, 10, position, texturePath, isRigid);
  }

  public static GenerateMaze(maze: number[][]): Wall[] {
    const enum WallType {
      Brick = 1,
      Concrete = 2,
      Fear = 3,
      Relax = 4,
      Grass = 5,
      Wood = 6,
    }
    const mapWallTypeToTexturePath = new Map<WallType, string>();
    mapWallTypeToTexturePath.set(WallType.Brick, "../textures/brick.jpg");
    mapWallTypeToTexturePath.set(WallType.Concrete, "../textures/concrete.jpg");
    mapWallTypeToTexturePath.set(WallType.Fear, "../textures/fear.jpg");
    mapWallTypeToTexturePath.set(WallType.Relax, "../textures/relax.jpg");
    mapWallTypeToTexturePath.set(WallType.Grass, "../textures/grass.jpg");
    mapWallTypeToTexturePath.set(WallType.Wood, "../textures/wood.jpg");
    const walls: Wall[] = [];

    maze.forEach((row: number[], i: number) => {
      row.forEach((box: number, j: number) => {
        const texturePath: string | undefined =
          mapWallTypeToTexturePath.get(box);

        if (texturePath) {
          walls.push(
            this.GenerateBox(
              new Vector2(j * 10, i * 10),
              texturePath,
              box !== WallType.Grass
            )
          );
        }
      });
    });

    return walls;
  }
}
