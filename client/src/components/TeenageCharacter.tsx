import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

// Define the paths to your GLB models
const modelPaths = [
  '/models/teenModel/model1.glb',
];

interface TeenageCharacterProps {
  position?: [number, number, number];
  scale?: number;
}

const TeenageCharacter: React.FC<TeenageCharacterProps> = ({ 
  position = [0, 0, 0], 
  scale = 50
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  
  // Bone references for simple left arm animation
  const bonesRef = useRef<{ [key: string]: THREE.Bone }>({});
  
  // Clear cache and reload
  useEffect(() => {
    useGLTF.clear(modelPaths[currentModelIndex]);
  }, [scale, currentModelIndex]);
  
  // Load the current model
  const { scene, animations } = useGLTF(modelPaths[currentModelIndex]);
  const { actions, mixer } = useAnimations(animations || [], groupRef);
  
  // Find and store bone references
  useEffect(() => {
    if (scene) {
      const bones: { [key: string]: THREE.Bone } = {};
      const meshes: { [key: string]: THREE.SkinnedMesh } = {};
      
      scene.traverse((child) => {
        if (child instanceof THREE.Bone) {
          bones[child.name] = child;
        }
        if (child instanceof THREE.SkinnedMesh) {
          meshes[child.name] = child;
        }
      });
      
      bonesRef.current = bones;
      // Store meshes in a separate ref for morph targets
      (bonesRef.current as any).meshes = meshes;
      console.log('🦴 Found bones for left arm animation');
      console.log('🎭 Found meshes for facial expressions:', Object.keys(meshes));
    }
  }, [scene, currentModelIndex]);
  
  // Simple left arm "hi" animation
  const animateHi = (clock: THREE.Clock) => {
    const { LeftArm, LeftForeArm, LeftHand, RightArm } = bonesRef.current;
    const meshes = (bonesRef.current as any).meshes || {};
    const wolf3DHead = meshes['Wolf3D_Head'] as THREE.SkinnedMesh;
    
    const time = clock.getElapsedTime() * 2; // Animation speed
    
    // Left arm movement for "hi" - continuous waving
    if (LeftArm) {
      // Raise arm and move side to side
      LeftArm.rotation.z = Math.sin(time) * 0.3 + 0.6; // Side motion with raised position
      LeftArm.rotation.x = 0.3; // Keep arm slightly forward
    }
    
    if (LeftForeArm) {
      // Bend forearm naturally
      LeftForeArm.rotation.x = 0.2;
    }
    
    if (LeftHand) {
      // Hand waving motion
      LeftHand.rotation.y = Math.sin(time * 3) * 0.4; // Quick hand wave
    }
    
    // Control facial expressions via morph targets
    if (wolf3DHead && wolf3DHead.morphTargetInfluences && wolf3DHead.morphTargetDictionary) {
      // Find morph target indices
      const mouthOpenIndex = wolf3DHead.morphTargetDictionary['mouthOpen'];
      const mouthSmileIndex = wolf3DHead.morphTargetDictionary['mouthSmile'];
      
      // Set morph target values if they exist
      if (mouthOpenIndex !== undefined) {
        wolf3DHead.morphTargetInfluences[mouthOpenIndex] = 0.73;
      }
      if (mouthSmileIndex !== undefined) {
        wolf3DHead.morphTargetInfluences[mouthSmileIndex] = 0.99;
      }
    }
    
    // Keep right arm in static position
    if (RightArm) {
      RightArm.rotation.x = 1.29;
      RightArm.rotation.y = -0.2;
      RightArm.rotation.z = 0.14;
    }
  };
  
  // Animation and model switching
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Apply scale directly to the group
      groupRef.current.scale.setScalar(scale);
      
      // Gentle floating motion
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      
      // Continuous rotation around Y-axis (revolving around itself)
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
    
    // Animate the left arm saying "hi"
    animateHi(clock);
    
    // Switch models every 15 seconds
    const modelSwitchTime = Math.floor(clock.getElapsedTime() / 15) % modelPaths.length;
    if (modelSwitchTime !== currentModelIndex) {
      setCurrentModelIndex(modelSwitchTime);
    }
  });
  
  // Play animations if available
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Play the first available animation (usually idle)
      const firstAnimation = Object.keys(actions)[0];
      actions[firstAnimation]?.play();
    }
    
    return () => {
      // Cleanup animations
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, [actions, mixer, currentModelIndex]);

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} rotation={[0.2, 0, 0]}>
        {/* 3D Model */}
        <primitive 
          object={scene}
          scale={[scale, scale, scale]}
        />
        
        {/* Simple "Hi!" Text */}
        <Text
          position={[1.5, 9, 0]}
          rotation={[0, -0.3, 0]}
          fontSize={0.4}
          color="#ff6b6b"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        >
          Hi! 👋
        </Text>
      </group>
    </Float>
  );
};

// Preload all models for better performance
modelPaths.forEach((path: string) => {
  useGLTF.preload(path);
});

export default TeenageCharacter; 