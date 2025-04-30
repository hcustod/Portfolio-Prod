import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Base stars
    const starCount = 1200;
    const stars = [];
    const starGeometry = new THREE.SphereGeometry(0.08, 16, 16);

    for (let i = 0; i < starCount; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.1, 0.7, 0.8),
        emissive: 0x88ddff,
        emissiveIntensity: 1.2,
        roughness: 0.4,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85,
      });
      const star = new THREE.Mesh(starGeometry, material);
      star.position.set((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120);
      star.userData = {
        twinkleSpeed: Math.random() * 2 + 1,
        driftOffset: new THREE.Vector3((Math.random() - 0.5) * 0.002, (Math.random() - 0.5) * 0.002, (Math.random() - 0.5) * 0.002),
      };
      scene.add(star);
      stars.push(star);
    }

    // Distant stars
    const distantStars = [];
    const distantStarGeometry = new THREE.SphereGeometry(0.04, 8, 8);
    const distantStarMaterial = new THREE.MeshBasicMaterial({ color: 0x224466, transparent: true, opacity: 0.3 });

    for (let i = 0; i < 300; i++) {
      const distantStar = new THREE.Mesh(distantStarGeometry, distantStarMaterial.clone());
      distantStar.position.set((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400);
      scene.add(distantStar);
      distantStars.push(distantStar);
    }

    // Cloud + Nebula (kept same)
    const cloudMaterial = new THREE.PointsMaterial({
      color: new THREE.Color().setHSL(0.6, 0.4, 0.4),
      size: 0.01,
      transparent: true,
      opacity: 0.015,
      depthWrite: false,
    });
    const cloudGeometry = new THREE.BufferGeometry();
    const cloudPositions = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      cloudPositions[i * 3] = (Math.random() - 0.5) * 600;
      cloudPositions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      cloudPositions[i * 3 + 2] = (Math.random() - 0.5) * 600;
    }
    cloudGeometry.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3));
    const cloud = new THREE.Points(cloudGeometry, cloudMaterial);
    scene.add(cloud);

    const nebulaClusterGeometry = new THREE.BufferGeometry();
    const nebulaClusterPositions = new Float32Array(300 * 3);
    const nebulaClusterColors = new Float32Array(300 * 3);

    for (let i = 0; i < 300; i++) {
      const c = new THREE.Color();
      c.setHSL(0.5 + Math.random() * 0.2, 0.5, 0.4);
      nebulaClusterPositions[i * 3] = (Math.random() - 0.5) * 60;
      nebulaClusterPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      nebulaClusterPositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      nebulaClusterColors[i * 3] = c.r;
      nebulaClusterColors[i * 3 + 1] = c.g;
      nebulaClusterColors[i * 3 + 2] = c.b;
    }
    nebulaClusterGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaClusterPositions, 3));
    nebulaClusterGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaClusterColors, 3));
    const nebulaClusterMaterial = new THREE.PointsMaterial({ size: 0.5, vertexColors: true, transparent: true, opacity: 0.1, depthWrite: false, blending: THREE.AdditiveBlending });
    const nebulaCluster = new THREE.Points(nebulaClusterGeometry, nebulaClusterMaterial);
    scene.add(nebulaCluster);

    const ambientLight = new THREE.AmbientLight(0x667788, 1.0);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x88ccff, 1.5, 300);
    pointLight.position.set(0, 0, 50);
    scene.add(pointLight);

    // --- Shooting Stars (multiple active) ---
    const activeShootingStars = [];

    const spawnShootingStar = () => {
      const shootingStar = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 8, 8),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.5 + Math.random() * 0.3, 0.8, 0.9),
          transparent: true,
          opacity: 1.0,
        })
      );
      shootingStar.position.set((Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, -40);
      shootingStar.userData = { lifetime: 1.5, speed: new THREE.Vector2(0.8, -0.5) };
      scene.add(shootingStar);
      activeShootingStars.push(shootingStar);
    };

    setInterval(() => {
      if (activeShootingStars.length < 5) spawnShootingStar();
    }, 1500);

    const mouse = new THREE.Vector2(0, 0);
    const targetRotation = new THREE.Vector2(0, 0);
    const scrollEffect = { y: 0 };

    document.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const clock = new THREE.Clock();
    let timeElapsed = 0;

    let scrollY = 0;

    const onScroll = () => {
      scrollY = window.scrollY;
    }

    window.addEventListener('scroll', onScroll);

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      timeElapsed += delta;

      targetRotation.x += (mouse.y * 0.6 - targetRotation.x) * 0.02;
      targetRotation.y += (mouse.x * 0.6 - targetRotation.y) * 0.02;

      camera.rotation.x = targetRotation.x * 0.08;
      camera.rotation.y = targetRotation.y * 0.08;
      scene.position.x = targetRotation.y * 2;
      scene.position.y = targetRotation.x * 2;

      stars.forEach(star => {
        star.rotation.x += 0.00012 * delta * 60;
        star.rotation.y += 0.00015 * delta * 60;
        star.material.emissiveIntensity = 1.4 + Math.sin(timeElapsed * star.userData.twinkleSpeed) * 0.3;
        star.position.add(star.userData.driftOffset);
      });

      distantStars.forEach(distantStar => {
        distantStar.rotation.x += 0.00005 * delta * 60;
        distantStar.rotation.y += 0.00006 * delta * 60;
      });

      cloud.rotation.y += 0.00002 * delta * 60;
      cloud.rotation.x += 0.00001 * delta * 60;

      nebulaCluster.rotation.y += 0.00002 * delta * 60;
      nebulaCluster.rotation.x += 0.00001 * delta * 60;

      activeShootingStars.forEach((shootingStar, index) => {
        shootingStar.position.x += shootingStar.userData.speed.x;
        shootingStar.position.y += shootingStar.userData.speed.y;
        shootingStar.userData.lifetime -= delta;

        if (shootingStar.userData.lifetime <= 0) {
          scene.remove(shootingStar);
          activeShootingStars.splice(index, 1);
        }
      });

      const slowBreath = Math.sin(timeElapsed * 0.25) * 1.0;
      const subtleVariation = Math.sin(timeElapsed * 0.73) * 0.4;
      camera.position.z = 30 + slowBreath + subtleVariation + scrollY * 0.01;

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
      window.removeEventListener('scroll', onScroll);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'fixed', width: '100%', height: '100%', zIndex: '-1', top: 0, left: 0, background: 'repeating-radial-gradient(circle at center, #000000 0%, #010107 20%, #000007 40%, #01010b 60%, #000000 100%)' }} />
  );
};

export default BackgroundCanvas;
