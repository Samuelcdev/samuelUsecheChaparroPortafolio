import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function ModelViewer({ scale = 1 }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) return undefined;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0.10, 2.0);
    camera.lookAt(0, 0, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(2.4, 2.8, 1.6);
    const rimLight = new THREE.DirectionalLight(0xfff2b3, 0.6);
    rimLight.position.set(-2.2, 1.2, -1.8);

    scene.add(ambient, keyLight, rimLight);

    const loader = new GLTFLoader();
    let model = null;
    const baseRotation = { x: 0, y: 0, z: 0 };
    const baseY = -0.05;

    loader.load(
      `${BASE}models/xbox_controler_wireless.glb`,
      (gltf) => {
        model = gltf.scene;
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.sub(center);

        const maxAxis = Math.max(size.x, size.y, size.z);
        const scaleFactor = (1.35 / maxAxis) * scale;
        model.scale.setScalar(scaleFactor);
        model.rotation.set(baseRotation.x, baseRotation.y, baseRotation.z);
        model.position.y += baseY;
      },
      undefined,
      () => { }
    );

    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (event) => {
      const rect = wrapper.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

      pointerX = x;
      pointerY = y;
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    wrapper.addEventListener('pointermove', handlePointerMove);
    wrapper.addEventListener('pointerleave', handlePointerLeave);

    const clock = new THREE.Clock();
    let animationId;

    const render = () => {
      const time = clock.getElapsedTime();

      if (model) {
        const targetX = baseRotation.x + pointerY * 0.5 + Math.sin(time * 0.5) * 0.08;
        const targetY = baseRotation.y + pointerX * 0.7 + Math.cos(time * 0.4) * 0.08;
        const targetZ = baseRotation.z + -pointerX * 0.1;

        model.rotation.x = THREE.MathUtils.lerp(model.rotation.x, targetX, 0.08);
        model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, targetY, 0.08);
        model.rotation.z = THREE.MathUtils.lerp(model.rotation.z, targetZ, 0.06);
        model.position.y = THREE.MathUtils.lerp(
          model.position.y,
          baseY + Math.sin(time * 0.9) * 0.04,
          0.05
        );
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(render);
    };

    const resize = () => {
      const { width, height } = wrapper.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrapper);
    resize();
    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      wrapper.removeEventListener('pointermove', handlePointerMove);
      wrapper.removeEventListener('pointerleave', handlePointerLeave);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else if (object.material) {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div ref={wrapperRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" aria-label="Modelo 3D" />
    </div>
  );
}

export default ModelViewer;
