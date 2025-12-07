import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollObserver from '../components/home-index/ScrollObserver';

const Services = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service icons with refined styling
  const serviceIcons = [
    (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative bg-white rounded-full p-3 shadow-lg border border-gold/20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
          </svg>
        </div>
      </div>
    ),
    (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative bg-white rounded-full p-3 shadow-lg border border-gold/20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
          </svg>
        </div>
      </div>
    ),
    (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative bg-white rounded-full p-3 shadow-lg border border-gold/20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
            <path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
            <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
            <path d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold" />
          </svg>
        </div>
      </div>
    )
  ];

  const services = [
    {
      icon: serviceIcons[0],
      titleEN: 'Luxury Chandelier Installation',
      titleAR: 'تركيب الثريات الفاخرة',
      descEN: 'Professional installation by certified experts ensuring perfection and safety for chandeliers of all sizes.',
      descAR: 'تركيب احترافي بواسطة خبراء معتمدين يضمنون الكمال والسلامة للثريات من جميع الأحجام.'
    },
    {
      icon: serviceIcons[1],
      titleEN: 'Lighting Consultation',
      titleAR: 'استشارات الإضاءة',
      descEN: 'Personalized advice to select the perfect lighting solutions that enhance your space and reflect your style.',
      descAR: 'نصائح مخصصة لاختيار حلول الإضاءة المثالية التي تعزز مساحتك وتعكس أسلوبك.'
    },
    {
      icon: serviceIcons[2],
      titleEN: 'Custom Design',
      titleAR: 'تصميم مخصص',
      descEN: 'Create unique lighting pieces tailored to your vision and space requirements with our design experts.',
      descAR: 'إنشاء قطع إضاءة فريدة مصممة وفقًا لرؤيتك ومتطلبات المساحة مع خبراء التصميم لدينا.'
    }
  ];

  // Process steps with refined design
  const processSteps = [
    {
      number: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Consultation',
      titleAR: 'الاستشارة',
      descEN: 'We understand your needs, style preferences, and budget requirements.',
      descAR: 'نتفهم احتياجاتك وتفضيلاتك وميزانيتك.'
    },
    {
      number: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 14L13.5 9M10.5 14L9 9M14 17H10M16 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.5H10V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Design Selection',
      titleAR: 'اختيار التصميم',
      descEN: 'Choose from curated options or create a custom design for your space.',
      descAR: 'اختر من الخيارات المنتقاة أو أنشئ تصميمًا مخصصًا لمساحتك.'
    },
    {
      number: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Implementation',
      titleAR: 'التنفيذ',
      descEN: 'Professional installation with meticulous attention to every detail.',
      descAR: 'تركيب احترافي مع الاهتمام الدقيق بكل التفاصيل.'
    },
    {
      number: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Support',
      titleAR: 'الدعم',
      descEN: 'Ongoing maintenance and assistance whenever you need it.',
      descAR: 'صيانة مستمرة ومساعدة عند الحاجة.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Header with improved layout - النص يسار/يمين حسب اللغة */}
      <ScrollObserver animation="fade-up" threshold={0.2}>
        <section className="bg-charcoal text-white py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className={`text-center max-w-7xl mx-auto ${isRTL ? 'rtl' : 'ltr'}`}>
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'خدماتنا' : 'Our Services'}
              </h1>
              <p className={`text-xl text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'حلول إضاءة فاخرة مصممة لمساحتك' : 'Luxury lighting solutions designed for your space'}
              </p>
            </div>
          </div>
        </section>
      </ScrollObserver>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollObserver animation="fade-up" threshold={0.2} delay={100}>
            <div className={`mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className="text-heading-2 md:text-4xl font-bold text-charcoal mb-4 font-playfair">
                {isRTL ? 'خدماتنا المتميزة' : 'Our Premium Services'}
              </h2>
              <p className="text-body-large text-charcoal-light max-w-2xl leading-relaxed">
                {isRTL ? 'نقدم حلول إضاءة متكاملة تناسب جميع الاحتياجات' : 'We provide comprehensive lighting solutions for all your needs'}
              </p>
            </div>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollObserver
                key={idx}
                animation="fade-up"
                threshold={0.1}
                delay={idx * 100}
              >
                <div className={`group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center ${isRTL ? 'text-right' : 'text-center'} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full`}>
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-heading-4 font-semibold mb-4 text-charcoal group-hover:text-gold transition-colors duration-300 font-cairo">
                    {isRTL ? service.titleAR : service.titleEN}
                  </h3>
                  <p className="text-body text-charcoal-light leading-relaxed">
                    {isRTL ? service.descAR : service.descEN}
                  </p>
                  <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:via-gold transition-colors duration-300"></div>
                </div>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with improved typography */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollObserver animation="fade-up" threshold={0.2}>
            <div className={`mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className="text-heading-2 md:text-4xl font-bold text-charcoal mb-4 font-playfair">
                {isRTL ? 'كيف نعمل' : 'Our Process'}
              </h2>
              <p className="text-body-large text-charcoal-light max-w-xl leading-relaxed">
                {isRTL ? 'نهج بسيط وفعال لتحقيق نتائج استثنائية' : 'A simple yet effective approach to achieve exceptional results'}
              </p>
            </div>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollObserver
                key={index}
                animation="fade-up"
                threshold={0.2}
                delay={index * 100}
              >
                <div className={`flex flex-col items-center ${isRTL ? 'text-right' : 'text-center'} group`}>
                  {/* Improved step indicator */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-heading-5 font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300 font-cairo">
                    {isRTL ? step.titleAR : step.titleEN}
                  </h3>
                  <p className="text-body text-charcoal-light leading-relaxed">
                    {isRTL ? step.descAR : step.descEN}
                  </p>
                </div>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Improved CTA Contact */}
      <ScrollObserver animation="fade-up" threshold={0.3}>
        <section className="py-20 bg-gradient-to-r from-gold to-gold-dark text-white relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl"></div>
          </div>

          <div className={`container mx-auto px-6 max-w-6xl ${isRTL ? 'text-right' : 'text-center'} relative z-10`}>
            <h2 className="text-heading-2 md:text-3xl font-bold mb-6 font-playfair">
              {isRTL ? 'جاهز لإضاءة مساحتك؟' : 'Ready to Illuminate Your Space?'}
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-10 text-body-large leading-relaxed">
              {isRTL ? 'تواصل معنا اليوم للحصول على استشارة مجانية' : 'Contact us today for a free consultation'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-gold px-8 py-3 rounded-xl hover:bg-gray-50 font-semibold text-body-large transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span>{isRTL ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}</span>
                <svg className={`w-4 h-4 ${isRTL ? 'mr-3' : 'ml-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M7 16l-4-4m0 0l4-4m-4 4h18" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                </svg>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-gold font-semibold text-body-large transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>{isRTL ? 'شاهد مشاريعنا' : 'View Our Projects'}</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollObserver>
    </div>
  );
};

export default Services;