import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollObserver from '../../components/home-index/ScrollObserver';

const HeroSection = () => {
  const { isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Hero carousel images - 4 images as requested
  const heroImages = [{
    src: 'projects-page/Interior/hero1.jpg',
    title: isRTL ? 'صالة معيشة فاخرة' : 'Luxury Living Room'
  }, {
    src: 'projects-page/Interior/hero2.jpg',
    title: isRTL ? 'تصميم معاصر' : 'Contemporary Design'
  }, {
    src: 'projects-page/Interior/hero3.jpg',
    title: isRTL ? 'غرفة معيشة أنيقة' : 'Elegant Living Space'
  }, {
    src: 'projects-page/Interior/hero4.jpg',
    title: isRTL ? 'تصميم داخلي راقي' : 'Sophisticated Interior'
  }];

  // Function to start/restart the auto-slide timer
  const startAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  // Function to stop the auto-slide timer
  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  // Auto-play functionality for hero carousel with restart timer on manual navigation
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [heroImages.length]);

  // Scroll to portfolio section
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Manual navigation with timer restart
  const goToPrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
    startAutoSlide();
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroImages.length);
    startAutoSlide();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoSlide();
  };

  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center relative font-bold">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
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
        onClick={goToNextSlide}
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

      {/* Enhanced Content */}
      <div className="container-custom mx-auto relative z-20 pt-16 md:pt-24 px-4 md:px-6">
        <div className={`max-w-4xl ${isRTL ? 'text-right mx-auto md:mx-0' : 'text-left mx-auto md:mx-0'}`}>
          <ScrollObserver animation="fade-up" delay={200}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                {isRTL ? 'التصميم الداخلي' : 'Interior Design'}
              </span>
            </h1>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-gray-100 mb-8 md:mb-10 max-w-3xl leading-relaxed">
              {isRTL ? 'نحول مساحاتكم إلى أعمال فنية تعكس شخصيتكم وتلبي احتياجاتكم بأحدث معايير التصميم العالمية' : 'We transform your spaces into works of art that reflect your personality and meet your needs with the latest international design standards'}
            </p>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" delay={600}>
            <div className={`flex flex-wrap gap-4 md:gap-6 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <button
                onClick={scrollToPortfolio}
                className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/30 text-sm md:text-base font-bold"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center">
                  {isRTL ? 'استكشف التصاميم' : 'Explore Designs'}
                  {isRTL ? <ArrowLeft className="mr-2 w-4 h-4" /> : <ArrowRight className="ml-2 w-4 h-4" />}
                </span>
              </button>

              <button className="group relative overflow-hidden bg-transparent border-2 border-white/80 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white hover:text-charcoal transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm text-sm md:text-base font-bold">
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 transition-colors duration-300">
                  {isRTL ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
                </span>
              </button>
            </div>
          </ScrollObserver>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-24 md:bottom-20 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-black/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          {heroImages.map((_, index) => (
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
        <div className="bg-black/30 backdrop-blur-md text-white text-sm font-medium px-3 py-2 rounded-full border border-white/20 shadow-lg">
          <span className="text-gold font-bold">{currentSlide + 1}</span>
          <span className="text-white/70 mx-2">/</span>
          <span className="text-white/90">{heroImages.length}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;