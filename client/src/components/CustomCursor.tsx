import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const CursorDot = styled.div<{ x: number; y: number; isHovering: boolean }>`
  position: absolute;
  width: ${props => props.isHovering ? '64px' : '40px'};
  height: ${props => props.isHovering ? '64px' : '40px'};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transition: width 0.2s ease, height 0.2s ease;
  backdrop-filter: invert(1);
  border: 1px solid rgba(255, 255, 255, 0.6);
`;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updateCursor = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Add event listener for mouse movement
    document.addEventListener('mousemove', updateCursor, { passive: true });

    // Add hover effects for interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"]), .clickable'
      );
      
      interactiveElements.forEach(element => {
        // Hide cursor on interactive elements too
        (element as HTMLElement).style.cursor = 'none';
        element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        element.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });

      return () => {
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    const cleanupInteractive = updateInteractiveElements();

    // Observer for dynamically added elements
    const observer = new MutationObserver(() => {
      cleanupInteractive();
      updateInteractiveElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', updateCursor);
      cleanupInteractive();
      observer.disconnect();
    };
  }, [updateCursor, handleMouseEnter, handleMouseLeave]);

  return (
    <CursorContainer>
      <CursorDot x={position.x} y={position.y} isHovering={isHovering} />
    </CursorContainer>
  );
};

export default CustomCursor; 