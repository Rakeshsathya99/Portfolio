import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Code, Server, Database, PenTool as Tool, Smartphone } from 'lucide-react';
import Button from '../components/common/Button';
import { TypeAnimation } from 'react-type-animation';
import bitcoinTradingImage from '../assets/projects/bitcoin-trading.png';
import movieTicketImage from '../assets/projects/movie-ticket.jpg';
import movieStreamingImage from '../assets/projects/movie-streaming.jpg';
import RakeshImage from '../assets/projects/rakesh_s.jpg'
import SkillCard from '../components/common/SkillCard';
import { skills } from '../data/skills';

// Icon mapping for skills
const skillIconMap: Record<string, React.ReactNode> = {
  react: <Code size={28} className="text-primary-500" />,
  html: <Code size={28} className="text-orange-500" />,
  tailwind: <Code size={28} className="text-blue-400" />,
  javascript: <Code size={28} className="text-yellow-400" />,
  nodejs: <Server size={28} className="text-green-600" />,
  express: <Server size={28} className="text-gray-700 dark:text-gray-300" />,
  java: <Database size={28} className="text-red-700" />,
  mysql: <Database size={28} className="text-blue-700" />,
  mongodb: <Database size={28} className="text-green-700" />,
  c: <Database size={28} className="text-blue-500" />,
  cpp: <Database size={28} className="text-blue-400" />,
  aws: <Tool size={28} className="text-yellow-500" />,
  automation: <Tool size={28} className="text-accent-500" />,
  mobile: <Smartphone size={28} className="text-success-500" />,
};

const HomePage: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-preview');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              Hi, I'm <span className="text-primary-500">Rakesh S</span>
              <br />
              <span className="text-3xl md:text-4xl">
                <span className="text-gray-700 dark:text-gray-300">I build </span>
                <span className="text-primary-500">innovative</span>
                <span className="text-gray-700 dark:text-gray-300"> digital solutions</span>
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 text-center">
              <TypeAnimation
                sequence={[
                  'Front End Developer',
                  1000,
                  'React Native Developer',
                  1000,
                  'React Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-blue-600 dark:text-blue-400"
                repeat={Infinity}
              />
            </h2>
            
            <div className="flex justify-center gap-4">
              <Link to="/projects">
                <Button variant="primary">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none"
        >
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary-500/30 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary-500/20 blur-3xl"></div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown size={32} className="text-primary-500" />
        </motion.div>
      </section>
      
      {/* About Preview Section */}
      <section id="about-preview" className="py-20 bg-light-200 dark:bg-dark-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm Rakesh S, an AWS-certified full-stack developer with practical experience in React.js and React Native — proficient in building responsive, cross-platform applications using a component-based architecture.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Skilled in integrating Supabase for backend services and authentication. Passionate about scalable frontend systems and modern Agile workflows with version control best practices.
              </p>
              <Link to="/about">
                <Button variant="outline" icon={<ArrowRight size={16} />}>
                  Learn More About Me
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={RakeshImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* My Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                icon={skillIconMap[skill.icon] || <Code size={28} className="text-primary-500" />}
                name={skill.name}
                level={skill.level}
                color={
                  skill.category === 'Frontend' ? 'bg-primary-500'
                  : skill.category === 'Backend' ? 'bg-secondary-500'
                  : skill.category === 'DevOps' ? 'bg-accent-500'
                  : skill.category === 'Mobile' ? 'bg-success-500'
                  : 'bg-primary-500'
                }
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are a few of my recent projects. Check out my project page for more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group"
                style={{ 
                  backgroundImage: `url(${movieTicketImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Movie Ticket Booking App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Online platform for movie ticket booking with real-time seat availability and movie reviews.</p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Technologies:</strong> ReactJS, CSS (Frontend), NodeJS, ExpressJS, MongoDB (Backend)
                </div>
                <Link to="/projects">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group"
                style={{ 
                  backgroundImage: `url(${bitcoinTradingImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bitcoin Trading Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">AI-powered crypto trading platform with real-time data from Gemini and Coin Gecko APIs.</p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Technologies:</strong> React, Tailwind CSS (Frontend), Spring Boot, MySQL, Spring Security (Backend)
                </div>
                <Link to="/projects">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-dark-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group"
                style={{ 
                  backgroundImage: `url(${movieStreamingImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Movie Streaming App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Web application for streaming movies and TV shows with internet-based access.</p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Technologies:</strong> ReactJS, Tailwind CSS (Frontend), NodeJS, ExpressJS, MongoDB (Backend)
                </div>
                <Link to="/projects">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="primary" icon={<ArrowRight size={16} />}>
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Preview */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in collaboration, job opportunities, or just want to discuss technology? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="mailto:srakeshshetty7@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  Email Me
                </Button>
              </a>
              <a href="tel:+917892632358" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Call Me
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;