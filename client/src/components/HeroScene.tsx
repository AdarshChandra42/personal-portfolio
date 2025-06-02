import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const HeroScene: React.FC = () => {
  const ref = useRef<THREE.Points>(null);

  // Generate random points for particle system
  const positions = useMemo(() => {
    const positions = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  // Animate the particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light */}
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      
      {/* Point light */}
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
      
      {/* Animated particles */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Floating geometric shapes */}
      <FloatingShapes />
    </>
  );
};

const FloatingShapes: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Large central torus */}
      <mesh position={[0, 0, -5]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[3, 0.3, 16, 100]} />
        <meshStandardMaterial color="#4f46e5" wireframe />
      </mesh>

      {/* Smaller orbiting shapes */}
      <mesh position={[4, 2, -3]} rotation={[0, 0, 0.5]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#06b6d4" />
      </mesh>

      <mesh position={[-4, -2, -4]} rotation={[0.3, 0.8, 0]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#f093fb" wireframe />
      </mesh>

      <mesh position={[0, 3, -2]} rotation={[0, 0.5, 0.3]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#f5576c" />
      </mesh>

      <mesh position={[-3, 1, -6]} rotation={[0.2, 0, 0.7]}>
        <tetrahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#4facfe" wireframe />
      </mesh>
    </group>
  );
};

export default HeroScene; 