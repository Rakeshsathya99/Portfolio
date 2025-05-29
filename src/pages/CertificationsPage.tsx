import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import CertificationCard from '../components/common/CertificationCard';
import { certifications } from '../data/certifications';

const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="My Certifications" 
          subtitle="Professional certifications and credentials that validate my expertise" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificationCard certification={certification} />
            </motion.div>
          ))}
        </div>
        
        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white dark:bg-dark-100 rounded-xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I believe in the importance of continuous learning and professional development. These certifications represent my commitment to staying current with industry standards and best practices.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            In addition to formal certifications, I regularly participate in online courses, workshops, and conferences to expand my knowledge and skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsPage;