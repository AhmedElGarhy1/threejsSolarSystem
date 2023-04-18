import * as THREE from "three";

import {
  sunTexture,
  mercuryTexture,
  saturnTexture,
  saturnRingTexture,
  venusTexture,
  earthTexture,
  uranusTexture,
  uranusRingTexture,
  plutoTexture,
  jupiterTexture,
  neptuneTexture,
  marsTexture,
} from "../img";
import { gsap } from "gsap";

const textureLoader = new THREE.TextureLoader();

class SolarSystem {
  constructor(scene) {
    this.scene = scene;

    // light for sun
    const pointLight = new THREE.PointLight(0xffffff, 2, 300);
    scene.add(pointLight);
  }

  animate = () => {};

  createSun = () => {
    const sunGeo = new THREE.SphereGeometry(16, 30, 30);
    const sunMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(sunTexture),
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    this.scene.add(sun);
    this.sun = sun;
  };

  // mercury
  createMercury = () => {
    this.mercury = this.createGeo(3.2, mercuryTexture, 28);

    this.scene.add(this.mercury.parent);
  };

  // venus
  createVenus = () => {
    this.venus = this.createGeo(5.8, venusTexture, 44);

    this.scene.add(this.venus.parent);
  };

  // earth
  createEarth = () => {
    this.earth = this.createGeo(6, earthTexture, 62);

    this.scene.add(this.earth.parent);
  };

  // mars
  createMars = () => {
    this.mars = this.createGeo(4, marsTexture, 78);

    this.scene.add(this.mars.parent);
  };

  // jupiter
  createJupiter = () => {
    this.jupiter = this.createGeo(12, jupiterTexture, 100);

    this.scene.add(this.jupiter.parent);
  };

  // Saturn
  createSaturn = () => {
    this.saturn = this.createGeo(10, saturnTexture, 138);

    const satrunRingGeo = new THREE.RingGeometry(10, 20, 32);
    const satrunRingMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(saturnRingTexture),
      side: THREE.DoubleSide,
    });
    const satrunRing = new THREE.Mesh(satrunRingGeo, satrunRingMat);

    satrunRing.rotation.x = -0.5 * Math.PI;

    this.saturn.planet.add(satrunRing);

    this.scene.add(this.saturn.parent);
  };

  //   uranus
  createUranus = () => {
    this.uranus = this.createGeo(7, uranusTexture, 176);

    const uranusRingGeo = new THREE.RingGeometry(10, 12, 32);
    const uranusRingMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(uranusRingTexture),
      side: THREE.DoubleSide,
    });
    const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMat);

    uranusRing.rotation.x = -0.5 * Math.PI;

    this.uranus.planet.add(uranusRing);

    this.scene.add(this.uranus.parent);
  };

  // neptune
  createNeptune = () => {
    this.neptune = this.createGeo(7, neptuneTexture, 200);

    this.scene.add(this.neptune.parent);
  };

  // pluto
  createPluto = () => {
    this.pluto = this.createGeo(2.8, plutoTexture, 216);

    this.scene.add(this.pluto.parent);
  };

  // mars
  createMars = () => {
    this.mars = this.createGeo(4, marsTexture, 78);

    this.scene.add(this.mars.parent);
  };

  createSolarSystem = () => {
    this.createSun();
    this.createMercury();
    this.createVenus();
    this.createEarth();
    this.createMars();
    this.createJupiter();
    this.createSaturn();
    this.createUranus();
    this.createNeptune();
    this.createPluto();
  };
  rotateSolarSystem = () => {
    this.selfRotation();
    this.rotationAroundSun();
  };

  //   helper
  createGeo = (planetSize, texture, xPos) => {
    const geometry = new THREE.SphereGeometry(planetSize, 30, 30);
    const material = new THREE.MeshStandardMaterial({
      map: textureLoader.load(texture),
    });
    const planet = new THREE.Mesh(geometry, material);

    const parent = new THREE.Object3D().add(planet);

    planet.position.setX(xPos);
    return {
      planet,
      parent,
    };
  };
  selfRotation = () => {
    this.sun.rotateY(0.004);

    this.mercury.planet.rotateY(0.004);
    this.venus.planet.rotateY(0.002);
    this.mars.planet.rotateY(0.018);
    this.jupiter.planet.rotateY(0.04);
    this.saturn.planet.rotateY(0.038);
    this.uranus.planet.rotateY(0.03);
    this.neptune.planet.rotateY(0.032);
    this.pluto.planet.rotateY(0.008);
  };
  rotationAroundSun = () => {
    this.mercury.parent.rotateY(0.04);
    this.venus.parent.rotateY(0.015);
    this.earth.parent.rotateY(0.01);
    this.mars.parent.rotateY(0.008);
    this.jupiter.parent.rotateY(0.002);
    this.saturn.parent.rotateY(0.0009);
    this.uranus.parent.rotateY(0.0004);
    this.neptune.parent.rotateY(0.0001);
    this.pluto.parent.rotateY(0.00007);
  };
}

export default SolarSystem;
