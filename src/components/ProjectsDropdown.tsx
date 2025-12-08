import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Home, Package, Hotel, Calendar } from 'lucide-react';

interface ProjectsDropdownProps {
    triggerRef?: React.RefObject<HTMLDivElement>;
}

export const ProjectsDropdown: React.FC<ProjectsDropdownProps> = ({ triggerRef }) => {
    const { isRTL } = useLanguage();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{ top: number; left: number | 'auto'; right: number | 'auto' }>({
        top: 0,
        left: 'auto',
        right: 'auto'
    });

    useEffect(() => {
        if (triggerRef?.current && dropdownRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const dropdownWidth = 750;
            const viewportWidth = window.innerWidth;
            const padding = 20;

            let left: number | 'auto' = 'auto';
            let right: number | 'auto' = 'auto';

            if (isRTL) {
                right = viewportWidth - triggerRect.right;
                const wouldOverflowLeft = (viewportWidth - right - dropdownWidth) < padding;
                if (wouldOverflowLeft) {
                    right = viewportWidth - dropdownWidth - padding;
                }
                if (right < padding) {
                    right = padding;
                }
            } else {
                left = triggerRect.left;
                if (left + dropdownWidth > viewportWidth - padding) {
                    left = viewportWidth - dropdownWidth - padding;
                }
                if (left < padding) {
                    left = padding;
                }
            }

            setPosition({
                top: triggerRect.bottom + 10,
                left: left,
                right: right
            });
        }
    }, [triggerRef, isRTL]);

    const categories = [
        {
            id: 'hotels',
            title: isRTL ? 'الفنادق' : 'Hotels',
            icon: Building2,
            projects: [
                {
                    id: 'rixos',
                    title: isRTL ? 'فندق Rixos' : 'Rixos Hotel',
                    path: '/projects/rixos',
                    icon: Building2,
                },
                {
                    id: 'crown',
                    title: isRTL ? 'فندق Crowne Plaza' : 'Crowne Plaza Hotel',
                    path: '/projects/crown',
                    icon: Building2,
                },
                {
                    id: 'commercial-plaza',
                    title: isRTL ? 'فندق Worth' : 'Worth Hotel',
                    path: '/projects/commercial-plaza',
                    icon: Building2,
                },
                {
                    id: 'hotel-lobby',
                    title: isRTL ? 'فندق إعمار' : 'Emmar Hotel',
                    path: '/projects/hotel-lobby',
                    icon: Building2,
                },
                {
                    id: 'Makarem',
                    title: isRTL ? 'فندق مكارم المدينة' : 'Makarem Al Madinah Hotel',
                    path: '/projects/Makarem',
                    icon: Building2,
                }
            ]
        },
        {
            id: 'islamic',
            title: isRTL ? 'المشاريع الإسلامية' : 'Islamic Projects',
            icon: Home,
            projects: [
                {
                    id: 'mosque5',
                    title: isRTL ? 'جامع ضاحية سدايم' : 'Sdayem Mosque',
                    path: '/projects/mosque5',
                    icon: Home,
                },
                {
                    id: 'mosque1',
                    title: isRTL ? 'مسجد الشربتلي' : 'Al-Sharbalti Mosque',
                    path: '/projects/mosque1',
                    icon: Home,
                },
                {
                    id: 'mosque3',
                    title: isRTL ? 'جامع المرشد' : 'Al-Morshed Mosque',
                    path: '/projects/mosque3',
                    icon: Home,
                },
                {
                    id: 'mosque4',
                    title: isRTL ? 'جامع العجلان' : 'Al-Ajlan Mosque',
                    path: '/projects/mosque4',
                    icon: Home,
                }
            ]
        },
        {
            id: 'factory',
            title: isRTL ? 'منتجات مصنعنا' : 'Our Factory Products',
            icon: Package,
            projects: [
                {
                    id: 'project1',
                    title: isRTL ? 'النجف والثريات الإسلامية' : 'Islamic Chandeliers',
                    path: '/simple-projects/project1',
                    icon: Package,
                },
                {
                    id: 'project2',
                    title: isRTL ? 'النجف والثريات المودرن' : 'Modern Chandeliers',
                    path: '/simple-projects/project2',
                    icon: Package,
                },
                {
                    id: 'project3',
                    title: isRTL ? 'متحف البحر الأحمر' : 'Red Sea Museum',
                    path: '/simple-projects/project3',
                    icon: Calendar,
                }
            ]
        }
    ];

    return (
        <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-[750px] max-w-[calc(100vw-40px)] z-50"
            style={{
                top: `${position.top}px`,
                left: position.right === 'auto' ? `${position.left}px` : 'auto',
                right: position.right !== 'auto' ? `${position.right}px` : 'auto',
            }}
        >
            <div className="p-6">
                <div className="grid grid-cols-3 gap-6">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div key={category.id} className="space-y-2">
                                {/* Category Header */}
                                <div className={`flex items-center gap-2.5 pb-3 mb-3 border-b-2 border-gold/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="p-2.5 rounded-lg bg-gold/10">
                                        <Icon className="w-5 h-5 text-gold" />
                                    </div>
                                    <h3 className={`font-bold text-charcoal ${isRTL ? 'text-[16px]' : 'text-[16px]'}`}>
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Projects List */}
                                <div className="space-y-1">
                                    {category.projects.map((project) => {
                                        const ProjectIcon = project.icon;
                                        return (
                                            <Link
                                                key={project.id}
                                                to={project.path}
                                                className={`flex items-center gap-2.5 px-4 py-3.5 rounded-lg transition-all duration-300 group
                                                    text-charcoal hover:bg-gold/10 hover:text-gold
                                                    ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}
                                                `}
                                            >
                                                <ProjectIcon className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors duration-300" />
                                                <span className={`${isRTL ? 'text-[15px]' : 'text-[15px]'} font-medium transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                                                    {project.title}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Projects Link */}
                <div className="mt-6 pt-5 border-t border-gray-200">
                    <Link
                        to="/projects"
                        className={`group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 rounded-lg transition-all duration-300 inline-block w-full text-center transform hover:scale-105 hover:shadow-xl hover:shadow-gold/30 font-bold
                            ${isRTL ? 'text-[15px]' : 'text-[15px]'}
                        `}
                    >
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">
                            {isRTL ? 'عرض كل المشروعات' : 'View All Projects'}
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};