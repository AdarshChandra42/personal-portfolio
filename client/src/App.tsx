import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import EducationRoadmap from './components/EducationRoadmap';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 75%, #0f0f23 100%);
  color: white;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <AppContainer>
      <CustomCursor />
      <ThreeBackground />
      <Navigation />
      <MainContent>
        <Hero />
        <About />
        <EducationRoadmap />
        <Projects />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
