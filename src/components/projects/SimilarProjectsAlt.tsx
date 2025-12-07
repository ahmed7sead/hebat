import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectData {
    title: string;
    mainImage: string;
    category?: string;
    year?: string;
}

interface SimilarProjectsAltProps {
    projectsData: Record<string, ProjectData>;
    currentProjectId: string;
    isRTL: boolean;
    baseRoute?: string; // المسار الأساسي للمشاريع
}

const SimilarProjectsAlt: React.FC<SimilarProjectsAltProps> = ({
    projectsData,
    currentProjectId,
    isRTL,
    baseRoute = '/projects' // القيمة الافتراضية
}) => {
    // Get other projects (excluding current one)
    const otherProjects = Object.entries(projectsData)
        .filter(([key]) => key !== currentProjectId)
        .slice(0, 3); // Show only 3 projects

    if (otherProjects.length === 0) {
        return null;
    }

    return (
        <section className="py-20 border-t border-gray-200 mt-16">
            <div className="mb-12">
                {/* Section Title */}
                <motion.h2
                    className={`text-3xl md:text-4xl font-bold text-charcoal mb-3 ${isRTL ? 'text-right' : 'text-left'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {isRTL ? 'مشاريع مشابهة' : 'Similar Projects'}
                </motion.h2>

                <motion.p
                    className={`text-lg text-charcoal-light ${isRTL ? 'text-right' : 'text-left'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {isRTL ? 'تصفح المزيد من أعمالنا' : 'Explore more of our work'}
                </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {otherProjects.map(([key, project], index) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            to={`${baseRoute}/${key}`}
                            className="group block h-full"
                        >
                            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.mainImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <span className="text-white font-medium flex items-center gap-2">
                                            {isRTL ? 'عرض المشروع' : 'View Project'}
                                            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`p-6 flex-1 flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Show category and year only if they exist */}
                                    {(project.category || project.year) && (
                                        <div className={`flex items-center gap-3 text-sm text-charcoal-light mt-auto ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                                            {project.category && <span>{project.category}</span>}
                                            {project.category && project.year && (
                                                <span className="w-1 h-1 bg-gold rounded-full"></span>
                                            )}
                                            {project.year && <span>{project.year}</span>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* View All Projects Link */}
            <motion.div
                className={`${isRTL ? 'text-right' : 'text-left'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Link
                    to="/projects"
                    className={`inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors duration-300 font-medium group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                    <span>{isRTL ? 'عرض جميع المشاريع' : 'View All Projects'}</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </Link>
            </motion.div>
        </section>
    );
};

export default SimilarProjectsAlt;