import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number; // 1-5
  color?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  name,
  level,
  color = 'bg-primary-500',
}) => {
  const { setCursorType } = useCursor();
  
  // Convert level (1-5) to percentage
  const percentage = (level / 5) * 100;
  
  return (
    <motion.div
      className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setCursorType('hover')}
      onMouseLeave={() => setCursorType('default')}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} bg-opacity-10 dark:bg-opacity-20`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>
      
      <div className="w-full h-2 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      
      <div className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;