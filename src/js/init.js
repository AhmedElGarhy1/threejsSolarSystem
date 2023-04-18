import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import starsTexture from "../img/stars.jpg";

export const init = () => {
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const orbit = new OrbitControls(camera, renderer.domElement);

  // camera.position.set(-90, 140, 140);
  camera.position.set(-30, 50, 50);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  //   orbit.update();

  //   background
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeTextureLoader.load(Array(6).fill(starsTexture));

  //   smooth lighting
  const ambientLight = new THREE.AmbientLight(0x454545);
  scene.add(ambientLight);

  const updateOnResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  return {
    scene,
    camera,
    renderer,
    updateOnResize,
  };
};
