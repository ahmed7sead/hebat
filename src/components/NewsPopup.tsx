import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Newspaper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NewsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isRTL } = useLanguage();

  // =====================================================
  // News Popup Display Logic:
  // 1- Auto-displays after 2.5 seconds of user staying on the page
  // 2- OR displays after 3 seconds when user reaches "featured-collection" section
  // 3- Shows only once per session to avoid annoying users
  // =====================================================
  useEffect(() => {
    let heroTimeoutId: NodeJS.Timeout;
    let featuredTimeoutId: NodeJS.Timeout;
    let hasShown = false;

    // Hero section timer - 10 seconds
    heroTimeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        // Delay animation start for smoother entrance
        setTimeout(() => setIsAnimating(true), 555);
        hasShown = true;
      }
    }, 5555);

    // Create intersection observer to monitor featured collection section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'featured-collection' && !hasShown) {
            // Clear hero timer since user moved to featured section
            clearTimeout(heroTimeoutId);

            // Wait 3 seconds after user reaches featured collection section
            featuredTimeoutId = setTimeout(() => {
              if (!hasShown) {
                setIsVisible(true);
                // Delay animation start for smoother entrance
                setTimeout(() => setIsAnimating(true), 100);
                hasShown = true;
              }
            }, 3000);

            // Stop observing once triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Triggers when 30% of section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Find and observe the featured collection section
    const featuredSection = document.getElementById('featured-collection');
    if (featuredSection) {
      observer.observe(featuredSection);
    }

    return () => {
      observer.disconnect();
      if (heroTimeoutId) {
        clearTimeout(heroTimeoutId);
      }
      if (featuredTimeoutId) {
        clearTimeout(featuredTimeoutId);
      }
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 400);
  };

  // =====================================================
  // News Navigation Handler - Used when clicking image or button
  // Ensures navigation to top of news page and proper cleanup
  // =====================================================
  const handleNewsClick = () => {
    handleClose();
    // Auto-scroll to top of page after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Enhanced backdrop with gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-black/10 via-black/15 to-black/20 backdrop-blur-[2px] transition-all duration-500 ease-out ${isAnimating ? 'opacity-100 pointer-events-auto' : 'opacity-0'
          }`}
        onClick={handleClose}
      />

      {/* Enhanced popup card with side slide animation - Mobile Optimized */}
      <div className={`
        fixed 
        bottom-2 md:bottom-8 
        ${isRTL ? 'left-2 md:left-8' : 'right-2 md:right-8'} 
        w-80 sm:w-96 max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-4rem)] pointer-events-auto
        transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${isAnimating
          ? 'translate-y-0 translate-x-0 opacity-100 scale-100 rotate-0'
          : `translate-y-8 ${isRTL ? 'translate-x-[-20px]' : 'translate-x-[20px]'} opacity-0 scale-95 rotate-1`
        }
      `}>
        <Card className="bg-white/95 backdrop-blur-md border-2 border-gold/30 shadow-2xl overflow-hidden relative">

          <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 animate-pulse rounded-lg" />

          <CardContent className="p-0 relative z-10 bg-white/90 rounded-lg">
            {/* Card header with enhanced styling - Mobile Optimized */}
            <div className={`
              flex items-center justify-between p-3 sm:p-5 pb-2 sm:pb-3 relative
              ${isRTL ? 'flex-row-reverse' : ''}
            `}>

              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent rounded-t-lg" />

              <div className={`flex items-center gap-3 relative z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="p-2.5 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full relative">
                  <Newspaper className="w-5 h-5 text-gold " />
                  <div className="absolute inset-0 bg-gold/5 rounded-full " />
                </div>

                <h3 className="font-semibold text-charcoal text-base relative">
                  {isRTL ? 'تسليم مشروع جديد' : 'New project delivery'}
                </h3>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="h-9 w-9 p-0 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-300 hover:scale-110 relative z-10"
              >
                <X className="w-4 h-4" />
              </Button>

            </div>

            {/* Enhanced news content - Mobile Optimized */}
            <div className="px-3 sm:px-5 pb-3 sm:pb-5">
              <div className="space-y-4">
                {/* =====================================================
                    News Image - Clickable link that navigates to news page
                    Ensures user goes to top of news page on click
                    Mobile Optimized Height
                    ===================================================== */}
                <Link to="/news/Makarem" onClick={handleNewsClick}>
                  <div className="relative overflow-hidden rounded-xl group cursor-pointer mt-1 mb-4">
                    <img
                      src="News/makarem/2t.jpg"
                      alt="Latest News"
                      className="w-full h-40 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="text-white text-sm font-medium bg-gradient-to-r from-red-500 to-red-600 px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                        {isRTL ? 'الان 🚨' : '🚨 NOW'}
                      </span>
                    </div>

                    {/* Sparkling star effect */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </Link>

                {/* Enhanced news title */}
                <h4 className={`
                  font-medium text-charcoal leading-tight text-base transition-colors duration-300 hover:text-gold
                  ${isRTL ? 'text-right font-tajawal' : 'text-left font-playfair'}
                `}>
                  {isRTL
                    ? 'إنجاز استثنائي: فندق مكارم مدينة بالمدينة المنورة!'
                    : 'Outstanding Achievement: Makarim Madina Hotel in MADINA!'
                  }
                </h4>

                {/* Enhanced news description */}
                <p className={`
                  text-gray-600 text-sm leading-relaxed transition-colors duration-300
                  ${isRTL ? 'text-right font-tajawal' : 'text-left'}
                `}>
                  {isRTL
                    ? 'أنجزنا كافة أعمال المعادن والإضاءة وتركيب النجف الفاخرة في فندق مكارم مدينة! تنفيذ احترافي بأعلى معايير الجودة والدقة...'
                    : 'We completed all metal works, lighting and luxury chandelier installations at Makarim Madina Hotel! Professional execution with the highest standards of quality and precision...'
                  }
                </p>

                {/* =====================================================
                    "Read More" Button - Navigates user to news page
                    Includes auto-scroll to top functionality
                    ===================================================== */}
                <Link to="/news/Makarem" onClick={handleNewsClick}>
                  <Button
                    className={`
                      w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold 
                      text-white text-sm h-10 transition-all duration-500 
                      hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/25
                      active:scale-[0.98] relative overflow-hidden mt-5 group
                      ${isRTL ? 'font-tajawal' : ''}
                    `}
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <span className="relative z-10">{isRTL ? 'شاهد المشروع' : 'See details'}</span>
                    <ExternalLink className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'} relative z-10 transition-transform duration-300 group-hover:translate-x-1`} />
                  </Button>
                </Link>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Enhanced floating notification elements - Red bouncing ball with reduced speed */}
        <div className={`
          absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} 
          w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full 
          shadow-lg flex items-center justify-center
        `}
          style={{
            animation: 'bounce 2s infinite' // Reduced bounce speed from 1s to 2s
          }}>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>

      </div>
    </div >
  );
};

export default NewsPopup;