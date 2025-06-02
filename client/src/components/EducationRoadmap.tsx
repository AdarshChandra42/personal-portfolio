import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RoadmapContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
`;

const RoadmapContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  font-family: 'Geist', sans-serif;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Geist', sans-serif;
`;

const TimelineContainer = styled.div`
  position: relative;
  
  /* Vertical line */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #4f46e5, #06b6d4);
    transform: translateX(-50%);
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isEven: boolean }>`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  ${props => props.isEven ? `
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  ` : ''}
  
  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 60px;
  }
`;

const TimelineContent = styled.div<{ isEven: boolean }>`
  width: calc(50% - 40px);
  ${props => props.isEven ? 'margin-left: 80px;' : 'margin-right: 80px;'}
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-left: 20px;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4f46e5, #06b6d4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(79, 70, 229, 0.2);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.2); opacity: 0; }
  }
  
  @media (max-width: 768px) {
    left: 30px;
    width: 40px;
    height: 40px;
    
    &::before {
      width: 60px;
      height: 60px;
    }
  }
`;

const JourneyCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(79, 70, 229, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const DateBadge = styled.span`
  color: #06b6d4;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: 'Geist Mono', monospace;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-family: 'Geist', sans-serif;
`;

const Institution = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.75rem;
  font-family: 'Geist', sans-serif;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-family: 'Geist', sans-serif;
`;

const EducationRoadmap: React.FC = () => {
  const journeyData = [
    {
      icon: "🎓",
      date: "2020 - 2025",
      title: "MSc Physics + BE Manufacturing",
      institution: "Birla Institute of Technology and Science, Pilani",
      description: "Some relevant courses I have completed: computer programming, pattern recognition, optimization, and computational physics.",
    },
    {
      icon: "💼",
      date: "Summer 2024",
      title: "Python Development Intern",
      institution: "Anitum Technologies Pvt. Ltd.",
      description: "Built a full-scale ERP system for a client during my time working for this early stage startup. Tech used: Flask, PostgreSQL, and React.",
    },
    {
      icon: "⚡",
      date: "2024 - Present",
      title: "Exploring production architectures of backend systems & Three.js",
      institution: "Self-Study & Projects",
      description: "Deepening expertise in 3D web graphics and scalable backend systems.",
    },
    {
      icon: "🎓",
      date: "Ongoing",
      title: "Online Courses & Certifications",
      institution: "Various Platforms",
      description: "Continuously learning new technologies like React, TypeScript, and modern web frameworks.",
    },
  ];

  return (
    <RoadmapContainer id="roadmap">
      <RoadmapContent>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Journey
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Educational milestones and professional growth.
          </SectionSubtitle>
        </SectionHeader>

        <TimelineContainer>
          {journeyData.map((item, index) => (
            <TimelineItem
              key={index}
              isEven={index % 2 === 0}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineContent isEven={index % 2 === 0}>
                <JourneyCard>
                  <CardHeader>
                    <IconWrapper>{item.icon}</IconWrapper>
                    <DateBadge>{item.date}</DateBadge>
                  </CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <Institution>{item.institution}</Institution>
                  <Description>{item.description}</Description>
                </JourneyCard>
              </TimelineContent>
              
              <TimelineNode>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  •
                </motion.div>
              </TimelineNode>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </RoadmapContent>
    </RoadmapContainer>
  );
};

export default EducationRoadmap; 