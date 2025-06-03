import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: rgba(12, 12, 12, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  font-family: 'Geist', sans-serif;
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-family: 'Geist', sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 70, 229, 0.2);
    color: #4f46e5;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuickLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-family: 'Geist', sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: #4facfe;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-family: 'Geist', sans-serif;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AdarshChandra42',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adarsh-chandra-gundu-b49b96200/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:adarshchandra.g@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/adarsh_tech_',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Adarsh Chandra</FooterTitle>
          <FooterText>
            Full-Stack Developer passionate about creating immersive digital experiences 
            with modern web technologies and 3D graphics.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <QuickLinks>
            {quickLinks.map((link) => (
              <QuickLink
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                whileHover={{ x: 5 }}
              >
                {link.name}
              </QuickLink>
            ))}
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <SocialLinks>
            {socialLinks.map((social) => (
              <SocialLink
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} <GradientText>Adarsh Chandra</GradientText>. 
          Deployed on AWS. Built with React, Three.js, and lots of ☕
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 