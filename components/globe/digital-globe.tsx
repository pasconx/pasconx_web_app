"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../theme/theme-provider";

export function DigitalGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color definitions based on theme
    const isDark = theme === "dark";
    const primaryColor = new THREE.Color(isDark ? 0x1677ff : 0x1268e8);
    const secondaryColor = new THREE.Color(isDark ? 0x7eafff : 0x5d8fe8);
    const gridColor = new THREE.Color(isDark ? 0x1a2b4c : 0xc0d5fa);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Particle Sphere Globe
    const particleCount = 1200;
    const radius = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Golden Ratio distribution for uniform sphere points
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation
      const mixedColor = Math.random() > 0.4 ? primaryColor : secondaryColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.85 : 0.65,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const pointCloud = new THREE.Points(geometry, particleMaterial);
    globeGroup.add(pointCloud);

    // 2. Latitude / Longitude Wireframe Rings
    const ringGeo = new THREE.TorusGeometry(radius, 0.4, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: isDark ? 0.25 : 0.2,
      wireframe: true,
    });

    const ringEquator = new THREE.Mesh(ringGeo, ringMat);
    ringEquator.rotation.x = Math.PI / 2;
    globeGroup.add(ringEquator);

    const ringTilted = new THREE.Mesh(ringGeo, ringMat);
    ringTilted.rotation.x = Math.PI / 3;
    ringTilted.rotation.y = Math.PI / 6;
    globeGroup.add(ringTilted);

    // 3. Glowing Core Atmosphere
    const coreGeo = new THREE.SphereGeometry(radius * 0.98, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: gridColor,
      transparent: true,
      opacity: isDark ? 0.08 : 0.04,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 4. Data Arc Pulse Lines
    const curvePoints: THREE.Vector3[] = [];
    const arcCount = 4;
    for (let a = 0; a < arcCount; a++) {
      const p1 = new THREE.Vector3(
        (Math.random() - 0.5) * radius * 1.8,
        (Math.random() - 0.5) * radius * 1.8,
        (Math.random() - 0.5) * radius * 1.8
      ).normalize().multiplyScalar(radius);

      const p2 = new THREE.Vector3(
        (Math.random() - 0.5) * radius * 1.8,
        (Math.random() - 0.5) * radius * 1.8,
        (Math.random() - 0.5) * radius * 1.8
      ).normalize().multiplyScalar(radius);

      const mid = p1.clone().add(p2).multiplyScalar(0.7).normalize().multiplyScalar(radius * 1.3);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(30);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);

      const arcMat = new THREE.LineBasicMaterial({
        color: secondaryColor,
        transparent: true,
        opacity: isDark ? 0.6 : 0.4,
      });

      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);
    }

    // Animation Loop
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotation
      globeGroup.rotation.y += 0.0025;
      globeGroup.rotation.x += 0.0008;

      // Parallax mouse inertia
      globeGroup.rotation.y += (mouseX - globeGroup.rotation.y * 0.1) * 0.02;
      globeGroup.rotation.x += (mouseY - globeGroup.rotation.x * 0.1) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="w-full h-full max-w-[700px] max-h-[700px]" />
      
      {/* Fallback ambient grid overlay */}
      <div className="absolute inset-0 pointer-events-none radial-gradient-glow" />
    </div>
  );
}
