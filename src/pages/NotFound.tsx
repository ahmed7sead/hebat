import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";
import lottie from "lottie-web";
import notFoundAnimation from "./404-animation.json";

/**
 * NotFound component displays a 404 error page when users access invalid routes
 * Clean, professional design with bilingual support and Lottie animation
 */

const NotFound = () => {
  const location = useLocation();
  const { isRTL } = useLanguage();
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize Lottie animation
  useEffect(() => {
    if (animationContainer.current) {
      // فعل هذا الكود عند إضافة مكتبة lottie-web
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: notFoundAnimation,
      });

      return () => {
        animation.destroy();
      };

    }
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream py-12">
      <div className="max-w-md mx-auto px-6 text-center">

        {/* Lottie Animation - تحكم كامل في الأبعاد */}
        <div className="mb-8 mt-16 flex justify-center">
          <div
            ref={animationContainer}
            style={{
              width: '400px',     // عرض الانيميشن - غير هنا
              height: '400px',    // ارتفاع الانيميشن - غير هنا
              margin: '0 auto'
            }}
          >
          </div>
        </div>


        {/* Error Description */}
        <p className={`text-charcoal-light mb-8 text-sm leading-relaxed
          ${isRTL ? 'font-tajawal' : 'font-roboto'}`}>
          {isRTL
            ? "عذراً، الصفحة التي تبحث عنها غير متوفرة"
            : "Sorry, the page you're looking for doesn't exist"
          }
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Back to Home Button */}
          <a
            href="/"
            className={`inline-flex items-center justify-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-medium w-full
                     hover:bg-gold-dark transition-colors duration-200 
                     focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50
                     ${isRTL ? 'font-tajawal flex-row-reverse' : 'font-roboto'}`}
          >
            <Home size={18} />
            <span>{isRTL ? "العودة للصفحة الرئيسية" : "Back to Home"}</span>
          </a>

          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className={`inline-flex items-center justify-center gap-2 bg-white border border-gold-light text-gold px-6 py-3 rounded-lg font-medium w-full
                     hover:bg-gold-light/20 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50
                     ${isRTL ? 'font-tajawal flex-row-reverse' : 'font-roboto'}`}
          >
            {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            <span>{isRTL ? "العودة للصفحة السابقة" : "Go Back"}</span>
          </button>
        </div>

        {/* Simple decorative line */}
        <div className="mt-10">
          <div className="w-16 h-0.5 bg-gold-light mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;