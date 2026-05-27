"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimeCanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isSmallScreen = window.innerWidth < 768;
    const particleCount = isSmallScreen ? 180 : 380;
    const meshCount = isSmallScreen ? 3 : 5;
    const targetFps = isSmallScreen ? 24 : 36;
    const frameInterval = 1000 / targetFps;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.15));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.position.z = 7;

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(1.1, 0);
    const baseMaterial = new THREE.MeshBasicMaterial({
      color: 0x66e7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.78,
    });

    const meshes: THREE.Mesh[] = [];

    for (let i = 0; i < meshCount; i += 1) {
      const mesh = new THREE.Mesh(geometry, baseMaterial.clone());
      mesh.position.set(
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 4
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const scale = Math.random() * 0.62 + 0.28;
      mesh.scale.setScalar(scale);
      (mesh.material as THREE.MeshBasicMaterial).color.set(
        i % 2 ? 0xff6fcf : 0x66e7ff
      );
      group.add(mesh);
      meshes.push(mesh);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 18;
      positions[i + 1] = (Math.random() - 0.5) * 11;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: isSmallScreen ? 0.015 : 0.017,
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let animationFrame = 0;
    let lastFrameTime = 0;
    let isPageVisible = !document.hidden;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.15));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
    };

    const animate = (time: number) => {
      animationFrame = requestAnimationFrame(animate);
      if (!isPageVisible) return;
      if (time - lastFrameTime < frameInterval) return;
      lastFrameTime = time;

      const speed = prefersReducedMotion ? 0.25 : 1;
      group.rotation.y += 0.002 * speed;
      group.rotation.x += 0.0009 * speed;
      particles.rotation.y -= 0.00045 * speed;
      camera.position.x += (mouseX * 0.28 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    animate(0);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      meshes.forEach((mesh) => {
        (mesh.material as THREE.Material).dispose();
      });
      baseMaterial.dispose();
      geometry.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="anime-canvas"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-70"
    />
  );
};

export default AnimeCanvasBackground;
