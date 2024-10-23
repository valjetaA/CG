import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const main = (): void => {
  const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  const SCENE_SIZE: number = 500;
  const BACKGROUND_COLOR: number = 0x000000;
  const BACKGROUND_OPACITY: number = 1;

  renderer.setSize(SCENE_SIZE, SCENE_SIZE);
  renderer.setClearColor(BACKGROUND_COLOR, BACKGROUND_OPACITY);
  document.body.appendChild(renderer.domElement);

  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    25,
    1,
    1,
    500
  );
  const controls: OrbitControls = new OrbitControls(
    camera,
    renderer.domElement
  );
  camera.position.set(0, 0, 400);
  camera.lookAt(0, 0, 0);
  controls.update();

  const scene: THREE.Scene = new THREE.Scene();

  const animate = () => {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };

  const radius: number = 50,
    segments: number = 0,
    outlineMaterial: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
    }),
    fillMaterial: THREE.Material = new THREE.MeshNormalMaterial({}),
    geometry: THREE.DodecahedronGeometry = new THREE.DodecahedronGeometry(
      radius,
      segments
    );
  scene.add(new THREE.Line(geometry, outlineMaterial));
  scene.add(new THREE.Mesh(geometry, fillMaterial));
  animate();
};

main();
