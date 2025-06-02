import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
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

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Geist', sans-serif;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    opacity: 0.6;
  }
  
  &::after {
    content: '📸';
    position: relative;
    z-index: 1;
    font-size: 3rem;
    opacity: 0.7;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
  font-family: 'Geist', sans-serif;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
  font-size: 0.875rem;
  font-family: 'Geist', sans-serif;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(79, 70, 229, 0.2);
  border: 1px solid rgba(79, 70, 229, 0.4);
  color: #4f46e5;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Geist Mono', monospace;
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`;

const ProjectButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  font-family: 'Geist', sans-serif;
  
  &.primary {
    background: linear-gradient(45deg, #4f46e5, #06b6d4);
    color: white;
    border: 1px solid transparent;
    
    &:hover {
      background: linear-gradient(45deg, #3730a3, #0891b2);
      transform: translateY(-1px);
      box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      color: white;
      border-color: rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.1);
    }
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project Alpha",
      description:
        "A cutting-edge web application revolutionizing [domain]. Built with React, Node.js, and Three.js for immersive visualizations.",
      tech: ["React", "Node.js", "Three.js", "AI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "EcoTracker",
      description:
        "Mobile app for tracking carbon footprint and promoting sustainable habits. Features real-time data analysis and gamification.",
      tech: ["Mobile", "Sustainability", "Data"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio v2",
      description:
        "This very portfolio site, showcasing skills in Next.js, Tailwind CSS, and interactive design with Three.js.",
      tech: ["Next.js", "Tailwind", "Three.js"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <Header>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Projects
          </SectionTitle>
          <SectionSubtitle>A selection of my recent work.</SectionSubtitle>
        </Header>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage />
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>

                <ProjectFooter>
                  <ProjectButton
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLinkIcon /> Live Demo
                  </ProjectButton>
                  <ProjectButton
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GithubIcon /> Source
                  </ProjectButton>
                </ProjectFooter>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects; 