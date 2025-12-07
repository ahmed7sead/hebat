import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import ScrollObserver from '../../components/home-index/ScrollObserver';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import VideoPlayer from '../../components/VideoPlayer';

const RedMuseum: React.FC = () => {
    const { isRTL } = useLanguage();
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal-smooth');
                }
            });
        }, observerOptions);

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
        sectionsRef.current[index] = el;
    };

    return (
        <div className={`min-h-screen bg-gradient-to-b mt-16 from-cream to-white ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
            {/* Back to News Button */}
            <div className="container-custom mx-auto pt-8">
                <a
                    href="/news"
                    className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors duration-300 group"
                >
                    {isRTL ? (
                        <>
                            <span className="font-medium">العودة للأخبار</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    ) : (
                        <>
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to News</span>
                        </>
                    )}
                </a>
            </div>

            {/* Header Section */}
            <ScrollObserver
                animation="fade-up"
                threshold={0.2}
                delay={100}
                className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-cream/30 to-gold/5"
            >
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full py-20">
                    {/* Text Content */}
                    <ScrollObserver
                        animation="fade-right"
                        threshold={0.3}
                        delay={200}
                        className={`${isRTL ? 'lg:order-2 lg:col-span-7' : 'lg:order-1 lg:col-span-7'} z-10 relative`}
                    >
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 mb-8 border border-gold/20 transform hover:scale-105 transition-all duration-300">
                            <Calendar className="w-4 h-4 text-gold" />
                            <span className="text-sm text-charcoal font-medium">
                                {isRTL ? 'مايو 2025' : 'May 2025'}
                            </span>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-8 transform hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl">
                                    <img
                                        src="/Partner/d4c78668-c00b-4950-a350-1abe4a8af2f9.png"
                                        alt="Ministry of Culture Logo"
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-charcoal">
                                        {isRTL ? 'وزارة الثقافة السعودية' : 'Ministry of Culture Saudi Arabia'}
                                    </h3>
                                    <p className="text-gold text-sm font-medium">
                                        {isRTL ? 'شراكة استراتيجية' : 'Strategic Partnership'}
                                    </p>
                                </div>
                            </div>

                            <h1 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-charcoal mb-6 leading-tight">
                                {isRTL
                                    ? 'مجموعة Hebat East تواصل تقدمها في مشاريع المملكة العربية السعودية'
                                    : "Hebat East Group Continues Its Progress in KSA Projects"
                                }
                            </h1>

                            <p className="text-lg lg:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-2xl">
                                {isRTL
                                    ? 'Hebat East تشارك في مشروع تطوير المتحف الأحمر بالتعاون مع وزارة الثقافة السعودية.'
                                    : 'Hebat East participates in the Red Museum lighting project in cooperation with the Saudi Ministry of Culture.'
                                }
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold/50 rounded-full"></div>
                                <span className="text-sm text-charcoal/60 font-medium">
                                    {isRTL ? 'رؤية 2030' : 'Vision 2030'}
                                </span>
                            </div>
                        </div>
                    </ScrollObserver>

                    {/* Hero Image */}
                    <ScrollObserver
                        animation="fade-left"
                        threshold={0.3}
                        delay={300}
                        className={`${isRTL ? 'lg:order-1 lg:col-span-5' : 'lg:order-2 lg:col-span-5'} relative`}
                    >
                        <div className="relative animate-custom-bounce">
                            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-gold/15 to-charcoal/5 rounded-2xl transform rotate-3 transition-all duration-1000 ease-out"></div>

                            <div className="relative bg-white rounded-2xl p-3 shadow-xl hover:shadow-2xl transition-all duration-700">
                                <div className="relative overflow-hidden rounded-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent transition-all duration-500"></div>
                                    <img
                                        src="/News/cover.webp"
                                        alt="Historic Jeddah Museum Project"
                                        className="w-full h-80 lg:h-96 object-cover"
                                        style={{
                                            filter: 'brightness(1.05) contrast(1.1)'
                                        }}
                                    />
                                </div>

                                <div className="p-4 text-center transition-colors duration-300 rounded-b-xl">
                                    <p className="text-sm font-medium text-charcoal/80 transition-colors duration-300">
                                        {isRTL ? 'متحف جدة التاريخي - مشروع التراث' : 'Historic Jeddah Museum - Heritage Project'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollObserver>
                </div>

                <div className="absolute top-20 left-10 w-20 h-20 bg-gold/5 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-charcoal/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-charcoal/20 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
            </ScrollObserver>

            {/* Section 1 */}
            <ScrollObserver animation="fade-up" threshold={0.3} delay={50} className="py-20">
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollObserver
                        animation="fade-right"
                        threshold={0.4}
                        delay={100}
                        className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}
                    >
                        <div className="relative bg-gradient-to-br from-gold/10 to-gold/5 p-12 lg:p-12 rounded-3xl group hover:shadow-lg transition-all duration-500"
                            style={{
                                clipPath: 'polygon(0% 0%, 90% 0%, 100% 85%, 10% 100%)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL ? 'اجتماع مميز' : 'Special meeting'}
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'في لقاء مميز، اجتمع المهندس أشرف قنديل، مدير المشاريع والشريك الإداري في مجموعة Hebat East، مع فريق عمل مشروع متحف جدة التاريخي، لبحث تفاصيل التنفيذ والتعاون في أعمال تركيب النجف داخل المتحف الأحمر.'
                                    : 'In a distinguished meeting, Eng. Ashraf Kandil, met with the Historic Jeddah Museum project team to discuss execution details and Hebat East role in chandelier installation at the Red Museum.'
                                }
                            </p>
                        </div>
                    </ScrollObserver>

                    <ScrollObserver
                        animation="fade-left"
                        threshold={0.4}
                        delay={200}
                        className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/News/hero-1.jpeg"
                                alt="International Partnership"
                                className="w-full h-96 lg:h-[400px] object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                                style={{
                                    filter: 'brightness(1.02) contrast(1.05)',
                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent group-hover:from-charcoal/20 transition-all duration-500"></div>
                            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500"></div>
                        </div>
                    </ScrollObserver>
                </div>
            </ScrollObserver>

            {/* Section 2 */}
            <section ref={setSectionRef(1)} className="py-20 opacity-0 transform translate-y-10">
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/News/hero-3.webp"
                                alt="Technical Meeting"
                                className="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                                style={{
                                    filter: 'brightness(1.02) contrast(1.05)',
                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent group-hover:from-charcoal/5 transition-all duration-500"></div>
                        </div>
                    </div>

                    <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}>
                        <div className="relative bg-gradient-to-bl from-charcoal/5 to-charcoal/10 p-8 lg:p-16 rounded-3xl group hover:shadow-lg transition-all duration-500"
                            style={{
                                clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 85%)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL ? 'الشركاء والتعاون' : 'Partners and Cooperation'}
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'ضمّ الاجتماع ممثلين من وزارة الثقافة السعودية، وشركة التصميم العالمية Chatillon، بالإضافة إلى الاستشاري الفني للمشروع، شركة egis. ويعكس هذا التعاون التزام Hebat East'
                                    : 'The meeting included representatives from the Saudi Ministry of Culture, international design firm Chatillon, and the project\'s technical consultant, egis. This collaboration reflects Hebat East'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section ref={setSectionRef(2)} className="py-20 opacity-0 transform translate-y-10">
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}>
                        <div className="relative bg-gradient-to-tr from-gold/10 to-gold/20 p-12 lg:p-16 rounded-3xl group hover:shadow-lg transition-all duration-500"
                            style={{
                                clipPath: 'polygon(0% 15%, 90% 0%, 100% 100%, 0% 100%)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL ? 'التفاصيل الفنية النهائية' : 'Final Technical Details'}
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'تم خلال الاجتماع مناقشة التفاصيل الفنية النهائية، وذلك ضمن إطار التعاون المستمر في تنفيذ المشاريع الحالية التي تشرف عليها مجموعة Hebat East داخل المملكة العربية السعودية.'
                                    : 'The meeting included a discussion of the final technical details, as part of the ongoing collaboration on current projects led by Hebat East across the Kingdom of Saudi Arabia.'
                                }
                            </p>
                        </div>
                    </div>

                    <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/News/2.webp"
                                alt="International Collaboration"
                                className="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                                style={{
                                    filter: 'brightness(1.02) contrast(1.05)',
                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent group-hover:from-charcoal/10 transition-all duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Section with Video */}
            <section ref={setSectionRef(3)} className="py-20 bg-gradient-to-br from-charcoal/5 to-gold/5 opacity-0 transform translate-y-10">
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}>
                        <div dir="ltr">
                            <VideoPlayer
                                src="/News/News-Video.mp4"
                                poster="/News/cover.webp"
                                className="w-full h-64 md:h-80 lg:h-96 xl:h-[420px]"
                                autoPlay={false}
                                controls={true}
                                muted={false}
                            />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                                <p className="text-white text-sm font-medium">
                                    {isRTL
                                        ? 'لقطة من الاجتماع يظهر فيها المهندس أشرف قنديل أثناء نقاش فني.'
                                        : 'A moment from the meeting shows Eng. Ashraf Kandil in a technical discussion.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                        <Card className="p-8 lg:p-16 elegant-shadow border-none bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl transition-all duration-500">
                            <blockquote className="text-2xl lg:text-3xl font-bold text-charcoal leading-relaxed mb-6">
                                {isRTL
                                    ? '"يشرفنا أن نكون جزءًا من هذا المشروع الثقافي المهم عبر تنفيذ أعمال تركيب النجف داخل المتحف الأحمر، بما يعكس التزامنا بأعلى معايير الجودة في المشاريع الوطنية الكبرى."'
                                    : '"We are honored to be part of this important cultural project by installing the chandeliers inside the Red Museum"'
                                }
                            </blockquote>
                            <footer className="flex items-center gap-4 group">
                                <img
                                    src="/team/profile - Copy.webp"
                                    alt="Eng. Ashraf Kandil"
                                    className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-md"
                                />
                                <div>
                                    <p className="font-semibold text-charcoal">
                                        {isRTL ? 'المهندس أشرف قنديل' : 'Eng. Ashraf Kandil'}
                                    </p>
                                    <p className="text-gold text-sm">
                                        {isRTL ? 'مدير المشاريع والشريك الإداري، مجموعة Hebat East' : 'Projects Director & Managing Partner, Hebat East Group'}
                                    </p>
                                </div>
                            </footer>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RedMuseum;