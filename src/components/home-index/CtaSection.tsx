import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollObserver from './ScrollObserver';

const CtaSection = () => {
    const { isRTL } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-charcoal text-white">
            <ScrollObserver animation="fade-up">
                <div className="container mx-auto text-center">
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6`}>
                        {isRTL ? 'جاهز للعمل معنا' : 'Ready to Transform Your Space?'}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                        <Link
                            to="/contact"
                            className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/30 text-sm md:text-base font-medium"
                        >
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="relative z-10">
                                {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
                            </span>
                        </Link>

                        <Link
                            to="/projects"
                            className="group relative overflow-hidden bg-transparent border-2 border-white/80 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white hover:text-charcoal transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm text-sm md:text-base font-medium"
                        >
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <span className="relative z-10 transition-colors duration-300">
                                {isRTL ? 'تصفح مشاريعنا' : 'Browse Our Projects'}
                            </span>
                        </Link>
                    </div>
                </div>
            </ScrollObserver>
        </section>
    );
};

export default CtaSection;