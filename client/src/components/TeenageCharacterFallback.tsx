import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FallbackContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 2rem;
`;

const FallbackAvatar = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
`;

const FallbackText = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Geist', sans-serif;
  margin-bottom: 0.5rem;
`;

const FallbackSubtext = styled(motion.p)`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Geist', sans-serif;
`;

const TeenageCharacterFallback: React.FC = () => {
  return (
    <FallbackContainer>
      <FallbackAvatar
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        👨‍💻
      </FallbackAvatar>
      
      <FallbackText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hello there!
      </FallbackText>
      
      <FallbackSubtext
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        3D model is taking a coffee break ☕
      </FallbackSubtext>
    </FallbackContainer>
  );
};

export default TeenageCharacterFallback; 