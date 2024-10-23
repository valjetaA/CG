export function vertexShader(): string {
    return `#version 300 es

in vec2 a_position;

uniform mat4 u_matrix;

void main() {
    gl_Position = u_matrix * vec4(a_position, 0, 1);
    gl_PointSize = 5.0;
}
`
}