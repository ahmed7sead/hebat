import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollObserver from './ScrollObserver';


const ContactSection = () => {
    const { isRTL } = useLanguage();
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal-smooth');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe contact section
        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 md:py-24 mt-16 mb-20 bg-white" ref={contactRef}>
            <div className="container-custom mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Contact Info */}
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                        <ScrollObserver animation={isRTL ? "fade-left" : "fade-right"}>
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                                {isRTL ? 'تواصل معنا' : 'Contact Us'}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                {isRTL
                                    ? 'نسعد بتواصلكم معنا للاستفسار عن منتجاتنا أو خدماتنا. فريقنا جاهز للرد على استفساراتكم.'
                                    : 'We would be happy to hear from you regarding our products or services. Our team is ready to answer your inquiries.'}
                            </p>
                        </ScrollObserver>

                        <div className="space-y-4 mb-6">
                            <ScrollObserver animation="fade-up" delay={100}>
                                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row' : ''}`}>
                                    <div className="text-gold bg-gold/10 p-2 rounded-full mt-1">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.7086 9.16531 10.3001 9.45574L8.8627 10.4592C8.56809 10.6611 8.43786 11.0218 8.55611 11.3452C9.24922 13.231 10.7822 14.7639 12.668 15.457C12.9914 15.5753 13.352 15.445 13.5539 15.1504L14.5574 13.713C14.8478 13.3045 15.3638 13.1301 15.8359 13.2874L20.3294 14.7852C20.7377 14.9213 21.0132 15.3034 21.0132 15.7338V19C21.0132 20.1046 20.1177 21 19.0132 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={`${isRTL ? 'text-right flex-1' : 'text-left '}`}>
                                        <p className="font-medium text-charcoal">
                                            {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                                        </p>
                                        <p className="text-gray-600">00966580076800</p>
                                    </div>
                                </div>
                            </ScrollObserver>

                            <ScrollObserver animation="fade-up" delay={150}>
                                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row' : ''}`}>
                                    <div className="text-gold bg-gold/10 p-2 rounded-full mt-1 shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={`${isRTL ? 'text-right' : 'text-left'} flex-1`}>
                                        <p className="font-medium text-charcoal">
                                            {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                                        </p>
                                        <p className="text-gray-600">info@hebateast.com</p>
                                    </div>
                                </div>
                            </ScrollObserver>

                            <ScrollObserver animation="fade-up" delay={300}>
                                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row ' : ''}`}>
                                    <div className="text-gold bg-gold/10 p-2 rounded-full mt-1">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={`${isRTL ? 'text-right' : 'text-left'} flex-1`}>
                                        <p className="font-medium text-charcoal">
                                            {isRTL ? 'العنوان' : 'Address'}
                                        </p>
                                        <p className="text-gray-600">
                                            {isRTL
                                                ? 'شارع الملك فيصل، جدة، المملكة العربية السعودية'
                                                : 'King Faisal Road, Jeddah, Saudi Arabia'}
                                        </p>
                                    </div>
                                </div>
                            </ScrollObserver>
                        </div>

                        <ScrollObserver animation="fade-up" delay={400}>
                            <div className="mt-8">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-gold text-white px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
                                >
                                    {isRTL ? 'اتصل بنا الآن' : 'Contact Us Now'}
                                </Link>
                            </div>
                        </ScrollObserver>
                    </div>

                    {/* Map - Jeddah location */}
                    <ScrollObserver animation={isRTL ? "fade-right" : "fade-left"}>
                        <div className="h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md lg:-translate-x-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.727960801672!2d39.18417487554701!3d21.584524972944244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da620ae118db%3A0x728c9ddbe8a1d62e!2sKing%20Faisal%20Rd%2C%20Al%20Andalus%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1706071232031!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Hebat East Location"
                            ></iframe>
                        </div>
                    </ScrollObserver>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
