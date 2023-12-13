
const fragmentShaderCode = `
void main(void) {
    if (gl_FrontFacing) {
     
      discard;
  }
    gl_FragColor = vec4(1.0,1.0,0.0, 1.0);
  }
`;


export { fragmentShaderCode };
