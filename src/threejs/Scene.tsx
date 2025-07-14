"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.25;
      meshRef.current.position.y = Math.sin(t) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshStandardMaterial
        color="#00f5d4"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={["#0b0f19"]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1.5} />
      <Stars radius={100} depth={50} count={6000} factor={4} fade />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.75} />
      <FloatingSphere />
    </Canvas>
  );
}
