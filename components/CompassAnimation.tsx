"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CompassAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(5, 8, 5);
    scene.add(directionalLight);

    const orangeLight = new THREE.PointLight(0xf4842d, 3.5, 20);
    orangeLight.position.set(2, 2, 3);
    scene.add(orangeLight);

    const skyLight = new THREE.PointLight(0x1e8fe0, 3.0, 20);
    skyLight.position.set(-2, -2, 3);
    scene.add(skyLight);

    const compassGroup = new THREE.Group();
    scene.add(compassGroup);

    const skyBlueMat = new THREE.MeshPhongMaterial({
      color: 0x1e8fe0,
      specular: 0x90caf9,
      shininess: 90,
      flatShading: true,
    });

    const solarOrangeMat = new THREE.MeshPhongMaterial({
      color: 0xf4842d,
      specular: 0xffedd5,
      shininess: 100,
      flatShading: true,
      emissive: 0xd96814,
      emissiveIntensity: 0.25,
    });

    const brassGoldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.3,
      roughness: 0.2,
    });

    const glowingCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    const needleGroup = new THREE.Group();

    const northGeo = new THREE.ConeGeometry(0.7, 2.4, 4);
    northGeo.rotateY(Math.PI / 4);
    const northNeedleEast = new THREE.Mesh(northGeo, solarOrangeMat);
    northNeedleEast.position.y = 1.2;
    needleGroup.add(northNeedleEast);

    const southGeo = new THREE.ConeGeometry(0.7, 2.4, 4);
    southGeo.rotateY(Math.PI / 4);
    southGeo.rotateZ(Math.PI);
    const southNeedleWest = new THREE.Mesh(southGeo, skyBlueMat);
    southNeedleWest.position.y = -1.2;
    needleGroup.add(southNeedleWest);

    const pivotGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.3, 32);
    const pivotMesh = new THREE.Mesh(pivotGeo, brassGoldMat);
    pivotMesh.rotation.x = Math.PI / 2;
    needleGroup.add(pivotMesh);

    const coreLedGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const coreLed = new THREE.Mesh(coreLedGeo, glowingCoreMat);
    coreLed.position.z = 0.16;
    needleGroup.add(coreLed);

    needleGroup.rotation.z = -Math.PI / 4.2;
    compassGroup.add(needleGroup);

    const outerRingGeo = new THREE.TorusGeometry(2.3, 0.035, 16, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x1e8fe0,
      transparent: true,
      opacity: 0.7,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, ringMat1);
    compassGroup.add(outerRing);

    const midRingGeo = new THREE.TorusGeometry(1.8, 0.025, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
    });
    const midRing = new THREE.Mesh(midRingGeo, ringMat2);
    midRing.rotation.x = Math.PI / 6;
    compassGroup.add(midRing);

    const cardinalGroup = new THREE.Group();
    const orbGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const northMarker = new THREE.Mesh(
      orbGeo,
      new THREE.MeshBasicMaterial({ color: 0xf4842d }),
    );
    northMarker.position.set(0, 2.3, 0);
    cardinalGroup.add(northMarker);

    const eastMarker = new THREE.Mesh(
      orbGeo,
      new THREE.MeshBasicMaterial({ color: 0x1e8fe0 }),
    );
    eastMarker.position.set(2.3, 0, 0);
    cardinalGroup.add(eastMarker);

    const southMarker = new THREE.Mesh(
      orbGeo,
      new THREE.MeshBasicMaterial({ color: 0x0b4b7a }),
    );
    southMarker.position.set(0, -2.3, 0);
    cardinalGroup.add(southMarker);

    const westMarker = new THREE.Mesh(
      orbGeo,
      new THREE.MeshBasicMaterial({ color: 0x1e8fe0 }),
    );
    westMarker.position.set(-2.3, 0, 0);
    cardinalGroup.add(westMarker);

    compassGroup.add(cardinalGroup);

    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    compassGroup.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0.2;
    let targetRotY = -0.3;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.5;
      mouseY = y * 1.5;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (prefersReduced) {
        renderer.render(scene, camera);
        return;
      }
      const elapsedTime = clock.getElapsedTime();

      targetRotY = mouseX * 0.9 + Math.sin(elapsedTime * 0.6) * 0.18;
      targetRotX = -mouseY * 0.9 + Math.cos(elapsedTime * 0.8) * 0.12;

      compassGroup.rotation.y += (targetRotY - compassGroup.rotation.y) * 0.05;
      compassGroup.rotation.x += (targetRotX - compassGroup.rotation.x) * 0.05;

      outerRing.rotation.z = elapsedTime * 0.15;
      midRing.rotation.y = -elapsedTime * 0.2;
      midRing.rotation.x = Math.PI / 6 + Math.sin(elapsedTime * 0.5) * 0.1;

      needleGroup.rotation.z =
        -Math.PI / 4.2 + Math.sin(elapsedTime * 2.5) * 0.04 + mouseX * 0.2;

      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      particleGeo.dispose();
      particleMat.dispose();
      northGeo.dispose();
      southGeo.dispose();
      pivotGeo.dispose();
      coreLedGeo.dispose();
      outerRingGeo.dispose();
      midRingGeo.dispose();
      orbGeo.dispose();
      skyBlueMat.dispose();
      solarOrangeMat.dispose();
      brassGoldMat.dispose();
      glowingCoreMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full bg-transparent" />
  );
}
