import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

const Footer: React.FC = () => {
  const { setCursorType } = useCursor();
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Rakeshsathya99', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/rakesh-s-%2018089a245', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:srakeshshetty7@gamil.com', label: 'Email' },
  ];

  return (
    <footer className="bg-light-200 dark:bg-dark-100 py-10 mt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Column */}
          <div>
            <h2 className="text-lg font-bold mb-2">Rakesh S</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              I'm an AWS-certified and full-stack developer with experience in React.js and React Native — building responsive, cross-platform applications.
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links Column */}
          <div>
            <h2 className="text-lg font-bold mb-2 text-center">Quick Links</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm justify-items-center">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          {/* Contact Column */}
          <div>
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>srakeshshetty7@gmail.com</li>
              <li>Bengaluru, India</li>
              <li>+91 7892632358</li>
            </ul>
          </div>
        </div>
        {/* Copyright and bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Rakesh S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;