import {Color, Painter, Point} from "../common/webGLUtils/painter";
import {ViewInterface} from "../common/webGLUtils/viewInterface";

const violet: Color = [0.8, 0.2, 0.5, 1]
const purple: Color = [0.3, 0.2, 0.4, 1]
const pink: Color = [0.7, 0.2, 0.3, 1]
const black: Color = [0, 0, 0, 1]
const white: Color = [1, 1, 1, 1]

const defaultEllipseSegments: number = 40

export class Kikoriki implements ViewInterface {
    private position: Point = {x: 0, y: 0}

    public render(painter: Painter): void {
        painter.clear()
        this.drawNeedles(painter)
        this.drawLegs(painter)
        this.drawArms(painter)
        this.drawBody(painter)
        this.drawNose(painter)
        this.drawMouth(painter)
        this.drawGlasses(painter)
        this.drawEyes(painter)
    }

    public getPosition(): Point {
        return this.position
    }

    public setPosition(position: Point): void {
        this.position = position
    }

    private drawNeedles(painter: Painter): void {
        painter.setColor(purple)
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 860, y: 220}),
            this.pointRelativeToPosition({x: 300, y: -100}),
            this.pointRelativeToPosition({x: 300, y: 500})
        )
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 600, y: 660}),
            this.pointRelativeToPosition({x: 100, y: 500}),
            this.pointRelativeToPosition({x: 600, y: 300})
        )
        painter.drawTriangle(
            this.pointRelativeToPosition({x: -860, y: 220}),
            this.pointRelativeToPosition({x: -300, y: -100}),
            this.pointRelativeToPosition({x: -300, y: 500})
        )
        painter.drawTriangle(
            this.pointRelativeToPosition({x: -600, y: 660}),
            this.pointRelativeToPosition({x: -100, y: 500}),
            this.pointRelativeToPosition({x: -600, y: 300})
        )
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 0, y: 800}),
            this.pointRelativeToPosition({x: 400, y: 400}),
            this.pointRelativeToPosition({x: -400, y: 400})
        )
    }

    private drawLegs(painter: Painter): void {
        painter.setColor(violet)
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 160, y: -300}),
            this.pointRelativeToPosition({x: 20, y: -700}),
            this.pointRelativeToPosition({x: 260, y: -700})
        )
        painter.drawTriangle(
            this.pointRelativeToPosition({x: -160, y: -300}),
            this.pointRelativeToPosition({x: -20, y: -700}),
            this.pointRelativeToPosition({x: -260, y: -700})
        )
    }

    private drawArms(painter: Painter): void {
        painter.setColor(violet)
        painter.drawEllipse(this.pointRelativeToPosition({x: 500, y: -220}), 60, 100, defaultEllipseSegments)
        painter.drawEllipse(this.pointRelativeToPosition({x: -500, y: -220}), 60, 100, defaultEllipseSegments)
        painter.drawCircle(this.pointRelativeToPosition({x: 500, y: -300}), 100, 50)
        painter.drawCircle(this.pointRelativeToPosition({x: -500, y: -300}), 100, 50)
    }

    private drawBody(painter: Painter): void {
        painter.setColor(violet)
        painter.drawCircle(this.pointRelativeToPosition({x: 0, y: 0}), 500, defaultEllipseSegments)
    }

    private drawNose(painter: Painter): void {
        painter.setColor(pink)
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 0, y: -80}),
            this.pointRelativeToPosition({x: -80, y: 40}),
            this.pointRelativeToPosition({x: 80, y: 40})
        )
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 0, y: -180}),
            this.pointRelativeToPosition({x: -10, y: -60}),
            this.pointRelativeToPosition({x: 10, y: -60}))
    }

    private drawMouth(painter: Painter): void {
        painter.setColor(purple)
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 0, y: -140}),
            this.pointRelativeToPosition({x: 0, y: -180}),
            this.pointRelativeToPosition({x: 100, y: -120})
        )
        painter.drawTriangle(
            this.pointRelativeToPosition({x: 0, y: -140}),
            this.pointRelativeToPosition({x: 0, y: -180}),
            this.pointRelativeToPosition({x: -100, y: -120})
        )
    }

    private drawGlasses(painter: Painter): void {
        painter.setColor(purple)
        painter.drawCircle(this.pointRelativeToPosition({x: 160, y: 160}), 170, defaultEllipseSegments)
        painter.drawCircle(this.pointRelativeToPosition({x: -160, y: 160}), 170, defaultEllipseSegments)
    }

    private drawEyes(painter: Painter): void {
        painter.setColor(white)
        painter.drawCircle(this.pointRelativeToPosition({x: 160, y: 160}), 120, defaultEllipseSegments)
        painter.drawCircle(this.pointRelativeToPosition({x: -160, y: 160}), 120, defaultEllipseSegments)

        painter.setColor(black)
        painter.drawEllipse(this.pointRelativeToPosition({x: 80, y: 150}), 30, 50, defaultEllipseSegments)
        painter.drawEllipse(this.pointRelativeToPosition({x: -80, y: 150}), 30, 50, defaultEllipseSegments)

        painter.setColor(white)
        painter.drawEllipse(this.pointRelativeToPosition({x: 100, y: 170}), 10, 20, defaultEllipseSegments)
        painter.drawEllipse(this.pointRelativeToPosition({x: -60, y: 170}), 10, 20, defaultEllipseSegments)
    }

    private pointRelativeToPosition(point: Point): Point {
        return {
            x: this.position.x + point.x,
            y: this.position.y + point.y
        }
    }
}