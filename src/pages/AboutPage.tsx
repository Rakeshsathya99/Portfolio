import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, MapPin, Calendar, Briefcase, Code, Server, Database, PenTool as Tool, Smartphone } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import SkillCard from '../components/common/SkillCard';
import { skills, skillCategories } from '../data/skills';
import RakeshImage from '../assets/projects/rakesh_s.jpg'

const AboutPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code size={24} className="text-primary-500" />;
      case 'Backend':
        return <Server size={24} className="text-secondary-500" />;
      case 'DevOps':
        return <Tool size={24} className="text-accent-500" />;
      case 'Mobile':
        return <Smartphone size={24} className="text-success-500" />;
      case 'Programming':
        return <Database size={24} className="text-primary-500" />;
      default:
        return <Database size={24} className="text-primary-500" />;
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-primary-500';
      case 'Backend':
        return 'bg-secondary-500';
      case 'DevOps':
        return 'bg-accent-500';
      case 'Mobile':
        return 'bg-success-500';
      case 'Programming':
        return 'bg-primary-500';
      default:
        return 'bg-primary-500';
    }
  };
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="About Me" subtitle="Get to know more about me and my background" />
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={RakeshImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am a dedicated Front-End Developer with expertise in React Native, RPA, and web technologies. My professional journey is driven by a passion for creating innovative digital solutions that enhance operational efficiency and user experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With a strong background in computer science and a Master's in Computer Applications, I specialize in developing cross-platform mobile applications and implementing robotic process automation solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            With experience in both frontend and backend development, I bring a comprehensive approach to creating digital solutions that are both functional and user-friendly.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <MapPin className="text-primary-500 mr-2" size={20} />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary-500 mr-2" size={20} />
                <span>srakeshshetty7@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-primary-500 mr-2" size={20} />
                <span>Open to Opportunities</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-primary-500 mr-2" size={20} />
                <span>React Native Developer</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/src/assets/resume.pdf" download>
                <Button variant="primary" icon={<FileDown size={18} />}>
                  Download Resume
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
          
          <div className="relative border-l-2 border-primary-500 pl-8 ml-4">
            {/* Experience Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-12 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-dark-200"></div>
              <div className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-md">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">Front-End Developer (React Native)</h4>
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                    Feb 2025 - Present
                  </span>
                </div>
                <h5 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Yahweh Software Solution</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  Developing and maintaining cross-platform mobile applications using React Native, focusing on creating seamless user experiences across Android and iOS platforms.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Implement responsive UI components with high performance and accessibility</li>
                  <li>Integrate RESTful APIs and manage application state using Redux</li>
                  <li>Collaborate with designers and backend developers to enhance application functionality</li>
                  <li>Follow Agile development practices to ensure efficient project delivery</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Experience Item 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-12 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-dark-200"></div>
              <div className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-md">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">RPA Intern</h4>
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                    Aug 2024 - Sept 2024
                  </span>
                </div>
                <h5 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Finesse IT PVT Ltd, Bangalore</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  Developed automated workflows using Automation Anywhere 360, focusing on increasing operational efficiency and reducing error rates.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Increased operational efficiency by 30% through RPA solutions</li>
                  <li>Reduced error rates by 20% in repetitive business processes</li>
                  <li>Collaborated with cross-functional teams to design and implement RPA workflows</li>
                  <li>Contributed to the successful completion of multiple RPA projects</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          
          <div className="relative border-l-2 border-secondary-500 pl-8 ml-4">
            {/* Education Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-12 w-6 h-6 bg-secondary-500 rounded-full border-4 border-white dark:border-dark-200"></div>
              <div className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-md">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">Master of Computer Applications (MCA)</h4>
                  <span className="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm">
                    2023 - 2024
                  </span>
                </div>
                <h5 className="text-lg text-gray-600 dark:text-gray-400 mb-4">St. Francis College, Bangalore City University</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed Master's in Computer Applications with a focus on advanced computing technologies and software development.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>CGPA:</strong> 7.22
                </p>
              </div>
            </motion.div>
            
            {/* Education Item 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-12 w-6 h-6 bg-secondary-500 rounded-full border-4 border-white dark:border-dark-200"></div>
              <div className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-md">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                  <span className="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm">
                    2017 - 2022
                  </span>
                </div>
                <h5 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Vijaya College, Bangalore University</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed Bachelor's degree in Computer Science, building a strong foundation in programming, software development, and computational thinking.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>CGPA:</strong> 6.72
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8">My Skills</h3>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Skills
            </motion.button>
            
            {skillCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
              >
                <SkillCard
                  icon={getCategoryIcon(skill.category)}
                  name={skill.name}
                  level={skill.level}
                  color={getCategoryColor(skill.category)}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Additional Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Other Skills & Tools</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Git', 'GitHub', 'VS Code', 'Automation Anywhere 360', 'Spring Security', 'Java Mail Sender', 'Postman', 'Gemini API', 'Coin Gecko API', 'Netlify', 'Vercel', 'Firebase'].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-dark-100 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Learning Section */}
          <div className="mt-16 bg-gray-50 dark:bg-dark-300/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Certifications & Learning Path</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Committed to continuous learning and professional development through targeted certifications and emerging technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Cloud Computing (IBM)', 'AWS Certified Cloud Practitioner', 'Advanced RPA Technologies', 'Mobile App Development', 'AI/ML Integration'].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 px-4 py-2 rounded-full cursor-pointer"
                  onClick={() => window.location.href = '/certifications'}
                >
                  <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;