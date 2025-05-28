import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      setHidden(false);
      
      const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
      };

      const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
      };

      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const onMouseEnter = () => {
        setHidden(false);
      };

      const onMouseLeave = () => {
        setHidden(true);
      };

      const onMouseDown = () => {
        setClicked(true);
      };

      const onMouseUp = () => {
        setClicked(false);
      };

      // Check for hovering on links and buttons
      const handleLinkHoverEvents = () => {
        const handleLinkMouseEnter = () => setLinkHovered(true);
        const handleLinkMouseLeave = () => setLinkHovered(false);

        const links = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
        
        links.forEach((link) => {
          link.addEventListener('mouseenter', handleLinkMouseEnter);
          link.addEventListener('mouseleave', handleLinkMouseLeave);
        });

        return () => {
          links.forEach((link) => {
            link.removeEventListener('mouseenter', handleLinkMouseEnter);
            link.removeEventListener('mouseleave', handleLinkMouseLeave);
          });
        };
      };

      addEventListeners();
      const cleanupLinkEvents = handleLinkHoverEvents();
      
      return () => {
        removeEventListeners();
        cleanupLinkEvents();
      };
    }
  }, []);

  if (hidden || window.innerWidth <= 768) return null;

  return (
    <>
      <div 
        className={`fixed rounded-full pointer-events-none z-50 transition-transform mix-blend-difference ${
          clicked ? 'scale-75' : ''
        } ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '12px',
          height: '12px',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
      <div 
        className={`fixed rounded-full pointer-events-none z-40 transition-all ${
          clicked ? 'scale-75 opacity-30' : 'opacity-20'
        } ${linkHovered ? 'scale-200 opacity-30' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '40px',
          height: '40px',
          border: '1px solid white',
          backgroundColor: 'transparent',
          transform: 'translate(-50%, -50%)',
          transitionDuration: '150ms',
          transitionTimingFunction: 'ease-out'
        }}
      ></div>
    </>
  );
};

export default Cursor;