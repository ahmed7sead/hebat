import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Lottie from 'lottie-react';
import animationContainer from "../Animation-into.json";

const CTASection = () => {
  const { isRTL } = useLanguage();

  return (
    <section className="relative py-24 md:py-12 lg:py-12 pl-8 pr-6 mb-32 bg-gradient-to-br from-[#c4a86b] via-[#b8962f] to-[#c4a86b] text-white mt-40 w-[75%]  rounded-[15px] md:rounded-[30px] overflow-hidden shadow-xl mx-auto">
      {/* Background Elements - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      <div className="absolute top-6 md:top-10 right-6 md:right-10 w-12 md:w-20 h-12 md:h-20 bg-white/5 rounded-full blur-lg"></div>
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 w-8 md:w-16 h-8 md:h-16 bg-white/3 rounded-full blur-md"></div>

      <div className="container-custom w-full relative z-10 px-4 md:px-6">

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
          {/* Text Content */}
          <div className={`${isRTL ? "text-right lg:order-1" : "text-left lg:order-1"} ${isRTL ? "lg:ml-auto" : "lg:mr-auto"} text-center md:text-left`}>
            <div className="relative">
              {/* Simple decorative elements */}
              <div className="hidden md:block absolute -top-3 -left-3 w-6 h-6 border border-white/20 rounded-full"></div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight px-2 md:px-0">
                {isRTL ? "هل لديك مشروع في الذهن؟" : "Have a Project in Mind?"}
              </h2>
            </div>

            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-white/85 max-w-full md:max-w-md px-2 md:px-0">
              {isRTL
                ? "دعنا نساعدك في تحويل مساحتك إلى تحفة فنية تحاكي أحلامك وتتجاوز توقعاتك"
                : "Let us help you transform your space into a masterpiece that reflects your dreams and exceeds expectations"}
            </p>

            <div className={`relative inline-block group ${isRTL ? 'flex justify-end md:justify-start' : ''}`}>
              <Button
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-[#c4a86b] hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg w-full md:w-auto"
              >
                {isRTL ? "ابدأ مشروعك الآن" : "Start Your Project Now"}
                {isRTL ? <ArrowLeft className="mr-2 md:mr-3 w-4 md:w-5 h-4 md:h-5" /> : <ArrowRight className="ml-2 md:ml-3 w-4 md:w-5 h-4 md:h-5" />}
              </Button>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className={`${isRTL ? "lg:order-2" : "lg:order-2"} relative mt-8 lg:mt-0`}>
            <div className="relative">
              {/* Tight background container matching lottie background color */}
              <div className="absolute inset-0 bg-[#c4a86b] rounded-2xl md:rounded-3xl shadow-inner"></div>

              <Lottie
                animationData={animationContainer}
                loop={true}
                autoplay={true}
                style={{
                  width: '100%',
                  height: '300px'
                }}
                className="relative z-10 md:h-[400px]"
              />

              {/* Simple floating elements */}
              <div className="absolute top-4 md:top-8 -right-2 md:-right-4 w-3 md:w-4 h-3 md:h-4 bg-white/15 rounded-full"></div>
              <div className="absolute bottom-6 md:bottom-12 -left-3 md:-left-6 w-2 md:w-3 h-2 md:h-3 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/5 to-transparent"></div>
    </section>
  );
};

export default CTASection;