import React, { useEffect } from 'react';
import HeroSection from '../components/home-index/HeroSection';
import FeaturedCollection from '../components/home-index/FeaturedCollection';
import PartnersSection from '../components/home-index/PartnersSection';
import AboutSection from '../components/home-index/AboutSection';
import ProjectSection from '../components/home-index/ProjectSection.tsx';
import CtaSection from '../components/home-index/CtaSection';
import ScrollObserver from '../components/home-index/ScrollObserver';
import TransitionEffect from '../components/anmition/TransitionEffect';
import { useLanguage } from '../context/LanguageContext';
import NewsPopup from '../components/NewsPopup';

const Index = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // ✅ إعادة ضبط موضع التمرير
    window.scrollTo(0, 0);

    // ✅ تعيين خلفية مخصصة للصفحة الرئيسية فقط
    document.body.style.backgroundImage = "url('/bg.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    // ✅ تنظيف الخلفية عند مغادرة الصفحة
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  return (
    <>
      {/* تأثير الانتقال */}
      <TransitionEffect type="circle" />

      {/* ✅ المحتوى الكامل ماعدا الفوتر */}
      <div className="relative">
        {/* ✅ الطبقة البيضاء الشفافة */}
        <div className="absolute inset-0 bg-white/25 z-0 pointer-events-none"></div>

        {/* ✅ الأقسام فوق الطبقة */}
        <div className="relative z-10 page-content">
          <HeroSection />

          <ScrollObserver animation="fade-up" staggerChildren>
            <FeaturedCollection />
          </ScrollObserver>
          <ScrollObserver animation="fade-up" delay={50}>
            <AboutSection />
          </ScrollObserver>


          <ScrollObserver animation="fade-up" staggerChildren>
            <ProjectSection />
          </ScrollObserver>

          <ScrollObserver
            animation={language === 'ar' ? 'fade-left' : 'fade-right'}
            className="direction-aware"
          >
            <PartnersSection />
          </ScrollObserver>

          <ScrollObserver animation="fade-up" className="text-animate-fade-in">
            <CtaSection />
          </ScrollObserver>

          <NewsPopup />
        </div>
      </div>

      {/* ✅ الفوتر خارج الـ Overlay تمامًا */}
      <footer className="relative z-10">
        {/* حط فوترك هنا أو استورد مكون الفوتر */}
      </footer>
    </>
  );
};

export default Index;
