import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Soft teal-blue color variation
      color.setHSL(0.5 + Math.random() * 0.1, 0.6, 0.7);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const mouse = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    document.addEventListener('mousemove', (event) => {
      target.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      // Smoothly interpolate toward mouse target
      mouse.x += (target.x - mouse.x) * 0.05;
      mouse.y += (target.y - mouse.y) * 0.05;

      // Gentle float
      points.rotation.y += 0.0005 * delta * 60;
      points.rotation.x += 0.0002 * delta * 60;

      points.position.x += (mouse.x * 0.3 - points.position.x) * 0.01;
      points.position.y += (mouse.y * 0.3 - points.position.y) * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', width: '100%', height: '100%', zIndex: '-1', top: 0, left: 0 }} />;
};

export default BackgroundCanvas;
