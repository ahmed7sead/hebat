import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import LazyImage from '../../components/LazyImage';
import ScrollObserver from '../../components/home-index/ScrollObserver';

const DesignPartnersSection = () => {
  const { isRTL } = useLanguage();

  // Design Partners data
  const designPartners = [{
    name: isRTL ? 'م/ هانيا هشام' : 'Hania Hesham',
    role: isRTL ? 'مهندسة معمارية ومصممة داخلية' : 'Architect & Interior Designer',
    companyLogo: '/team/logo-mount.JPG',
    image: '/team/hania.jpg',
    experience: isRTL ? '8 سنوات خبرة' : '8 Years Experience',
    specialization: isRTL ? 'التصميم الكلاسيكي الحديث' : 'Modern Classic Design'
  }, {
    name: isRTL ? 'م/ شريف حجازي' : 'Sherif Hejazy',
    role: isRTL ? 'مهندس معماري ومتخصص تصميم ثلاثي الأبعاد' : 'Architect & 3D Visualizer',
    companyLogo: '/team/logo-mount.JPG',
    image: '/team/sherif.JPG',
    experience: isRTL ? '5 سنوات خبرة' : '5 Years Experience',
    specialization: isRTL ? 'التصميم المينيمالي' : 'Minimalist Design'
  }];

  return (
    <section className="mobile-py bg-white mt-40 mb-32">
      <div className="container-custom">
        <ScrollObserver animation="fade-up" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="section-title text-center">
              {isRTL ? 'شركاؤنا في التصميم' : 'Our Design Partners'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {isRTL ? 'نتعاون مع أفضل المصممين وشركات التصميم لتقديم حلول مبتكرة ومتميزة' : 'We collaborate with the best designers and design companies to provide innovative and distinctive solutions'}
            </p>
          </div>
        </ScrollObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {designPartners.map((partner, index) => (
            <ScrollObserver
              key={index}
              animation="fade-up"
              delay={index * 200}
              threshold={0.3}
            >
              <Card className="overflow-hidden elegant-shadow group bg-white rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <LazyImage
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-5 right-5 backdrop-blur-md p-2 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <LazyImage
                      src={partner.companyLogo}
                      alt={partner.companyLogo}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <span className="bg-gold/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {partner.experience}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-charcoal">{partner.name}</h3>
                    <p className="text-gold font-semibold text-lg mb-3">{partner.role}</p>
                    <p className="text-gray-600 text-sm">{partner.specialization}</p>
                  </div>
                </div>
              </Card>
            </ScrollObserver>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPartnersSection;