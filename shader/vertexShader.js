
const vertexShaderCode = `
attribute vec3 position;
uniform mat4 worldViewProjection;

void main(void) {
  vec3 scaledPosition = position * vec3(1.05, 1.05, 1.05);
  gl_Position = worldViewProjection * vec4(scaledPosition , 1.0);
}
        `;


export { vertexShaderCode };
