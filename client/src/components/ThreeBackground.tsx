import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const LoadingFallback: React.FC = () => (
  <div style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100vw', 
    height: '100vh',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)',
    zIndex: -1 
  }} />
);

const Particles: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();
  
  const particleCount = 1000;
  
  const { originalPositions, currentPositions } = useMemo(() => {
    const originalPositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
      
      currentPositions[i * 3] = x;
      currentPositions[i * 3 + 1] = y;
      currentPositions[i * 3 + 2] = z;
    }
    
    return { originalPositions, currentPositions };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Base rotation
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;

      // Mouse interaction - make particles move away from cursor
      const mouseX = mouse.x * viewport.width / 2;
      const mouseY = mouse.y * viewport.height / 2;
      
      for (let i = 0; i < currentPositions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];
        
        // Calculate distance from mouse to particle
        const dx = x - mouseX;
        const dy = y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If particle is close to mouse, push it away
        const repelDistance = 15; // Distance at which particles start to move away
        const repelStrength = 3; // How strongly particles are pushed away
        
        if (distance < repelDistance && distance > 0) {
          const force = (repelDistance - distance) / repelDistance;
          const pushX = (dx / distance) * force * repelStrength;
          const pushY = (dy / distance) * force * repelStrength;
          
          currentPositions[i] = x + pushX;
          currentPositions[i + 1] = y + pushY;
          currentPositions[i + 2] = z;
        } else {
          // Smoothly return to original position when mouse moves away
          currentPositions[i] = THREE.MathUtils.lerp(currentPositions[i], x, 0.02);
          currentPositions[i + 1] = THREE.MathUtils.lerp(currentPositions[i + 1], y, 0.02);
          currentPositions[i + 2] = z;
        }
      }
      
      // Update the geometry with new positions
      if (ref.current.geometry.attributes.position) {
        const positionAttribute = ref.current.geometry.attributes.position as THREE.BufferAttribute;
        positionAttribute.set(currentPositions);
        positionAttribute.needsUpdate = true;
      }
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={currentPositions}
          itemSize={3}
          args={[currentPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        color="#4f46e5"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[10, 0, -10]}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
};

const ThreeBackground: React.FC = () => {
  try {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh',
        zIndex: -1 
      }}>
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)' }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            onCreated={(state) => {
              state.gl.setClearColor('#0f0f23');
            }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Particles />
            <FloatingGeometry />
          </Canvas>
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error('ThreeBackground error:', error);
    return <LoadingFallback />;
  }
};

export default ThreeBackground; 