import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface AstronautModelProps {
  position?: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
}

const AstronautModel: React.FC<AstronautModelProps> = ({ 
  position = [0, 0, 0], 
  scale = 1,
  rotationSpeed = 0.01 
}) => {
  const group = useRef<THREE.Group>(null);
  
  try {
    // Try to load the GLB model
    const gltf = useLoader(GLTFLoader, '/models/astronaut/astronaut.gltf');
    const { actions } = useAnimations(gltf.animations, group);

    // Play idle animation if available
    React.useEffect(() => {
      if (actions && Object.keys(actions).length > 0) {
        const firstAction = Object.values(actions)[0];
        firstAction?.play();
      }
    }, [actions]);

    // Rotate the astronaut slowly
    useFrame((state) => {
      if (group.current) {
        group.current.rotation.y += rotationSpeed;
        group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      }
    });

    return (
      <group ref={group} position={position} scale={scale}>
        <primitive object={gltf.scene} />
      </group>
    );
  } catch (error) {
    // Fallback to a simple geometric astronaut
    return (
      <AstronautModelFallback position={position} scale={scale} rotationSpeed={rotationSpeed} />
    );
  }
};

// Fallback geometric astronaut
const AstronautModelFallback: React.FC<AstronautModelProps> = ({ 
  position = [0, 0, 0], 
  scale = 1,
  rotationSpeed = 0.01 
}) => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += rotationSpeed;
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Helmet */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1, 2, 32]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-1.3, 0.5, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.3, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      <mesh position={[1.3, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.3, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.4, -1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      <mesh position={[0.4, -1.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1.5, 16]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Helmet visor */}
      <mesh position={[0, 1.5, 0.8]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#001a33" transparent opacity={0.7} />
      </mesh>
      
      {/* Chest control panel */}
      <mesh position={[0, 0.5, 0.9]}>
        <boxGeometry args={[0.6, 0.4, 0.1]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      
      {/* Backpack */}
      <mesh position={[0, 0.5, -0.8]}>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  );
};

export default AstronautModel; 