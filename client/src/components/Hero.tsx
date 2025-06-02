import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import HeroScene from './HeroScene';

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Geist', sans-serif;
  line-height: 1.1;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-family: 'Geist', sans-serif;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Geist', sans-serif;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  font-family: 'Geist', sans-serif;
  
  &.primary {
    background: linear-gradient(45deg, #4f46e5, #06b6d4);
    color: white;
    border: 2px solid transparent;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const ThreeJSBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-family: 'Geist', sans-serif;
`;

const ScrollArrow = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-right: 2px solid rgba(255, 255, 255, 0.6);
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  transform: rotate(45deg);
  margin-top: 0.5rem;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer id="hero">
      <ThreeJSBackground>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true }}
        >
          <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <HeroScene />
        </Canvas>
      </ThreeJSBackground>

      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Adarsh Kumar
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full-Stack Developer & 3D Enthusiast
        </HeroSubtitle>

        <HeroDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting immersive digital experiences with modern web technologies, 
          Three.js, and a passion for clean, efficient code.
        </HeroDescription>

        <CTAContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CTAButton
            href="#projects"
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </CTAButton>
          <CTAButton
            href="#contact"
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </CTAButton>
        </CTAContainer>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span>Scroll to explore</span>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero; 