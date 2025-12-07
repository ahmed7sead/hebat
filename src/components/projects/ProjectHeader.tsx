import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectHeaderProps {
  project: {
    title: string;
  };
  isRTL: boolean;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project, isRTL }) => {
  return (
    <>
      {/* Back Button - تصميم محسّن */}
      <Link
        to="/projects"
        className={`inline-flex items-center gap-2 text-charcoal hover:text-gold transition-all duration-300 mb-12 group ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-charcoal group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 ${isRTL ? 'ml-1' : 'mr-1'}`}>
          <ArrowLeft className={`w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 ${isRTL ? 'transform rotate-180 group-hover:translate-x-1' : ''}`} />
        </div>
        <span className="font-medium">
          {isRTL ? 'العودة إلى المشروعات' : 'Back to Projects'}
        </span>
      </Link>

      {/* Project Title Only */}
      <div className={`mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {project.title}
        </motion.h1>
      </div>
    </>
  );
};

export default ProjectHeader;