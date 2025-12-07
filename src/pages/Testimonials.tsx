import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from './into/HeroSection';
import DesignPartnersSection from './into/DesignPartnersSection';
import PortfolioSection from './into/a';
import CTASection from './into/CTASection';

const Testimonials = () => {
  const { isRTL } = useLanguage();

  // إضافة useEffect للتأكد من الظهور في أعلى الصفحة
  useEffect(() => {
    // التمرير إلى أعلى الصفحة عند تحميل المكون
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`min-h-screen bg-white font-bold${isRTL ? 'font-tajawal font-' : 'font-playfair '}`}>
      <HeroSection />
      <DesignPartnersSection />
      <PortfolioSection />
      <CTASection />
    </div>
  );
};

export default Testimonials;