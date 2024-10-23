import {mat4, vec3} from 'gl-matrix'
import {ResolutionsConfig} from "../config/resolutions";

type Color = [number, number, number, number]
type Point = { x: number, y: number }

export class Painter {
    private readonly ctx: WebGL2RenderingContext
    private readonly program: WebGLProgram
    private canvas: HTMLCanvasElement
    private readonly resolutionsConfig: ResolutionsConfig
    private readonly renderFunction: (painter: Painter) => void

    constructor(
        ctx: WebGL2RenderingContext,
        program: WebGLProgram,
        canvas: HTMLCanvasElement,
        resolutionsConfig: ResolutionsConfig,
        renderFunction: (painter: Painter) => void
    ) {
        this.ctx = ctx
        this.program = program
        this.canvas = canvas
        this.resolutionsConfig = resolutionsConfig
        this.renderFunction = renderFunction
    }

    public render(): void {
        this.updateViewport()
        this.renderFunction(this)
    }

    public drawCustomFigure(f: (ctx: WebGL2RenderingContext) => void): void {
        f(this.ctx)
    }

    public drawCircle(center: Point, r: number, segments: number): void {
        this.drawEllipse(center, r, r, segments)
    }

    public drawEllipse(center: Point, rx: number, ry: number, segments: number): void {
        for (let i = 0; i < segments; i++) {
            this.drawTriangle(
                center,
                {
                    x: center.x + rx * Math.cos(Math.PI * 2 * i / segments),
                    y: center.y + ry * Math.sin(Math.PI * 2 * i / segments)
                },
                {
                    x: center.x + rx * Math.cos(Math.PI * 2 * (i + 1) / segments),
                    y: center.y + ry * Math.sin(Math.PI * 2 * (i + 1) / segments)
                }
            )
        }
    }

    public drawRect(v1: Point, v2: Point): void {
        this.drawTriangle(v1, {x: v2.x, y: v1.y}, {x: v1.x, y: v2.y})
        this.drawTriangle(v2, {x: v2.x, y: v1.y}, {x: v1.x, y: v2.y})
    }

    public drawTriangle(v1: Point, v2: Point, v3: Point): void {
        this.setPositions([v1.x, v1.y, v2.x, v2.y, v3.x, v3.y])
        this.ctx.drawArrays(this.ctx.TRIANGLES, 0, 3)
    }

    public drawPoint(point: Point): void {
        this.setPositions([point.x, point.y])
        this.ctx.drawArrays(this.ctx.POINTS, 0, 1)
    }

    public drawLine(v1: Point, v2: Point): void {
        this.setPositions([v1.x, v1.y, v2.x, v2.y])
        this.ctx.drawArrays(this.ctx.LINES, 0, 2)
    }

    public clear(): void {
        this.ctx.clearColor(1, 1, 1, 1)
        this.ctx.clear(this.ctx.COLOR_BUFFER_BIT)
    }

    public setColor(color: Color): void {
        const colorUniform = this.ctx.getUniformLocation(this.program, 'u_color')
        this.ctx.uniform4fv(colorUniform, color)
    }

    private updateViewport() {
        const width = this.canvas.clientWidth
        const height = this.canvas.clientHeight

        this.canvas.width = width
        this.canvas.height = height
        this.ctx.viewport(0, 0, width, height)

        const matrix = mat4.create()
        mat4.ortho(
            matrix,
            -this.resolutionsConfig.width, this.resolutionsConfig.width,
            -this.resolutionsConfig.height, this.resolutionsConfig.height,
            -1, 1
        )
        const scale = Math.min(
            this.canvas.width / this.resolutionsConfig.width,
            this.canvas.height / this.resolutionsConfig.height
        )
        const scaleX = this.resolutionsConfig.width / this.canvas.width
        const scaleY = this.resolutionsConfig.height / this.canvas.height
        mat4.scale(matrix, matrix, vec3.fromValues(scaleX * scale, scaleY * scale, 1))

        const matrixUniform = this.ctx.getUniformLocation(this.program, 'u_matrix')
        this.ctx.uniformMatrix4fv(matrixUniform, false, matrix)
    }

    private setPositions(positions: number[]) {
        const positionBuffer = this.ctx.createBuffer()
        this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, positionBuffer)
        this.ctx.bufferData(this.ctx.ARRAY_BUFFER, new Float32Array(positions), this.ctx.STATIC_DRAW)

        const positionAttribute = this.ctx.getAttribLocation(this.program, 'a_position')
        this.ctx.enableVertexAttribArray(positionAttribute)
        this.ctx.vertexAttribPointer(positionAttribute, 2, this.ctx.FLOAT, false, 0, 0)
    }
}

export type {Color, Point}