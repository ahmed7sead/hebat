import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PartnerSlider from '../PartnerSlider';
import ScrollObserver from './ScrollObserver';

/**
 * PartnersSection - Displays global partners and suppliers section
 * Features innovative hexagonal design with scroll-triggered animations and RTL support
 */
const PartnersSection = () => {
    const { isRTL } = useLanguage();
    const partnersRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: isRTL ? 'شراكات عالمية' : 'Global Partnerships',
            desc: isRTL ? '50+ علامة تجارية' : '50+ Premium Brands',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: isRTL ? 'جودة معتمدة' : 'Certified Quality',
            desc: isRTL ? 'معايير دولية' : 'International Standards',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: isRTL ? 'تصاميم حصرية' : 'Exclusive Designs',
            desc: isRTL ? 'قطع فريدة' : 'Unique Pieces',
            color: 'from-gold to-yellow-600'
        }
    ];

    return (
        <section className="py-16 mt-12 mb-12   md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden " ref={partnersRef}>
            {/* Background geometric patterns */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border border-gold rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-gold/10 transform rotate-45"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-gold to-transparent rounded-full"></div>
            </div>

            <div className="container-custom mx-auto px-4 relative z-10">
                {/* Header Section */}
                <ScrollObserver animation="fade-up" className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 rounded-full text-gold font-medium text-sm mb-6">
                        <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                        {isRTL ? 'شركاؤنا المميزون' : 'Our Premium Partners'}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 relative">
                        {isRTL ? 'عملاؤنا ومشاريعنا المميزة' : 'Our Clients & Signature Projects'}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                        {isRTL
                            ? 'نفخر بتنفيذ مشاريع تركيب وتصنيع نجف فاخر لصالح نخبة من الفنادق والفلل والمساجد والمجمعات التجارية في مختلف أنحاء المملكة.'
                            : 'We take pride in delivering premium chandelier manufacturing and installation projects for top-tier hotels, villas, mosques.'}
                    </p>
                </ScrollObserver>

                {/* Partner Slider Section */}
                <ScrollObserver animation="fade-up" delay={300}>
                    <div className="relative">
                        {/* Section divider */}
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            <div className="px-6">
                                <div className="w-3 h-3 bg-gold rounded-full"></div>
                            </div>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        </div>

                        {/* Slider container with enhanced styling */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
                            <PartnerSlider />
                        </div>

                    </div>
                </ScrollObserver>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-gold/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;