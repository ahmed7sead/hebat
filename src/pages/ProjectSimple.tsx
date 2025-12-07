import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// Import components
import ProjectHeaderAlt from '../components/projects/ProjectHeader';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectSimpleDetails from '../components/projects/ProjectSimpleDetails';
import SimilarProjectsAlt from '../components/projects/SimilarProjectsAlt';

// Import data
import getSimpleProjectsData from './simpleProjectsData';

const ProjectSimple = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const { isRTL } = useLanguage();

    // Scroll to top when project changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [projectId]);

    // Get project data
    const simpleProjectsData = getSimpleProjectsData(isRTL);
    const project = simpleProjectsData[projectId as keyof typeof simpleProjectsData];

    // If project not found
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        {isRTL ? 'المشروع غير موجود' : 'Project Not Found'}
                    </h2>
                    <Link to="/projects" className="text-gold hover:underline">
                        {isRTL ? 'العودة إلى المشاريع' : 'Back to Projects'}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20" key={projectId}>
            <div className="container-custom">
                {/* 1. Project Header Alt - Minimal Version */}
                <ProjectHeaderAlt
                    project={{
                        title: project.title,
                    }}
                    isRTL={isRTL}
                />

                {/* 2. Project Gallery */}
                <ProjectGallery
                    project={{
                        title: project.title,
                        gallery: project.gallery
                    }}
                    isRTL={isRTL}
                />

                {/* 3. Project Simple Details */}
                <ProjectSimpleDetails
                    details={project.details}
                    pdfs={project.pdfs}
                    isRTL={isRTL}
                />

                {/* 4. Similar Projects Alt - Fixed prop name */}
                <SimilarProjectsAlt
                    projectsData={simpleProjectsData}
                    currentProjectId={projectId as string}
                    isRTL={isRTL}
                    baseRoute="/simple-projects"
                />
            </div>
        </div>
    );
};

export default ProjectSimple;