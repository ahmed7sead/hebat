import React from 'react';
import { motion } from 'framer-motion';

interface DetailItem {
  title: string;
  content: string;
}

interface ProjectDetailsProps {
  details: DetailItem[];
  projectInfo: {
    client: string;
    location: string;
    category: string;
    year: string;
  };
  isRTL: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ details, projectInfo, isRTL }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 py-8">
      <motion.div
        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right' : ''}`}>
          {isRTL ? 'تفاصيل المشروع' : 'Project Details'}
        </h3>
        <div className="space-y-8">
          {details.map((detail, index) => (
            <div key={index} className={isRTL ? 'text-right' : ''}>
              <h4 className="text-xl font-semibold text-gold mb-2">{detail.title}</h4>
              <p className="text-charcoal-light leading-relaxed">{detail.content}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right' : ''}`}>
          {isRTL ? 'معلومات المشروع' : 'Project Information'}
        </h3>
        <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
          <div className="flex justify-between border-b border-gray-200 py-3">
            <span className="text-charcoal-light font-medium">{isRTL ? 'العميل:' : 'Client:'}</span>
            <span className="font-semibold text-charcoal">{projectInfo.client}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-3">
            <span className="text-charcoal-light font-medium">{isRTL ? 'الموقع:' : 'Location:'}</span>
            <span className="font-semibold text-charcoal">{projectInfo.location}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-3">
            <span className="text-charcoal-light font-medium">{isRTL ? 'الفئة:' : 'Category:'}</span>
            <span className="font-semibold text-charcoal">{projectInfo.category}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-3">
            <span className="text-charcoal-light font-medium">{isRTL ? 'السنة:' : 'Year:'}</span>
            <span className="font-semibold text-charcoal">{projectInfo.year}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;