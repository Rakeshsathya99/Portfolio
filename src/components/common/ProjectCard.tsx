import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import Button from './Button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        <div 
          className="h-48 bg-cover bg-center rounded-t-lg" 
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.shortDescription}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
        size="lg"
      >
        <div className="space-y-6">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-sm px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Description</h4>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Key Features</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            {/* Show Lynkt Admin Web Application live demo button if available */}
            {project.title === 'Lynkt Admin Web Application' && project.liveDemoUrl && (
              <Button 
                variant="primary"
                icon={<ExternalLink size={18} />}
                onClick={() => window.open(project.liveDemoUrl, '_blank')}
              >
                Live Demo
              </Button>
            )}
            {/* For other projects, show liveUrl if available */}
            {project.title !== 'Lynkt Admin Web Application' && project.liveUrl && project.liveUrl !== 'Not Deployed' && (
              <Button 
                variant="primary"
                icon={<ExternalLink size={18} />}
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && project.githubUrl !== 'Private Repository' && (
              <Button 
                variant="outline"
                icon={<Github size={18} />}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                View Code
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;