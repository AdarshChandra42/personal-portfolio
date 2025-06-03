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
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: 2.5rem 2rem;
  background: rgba(30, 30, 50, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3.5rem, 4.5vw, 6.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 0.9;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.25rem, 2vw, 2.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.95);
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  letter-spacing: 0.01em;
  line-height: 1.3;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.005em;
  font-weight: 300;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.75rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  
  &.primary {
    background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
    color: white;
    border: 2px solid transparent;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
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
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: 'Geist Mono', 'Geist', monospace;
  z-index: 3;
`;

const ScrollArrow = styled(motion.div)`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.4);
  margin-top: 0.75rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: -3px;
    width: 7px;
    height: 7px;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    transform: rotate(45deg);
  }
`;

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="hero">
      <ThreeJSBackground>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Stars radius={300} depth={60} count={15000} factor={6} saturation={0} fade={true} />
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
          Adarsh Chandra
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Backend focused Full-Stack Developer
        </HeroSubtitle>

        <HeroDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building scalable digital architectures with modern web 
          technologies and a passion for clean, efficient code.
        </HeroDescription>

        <CTAContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CTAButton
            onClick={() => scrollToSection('projects')}
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </CTAButton>
          <CTAButton
            onClick={() => scrollToSection('contact')}
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero; 