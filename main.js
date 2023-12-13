import { createScene, engine } from '/src/renderer';
import { customShaderMaterial } from '/src/customShaderPass';

document.addEventListener('DOMContentLoaded', function () {

  var scene;
  var checkMeshCloned = false;
  var clonedMesh;
  var hitFlag = false;


  try {
    scene = createScene();
    console.log(scene);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  var onPointerMove = function (e) {
    var result = scene.pick(scene.pointerX, scene.pointerY);
    var shaderMaterial = customShaderMaterial(scene);

    if (result.hit) {
      if (hitFlag == false) {
        console.log("Mesh Picked");
        clonedMesh = result.pickedMesh.clone("cloned");
        clonedMesh.material = shaderMaterial;
        checkMeshCloned = true;
        hitFlag = true;
      }
    } else {

      if (checkMeshCloned == true) {
        console.log("No mesh picked",);
        clonedMesh.dispose();
        clonedMesh = null;

        checkMeshCloned = false;
        hitFlag = false;
      }

    }

  };


  engine.runRenderLoop(function () {
    scene.render();
  });

  var canvas = document.getElementById('myCanvas');
  canvas.addEventListener("pointermove", onPointerMove, false);


  window.addEventListener('resize', function () {
    engine.resize();
  });


});