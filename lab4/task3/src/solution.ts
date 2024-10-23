import { Vector3 } from "three";
import { Model } from "./Model/Model";
import { Controller } from "./Controller/Controller";
import { View } from "./View/View";
import { Ground } from "./Model/Ground";
import { Wall } from "./Model/Wall";
import { Goal } from "./Model/Goal";
import { Enemy } from "./Model/Enemy";
import { MazeGenerator } from "./Model/MazeGenerator";

const model: Model = new Model();
model.axesHelperLength = 400;
model.ground = new Ground(700, 700, "../textures/ground.jpg");
model.lookCoordinates = new Vector3(10, 0, 0);
model.positionCoordinates = new Vector3(20, 2, -70);
// 7 - prize
// 8 - enemy
const walls: Wall[] = MazeGenerator.GenerateMaze([
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 2, 5, 5, 5, 5, 5, 5, 0, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 1],
  [1, 0, 0, 2, 0, 2, 5, 5, 5, 5, 5, 2, 0, 2, 0, 4, 4, 4, 4, 0, 6, 0, 0, 6, 1],
  [1, 0, 0, 2, 0, 2, 0, 0, 5, 0, 0, 2, 0, 2, 5, 6, 6, 6, 6, 0, 0, 6, 6, 0, 1],
  [1, 0, 0, 2, 0, 2, 0, 0, 5, 0, 0, 2, 0, 2, 0, 0, 0, 5, 0, 6, 0, 6, 0, 0, 1],
  [1, 0, 0, 2, 0, 2, 0, 0, 5, 0, 0, 2, 0, 2, 0, 6, 0, 6, 0, 0, 6, 0, 0, 0, 1],
  [1, 0, 2, 2, 0, 2, 0, 0, 5, 0, 0, 2, 0, 2, 0, 6, 0, 6, 5, 6, 0, 6, 5, 5, 1],
  [1, 0, 2, 0, 0, 2, 0, 0, 5, 0, 0, 2, 0, 2, 0, 6, 0, 6, 0, 0, 6, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 0, 0, 5, 0, 0, 2, 0, 2, 0, 4, 0, 6, 6, 6, 6, 0, 0, 0, 1],
  [1, 0, 3, 0, 2, 0, 0, 0, 5, 0, 0, 2, 0, 2, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0, 1],
  [1, 0, 3, 0, 2, 0, 0, 0, 5, 0, 0, 2, 0, 2, 0, 4, 4, 4, 4, 0, 5, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 0, 0, 5, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 7, 1],
  [1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5, 4, 4, 4, 4, 4, 0, 6, 6, 6, 6, 1],
  [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 5, 4, 4, 0, 4, 6, 6, 6, 1],
  [1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 1],
  [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 5, 5, 4, 4, 4, 4, 0, 4, 0, 0, 1],
  [1, 0, 0, 2, 0, 2, 0, 2, 2, 0, 2, 0, 2, 0, 0, 0, 4, 0, 0, 4, 0, 5, 4, 5, 1],
  [1, 0, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 4, 5, 5, 4, 0, 5, 0, 0, 1],
  [1, 0, 0, 2, 0, 3, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0, 0, 1],
  [1, 2, 2, 2, 0, 3, 0, 3, 0, 0, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 2, 2, 1],
  [1, 2, 0, 0, 0, 3, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 1],
  [1, 2, 0, 3, 3, 3, 0, 3, 0, 2, 2, 0, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 0, 1],
  [1, 2, 0, 3, 8, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]);
walls.forEach((wall: Wall) => model.maze.push(wall));
model.skyboxTexturePath = "../textures/skybox.jpg";
model.goal = new Goal(
  new Vector3(230, 1, 110),
  0.3,
  "../textures/basketball.jpg"
);
model.moonLightPosition = new Vector3(300, 300, 300);
model.enemy = new Enemy(5, 5, new Vector3(50, 0, 230), "../textures/enemy.jpg");
const controller: Controller = new Controller(model);
const view: View = new View(model, controller);
model.subscribe(view);

view.drawThreeJSScene();
