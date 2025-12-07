import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useIsMobile } from '../../hooks/use-mobile';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// بيانات آخر المشاريع والأخبار
const latestItems = [
    {
        id: 1,
        type: 'news' as const,
        titleAr: "تسليم مشروع ضاحية سدايم",
        titleEn: "Completion of the Sadaim suburb project",
        descriptionAr: "نفتخر بانجاز تركيب نجفة مسجد ضاحية سدايم في وقت قياسي",
        descriptionEn: "We are proud to have completed the installation of the chandelier for the Sadaim Suburb Mosque in record time.",
        image: "/projects-page/1.jpeg",
        hoverImage: "/projects-page/2.jpeg",
        path: '/news/ministry-partnership',
    },

    {
        id: 2,
        type: 'news',
        titleAr: "مشروع متحف البحر الاحمر",
        titleEn: "Red Sea Museum Project",
        descriptionAr: "بدء الاعمال التركيبية لمشروع اضاءة المتحف الاحمر",
        descriptionEn: "Starting work on the Red Sea Museum lighting project",
        image: "/projects-page/3.jfif",
        hoverImage: "/projects-page/4.png",
        path: '/news/ritz-carlton',
    }, {
        id: 3,
        type: 'project',
        titleAr: "مشروع فندق مكارم مدينة",
        titleEn: "Makarem Medina Hotel",
        descriptionAr: "الانتهاء من مشروع فندق مكارم مدينة 2025",
        descriptionEn: "Completion of the Makarem Madina Hotel project in 2025",
        image: "/projects-page/4t.jpeg",
        hoverImage: "/projects-page/3t.jpeg",
        path: '/projects/Makarem',
    },
    {
        id: 4,
        type: 'project',
        titleAr: "مشروع اضاءة مسجد العجلان",
        titleEn: "Al-Ajlan Mosque lighting project",
        descriptionAr: "الانتهاء من احدث مشاريعنا جامع العجلان في الرياض 2025",
        descriptionEn: "Our latest project is Al-Ajlan Mosque Nov 2025",
        image: "/projects-page/5.jpeg",
        hoverImage: "/projects-page/6.jpeg",
        path: '/projects/mosque4',
    }
];

// مكون بطاقة المشروع أو الخبر
const NewsProjectCard: React.FC<{
    title: string;
    description: string;
    image: string;
    hoverImage: string;
    type: 'news' | 'project';
    isRTL: boolean;
}> = ({ title, description, image, hoverImage, type, isRTL }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-[400px] md:h-full mt-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden h-56 md:h-60">
                {/* Main Image */}
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                        }`}
                />

                {/* Hover Image */}
                <img
                    src={hoverImage}
                    alt={title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                        }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Type Badge */}
                <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                    <span className="bg-white/95 backdrop-blur-sm text-charcoal px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        {type === 'news'
                            ? (isRTL ? 'خبر' : 'News')
                            : (isRTL ? 'مشروع' : 'Project')
                        }
                    </span>
                </div>
            </div>

            {/* Content - محسّن ومنظم */}
            <div className={`p-5 md:p-6 flex flex-col h-[calc(100%-14rem)] md:h-[calc(100%-15rem)] ${isRTL ? 'text-right' : 'text-left'}`}>
                {/* Title */}
                <h3 className={`text-lg md:text-xl font-bold text-charcoal mb-2 leading-tight ${isRTL ? 'font-arabic' : ''}`}>
                    {title}
                </h3>

                {/* Description */}
                <p className={`text-sm text-gray-600 mb-4 line-clamp-2 flex-grow ${isRTL ? 'font-arabic' : ''}`}>
                    {description}
                </p>

                {/* زر بسيط صغير واحترافي */}
                <button
                    className={`
                        inline-flex items-center gap-1.5
                        px-4 py-2
                        bg-gold/10 group-hover:bg-gold
                        text-gold group-hover:text-white
                        text-xs font-medium
                        rounded-lg
                        transition-all duration-300
                        border border-gold/20 group-hover:border-gold
                        ${isRTL ? 'flex-row-reverse font-arabic self-end' : 'self-start'}
                    `}
                >
                    <span>
                        {type === 'news'
                            ? (isRTL ? 'قراءة' : 'Read')
                            : (isRTL ? 'عرض' : 'View')
                        }
                    </span>
                    <ArrowRight
                        size={14}
                        className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isRTL ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>

            {/* Subtle Border Effect */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-gold/30 transition-all duration-500 pointer-events-none" />
        </div>
    );
};

const LatestNewsProjects: React.FC = () => {
    const { isRTL, language } = useLanguage();
    const isMobile = useIsMobile();
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Handle touch events for swiping on mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (!isTransitioning) {
            if (isLeftSwipe) {
                nextSlide();
            }
            if (isRightSwipe) {
                prevSlide();
            }
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    // Mobile slide functionality
    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((current) => (current + 1) % latestItems.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((current) => (current - 1 + latestItems.length) % latestItems.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container-custom mx-auto">
                {/* Enhanced Header */}
                <div className={`text-center mb-12 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
                    <div className="inline-block mb-4">
                        <span className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
                            {isRTL ? 'آخر الأخبار والمشاريع' : 'Latest News & Projects'}
                        </span>
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-16 ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? 'تصفح أحدث مشاريعنا وأخبارنا' : 'Browse Our Latest Projects & News'}
                    </h2>
                </div>

                {isMobile ? (
                    <div className="px-4 relative">
                        {/* Enhanced Mobile Carousel */}
                        <div
                            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className="flex transition-transform duration-600 ease-out h-[400px]"
                                style={{ transform: `translateX(${isRTL ? activeIndex * 100 : -activeIndex * 100}%)` }}
                            >
                                {latestItems.map((item) => (
                                    <div key={item.id} className="w-full flex-shrink-0 sm:p-0">
                                        <Link to={item.path} className="block h-full">
                                            <NewsProjectCard
                                                title={language === 'ar' ? item.titleAr : item.titleEn}
                                                description={language === 'ar' ? item.descriptionAr : item.descriptionEn}
                                                image={item.image}
                                                hoverImage={item.hoverImage}
                                                type={item.type}
                                                isRTL={isRTL}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced Mobile Controls */}
                            <div className="absolute inset-x-0 top-[38%] flex justify-between px-2 pointer-events-none">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-xl text-charcoal pointer-events-auto transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95"
                                    aria-label={isRTL ? "التالي" : "Previous"}
                                >
                                    {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-xl text-charcoal pointer-events-auto transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95"
                                    aria-label={isRTL ? "السابق" : "Next"}
                                >
                                    {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Enhanced Indicators */}
                        <div className="flex justify-center mt-6 gap-3">
                            {latestItems.map((_, index) => (
                                <button
                                    key={`indicator-${index}`}
                                    onClick={() => {
                                        if (!isTransitioning) {
                                            setIsTransitioning(true);
                                            setActiveIndex(index);
                                            setTimeout(() => setIsTransitioning(false), 600);
                                        }
                                    }}
                                    className={`transition-all duration-500 rounded-full ${index === activeIndex
                                        ? 'w-8 h-3 bg-gold to-amber-400 shadow-lg'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">
                        {latestItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="animate-fade-in-up sm:px-0"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <Link to={item.path} className="block h-full">
                                    <NewsProjectCard
                                        title={language === 'ar' ? item.titleAr : item.titleEn}
                                        description={language === 'ar' ? item.descriptionAr : item.descriptionEn}
                                        image={item.image}
                                        hoverImage={item.hoverImage}
                                        type={item.type}
                                        isRTL={isRTL}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default LatestNewsProjects;