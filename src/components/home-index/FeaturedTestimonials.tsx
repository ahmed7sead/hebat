import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import TestimonialCard from './../TestimonialCard';
import { useIsMobile } from '../../hooks/use-mobile';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useToast } from "../../hooks/use-toast";

const FeaturedTestimonials: React.FC = () => {
  const { isRTL, language } = useLanguage();
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3); // Default visible cards for desktop
  const carouselRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Add liked testimonials state
  const [likedTestimonials, setLikedTestimonials] = useState<number[]>([]);

  const testimonials = [
    {
      id: 1,
      nameAr: "محمد العمري",
      nameEn: "Mohammed Al-Amri",
      roleAr: "مالك فندق",
      roleEn: "Hotel Owner",
      textAr: "تم تركيب أكثر من 15 ثريا في فندقنا. كانت الجودة استثنائية والخدمة احترافية للغاية. أوصي بشدة بخدماتهم.",
      textEn: "They installed more than 15 chandeliers in our hotel. The quality was exceptional and the service was highly professional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 2,
      nameAr: "سارة الفيصل",
      nameEn: "Sarah Al-Faisal",
      roleAr: "مصممة داخلية",
      roleEn: "Interior Designer",
      textAr: "أتعامل معهم في كل مشاريعي. يقدمون ثريات فاخرة بتصاميم فريدة وخدمة تركيب محترفة. شريك موثوق للمشاريع الراقية.",
      textEn: "I work with them on all my projects. They provide luxury chandeliers with unique designs and professional ",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      nameAr: "خالد العتيبي",
      nameEn: "Khalid Al-Otaibi",
      roleAr: "صاحب قصر",
      roleEn: "Palace Owner",
      textAr: "ثريات استثنائية وخدمة لا مثيل لها. قاموا بتصميم وتركيب الثريات في جميع أنحاء القصر بدقة واحترافية عالية.",
      textEn: "Exceptional chandeliers and unmatched service. They designed and installed chandeliers .",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      nameAr: "نورة الشمري",
      nameEn: "Noura Al-Shammari",
      roleAr: "مديرة مركز تجاري",
      roleEn: "Mall Manager",
      textAr: "كان التعاون مع هبات أيست تجربة رائعة. قدموا لنا حلولاً مبتكرة لإضاءة المركز التجاري بأكمله، ونالت إعجاب جميع الزوار.",
      textEn: "Collaborating with Hebat East was a wonderful experience. They provided innovative lighting solutions .",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 5,
      nameAr: "فهد القحطاني",
      nameEn: "Fahad Al-Qahtani",
      roleAr: "مطور عقاري",
      roleEn: "Real Estate Developer",
      textAr: "نقدر الاحترافية التي أظهرها فريق هبات أيست في تنفيذ مشروعنا. تم تسليم الثريات في الموعد المحدد وبمستوى جودة يفوق التوقعات.",
      textEn: "We appreciate the professionalism shown by the Hebat East team in executing our project.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  // Handle liking a testimonial
  const handleLikeTestimonial = (id: number, name: string) => {
    // Toggle liked status
    if (likedTestimonials.includes(id)) {
      setLikedTestimonials(prev => prev.filter(item => item !== id));
      toast({
        title: isRTL ? "تم إلغاء الإعجاب" : "Like removed",
        description: isRTL
          ? `تم إلغاء إعجابك بشهادة ${name}`
          : `You removed your like from ${name}'s testimonial`,
        variant: "default",
        duration: 2000,
      });
    } else {
      setLikedTestimonials(prev => [...prev, id]);
      toast({
        title: isRTL ? "شكراً لإعجابك!" : "Thanks for your like!",
        description: isRTL
          ? `لقد أعجبت بشهادة ${name}`
          : `You liked ${name}'s testimonial`,
        variant: "default",
        duration: 2000,
      });
    }
  };


  // Determine number of visible cards based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) { // 2xl breakpoint
        setVisibleCards(4);
      } else if (width >= 1280) { // xl breakpoint
        setVisibleCards(3);
      } else if (width >= 1024) { // lg breakpoint
        setVisibleCards(3);
      } else if (width >= 768) { // md breakpoint
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For mobile, let's create an improved testimonial slider
  const MobileTestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const autoplayIntervalRef = useRef<number | null>(null);

    // Auto-loop functionality
    React.useEffect(() => {
      if (autoplayEnabled) {
        autoplayIntervalRef.current = window.setInterval(() => {
          goToNextSlide();
        }, 5000); // Change slide every 5 seconds
      }

      return () => {
        if (autoplayIntervalRef.current) {
          clearInterval(autoplayIntervalRef.current);
        }
      };
    }, [autoplayEnabled, activeIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart(e.targetTouches[0].clientX);
      // Pause autoplay during user interaction
      setAutoplayEnabled(false);
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
          goToNextSlide();
        }
        if (isRightSwipe) {
          goToPrevSlide();
        }
      }

      // Re-enable autoplay after user interaction
      setTimeout(() => setAutoplayEnabled(true), 3000);
      setTouchStart(0);
      setTouchEnd(0);
    };

    const goToNextSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToPrevSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    };

    return (
      <div className="relative px-4">
        <div
          className="overflow-hidden rounded-lg shadow-md"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${isRTL ? activeIndex * 100 : -activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <div className="relative">
                  <TestimonialCard
                    name={language === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                    role={language === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                    text={language === 'ar' ? testimonial.textAr : testimonial.textEn}
                    image={testimonial.image}
                    isRTL={isRTL}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeTestimonial(
                        testimonial.id,
                        language === 'ar' ? testimonial.nameAr : testimonial.nameEn
                      );
                    }}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full  shadow-md transition-all duration-300 hover:bg-red-50"
                    aria-label={isRTL ? "إعجاب" : "Like"}
                  >
                    <Heart
                      size={16}
                      className={`transition-colors duration-300 ${likedTestimonials.includes(testimonial.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                        }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons - Fixed to handle RTL/LTR correctly */}
        <div className="flex justify-center mt-6 mb-2 px-2">
          {/* Previous button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              goToPrevSlide();
              setAutoplayEnabled(false);
              setTimeout(() => setAutoplayEnabled(true), 3000);
            }}
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-white"
            disabled={isTransitioning}
            aria-label={isRTL ? "السابق" : "Previous"}
          >
            {/* FIXED: Using different icons based on language direction to ensure arrows point outward */}
            {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          {/* Indicators in the middle */}
          <div className="flex justify-center items-center mx-auto gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setActiveIndex(index);
                    setAutoplayEnabled(false);
                    setTimeout(() => {
                      setIsTransitioning(false);
                      setAutoplayEnabled(true);
                    }, 500);
                  }
                }}
                className={`transition-all duration-300 rounded-full ${index === activeIndex
                  ? 'w-6 h-2 bg-gold' // Elongated active indicator
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              goToNextSlide();
              setAutoplayEnabled(false);
              setTimeout(() => setAutoplayEnabled(true), 3000);
            }}
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-white"
            disabled={isTransitioning}
            aria-label={isRTL ? "التالي" : "Next"}
          >
            {/* FIXED: Using different icons based on language direction to ensure arrows point outward */}
            {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    );
  };

  // Enhanced Desktop Carousel with peek effect
  const DesktopTestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);
    const autoplayIntervalRef = useRef<number | null>(null);
    const carouselContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll functionality
    useEffect(() => {
      if (autoplayEnabled) {
        autoplayIntervalRef.current = window.setInterval(() => {
          goToNextSlide();
        }, 6000); // Change slides every 6 seconds
      }

      return () => {
        if (autoplayIntervalRef.current) {
          clearInterval(autoplayIntervalRef.current);
        }
      };
    }, [autoplayEnabled, activeIndex]);

    const goToNextSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((current) => (current + 1) % (testimonials.length - visibleCards + 1));
      setTimeout(() => setIsTransitioning(false), 600);
    };

    const goToPrevSlide = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((current) => {
        const newIndex = current - 1;
        return newIndex < 0 ? testimonials.length - visibleCards : newIndex;
      });
      setTimeout(() => setIsTransitioning(false), 600);
    };

    const goToSlide = (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 600);
    };

    // Calculate the maximum number of pages based on visible cards
    const maxPages = Math.max(1, testimonials.length - visibleCards + 1);

    return (
      <div
        className="relative px-4 pt-8 pb-16"
        onMouseEnter={() => setAutoplayEnabled(false)}
        onMouseLeave={() => setAutoplayEnabled(true)}
        ref={carouselContainerRef}
      >
        {/* Main Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(${isRTL ? activeIndex * (100 / visibleCards) : -activeIndex * (100 / visibleCards)}%)`,
              gap: '1rem', // Consistent gap between cards 
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-none transition-all duration-500"
                style={{
                  width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) / visibleCards}rem)`,
                }}
              >
                <div
                  className={`h-full transition-all duration-500 transform ${index >= activeIndex && index < activeIndex + visibleCards
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-70'
                    }`}
                >
                  <div className="relative">
                    <TestimonialCard
                      name={language === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                      role={language === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                      text={language === 'ar' ? testimonial.textAr : testimonial.textEn}
                      image={testimonial.image}
                      isRTL={isRTL}
                    />
                    {/* Heart like button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLikeTestimonial(
                          testimonial.id,
                          language === 'ar' ? testimonial.nameAr : testimonial.nameEn
                        );
                      }}
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-red-50 transform hover:scale-110"
                      aria-label={isRTL ? "إعجاب" : "Like"}
                    >
                      <Heart
                        size={20}
                        className={`transition-colors duration-300 ${likedTestimonials.includes(testimonial.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                          }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <div className="flex justify-between items-center w-full">
            {/* Previous button - Always on the left visually */}
            <button
              onClick={(e) => {
                e.preventDefault();
                goToPrevSlide();
                setAutoplayEnabled(false);
                setTimeout(() => setAutoplayEnabled(true), 3000);
              }}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-white transform hover:scale-110"
              disabled={isTransitioning}
              aria-label={isRTL ? "السابق" : "Previous"}
            >
              {/* FIXED: Using different icons based on language direction to ensure arrows point outward */}
              {isRTL ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
            </button>

            {/* Progress Bar and Indicators in the middle */}
            <div className="flex-grow max-w-md mx-4 self-center">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gold h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(activeIndex / (maxPages - 1)) * 100}%` }}
                ></div>
              </div>

              {/* Page Dots */}
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: maxPages }).map((_, index) => (
                  <button
                    key={`page-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!isTransitioning) {
                        goToSlide(index);
                        setAutoplayEnabled(false);
                        setTimeout(() => setAutoplayEnabled(true), 3000);
                      }
                    }}
                    className={`transition-all duration-300 rounded-full ${index === activeIndex
                      ? 'w-8 h-2 bg-gold' // Elongated active indicator
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next button - Always on the right visually */}
            <button
              onClick={(e) => {
                e.preventDefault();
                goToNextSlide();
                setAutoplayEnabled(false);
                setTimeout(() => setAutoplayEnabled(true), 3000);
              }}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-white transform hover:scale-110"
              disabled={isTransitioning}
              aria-label={isRTL ? "التالي" : "Next"}
            >
              {/* FIXED: Using different icons based on language direction to ensure arrows point outward */}
              {isRTL ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20  bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom mx-auto">
        <div className={`text-center mb-8 md:mb-12 ${isRTL ? 'rtl' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3 md:mb-4 animate-fade-in">
            {isRTL ? 'آراء عملائنا' : 'Customer Testimonials'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
            {isRTL
              ? 'تعرف على تجارب بعض عملائنا معنا وكيف ساعدناهم في تحقيق أهدافهم.'
              : 'Learn about some of our customers’ experiences and how we helped them achieve their goals.'}
          </p>
        </div>

        {isMobile ? (
          <MobileTestimonialSlider />
        ) : (
          <DesktopTestimonialCarousel />
        )}

        <div className="text-center mt-8 md:mt-10">
          <Link
            to="/testimonials"
            className="inline-block bg-transparent border-2 border-gold text-gold px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300 transform hover:scale-105 transition-transform duration-300"
          >
            {isRTL ? 'المزيد من آراء العملاء' : 'More Testimonials'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;