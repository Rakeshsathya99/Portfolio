import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  {
    id: '1',
    name: 'React',
    level: 5,
    category: 'Frontend',
    icon: 'react',
  },
  {
    id: '2',
    name: 'React Native',
    level: 5,
    category: 'Frontend',
    icon: 'react',
  },
  {
    id: '3',
    name: 'HTML/CSS',
    level: 5,
    category: 'Frontend',
    icon: 'html',
  },
  {
    id: '4',
    name: 'Tailwind CSS',
    level: 4,
    category: 'Frontend',
    icon: 'tailwind',
  },
  {
    id: '5',
    name: 'JavaScript',
    level: 4,
    category: 'Frontend',
    icon: 'javascript',
  },
  
  // Backend
  {
    id: '6',
    name: 'Node.js',
    level: 4,
    category: 'Backend',
    icon: 'nodejs',
  },
  {
    id: '7',
    name: 'ExpressJS',
    level: 4,
    category: 'Backend',
    icon: 'express',
  },
  {
    id: '8',
    name: 'Spring Boot',
    level: 3,
    category: 'Backend',
    icon: 'java',
  },
  {
    id: '9',
    name: 'MySQL',
    level: 4,
    category: 'Backend',
    icon: 'mysql',
  },
  {
    id: '10',
    name: 'MongoDB',
    level: 3,
    category: 'Backend',
    icon: 'mongodb',
  },
  
  // Programming Languages
  {
    id: '11',
    name: 'Java',
    level: 4,
    category: 'Programming',
    icon: 'java',
  },
  {
    id: '12',
    name: 'C',
    level: 3,
    category: 'Programming',
    icon: 'c',
  },
  {
    id: '13',
    name: 'C++',
    level: 3,
    category: 'Programming',
    icon: 'cpp',
  },
  
  // DevOps & Cloud
  {
    id: '14',
    name: 'AWS',
    level: 3,
    category: 'DevOps',
    icon: 'aws',
  },
  {
    id: '15',
    name: 'RPA',
    level: 4,
    category: 'DevOps',
    icon: 'automation',
  },
  
  // Mobile
  {
    id: '16',
    name: 'Cross-Platform Development',
    level: 5,
    category: 'Mobile',
    icon: 'mobile',
  }
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'Programming',
  'DevOps',
  'Mobile',
];