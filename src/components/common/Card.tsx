import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  const { setCursorType } = useCursor();

  return (
    <motion.div
      className={`card ${className}`}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setCursorType('hover')}
      onMouseLeave={() => setCursorType('default')}
    >
      {children}
    </motion.div>
  );
};

export default Card;