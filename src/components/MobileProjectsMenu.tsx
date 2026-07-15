import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, Home, Package } from 'lucide-react';

interface MobileProjectsMenuProps {
    setSheetOpen: (value: boolean) => void;
}

export const MobileProjectsMenu: React.FC<MobileProjectsMenuProps> = ({ setSheetOpen }) => {
    const { isRTL } = useLanguage();
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
                },
                {
                    id: 'crown',
                    title: isRTL ? 'فندق Crowne Plaza' : 'Crowne Plaza Hotel',
                    path: '/projects/crown',
                },
                {
                    id: 'commercial-plaza',
                    title: isRTL ? 'فندق Worth' : 'Worth Hotel',
                    path: '/projects/commercial-plaza',
                },
                {
                    id: 'hotel-lobby',
                    title: isRTL ? 'فندق إعمار' : 'Emmar Hotel',
                    path: '/projects/hotel-lobby',
                },
               {
    id: 'Makarem',
    title: isRTL ? 'مبنى وزارة الثقافة بالدرعية' : 'Ministry of Culture HQ - Diriyah',
    path: '/projects/Makarem',
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
                },
                {
                    id: 'mosque1',
                    title: isRTL ? 'مسجد الشلهوب' : 'Al-Al-Shalhoub Mosque',
                    path: '/projects/mosque1',
                },
                {
                    id: 'mosque3',
                    title: isRTL ? 'جامع المرشد' : 'Al-Morshed Mosque',
                    path: '/projects/mosque3',
                },
                {
                    id: 'mosque4',
                    title: isRTL ? 'جامع العجلان' : 'Al-Ajlan Mosque',
                    path: '/projects/mosque4',
                }
            ]
        },
        {
            id: 'factory',
            title: isRTL ? 'اعمال أخري' : 'other work',
            icon: Package,
            projects: [
,
                                {
                 id: 'moc-diriyah',
                  title: isRTL ? 'مبنى وزارة الثقافة بالدرعية' : 'Ministry of Culture HQ - Diriyah',
                     path: '/projects/moc-diriyah',
                    },
,{
                    id: 'project3',
                    title: isRTL ? 'متحف البحر الاحمر' : 'Red Sea Museum ',
                    path: '/simple-projects/project3',
                },
                {
                    id: 'project1',
                    title: isRTL ? 'النجف والثريات الإسلامية' : 'Islamic Chandeliers',
                    path: '/simple-projects/project1',
                },
                {
                    id: 'project2',
                    title: isRTL ? 'النجف والثريات المودرن' : 'Modern Chandeliers',
                    path: '/simple-projects/project2',
                },
            ]
        }
    ];

    const toggleCategory = (categoryId: string) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };

    return (
        <div className={`${isRTL ? 'pr-3' : 'pl-3'} py-2 flex flex-col space-y-2`}>
            {categories.map((category) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;

                return (
                    <div key={category.id} className="overflow-hidden">
                        {/* Category Header */}
                        <button
                            onClick={() => toggleCategory(category.id)}
                            className={`w-full flex items-center justify-between px-5 py-3.5 rounded-lg
                                transition-all duration-300 group
                                ${isExpanded
                                    ? 'bg-gold text-white shadow-lg'
                                    : 'bg-gray-50 text-charcoal hover:bg-gold/10'
                                }
                                ${isRTL ? 'flex-row-reverse' : ''}
                            `}
                        >
                            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className={`p-2 rounded-lg transition-colors ${isExpanded ? 'bg-white/20' : 'bg-gold/10'
                                    }`}>
                                    <Icon className={`w-5 h-5 ${isExpanded ? 'text-white' : 'text-gold'}`} />
                                </div>
                                <span className={`font-bold ${isRTL ? 'text-[15px]' : 'text-[15px]'}`}>
                                    {category.title}
                                </span>
                            </div>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className={`w-5 h-5 ${isExpanded ? 'text-white' : 'text-gold'
                                    }`} />
                            </motion.div>
                        </button>

                        {/* Projects List */}
                        {isExpanded && (
                            <div className={`mt-2 ${isRTL ? 'pr-3' : 'pl-3'} space-y-1`}>
                                {category.projects.map((project) => (
                                    <div key={project.id}>
                                        <Link
                                            to={project.path}
                                            className={`block w-full px-5 py-3 rounded-lg 
                                                transition-all duration-300 group
                                                text-charcoal hover:bg-gold/10 hover:text-gold
                                                ${isRTL ? 'text-right' : 'text-left'}
                                                border-l-2 border-transparent hover:border-gold
                                                ${isRTL ? 'border-l-0 border-r-2' : ''}
                                            `}
                                            onClick={() => setSheetOpen(false)}
                                        >
                                            <div className={`flex items-center gap-2.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                                <span className="w-2 h-2 rounded-full bg-gold/60 
                                                    group-hover:bg-gold group-hover:scale-125 
                                                    transition-all duration-300">
                                                </span>
                                                <span className={`${isRTL ? 'text-[16px]' : 'text-[16px]'} font-semibold transition-transform duration-300
                                                    ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                                                    {project.title}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}

            {/* View All Projects Link */}
            <div className="pt-3">
                <Link
                    to="/projects"
                    className={`block w-full px-5 py-3.5 rounded-lg transition-all duration-300
                        font-bold text-gold hover:bg-gold hover:text-white
                        border-2 border-gold hover:shadow-lg
                        text-center ${isRTL ? 'text-[16px]' : 'text-[16px]'}
                    `}
                    onClick={() => setSheetOpen(false)}
                >
                    {isRTL ? 'عرض كل المشروعات ←' : '→ View All Projects'}
                </Link>
            </div>
        </div>
    );
};