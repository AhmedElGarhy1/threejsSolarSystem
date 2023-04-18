import SolarSystem from "./objects";
import { init } from "./init";
import { gsap } from "gsap";

const { scene, camera, renderer, updateOnResize } = init();

// shapes
const solarSystem = new SolarSystem(scene);
solarSystem.createSolarSystem();

function animate() {
  solarSystem.rotateSolarSystem();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", updateOnResize);
button.onclick = () => {
  document.querySelector(".layout").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".layout").style.display = "none";
  }, 400);
  gsap.to(camera.position, {
    x: -90,
    y: 150,
    z: 150,
    duration: 2,
  });
};
