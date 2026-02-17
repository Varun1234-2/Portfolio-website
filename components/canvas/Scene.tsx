"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // This hook runs 60 times per second
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Subtle rotation
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Scene;