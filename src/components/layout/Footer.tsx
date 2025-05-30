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
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Profile Column */}
          <div className="text-center md:text-left col-span-1 sm:col-span-2 md:col-span-1">
            <h2 className="text-lg font-bold mb-4">Rakesh S</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AWS-certified full-stack developer specializing in React.js and React Native, passionate about creating innovative digital solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
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
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-2 text-center md:text-left">Quick Links</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm justify-items-center md:justify-items-start">
              <li className="text-center md:text-left"><Link to="/" className="hover:underline">Home</Link></li>
              <li className="text-center md:text-left"><Link to="/about" className="hover:underline">About</Link></li>
              <li className="text-center md:text-left"><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li className="text-center md:text-left"><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-2 text-center md:text-left">Contact</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>Bangalore, India</li>
              <li>srakeshshetty7@gmail.com</li>
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