import * as BABYLON from '@babylonjs/core';

var canvas = document.getElementById('myCanvas');
var engine = new BABYLON.Engine(canvas, true);

export function createScene() {

    
    const scene = new BABYLON.Scene(engine);

   
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

   
    var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    
    var circle = BABYLON.MeshBuilder.CreateSphere("sphere", { radius: 1 }, scene);
    circle.scaling = new BABYLON.Vector3(2.0,2.0,2.0);
    circle.position = new BABYLON.Vector3(1.5, 0, 1);
    circle.material = new BABYLON.StandardMaterial("circleMaterial", scene);
    circle.material.diffuseColor = new BABYLON.Color3(1, 0, 0); 
   
    var square = BABYLON.MeshBuilder.CreateBox("square", { size: 2 }, scene);
    square.position = new BABYLON.Vector3(0, 0, 0);
    square.material = new BABYLON.StandardMaterial("squareMaterial", scene);
    square.material.diffuseColor = new BABYLON.Color3(0, 1, 0); 

    
    var triangle = BABYLON.MeshBuilder.CreateCylinder("triangle", { diameterTop: 0, diameterBottom: 2, height: 2, tessellation: 3 }, scene);
    triangle.position = new BABYLON.Vector3(0, 0, -2);
    triangle.material = new BABYLON.StandardMaterial("triangleMaterial", scene);
    triangle.material.diffuseColor = new BABYLON.Color3(0, 0, 1); 
   

    return scene;
}

export { engine };