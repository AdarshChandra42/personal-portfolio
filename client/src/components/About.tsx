import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { User, Code, Brain } from 'lucide-react';
import TeenageCharacter from './TeenageCharacter';
import TeenageCharacterFallback from './TeenageCharacterFallback';
import ErrorBoundary from './ErrorBoundary';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  z-index: 2;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  font-family: 'Geist', sans-serif;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-family: 'Geist', sans-serif;
`;

const CharacteristicsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const CharacteristicCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 70, 229, 0.2);
    border-color: rgba(79, 70, 229, 0.5);
    transform: translateY(-2px);
  }
`;

const CharacteristicIcon = styled.div`
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4f46e5;
  font-size: 1.5rem;
`;

const CharacteristicContent = styled.div`
  flex: 1;
`;

const CharacteristicTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.15rem;
  font-family: 'Geist', sans-serif;
`;

const CharacteristicDescription = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Geist', sans-serif;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillTag = styled(motion.span)`
  background: rgba(79, 70, 229, 0.2);
  border: 1px solid rgba(79, 70, 229, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  color: #4f46e5;
  font-weight: 500;
  backdrop-filter: blur(10px);
  font-family: 'Geist Mono', monospace;
`;

const ThreeJSSection = styled.div`
  height: 700px;
  position: relative;
`;

// Three.js compatible loading component
const ThreeLoadingText: React.FC = () => {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={0.5}
      color="rgba(255, 255, 255, 0.7)"
      anchorX="center"
      anchorY="middle"
    >
      Loading...
    </Text>
  );
};

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js',
    'Three.js', 'Python', 'MongoDB', 'PostgreSQL',
    'Docker', 'Git','GraphQL', 'REST APIs'
  ];

  const characteristics = [
    {
      icon: User,
      title: 'Detail-Oriented',
      description: 'Focus on precision and quality.'
    },
    {
      icon: Code, 
      title: 'Problem Solver',
      description: 'Creative solutions to challenges.'
    },
    {
      icon: Brain,
      title: 'Continuous Learner',
      description: 'Always exploring new tech.'
    }
  ];

  return (
    <AboutContainer id="about">
      <AboutContent>
        <TextContent>
          <SectionTitle
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </SectionTitle>
          
          <Description
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hello! I'm a passionate developer and lifelong learner, 
            dedicated to crafting beautiful and functional digital 
            experiences. My journey in tech has been driven by 
            curiosity and a desire to solve real-world problems with 
            code.
          </Description>
          
          <Description
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I thrive in collaborative environments and enjoy tackling 
            complex challenges. When I'm not coding, you can find me 
            exploring new technologies, contributing to open-source 
            projects, or working on my own projects.
          </Description>

          <CharacteristicsGrid
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {characteristics.map((char, index) => {
              const IconComponent = char.icon;
              return (
                <CharacteristicCard
                  key={char.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CharacteristicIcon>
                    <IconComponent size={24} />
                  </CharacteristicIcon>
                  <CharacteristicContent>
                    <CharacteristicTitle>{char.title}</CharacteristicTitle>
                    <CharacteristicDescription>{char.description}</CharacteristicDescription>
                  </CharacteristicContent>
                </CharacteristicCard>
              );
            })}
          </CharacteristicsGrid>

          <SkillsContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <SkillTag
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsContainer>
        </TextContent>

        <ThreeJSSection>
          <ErrorBoundary fallback={<TeenageCharacterFallback />}>
            <Canvas 
              camera={{ 
                position: [0, 0, 40], 
                fov: 75,
                near: 0.1,
                far: 1000
              }}
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.3} />
              <Suspense fallback={<ThreeLoadingText />}>
                <TeenageCharacter position={[0, -25, 4]} scale={4.8} />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
        </ThreeJSSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 