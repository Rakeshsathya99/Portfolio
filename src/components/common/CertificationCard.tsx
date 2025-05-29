import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import Button from './Button';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { Certification } from '../../types';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500">
              <Award size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">{certification.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{certification.issuer}</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{certification.date}</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{certification.description}</p>
        </div>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={certification.title}
        size="md"
      >
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-500">
              <Award size={32} />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">{certification.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">{certification.issuer}</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar size={18} className="mr-2" />
            <span>Issued: {certification.date}</span>
            {certification.expirationDate && (
              <span className="ml-4">Expires: {certification.expirationDate}</span>
            )}
          </div>
          
          {certification.credentialId && (
            <div className="p-3 bg-gray-100 dark:bg-dark-300 rounded-lg">
              <p className="font-medium">Credential ID</p>
              <p className="text-gray-700 dark:text-gray-300">{certification.credentialId}</p>
            </div>
          )}
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Description</h4>
            <p className="text-gray-700 dark:text-gray-300">{certification.description}</p>
          </div>
          
          {certification.skills && certification.skills.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {certification.verificationUrl && (
            <div className="mt-6">
              <Button 
                variant="primary"
                icon={<ExternalLink size={18} />}
                onClick={() => window.open(certification.verificationUrl, '_blank')}
              >
                Verify Credential
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CertificationCard;