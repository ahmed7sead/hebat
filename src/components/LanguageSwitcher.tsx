import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import LanguageTransitionOverlay from './LanguageTransitionOverlay';

interface LanguageSwitcherProps {
  variant?: 'standard' | 'modern' | 'minimal';
  showIcon?: boolean;
}

// Simple Language Icon Component
const LanguageIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Globe outline */}
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />

    {/* Latitude lines */}
    <path d="M2 12h20" stroke="currentColor" strokeWidth="1" />
    <path d="M2 8h20" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <path d="M2 16h20" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />

    {/* Longitude lines */}
    <path d="M12 2c-2.5 0-4.5 4.5-4.5 10s2 10 4.5 10" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M12 2c2.5 0 4.5 4.5 4.5 10s-2 10-4.5 10" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'standard',
  showIcon = true
}) => {
  const {
    language,
    setLanguage,
    isTransitioning,
    isLanguageChanging,
    transitionState
  } = useLanguage();

  const buttonRef = useRef<HTMLButtonElement>(null);

  // Simple ripple effect (modern variant only)
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (variant !== 'modern' || isLanguageChanging) return;

    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);

    setTimeout(() => {
      if (circle.parentNode === button) {
        button.removeChild(circle);
      }
    }, 600);
  };

  const toggleLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (!isTransitioning && !isLanguageChanging) {
      setLanguage(language === 'en' ? 'ar' : 'en');
    }
  };

  useEffect(() => {
    if (transitionState === 'start' && buttonRef.current) {
      buttonRef.current.classList.add('btn-transitioning');
      const resetTimeout = setTimeout(() => {
        buttonRef.current?.classList.remove('btn-transitioning');
      }, 800);
      return () => clearTimeout(resetTimeout);
    }
  }, [transitionState]);

  const buttonText = language === 'en' ? 'العربية' : 'English';
  const ariaLabel = language === 'en' ? 'Switch to Arabic language' : 'التبديل إلى اللغة الإنجليزية';

  const renderIcon = () => {
    if (!showIcon) return null;

    return (
      <LanguageIcon
        className={`transition-transform duration-200 ${language === 'ar' ? 'mr-2' : 'ml-2'
          }`}
      />
    );
  };

  const getButtonClasses = () => {
    const baseClasses = 'transition-all duration-300';

    switch (variant) {
      case 'modern':
        return `${baseClasses} relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`;
      case 'minimal':
        return `${baseClasses} bg-transparent text-primary hover:underline focus:outline-none`;
      default:
        return `${baseClasses} bg-transparent border-primary text-primary hover:bg-primary hover:text-white shadow-sm text-sm md:text-base py-2 px-4 md:px-5 rounded-md`;
    }
  };

  const getTextOrder = () => {
    if (language === 'ar') {
      // Arabic: text first, then icon (on left in RTL)
      return (
        <>
          <span>{isLanguageChanging ? '...' : buttonText}</span>
          {showIcon && renderIcon()}
        </>
      );
    } else {
      // English: text first, then icon (on right in LTR)
      return (
        <>
          <span>{isLanguageChanging ? '...' : buttonText}</span>
          {showIcon && renderIcon()}
        </>
      );
    }
  };

  return (
    <>
      <LanguageTransitionOverlay isVisible={isTransitioning} />

      <Button
        ref={buttonRef}
        onClick={toggleLanguage}
        disabled={isLanguageChanging || isTransitioning}
        className={`${getButtonClasses()} ${isLanguageChanging ? 'opacity-70 cursor-not-allowed' : ''}`}
        aria-label={ariaLabel}
        style={{
          fontFamily: language === 'en' ? 'Cairo, sans-serif' : 'Roboto, sans-serif',
          direction: language === 'ar' ? 'rtl' : 'ltr'
        }}
      >
        <div className="flex items-center justify-center w-full min-w-0">
          <div className="flex items-center justify-center">
            {getTextOrder()}
          </div>

          {isLanguageChanging && (
            <span className={`loading-indicator ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </span>
          )}
        </div>
      </Button>
    </>
  );
};

export default LanguageSwitcher;