// * Supports both Arabic (RTL) and English (LTR) layouts
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import ScrollObserver from './ScrollObserver';

const AboutSection = () => {
    // Get RTL direction status from language context
    const { isRTL } = useLanguage();

    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white mb-10 mt-4">
            <div className="container-custom mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Company description text */}
                    <ScrollObserver
                        animation={isRTL ? "fade-left" : "fade-right"}
                        className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'} space-y-6`}
                        threshold={0.15}
                        delay={105}
                    >
                        {/* Section label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold font-medium text-sm">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            {isRTL ? 'من نحن' : 'About Us'}
                        </div>

                        {/* Main heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 md:mb-8">
                            {isRTL ? 'هبات أيست' : 'Hebat East'}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 md:mb-8">
                            {isRTL
                                ? 'متخصصون في النجف المودرن والثريات الفاخرة للمشاريع الكبرى كالفنادق والقصور والقاعات، لنحولها لأيقونات فنية.'
                                : 'We specialize in modern luxury chandeliers for grand projects – turning hotels, palaces, and halls into artistic icons.'}
                        </p>
                        <p className="text-gray-600 mb-4 md:mb-10">
                            {isRTL
                                ? 'بخبرة وأناقة، يقدم فريقنا تركيبات مبهرة تجمع بين الفن والابتكار.'
                                : 'With experience and elegance, our expert team delivers stunning installations that blend art and innovation.'}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 md:gap-8 py-4">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gold">50+</div>
                                <div className="text-sm text-gray-500">
                                    {isRTL ? 'مشروع مكتمل' : 'Projects Done'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gold">20+</div>
                                <div className="text-sm text-gray-500">
                                    {isRTL ? 'سنوات خبرة' : 'Years Experience'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gold">100%</div>
                                <div className="text-sm text-gray-500">
                                    {isRTL ? 'رضا العملاء' : 'Client Satisfaction'}
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            to="/about"
                            className="inline-block bg-gold text-white px-8 py-4 md:px-6 md:py-3 rounded-md hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {isRTL ? 'اقرأ المزيد عنا' : 'Read More About Us'}
                        </Link>
                    </ScrollObserver>

                    {/* Image section */}
                    <ScrollObserver
                        animation={isRTL ? "fade-right" : "fade-left"}
                        className={`${isRTL ? 'order-1' : 'order-2'} relative`}
                        threshold={0.15}
                        delay={190}
                    >
                        <div className="relative">
                            {/* Background decorative element */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl transform rotate-3"></div>

                            {/* Main image container */}
                            <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                                <LazyImage
                                    src='/projects-page/Interior/IMG_1297.JPG'
                                    alt="Luxury Interior Design"
                                    className="rounded-2xl w-full h-auto object-cover"
                                />

                                {/* Floating card */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-charcoal text-sm">
                                                {isRTL ? 'تصميم متميز' : 'Premium Design'}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {isRTL ? 'جودة عالية' : 'High Quality'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative dots */}
                            <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-2">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-gold rounded-full opacity-30"></div>
                                ))}
                            </div>
                        </div>
                    </ScrollObserver>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;