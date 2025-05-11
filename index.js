import { MindARThree } from 'mindar-image-three';
import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', () => {
  const start = async () => {
    // Initialize MindAR engine
    const mindarThree = new MindARThree({
      container: document.body,
      imageTargetSrc: './targets.mind', // Pastikan path file targets.mind benar
    });

    const { renderer, scene, camera } = mindarThree;

    // Load GLTF model
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('./scene.gltf', (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.1, 0.1, 0.1); // Sesuaikan skala jika diperlukan
      scene.add(model);
    });

    // Start AR engine
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };

  start();
});