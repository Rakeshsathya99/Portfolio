import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, Code, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

const ResumePage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="My Resume" 
          subtitle="A summary of my experience, skills, and qualifications" 
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            {/* Resume Content */}
            <div className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-8">
              {/* Experience Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <Briefcase className="text-primary-500 mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Work Experience</h3>
                </div>
                
                <div className="border-l-2 border-primary-500/50 pl-6 ml-3 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold">Senior Front-end Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400">TechCorp Inc. | 2021 - Present</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Led the front-end development team in building and maintaining the company's flagship SaaS product</li>
                      <li>Implemented new features, optimized performance, and mentored junior developers</li>
                      <li>Reduced page load time by 40% through code optimization and lazy loading</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold">Front-end Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400">WebSolutions LLC | 2018 - 2021</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Developed responsive web applications for clients across various industries</li>
                      <li>Collaborated with designers and back-end developers to deliver high-quality products</li>
                      <li>Built 15+ client websites using React, Vue, and Angular</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold">Junior Web Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400">DigitalCraft Agency | 2016 - 2018</p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Assisted in the development of client websites and web applications</li>
                      <li>Learned and implemented best practices for web accessibility and SEO</li>
                      <li>Participated in code reviews and team collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Education Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-primary-500 mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                
                <div className="border-l-2 border-primary-500/50 pl-6 ml-3 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold">Master of Computer Science</h4>
                    <p className="text-gray-600 dark:text-gray-400">Stanford University | 2014 - 2016</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                    <p className="text-gray-600 dark:text-gray-400">MIT | 2010 - 2014</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Studied fundamental computer science principles with a focus on software engineering and web development.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <Code className="text-primary-500 mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Technical Skills</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-dark-300/20 p-3 rounded-lg">
                    <h5 className="font-semibold mb-2">Frontend</h5>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>React</li>
                      <li>JavaScript/TypeScript</li>
                      <li>HTML/CSS</li>
                      <li>Tailwind CSS</li>
                      <li>Next.js</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-dark-300/20 p-3 rounded-lg">
                    <h5 className="font-semibold mb-2">Backend</h5>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                      <li>GraphQL</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-dark-300/20 p-3 rounded-lg">
                    <h5 className="font-semibold mb-2">Tools & DevOps</h5>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>Git</li>
                      <li>Docker</li>
                      <li>AWS</li>
                      <li>CI/CD</li>
                      <li>Webpack</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Certifications Section */}
              <div>
                <div className="flex items-center mb-6">
                  <Award className="text-primary-500 mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Certifications</h3>
                </div>
                
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li>AWS Certified Solutions Architect - Amazon Web Services</li>
                  <li>Professional Front-End Developer - Meta</li>
                  <li>TensorFlow Developer Certificate - Google</li>
                  <li>Microsoft Certified: Azure Developer Associate - Microsoft</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            {/* Resume Preview and Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-6 sticky top-32"
            >
              <div className="flex items-center mb-6">
                <FileText className="text-primary-500 mr-3" size={24} />
                <h3 className="text-xl font-bold">Resume PDF</h3>
              </div>
              
              <div className="aspect-[3/4] bg-gray-100 dark:bg-dark-300 rounded-lg mb-6 flex items-center justify-center">
                <iframe 
                  src="/src/assets/resume.pdf" 
                  className="w-full h-full rounded-lg"
                  title="Resume Preview"
                />
              </div>
              
              <a href="/src/assets/resume.pdf" download className="w-full">
                <Button 
                  variant="primary" 
                  className="w-full" 
                  icon={<Download size={18} />}
                >
                  Download Resume
                </Button>
              </a>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                Last updated: June 2023
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;