import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';
import { projects } from '../data/projects';
import React, { useState } from 'react';

const categories = ["All", "Frontend", "Full Stack", "Mobile"];

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="My Projects" 
          subtitle="A showcase of my recent work and personal projects" 
        />
        
        {/* Category Filter Bar */}
        <div className="flex gap-3 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-colors
                ${activeCategory === category
                  ? "bg-primary-700 text-white"
                  : "bg-dark-200 text-gray-200 hover:bg-primary-900/40"}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;