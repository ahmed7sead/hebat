import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useIsMobile } from '../../hooks/use-mobile';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// Updated sample featured collection data with categories, hover images, and unique links
const collectionItems = [
  {
    id: 1,
    titleAr: "ثريا كريستال عصرية",
    titleEn: "Modern Crystal Chandelier",
    categoryAr: "فندق وورث",
    categoryEn: "Worth Hoter",
    image: "/projects-page/13.webp",
    hoverImage: "/projects-page/14.webp",
    path: '/projects/commercial-plaza',
  },
  {
    id: 2,
    titleAr: "نجفة  مورانو الوردية",
    titleEn: "Murano Pink Chandelier",
    categoryAr: "فندق ريكسوس جدة",
    categoryEn: "Rixos Hotel",
    image: "/projects-page/15.jpg",
    hoverImage: "/projects-page/16.webp",
    path: '/projects/rixos',
  },
  {
    id: 3,
    titleAr: "نجفة طراز عثماني",
    titleEn: "Ottoman chandelier mosque",
    categoryAr: " نجف أسلامي ",
    categoryEn: "Islamic Chandeliers",
    image: "/projects-page/17.webp",
    hoverImage: "/projects-page/18.JPG",
    path: '/simple-projects/project1',
  },
  {
    id: 4,
    titleAr: "نجف كريستال عصري",
    titleEn: "Palace Crystal Chandelier",
    categoryAr: "منتجات مصنعنا",
    categoryEn: "Modern Chandeliers",
    image: "/projects-page/19.webp",
    hoverImage: "/projects-page/20.webp",
    path: '/simple-projects/project2',
  }
];

// Enhanced Product Card Component
const EnhancedProductCard: React.FC<{
  title: string;
  category: string;
  image: string;
  hoverImage: string;
  isRTL: boolean;
}> = ({ title, category, image, hoverImage, isRTL }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-[420px] md:h-full "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-72 md:h-64">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* "View Project" Badge - Top Left Corner */}
        <div className={`absolute top-3  ${isRTL ? 'right-3' : 'left-3'} opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500`}>
          <div className={`flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className={`text-gold text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'تصفح المشروع' : 'View Project'}
            </span>
            <ArrowUpRight size={14} className="text-gold" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 md:p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs md:text-sm px-3 py-1 rounded-full font-medium transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg md:text-xl font-bold text-charcoal mb-2 ${isRTL ? 'font-arabic' : ''}`}>
          {title}
        </h3>

        {/* Animated Underline */}
        <div className="w-0 h-0.5 bg-gradient-to-r from-gold to-amber-400 transition-all duration-500 group-hover:w-full" />
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-gold/20 transition-all duration-500" />
    </div>
  );
};

const FeaturedCollection: React.FC = () => {
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
    setActiveIndex((current) => (current + 1) % collectionItems.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current - 1 + collectionItems.length) % collectionItems.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom mx-auto">
        {/* Enhanced Header */}
        <div className={`text-center mb-12 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
          <div className="inline-block mb-4">
            <span className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
              {isRTL ? 'تشكيلة مميزة' : 'Featured Collection'}
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-16 ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'تشكيلة أعمالنا المميزة' : 'Our Distinctive Collection'}
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
                {collectionItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 sm:p-0">
                    <Link to={item.path} className="block h-full">
                      <EnhancedProductCard
                        title={language === 'ar' ? item.titleAr : item.titleEn}
                        category={language === 'ar' ? item.categoryAr : item.categoryEn}
                        image={item.image}
                        hoverImage={item.hoverImage}
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
              {collectionItems.map((_, index) => (
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
            {collectionItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in-up sm:px-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link to={item.path} className="block h-full">
                  <EnhancedProductCard
                    title={language === 'ar' ? item.titleAr : item.titleEn}
                    category={language === 'ar' ? item.categoryAr : item.categoryEn}
                    image={item.image}
                    hoverImage={item.hoverImage}
                    isRTL={isRTL}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-block bg-transparent mt-4 border-2 border-gold text-gold px-5 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
          >
            {isRTL ? 'عرض كافة التشكيلات' : 'View All Collections'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;