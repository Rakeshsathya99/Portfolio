import React, { useEffect, useRef } from 'react';
import { useCursor } from '../../context/CursorContext';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const { cursorType } = useCursor();
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current && outlineRef.current) {
        // Dot follows cursor immediately
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        // Outline follows with slight delay for smoother effect
        outlineRef.current.animate({
          transform: `translate(${e.clientX}px, ${e.clientY}px)`
        }, { 
          duration: 500, 
          fill: 'forwards',
          easing: 'ease-out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div 
        ref={dotRef}
        className={`cursor-dot ${cursorType === 'hover' ? 'scale-150' : ''}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: cursorType === 'hover' ? 1.5 : 1 
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        ref={outlineRef}
        className={`cursor-outline ${cursorType === 'hover' ? 'scale-150' : ''}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: cursorType === 'hover' ? 1.5 : 1 
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;