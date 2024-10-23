import { Enemy } from "./Enemy";
import { Goal } from "./Goal";
import { Ground } from "./Ground";
import { IPublisher } from "../IPublisher";
import { ISubscriber } from "../ISubscriber";
import { Vector3 } from "../Vector3";
import { Wall } from "./Wall";

export class Model implements IPublisher {
  public lookCoordinates: Vector3;
  public positionCoordinates: Vector3;
  public ground: Ground;
  public axesHelperLength: number;
  public maze: Wall[] = [];
  public skyboxTexturePath: string;
  public goal: Goal;
  public enemy: Enemy;
  public isFlashlightTurnedOn: boolean = true;
  public moonLightPosition: Vector3;

  private _subscribers: ISubscriber[] = [];

  public toggleFlashlight(): void {
    this.isFlashlightTurnedOn = !this.isFlashlightTurnedOn;
    this.notifySubscribers();
  }

  public setPosition(position: Vector3): void {
    let isInRigidWall: boolean = false;

    let i = 0;
    while (!isInRigidWall && i < this.maze.length) {
      if (
        !isInRigidWall &&
        this.maze[i].isRigid &&
        this._isPositionInWall(position, this.maze[i])
      ) {
        isInRigidWall = true;
      }
      i++;
    }

    if (!isInRigidWall) {
      this.positionCoordinates.x = position.x;
      this.positionCoordinates.y = position.y;
      this.positionCoordinates.z = position.z;
    }

    if (this._isMetEnemy(position)) {
      alert("Вы проиграли. Возвращаем вас в начало...");
      this._resetPosition();
    }
    if (this._isGoalAchieved(position)) {
      alert("Поздравляю, вы нашли мяч! Возвращаем вас в начало...");
      this._resetPosition();
    }
    this.notifySubscribers();
  }

  public subscribe(subscriber: ISubscriber): void {
    this._subscribers.push(subscriber);
  }

  public unsubscribe(subscriber: ISubscriber): void {
    this._subscribers.find((s: ISubscriber) => s === subscriber);
  }

  public notifySubscribers(): void {
    this._subscribers.forEach((s: ISubscriber) => s.update());
  }

  private _isPositionInWall(position: Vector3, wall: Wall): boolean {
    const DELTA: number = 1.1;

    return (
      position.x >= wall.startCoordinate.x - wall.width / 2 - DELTA &&
      position.x <= wall.startCoordinate.x + wall.width / 2 + DELTA &&
      position.z >= wall.startCoordinate.y - wall.height / 2 - DELTA &&
      position.z <= wall.startCoordinate.y + wall.height / 2 + DELTA
    );
  }

  private _isGoalAchieved(position: Vector3): boolean {
    const DELTA: number = 1;

    return (
      position.x >= this.goal.position.x - this.goal.radius - DELTA &&
      position.x <= this.goal.position.x + this.goal.radius + DELTA &&
      position.z >= this.goal.position.z - this.goal.radius - DELTA &&
      position.z <= this.goal.position.z + this.goal.radius + DELTA
    );
  }

  private _isMetEnemy(position: Vector3): boolean {
    const DELTA: number = 2;

    return (
      position.x >= this.enemy.position.x - this.enemy.width / 2 - DELTA &&
      position.x <= this.enemy.position.x + this.enemy.width / 2 + DELTA &&
      position.z >= this.enemy.position.z - this.enemy.height / 2 - DELTA &&
      position.z <= this.enemy.position.z + this.enemy.height / 2 + DELTA
    );
  }

  private _resetPosition(): void {
    this.positionCoordinates.x = 20;
    this.positionCoordinates.y = 2;
    this.positionCoordinates.z = -70;
    this.lookCoordinates.x = 10;
    this.lookCoordinates.y = 0;
    this.lookCoordinates.z = 0;
  }
}
