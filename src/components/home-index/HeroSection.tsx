import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useIsMobile } from '../../hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  image: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  projectLink: string;
  projectName: {
    ar: string;
    en: string;
  };
}

const HeroSection: React.FC = () => {
  const { isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useIsMobile();
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Carousel slides data
  const slides: CarouselSlide[] = [

     {
      id: 4,
      image: 'News/makarem/hero.png',
      title: {
        ar: 'فندق مكارم مدينة',
        en: 'Makarem Al Madinah Hotel'
      },
      description: {
        ar: 'مشروع تصميم وتصنيع وتركيب معادن واضاءة  فندق مكارم بالمدينة المنورة',
        en: 'Design, manufacturing, and installation of metals and lighting for the Makarem Hotel in Madinah'
      },
      projectLink: '/projects/Makarem',
      projectName: {
        ar: ' المشروع',
        en: ' project'
      }
    },
    {
      id: 1,
      image: '/Logo_and_identity/hero-worth.webp',
      title: {
        ar: 'Worth Hotel  جدة ',
        en: 'Worth Hotel'
      },
      description: {
        ar: 'مشروع فندق وورث هوتيل وتركيب اطول نجفة بالعالم',
        en: 'Worth Hotel project and installation of the tallest chandelier in the world'
      },
      projectLink: '/projects/commercial-plaza',
      projectName: {
        ar: ' المشروع',
        en: ' project'
      }
    },
    {
      id: 2,
      image: 'Logo_and_identity/hero-Rixos.webp',
      title: {
        ar: 'فندق Rixos ',
        en: 'Rixos Hotel'
      },
      description: {
        ar: 'مشروع اضاءة فندق ريسكوس بالكامل',
        en: 'Rixos Hotel Full Lighting Project Modern & Elegant Designs'
      },
      projectLink: '/projects/modern-designs',
      projectName: {
        ar: ' المشروع',
        en: ' project'
      }
    },
    {
      id: 3,
      image: 'Logo_and_identity/hero-crown.webp',
      title: {
        ar: 'كروان بلازا هوتيل',
        en: 'Crowne plaza hotel'
      },
      description: {
        ar: 'مشروع اضاءة فندق تاج بلازا',
        en: 'Corwn Plaza Hotel Lighting'
      },
      projectLink: '/projects/commercial-plaza',
      projectName: {
        ar: ' المشروع',
        en: ' project'
      }
    }
   
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Function to start/restart the auto-slide timer
  const startAutoSlide = () => {
    // Clear any existing interval
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    // Start new interval
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Changed to 6 seconds as requested
  };

  // Function to stop the auto-slide timer
  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  // Start auto-slide when component mounts
  useEffect(() => {
    startAutoSlide();

    // Cleanup on unmount
    return () => {
      stopAutoSlide();
    };
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Restart the timer after manual navigation
    startAutoSlide();
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Restart the timer after manual navigation
    startAutoSlide();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Restart the timer after manual navigation
    startAutoSlide();
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center relative overflow-hidden">
      {/* Simple and Modern Carousel Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
              }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className={`absolute top-1/2 -translate-y-1/2 z-30 group ${isRTL ? 'right-6 md:right-8' : 'left-6 md:left-8'
          } opacity-80 hover:opacity-100`}
        aria-label="Previous slide"
      >
        <div className="relative p-3 md:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-2xl group-hover:shadow-gold/20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {isRTL ? (
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>
      </button>

      <button
        onClick={handleNextSlide}
        className={`absolute top-1/2 -translate-y-1/2 z-30 group ${isRTL ? 'left-6 md:left-8' : 'right-6 md:right-8'
          } opacity-80 hover:opacity-100`}
        aria-label="Next slide"
      >
        <div className="relative p-3 md:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-2xl group-hover:shadow-gold/20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {isRTL ? (
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>
      </button>

      {/* Enhanced Content with better animations */}
      <div className="container-custom mx-auto relative z-20 pt-16 md:pt-24 px-4 md:px-6">
        <div className={`max-w-4xl ${isRTL ? 'text-right' : 'text-left'} mx-auto md:mx-0`}>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 transition-all duration-800 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${isMobile ? 'text-center' : ''}`}
            key={`title-${currentSlide}`}
          >
            {isRTL ? currentSlideData.title.ar : currentSlideData.title.en}
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-100 mb-8 md:mb-10 transition-all duration-800 ease-out delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${isMobile ? 'text-center' : ''}`}
            key={`desc-${currentSlide}`}
          >
            {isRTL ? currentSlideData.description.ar : currentSlideData.description.en}
          </p>

          <div
            className={`flex flex-wrap gap-4 md:gap-6 ${isMobile ? 'justify-center' : isRTL ? 'justify-end' : 'justify-start'
              } transition-all duration-800 ease-out delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            key={`buttons-${currentSlide}`}
          >
            <Link
              to={currentSlideData.projectLink}
              className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/30 text-sm md:text-base font-medium"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">
                {isRTL
                  ? `شاهد ${currentSlideData.projectName.ar}`
                  : `View ${currentSlideData.projectName.en}`}
              </span>
            </Link>

            <Link
              to="/gallery"
              className="group relative overflow-hidden bg-transparent border-2 border-white/80 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white hover:text-charcoal transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm text-sm md:text-base font-medium"
            >
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10 transition-colors duration-300">
                {isRTL ? 'شاهد منتجات مصنعنا' : 'Explore Our Factory Products'}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-24 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${index === currentSlide
                ? 'w-8 h-3 bg-gold rounded-full shadow-lg shadow-gold/50'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full hover:scale-110'
                } cursor-pointer`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gold rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Slide Counter */}
      <div className="absolute bottom-8 md:bottom-10 right-6 md:right-8 z-30">
        <div className="bg-black/30 backdrop-blur-md text-white text-sm font-medium px-2 py-2 rounded-full border border-white/20 shadow-lg">
          <span className="text-gold font-bold">{currentSlide + 1}</span>
          <span className="text-white/70 mx-2">/</span>
          <span className="text-white/90">{slides.length}</span>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-gold via-gold-light to-gold opacity-80"></div>
    </section>
  );
};

export default HeroSection;