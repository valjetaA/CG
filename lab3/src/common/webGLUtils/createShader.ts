export function createShader(ctx: WebGL2RenderingContext, type: number, source: string): WebGLShader {
    const shader = ctx.createShader(type)
    try {
        ctx.shaderSource(shader, source)
        ctx.compileShader(shader)
        if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
            throw new Error("Failed compile shader. Info: " + ctx.getShaderInfoLog(shader))
        }
        return shader
    } catch (err) {
        ctx.deleteShader(shader)
        throw err
    }
}