import {createShader} from "./createShader";
import {vertexShader} from "../../../shaders/vertex";
import {fragmentShader} from "../../../shaders/fragment";
import {createProgram} from "./createProgram";
import {Painter} from "./painter";
import {defaultResolutionsConfig, ResolutionsConfig} from "../config/resolutions";
import {ViewInterface} from "./viewInterface";

export class Application {
    private painter: Painter

    constructor(
        canvas: HTMLCanvasElement,
        view: ViewInterface,
        resolutionsConfig: ResolutionsConfig = defaultResolutionsConfig
    ) {
        const ctx = canvas.getContext("webgl2")
        const shaders = this.createShaders(ctx)
        const program = this.createProgram(ctx, shaders)
        const wrappedRenderFunction = (painter: Painter) => {
            view.render(painter)
        }
        this.painter = new Painter(
            ctx,
            program,
            canvas,
            resolutionsConfig,
            wrappedRenderFunction
        )
    }

    public start(): void {
        this.frameLoop()
    }

    private createShaders(ctx: WebGL2RenderingContext): WebGLShader[] {
        const vertex = createShader(ctx, ctx.VERTEX_SHADER, vertexShader())
        const fragment = createShader(ctx, ctx.FRAGMENT_SHADER, fragmentShader())
        return [vertex, fragment]
    }

    private createProgram(ctx: WebGL2RenderingContext, shaders: WebGLShader[]): WebGLProgram {
        const program = createProgram(ctx, shaders)
        ctx.useProgram(program)
        return program
    }

    private frameLoop(): void {
        this.painter.render()
        requestAnimationFrame(this.frameLoop.bind(this))
    }
}