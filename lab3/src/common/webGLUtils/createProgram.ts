export function createProgram(ctx: WebGL2RenderingContext, shaders: WebGLShader[]): WebGLProgram {
    const program = ctx.createProgram()
    try {
        shaders.forEach(shader => {
            ctx.attachShader(program, shader)
        })
        ctx.linkProgram(program)
        if (!ctx.getProgramParameter(program, ctx.LINK_STATUS)) {
            throw new Error("Failed link program. Info: " + ctx.getProgramInfoLog(program))
        }
        return program
    } catch (err) {
        ctx.deleteProgram(program)
        throw err
    }
}