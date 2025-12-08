import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Projects = () => {
    const { isRTL } = useLanguage();
    const [showPopup, setShowPopup] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const [showSkip, setShowSkip] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');
    const [videoKey, setVideoKey] = useState(0); // لإعادة تحميل الفيديو

    // قائمة الفيديوهات
    const videos = [
        '/videos/h1.mp4',
        '/videos/h2.mp4',
        '/videos/h3.mp4'
    ];

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);

        // اختيار فيديو عشوائي عند تحميل الصفحة
        const randomIndex = Math.floor(Math.random() * videos.length);
        setSelectedVideo(videos[randomIndex]);

        // إعادة تعيين حالة الفيديو
        setVideoEnded(false);
        setShowSkip(false);
        setVideoKey(prev => prev + 1); // تغيير المفتاح لإجبار إعادة التحميل
    }, []); // يعمل فقط عند التحميل الأول

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    // Show skip button after 2 seconds
    useEffect(() => {
        if (!videoEnded) {
            const skipTimer = setTimeout(() => {
                setShowSkip(true);
            }, 1250);

            return () => clearTimeout(skipTimer);
        }
    }, [videoEnded, videoKey]); // إضافة videoKey للتبعية

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    const handleSkip = () => {
        setVideoEnded(true);
    };

    const projects = [
        {
            id: 'rixos-hotel',
            title: isRTL ? 'فندق Rixos' : 'Rixos Hotel',
            description: isRTL
                ? 'مشروع إنارة فاخر شمل تصنيع وتركيب الثريات الكريستالية والإضاءة الداخلية والخارجية بالفندق بالكامل.'
                : 'A luxury lighting project including manufacturing and installation of crystal chandeliers and full indoor-outdoor lighting systems.',
            image: '/projects-page/Rixos/15.webp',
            path: '/projects/rixos',
            category: isRTL ? 'ضيافة' : 'Hospitality',
            year: '2025'
        },
        {
            id: 'commercial-plaza',
            title: isRTL ? 'بننسولا Worth' : 'Worth hotel',
            description: isRTL
                ? 'مشروع انارة فندق وورث المدينة المنورة بالكامل وتركيب الثرايا'
                : 'The entire lighting project for the Worth Hotel in Medina and the installation of chandeliers',
            image: '/gallery/Waterfall1.jpg',
            path: '/projects/commercial-plaza',
            category: isRTL ? 'ضيافة' : 'hotel',
            year: '2025'
        },
        {
            id: 'Makarem',
            title: isRTL ? 'فندق مكارم المدينة' : 'Makarem  Hotel',
            description: isRTL
                ? ' تصنيع و تركيب النجف وكافة اعمال الاضاءة بالفندق اعتمادا علي التصاميم الهندسية وكافة اعمال النجف المودرن وذو الطابع الشرقي  '
                : 'Installing chandeliers and all hotel lighting works according to engineering designs, including modern and oriental-style chandeliers.',
            image: '/projects-page/Makarem/1t.jpg',
            path: '/projects/Makarem',
            category: isRTL ? 'فنادق' : 'Hospitality',
            year: '2025'
        },
        {
            id: 'hotel-lobby',
            title: isRTL ? 'فندق إعمار ' : 'Emaar hotel Lobby',
            description: isRTL
                ? 'إضاءة بهو فندق فخم مع تركيز على الثريات الكريستالية والنجفة المركزية'
                : 'Lighting for a luxurious hotel lobby with focus on blue crystal chandelier and wall lighting',
            image: '/projects-page/emmar/1.webp',
            path: '/projects/hotel-lobby',
            category: isRTL ? 'ضيافة' : 'Hospitality',
            year: '2024'
        },
        {
            id: 'crowne-plaza',
            title: isRTL ? 'فندق كراون بلازا' : 'Crowne Plaza Hotel',
            description: isRTL
                ? 'تصنيع وحدات إضاءة مخصصة داخل مصنعنا لمشروع فندق كراون بلازا بجدة، وفق أعلى معايير الجودة.'
                : 'Custom manufacturing of lighting units in our factory for the Crowne Plaza Hotel project in Jeddah, adhering to top quality standards.',
            image: '/projects-page/crown/6.webp',
            path: '/projects/crown',
            category: isRTL ? 'ضيافة' : 'Hospitality',
            year: '2021'
        },
        {
            id: 'mosque3',
            title: isRTL ? ' جامع محمد المرشد' : 'Al-Morshed Mosque',
            description: isRTL
                ? 'تنفيذ وتصميم النجفة الرئيسية للجامع وباقي النجف ، مع تركيب الهلال أعلى المئذنة وكافة الاعمال المعدنية، وإضاءة كلاسيكية بطابع إسلامي مميز.'
                : 'Installation of the main chandelier, all metal works, and full lighting with a classical Islamic design.',
            image: '/projects-page/mosque3/Gk-CPpsXwAE_D94.webp',
            path: '/projects/mosque3',
            category: isRTL ? 'مسجد' : 'mosque',
            year: '2025'
        },
        {
            id: 'mosque1',
            title: isRTL ? 'مسجد الشربتلي' : 'Sharbatly Mosque',
            description: isRTL
                ? 'تصميم وتركيب النجف والهلال اعلي الماذنة وابضا ديكورات اضاءة كلاسيكية اسلامية'
                : 'Design and installation of the chandelier and the crescent above the minaret, as well as classical Islamic lighting decorations',
            image: '/projects-page/mosque1/12.webp',
            path: '/projects/mosque1',
            category: isRTL ? 'مسجد' : 'mosque',
            year: '2024'
        },
        {
            id: 'mosque4',
            title: isRTL ? 'جامع العجلان' : 'Al-Ajlan Mosque',
            description: isRTL
                ? 'تصميم وتركيب النجفة في القبة الرئيسية نجفة علي الطراز الاسلامي الحديث وفوانيس  حائط جانبية'
                : 'Design and installation of a chandelier in the main dome, a modern Islamic style chandelier and side wall lanterns',
            image: '/projects-page/mosque4/10.jpeg',
            path: '/projects/mosque4',
            category: isRTL ? 'مسجد' : 'mosque',
            year: '2025'
        },
        {
            id: 'mosque5',
            title: isRTL ? 'مسجد ضاحية سدايم ' : 'dahiat Mosque',
            description: isRTL
                ? 'تصميم وتصنيع وتركيب نجفة هندسية رئيسية وفوانيس حائط جانبية في مسجد كمبوند ضاحية سدايم بجدة، بأسلوب إسلامي حديث.'
                : 'Design, fabrication, and installation of the main geometric chandelier and side wall lanterns for the Sdayem District compound mosque in Jeddah, in a modern Islamic style.',
            image: '/projects-page/mosque5/1.jpeg',
            path: '/projects/mosque5',
            category: isRTL ? 'مسجد' : 'mosque',
            year: '2025'
        },
        {
            id: 'classic_islamic',
            title: isRTL ? 'النجف الإسلامي والكلاسيكي' : 'Islamic & Classic Chandeliers',
            description: isRTL
                ? 'مجموعة من منتجات مصنعنا من الثريات الإسلامية والكلاسيكية المصنوعة بدقة عالية، وتشمل ثريات المساجد الهندسية، والنجف الكريستالي الفاخر، والفوانيس العربية المصنوعة بالكامل في مصنعنا.'
                : 'A selection of our factory-made Islamic and classic chandeliers, crafted with high precision, including geometric mosque chandeliers, luxury crystal pieces, and traditional Arabic lanterns—fully manufactured in-house.',
            image: '/projects-page/muslim/1d.webp',
            path: '/simple-projects/project1',
            category: isRTL ? 'منتجات المصنع' : 'Factory Products',
            year: '2025'
        },
        {
            id: 'modern_chandeliers',
            title: isRTL ? 'النجف المودرن والعصري' : 'Modern & Contemporary Chandeliers',
            description: isRTL
                ? 'مجموعة من منتجات مصنعنا من ثريات المودرن والعصرية، تشمل تصاميم الـ LED الحلقية، القطع الهندسية، النجف السبايدر، والإضاءات الخطية، وجميعها تُصنع داخل مصنعنا بمعايير جودة عالية.'
                : 'A collection of our factory-produced modern and contemporary chandeliers, including LED ring designs, geometric fixtures, spider chandeliers, and linear lighting—manufactured in-house with high quality standards.',
            image: '/projects-page/modern/29.jpg',
            path: '/simple-projects/project2',
            category: isRTL ? 'منتجات المصنع' : 'Factory Products',
            year: '2025'
        },

        {
            id: 'project3',
            title: isRTL ? 'متحف البحر الاحمر' : 'Red Sea Museum',
            description: isRTL
                ? 'تركيب نجفة كريستال ونحاس علي مساحة 220 متر باعلي معايير الجودة وفي زمن قياسي'
                : 'Installation of a crystal and copper chandelier on an area of ​​220 square meters with the highest quality standards and in record time',
            image: '/News/finish/preview.jpg',
            path: '/simple-projects/project3',
            category: isRTL ? 'مشاريع' : 'Projects',
            year: '2025'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            {/* Video Intro Overlay */}
            {!videoEnded && selectedVideo && (
                <motion.div
                    key={videoKey}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: videoEnded ? 0 : 1 }}
                    transition={{ duration: 0.6 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ pointerEvents: videoEnded ? 'none' : 'auto' }}
                >
                    {/* Blurred Background */}
                    <motion.div
                        initial={{ filter: 'blur(20px)' }}
                        animate={{ filter: videoEnded ? 'blur(0px)' : 'blur(20px)' }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-white"
                    >
                        <div className="pt-24 pb-20 min-h-screen opacity-50">
                            <div className="container-custom">
                                <div className={`text-center mb-16 ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
                                        {isRTL ? 'مشروعاتنا' : 'Our Projects'}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 flex items-center justify-center"
                    >
                        <video
                            key={selectedVideo} // مفتاح فريد لكل فيديو
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                            className="max-h-screen shadow-2xl rounded-lg"
                            style={{ maxWidth: '90vw' }}
                        >
                            <source src={selectedVideo} type="video/mp4" />
                        </video>
                    </motion.div>

                    {/* Control Buttons */}
                    {showSkip && (
                        <>
                            {/* Close Button (X) */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                onClick={handleSkip}
                                className={`fixed top-8 ${isRTL ? 'left-8' : 'right-8'} z-20 bg-gold/90 hover:bg-gold text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-90 group`}
                                aria-label={isRTL ? 'إغلاق' : 'Close'}
                            >
                                <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {/* Skip Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                onClick={handleSkip}
                                className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} z-20 bg-white/90 hover:bg-white text-charcoal px-6 py-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 group`}
                            >
                                {isRTL ? 'تخطي' : 'Skip'}
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </>
                    )}
                </motion.div>
            )}

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="pt-24 pb-20 min-h-screen"
            >
                <div className="container-custom">
                    <motion.div
                        className={`text-center mb-16 ${isRTL ? 'font-tajawal' : 'font-playfair'}`}
                        variants={headerVariants}
                        initial="hidden"
                        animate={videoEnded ? "visible" : "hidden"}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
                            {isRTL ? 'مشروعاتنا' : 'Our Projects'}
                        </h1>
                        <div className="w-24 h-1 gold-gradient mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl max-w-4xl mx-auto text-charcoal-light leading-relaxed">
                            {isRTL
                                ? 'استكشف مجموعة من المشاريع المميزة '
                                : 'Explore our collection projects'}
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate={videoEnded ? "visible" : "hidden"}
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="group"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={project.path} className="block">
                                    <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 group-hover:from-black/20 group-hover:to-black/50 transition-all duration-700"></div>

                                            <div className="absolute top-4 right-4 bg-gold text-white px-3 py-2 text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
                                                {project.category}
                                            </div>

                                            <div className="absolute top-4 left-4 bg-white/90 text-gold px-3 py-1 text-sm font-bold rounded-full shadow-md">
                                                {project.year}
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/10 to-gold/40 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex items-center justify-center">
                                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                                    <div className="w-14 h-14 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center shadow-lg">
                                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 lg:p-8">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl lg:text-2xl font-bold text-charcoal group-hover:text-gold transition-colors leading-tight">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <p className="text-charcoal-light text-sm lg:text-base mb-6 leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                                                <span className="text-gold font-semibold text-sm lg:text-base flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                                    {isRTL ? 'عرض المزيد' : 'View Project'}
                                                    <svg
                                                        className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform duration-300`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={videoEnded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="bg-cream rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundSize: '40px 40px'
                                }}></div>
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-charcoal">
                                    {isRTL ? 'هل لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
                                </h2>
                                <p className="max-w-3xl mx-auto mb-8 text-charcoal-light text-lg md:text-xl leading-relaxed">
                                    {isRTL
                                        ? 'نحن نقدم حلول إضاءة مبتكرة تناسب متطلبات مشروعك. اتصل بنا اليوم لمناقشة أفكارك.'
                                        : 'We offer innovative lighting solutions tailored to your project requirements. Contact us today to discuss your ideas.'}
                                </p>
                                <Link
                                    to="/contact"
                                    className="btn-primary inline-block transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-4 text-lg font-semibold rounded-full"
                                >
                                    {isRTL ? 'تواصل معنا' : 'Get in Touch'}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;