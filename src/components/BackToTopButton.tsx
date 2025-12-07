import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

/**
 * BackToTopButton Component
 * 
 * A fancy button that appears when scrolling down and takes you back to the top with style!
 * زر أنيق يظهر عند التمرير لأسفل ويعيدك إلى الأعلى بأسلوب رائع!
 */
const BackToTopButton: React.FC = () => {
  // State to control visibility of the button
  // حالة للتحكم في ظهور الزر
  const [isVisible, setIsVisible] = useState(false);

  // Get language preferences from context
  // الحصول على تفضيلات اللغة من السياق
  const { isRTL, language } = useLanguage();

  // Check if user is on mobile device
  // التحقق مما إذا كان المستخدم على جهاز محمول
  const isMobile = useIsMobile();

  useEffect(() => {
    // Magic scroll detector! 
    // كاشف التمرير السحري! 
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup when component unmounts
    // التنظيف عند إلغاء تحميل المكون
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Beam me up, Scotty! 
  // خذني إلى الأعلى! 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Position based on language direction
  // الموضع بناءً على اتجاه اللغة
  const positionClass = isRTL ? 'left-6' : 'right-6';

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-50 w-12 h-12 rounded-full shadow-lg 
        transition-all duration-300 transform 
        flex items-center justify-center group
        ${positionClass}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'} 
        bg-gradient-to-r from-gold to-amber-500  hover:brightness-110
        text-white`}
      aria-label={language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
      title={language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
    >
      {/* Same arrow icon for both languages - keeping it consistent! */}
      {/* نفس أيقونة السهم لكلتا اللغتين - للحفاظ على التناسق! */}
      <ArrowUp
        size={isMobile ? 18 : 22}
        className="transition-transform duration-500 group-hover:animate-bounce"
      />
    </button>
  );
};

export default BackToTopButton;
