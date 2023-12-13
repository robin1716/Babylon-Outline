import * as BABYLON from '@babylonjs/core';
import { vertexShaderCode } from '../shader/vertexShader';
import { fragmentShaderCode } from '../shader/fragmentShader';

export function customShaderMaterial(scene) {

 
  BABYLON.Effect.ShadersStore["customVertexShader"] = vertexShaderCode;

  BABYLON.Effect.ShadersStore["customFragmentShader"] = fragmentShaderCode;


      var shaderMaterial = new BABYLON.ShaderMaterial(
        'custom',
        scene,
        'custom',
        {
          attributes: ["position"],
          uniforms: ["worldViewProjection"],
          
        }
      );
       shaderMaterial.backFaceCulling=false;
      

     return shaderMaterial;
}