import React from 'react';
import { motion } from 'framer-motion';

interface DetailItem {
  title: string;
  content: string;
}

interface PDFItem {
  label: string;
  url: string;
}

interface ProjectSimpleDetailsProps {
  details: DetailItem[];
  pdfs?: PDFItem[];
  isRTL: boolean;
}

const ProjectSimpleDetails: React.FC<ProjectSimpleDetailsProps> = ({ details, pdfs = [], isRTL }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 py-8">
      {/* تفاصيل المشروع */}
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
        {pdfs.length > 0 && (
          <div className={`mt-8 space-y-4 ${isRTL ? 'text-right' : ''}`}>
            {pdfs.map((pdf, idx) => (
              <a
                key={idx}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-gold/80 transition-colors"
              >
                {pdf.label}
              </a>
            ))}
          </div>
        )}
      </motion.div>

      {/* مساحات فارغة أو إضافية لو حبيت */}
      <motion.div
        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* يمكن تركها فارغة أو إضافة أي عناصر مستقبلية */}
      </motion.div>
    </div>
  );
};

export default ProjectSimpleDetails;
