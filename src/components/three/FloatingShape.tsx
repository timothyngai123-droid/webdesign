'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import type { Mesh } from 'three';

export default function FloatingShape() {
  const meshRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);
  const { pointer } = useThree();

  useFrame((_state, delta) => {
    if (!meshRef.current) return;

    // Slow continuous rotation
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.25;

    // Subtle parallax following mouse
    const targetX = pointer.x * 0.3;
    const targetY = pointer.y * 0.3;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;

    // Sync glow sphere
    if (glowRef.current) {
      glowRef.current.rotation.copy(meshRef.current.rotation);
      glowRef.current.position.copy(meshRef.current.position);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#7C3AED" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#7C3AED" />
      <pointLight position={[0, 5, 0]} intensity={0.2} color="#ffffff" />

      {/* Main wireframe icosahedron */}
      <Icosahedron ref={meshRef} args={[2, 1]}>
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#7C3AED"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </Icosahedron>

      {/* Outer glow wireframe */}
      <Icosahedron ref={glowRef} args={[2.6, 1]}>
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.04} wireframe />
      </Icosahedron>
    </>
  );
}
