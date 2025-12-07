import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectData {
  title: string;
  mainImage: string;
  category: string;
  year: string;
}

interface SimilarProjectsProps {
  projectsData: Record<string, ProjectData>;  // ✅ تم تغيير الاسم
  currentProjectId: string;
  isRTL: boolean;
}

const SimilarProjects: React.FC<SimilarProjectsProps> = ({ projectsData, currentProjectId, isRTL }) => {
  // Get other projects (excluding current one)
  const otherProjects = Object.entries(projectsData)
    .filter(([key]) => key !== currentProjectId)
    .slice(0, 6); // Limit to 6 projects for better layout

  return (
    <section className="py-16 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gold flex-1 max-w-20"></div>
            <div className="mx-4">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
            <div className="h-px bg-gold flex-1 max-w-20"></div>
          </div>

          <h3 className={`text-heading-2 font-bold text-charcoal mb-3 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
            {isRTL ? 'مشاريع أخرى' : 'Other Projects'}
          </h3>

          <p className={`text-body text-charcoal-light max-w-2xl mx-auto ${isRTL ? 'font-tajawal text-right' : 'font-roboto'}`}>
            {isRTL
              ? 'استكشف المزيد من أعمالنا المتميزة في مختلف المجالات'
              : 'Explore more of our distinctive work across various fields'
            }
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map(([key, project], index) => (
            <Link
              to={`/projects/${key}`}
              key={key}
              className="group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Gold Accent Border */}
                  <div className="absolute top-4 left-4 w-12 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-body-small font-medium text-charcoal transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ${isRTL ? 'font-tajawal' : 'font-roboto'}`}>
                    {project.category}
                  </div>

                  {/* View Project Button */}
                  <div className={`absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100`}>
                    <div className={`bg-gold text-white px-4 py-2 rounded-lg text-body-small font-medium text-center ${isRTL ? 'font-tajawal' : 'font-roboto'}`}>
                      {isRTL ? 'عرض المشروع' : 'View Project'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h4 className={`text-heading-5 font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300 ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
                    {project.title}
                  </h4>

                  <div className={`flex items-center gap-2 text-body-small text-charcoal-light ${isRTL ? 'justify-end font-tajawal' : 'font-roboto'}`}>
                    <span>{project.year}</span>
                    <div className="w-1 h-1 bg-gold rounded-full"></div>
                    <span>{project.category}</span>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show All Projects Button */}
        {otherProjects.length >= 6 && (
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 transform hover:-translate-y-1 ${isRTL ? 'font-tajawal' : 'font-roboto'}`}
            >
              {isRTL ? 'عرض جميع المشاريع' : 'View All Projects'}
              <div className={`w-2 h-2 border-t-2 border-r-2 border-white transform ${isRTL ? 'rotate-45' : '-rotate-45'} transition-transform group-hover:translate-x-1`}></div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SimilarProjects;