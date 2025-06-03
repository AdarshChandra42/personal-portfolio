import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import { MeshWobbleMaterial } from '@react-three/drei';

const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  position: relative;
`;

const ContactHeader = styled.div`
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
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Geist', sans-serif;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfoSection = styled.div`
  z-index: 2;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  font-family: 'Geist', sans-serif;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-family: 'Geist', sans-serif;
`;

const ContactIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  color: #4f46e5;
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Geist', sans-serif;

  &:hover {
    color: #06b6d4;
  }
`;

const ContactDescription = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2rem;
  font-family: 'Geist', sans-serif;
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-family: 'Geist', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  font-family: 'Geist', sans-serif;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;
  font-family: 'Geist', sans-serif;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #4f46e5, #06b6d4);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Geist', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ThreeJSSection = styled.div`
  height: 400px;
  position: relative;

  @media (max-width: 768px) {
    order: -1;
    height: 300px;
  }
`;

const AnimatedSpheres: React.FC = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <MeshWobbleMaterial
            color="#4f46e5"
            attach="material"
            factor={1}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.6, 32, 32]} position={[2, 1, -1]}>
          <MeshWobbleMaterial
            color="#06b6d4"
            attach="material"
            factor={0.8}
            speed={1.5}
            roughness={0}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.4, 32, 32]} position={[-2, -1, 1]}>
          <MeshWobbleMaterial
            color="#f093fb"
            attach="material"
            factor={1.2}
            speed={2.5}
            roughness={0}
          />
        </Sphere>
      </Float>
    </>
  );
};

interface FormResponse {
  success: boolean;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('Sending form data:', formData);
      
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      const data: FormResponse = await response.json();
      console.log('Response data:', data);
      
      if (response.ok) {
        setSubmitMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Server error occurred');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.error('Network error details:', {
          message: error.message,
          stack: error.stack
        });
        setSubmitMessage('Unable to connect to the server. Please make sure the server is running and try again.');
      } else {
        console.error('Unexpected error:', error);
        setSubmitMessage(error instanceof Error ? error.message : 'Sorry, there was an unexpected error. Please try again later.');
      }
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <ContactContainer id="contact">
      <ContactHeader>
        <SectionTitle
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </SectionSubtitle>
      </ContactHeader>

      <ContactContent>
        <ContactInfoSection>
          <ContactInfoTitle>Contact Information</ContactInfoTitle>
          
          <ContactItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </ContactIcon>
            <ContactLink href="mailto:adarshchandra.g@gmail.com">
              adarshchandra.g@gmail.com
            </ContactLink>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </ContactIcon>
            <ContactLink href="mailto:f20202005@pilani.bits-pilani.ac.in">
              f20202005@pilani.bits-pilani.ac.in
            </ContactLink>
          </ContactItem>
          

          <ContactItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </ContactIcon>
            <ContactLink href="https://www.linkedin.com/in/adarsh-chandra-gundu-b49b96200/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </ContactLink>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </ContactIcon>
            <ContactLink href="https://github.com/AdarshChandra42" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </ContactLink>
          </ContactItem>

          <ContactDescription
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Feel free to reach out via email or connect with me on social media. For urgent
            inquiries, please use the first email address.
          </ContactDescription>
        </ContactInfoSection>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Regarding..."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {submitMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                marginTop: '1rem',
                color: submitMessage.includes('Thank you') ? '#10b981' : '#ef4444',
                textAlign: 'center'
              }}
            >
              {submitMessage}
            </motion.p>
          )}
        </ContactForm>
      </ContactContent>

      <ThreeJSSection>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSpheres />
        </Canvas>
      </ThreeJSSection>
    </ContactContainer>
  );
};

export default Contact; 