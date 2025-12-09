import React, { useCallback, useRef, useState, useEffect, } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../../components/ui/card';
import ScrollObserver from '../../components/home-index/ScrollObserver';
import { Calendar, ArrowLeft, ArrowRight, Wrench, Play, ArrowRight as ArrowRightIcon, FileText, Hammer, CheckCircle, Users, Building2, Sparkles } from 'lucide-react';
import VideoPlayer from '../../components/VideoPlayer';
const Award: React.FC = () => {
    const { isRTL } = useLanguage();
    const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = sectionsRef.current[sectionId];
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`min-h-screen bg-gradient-to-b mt-16 from-cream to-white ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
            {/* Modern Header Section */}
            <ScrollObserver
                animation="fade-up"
                threshold={0.2}
                delay={100}
                className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-cream/30 to-gold/5"
            >
                {/* Back Button - Modern Floating Style */}
                <a
                    href="/news"
                    className="fixed top-24 left-8 z-50 group"
                >
                    <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 border border-gold/20 hover:border-gold/40">
                        {isRTL ? (
                            <>
                                <span className="font-medium text-charcoal group-hover:text-gold transition-colors">العودة للأخبار</span>
                                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                <ArrowLeft className="w-5 h-5 text-gold group-hover:-translate-x-1 transition-transform" />
                                <span className="font-medium text-charcoal group-hover:text-gold transition-colors">Back to News</span>
                            </>
                        )}
                    </div>
                </a>

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
                                {isRTL ? 'ديسمبر 2025' : 'Dec 2025'}
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
                                    ? "تنفيذ إضاءة متحف البحر الأحمر بجدة التاريخية بدقة عالية وفي زمن قياسي"
                                    : "Completion of the Lighting Works at the Red Sea Museum in Historic Jeddah within 14 Days"
                                }
                            </h1>

                            <p className="text-lg lg:text-xl text-charcoal/70 leading-relaxed mb-10 max-w-2xl">
                                {isRTL
                                    ? 'أنهت Hebat East تنفيذ أعمال إضاءة متحف البحر الأحمر في جدة التاريخية خلال 14 يومًا، مع الالتزام بأعلى معايير الدقة والجودة في تركيب الثريات الكريستالية داخل البهو الرئيس.'
                                    : "Hebat East has successfully completed the lighting installation at the Red Sea Museum in Historic Jeddah within 14 days, delivering precise workmanship and high-quality crystal chandelier installation in the main hall."
                                }
                            </p>

                            {/* Modern CTA Buttons */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <button
                                    onClick={() => scrollToSection('technical')}
                                    className="group relative px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                >
                                    <Wrench className="w-5 h-5" />
                                    <span>{isRTL ? 'التفاصيل الفنية' : 'Technical Details'}</span>
                                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>

                                <button
                                    onClick={() => scrollToSection('partners')}
                                    className="group relative px-6 py-3 bg-white text-charcoal rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border-2 border-gold/30 hover:border-gold"
                                >
                                    <Users className="w-5 h-5 text-gold" />
                                    <span>{isRTL ? 'الشركاء' : 'Partners'}</span>
                                </button>

                                <button
                                    onClick={() => scrollToSection('video')}
                                    className="group relative px-6 py-3 bg-charcoal text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:bg-charcoal/90"
                                >
                                    <Play className="w-5 h-5" />
                                    <span>{isRTL ? 'شاهد الفيديو' : 'Watch Video'}</span>
                                </button>
                            </div>

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
                                        src="/News/finish/poster.jpg"
                                        alt="Historic Jeddah Museum Project"
                                        className="w-full h-80 lg:h-[440px] object-cover"
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

            {/* Section 1 - Technical Details */}
            <ScrollObserver animation="fade-up" threshold={0.3} delay={50} className="py-20 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-10 w-32 h-32 bg-charcoal/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                <div
                    ref={(el) => (sectionsRef.current['technical'] = el)}
                    className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24"
                >
                    <ScrollObserver
                        animation="fade-right"
                        threshold={0.4}
                        delay={100}
                        className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}
                    >
                        <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gold/20 overflow-hidden group">
                            {/* Decorative Corner Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-charcoal/5 to-transparent rounded-tr-full"></div>

                            {/* Floating Gear Icon */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center rotate-12 group-hover:rotate-45 transition-transform duration-700">
                                <Wrench className="w-10 h-10 text-gold/30" />
                            </div>

                            {/* Header with Icon */}
                            <div className="relative flex items-start gap-4 mb-8">
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Wrench className="w-8 h-8 text-white" />
                                    </div>
                                    {/* Mini badge */}
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-charcoal rounded-full flex items-center justify-center shadow-md">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                                        {isRTL ? 'تفاصيل فنية' : 'Technical Details'}
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <div className="h-1 w-12 bg-gradient-to-r from-gold to-transparent rounded-full"></div>
                                        <span className="text-sm text-gold font-medium">{isRTL ? 'هندسة دقيقة' : 'Precision Engineering'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-lg text-charcoal/80 leading-relaxed mb-6 relative z-10">
                                {isRTL
                                    ? 'تضمّن تنفيذ المشروع تركيب وحدات إضاءة كريستالية ونحاسية موزّعة على مساحة 220 مترًا مربعًا من سقف البهو، ضمن بلوكات دقيقة التصميم لضمان توازن الإضاءة وتوزيعها بشكل متجانس داخل المتحف. وقد شمل العمل تنسيق القطع، ومعالجة نقاط التعليق، وتحقيق أعلى مستويات الثبات والجودة في التركيب.'
                                    : 'The project included installing crystal and brass lighting units distributed across 220 square meters of the main hall ceiling. The fixtures were arranged in precision-engineered blocks to ensure balanced and uniform illumination throughout the museum space. The work involved alignment, mounting point preparation, and achieving high structural stability and installation quality.'
                                }
                            </p>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl p-4 border border-gold/20 hover:border-gold/40 transition-all duration-300 group/card">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
                                            <Hammer className="w-5 h-5 text-gold" />
                                        </div>
                                        <span className="text-2xl font-bold text-charcoal">220</span>
                                    </div>
                                    <p className="text-sm text-charcoal/70 font-medium">{isRTL ? 'متر مربع' : 'Square Meters'}</p>
                                </div>
                                <div className="bg-gradient-to-br from-charcoal/10 to-charcoal/5 rounded-xl p-4 border border-charcoal/20 hover:border-charcoal/40 transition-all duration-300 group/card">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 bg-charcoal/20 rounded-lg flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-charcoal" />
                                        </div>
                                        <span className="text-2xl font-bold text-charcoal">14</span>
                                    </div>
                                    <p className="text-sm text-charcoal/70 font-medium">{isRTL ? 'يوم عمل' : 'Working Days'}</p>
                                </div>
                            </div>

                            {/* Bottom decorative line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                        </div>
                    </ScrollObserver>

                    <ScrollObserver
                        animation="fade-left"
                        threshold={0.4}
                        delay={200}
                        className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                        <div className="relative group">
                            {/* Decorative gold corners */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-gold/30 rounded-tl-3xl transition-all duration-500 group-hover:border-gold/60 group-hover:w-24 group-hover:h-24"></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-gold/30 rounded-br-3xl transition-all duration-500 group-hover:border-gold/60 group-hover:w-24 group-hover:h-24"></div>

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">                            <img
                                src="/News/finish/af.webp"
                                alt="International Partnership"
                                className="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                                style={{
                                    filter: 'brightness(1.02) contrast(1.05)',
                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent group-hover:from-charcoal/20 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-all duration-500"></div>

                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-xl">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                                        <span className="text-sm font-bold text-charcoal">{isRTL ? 'تركيب احترافي' : 'Professional Installation'}</span>
                                    </div>
                                </div>
                            </div>                            </div>

                    </ScrollObserver>
                </div>
            </ScrollObserver>

            {/* Section 2 - Partners */}
            <ScrollObserver animation="fade-up" threshold={0.3} delay={50} className="py-20 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/[0.02] via-transparent to-charcoal/[0.03] pointer-events-none"></div>

                <div
                    ref={(el) => (sectionsRef.current['partners'] = el)}
                    className="container-custom mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 relative"
                >
                    {/* Image Section */}
                    <ScrollObserver
                        animation="fade-right"
                        threshold={0.4}
                        delay={100}
                        className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}
                    >
                        <div className="relative group">
                            {/* Decorative corners */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-charcoal/20 rounded-tl-3xl transition-all duration-500 group-hover:border-charcoal/40 group-hover:w-24 group-hover:h-24"></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-charcoal/20 rounded-br-3xl transition-all duration-500 group-hover:border-charcoal/40 group-hover:w-24 group-hover:h-24"></div>

                            {/* Main image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/News/finish/2t.webp"
                                    alt="Technical Meeting"
                                    className="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-110 transition-all duration-1000 ease-out"
                                    style={{
                                        filter: 'brightness(1.02) contrast(1.05)',
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-charcoal/5 to-transparent group-hover:from-charcoal/40 transition-all duration-700"></div>

                                {/* Floating badge */}
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform group-hover:scale-110 transition-all duration-300">
                                    <Sparkles className="w-4 h-4 text-charcoal" />
                                    <span className="text-sm font-semibold text-charcoal">
                                        {isRTL ? 'شراكة استراتيجية' : 'Strategic Partnership'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollObserver>

                    {/* Content Section */}
                    <ScrollObserver
                        animation="fade-left"
                        threshold={0.4}
                        delay={200}
                        className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}
                    >
                        <div className="relative">
                            {/* Main content card */}
                            <div className="relative bg-gradient-to-br from-white via-charcoal/[0.02] to-charcoal/[0.05] p-8 lg:p-12 rounded-3xl border border-charcoal/10 shadow-xl hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm">

                                {/* Header with icon */}
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="relative">
                                        <div className="w-14 h-14 bg-gradient-to-br from-charcoal/10 to-charcoal/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                                            <Users className="w-7 h-7 text-charcoal" />
                                        </div>
                                        {/* Animated ring */}
                                        <div className="absolute inset-0 rounded-2xl bg-charcoal/5 animate-ping opacity-75"></div>
                                    </div>

                                    <div className="flex-1">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-2 group-hover:text-charcoal/90 transition-colors duration-300">
                                            {isRTL ? 'الشركاء والتعاون' : 'Partners and Cooperation'}
                                        </h2>
                                        <div className="w-20 h-1 bg-gradient-to-r from-charcoal/60 to-transparent rounded-full"></div>
                                    </div>
                                </div>

                                {/* Main text */}
                                <p className="text-lg text-charcoal/80 leading-relaxed mb-8 group-hover:text-charcoal/90 transition-colors duration-300">
                                    {isRTL
                                        ? 'جاء تنفيذ المشروع ضمن تعاون مباشر مع وزارة الثكافة السعودية، وشركة التصميم العالمية Chatillon، والاستشاري الفني EGIS. ويساهم هذا التكامل بين الجهات في ضمان توافق الحلول التنفيذية مع الرؤية المعمارية للمتحف، وتحقيق أعلى مستوى من الانسجام بين الهوية البصرية والإضاءة النهائية.'
                                        : 'The project was executed in direct collaboration with the Saudi Ministry of Culture, the international design firm Chatillon, and the technical consultant EGIS. This integrated partnership ensured full alignment between the museum architectural vision and the final lighting installation, achieving a refined and coherent visual experience.'
                                    }
                                </p>



                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-charcoal/20 to-transparent rounded-b-3xl"></div>
                            </div>

                            {/* Floating decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-charcoal/5 to-charcoal/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-all duration-700"></div>
                        </div>
                    </ScrollObserver>
                </div>
            </ScrollObserver>

            {/* Section 3 - Project Phases (New Creative Section) */}
            <ScrollObserver animation="fade-up" threshold={0.3} delay={50} className="py-20 bg-gradient-to-br from-cream/30 to-white relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-charcoal/5 rounded-full blur-3xl"></div>

                <div className="container-custom mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-gold/10 px-6 py-2 rounded-full mb-6">
                            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                            <span className="text-gold font-semibold text-sm">
                                {isRTL ? 'رحلة المشروع' : 'Project Journey'}
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
                            {isRTL ? 'مراحل تنفيذ المشروع' : 'Project Phases'}
                        </h2>
                        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                            {isRTL
                                ? 'رحلة متكاملة من التخطيط إلى التسليم النهائي'
                                : 'A complete journey from planning to final delivery'
                            }
                        </p>
                    </div>

                    {/* Cards with Arrows */}
                    <div className="relative">
                        {/* Desktop Grid */}
                        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-center">
                            {/* Card 1 - Planning Phase */}
                            <ScrollObserver animation="fade-up" threshold={0.3} delay={100}>
                                <a href="/news/planning-phase" className="group relative block">
                                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gold/20 hover:border-gold/50">
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent z-10"></div>
                                            <img src="/News/hero-1.jpeg" alt="Planning Phase" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg z-20">
                                                <span className="text-white font-bold text-xl">1</span>
                                            </div>
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <FileText className="w-5 h-5 text-gold" />
                                                </div>
                                                <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                                                    {isRTL ? 'مرحلة الاتفاق والتخطيط' : 'Agreement & Planning Phase'}
                                                </h3>
                                            </div>
                                            <p className="text-charcoal/70 text-sm mb-4">
                                                {isRTL ? 'وضع الأسس والتخطيط الدقيق للمشروع' : 'Setting foundations and precise project planning'}
                                            </p>
                                            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300">
                                                <span className="text-sm font-medium">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                                <ArrowRightIcon className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </ScrollObserver>

                            {/* Connecting Arrow 1 to 2 */}
                            <div className="flex justify-center items-center -mx-8 z-10">
                                <div className="relative">
                                    {!isRTL && (
                                        <div className="flex items-center">
                                            <div className="h-1 w-16 bg-gradient-to-r from-gold via-gold/50 to-gold/30"></div>
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-gold/30"></div>
                                        </div>
                                    )}
                                    <div className={`${isRTL ? '' : 'absolute -bottom-8 left-1/2 transform -translate-x-1/2'} bg-gold/10 px-3 py-1 rounded-full`}>
                                        <span className="text-xs text-gold font-medium whitespace-nowrap">
                                            {isRTL ? 'المرحلة التالية' : 'Next Phase'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 - Execution Phase */}
                            <ScrollObserver animation="fade-up" threshold={0.3} delay={200}>
                                <a href="/news/execution-phase" className="group relative block">
                                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gold/20 hover:border-gold/50">
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent z-10"></div>
                                            <img src="/News/mr1.webp" alt="Execution Phase" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg z-20">
                                                <span className="text-white font-bold text-xl">2</span>
                                            </div>
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Hammer className="w-5 h-5 text-gold" />
                                                </div>
                                                <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                                                    {isRTL ? 'مرحلة التنفيذ والتركيب' : 'Execution & Installation Phase'}
                                                </h3>
                                            </div>
                                            <p className="text-charcoal/70 text-sm mb-4">
                                                {isRTL ? 'التنفيذ الدقيق والتركيب الاحترافي' : 'Precise execution and professional installation'}
                                            </p>
                                            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300">
                                                <span className="text-sm font-medium">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                                <ArrowRightIcon className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </ScrollObserver>

                            {/* Connecting Arrow 2 to 3 */}
                            <div className="flex justify-center items-center -mx-8 z-10">
                                <div className="relative">
                                    {!isRTL && (
                                        <div className="flex items-center">
                                            <div className="h-1 w-16 bg-gradient-to-r from-gold via-gold/50 to-gold/30"></div>
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-gold/30"></div>
                                        </div>
                                    )}
                                    <div className={`${isRTL ? '' : 'absolute -bottom-8 left-1/2 transform -translate-x-1/2'} bg-gold/10 px-3 py-1 rounded-full`}>
                                        <span className="text-xs text-gold font-medium whitespace-nowrap">
                                            {isRTL ? 'المرحلة الأخيرة' : 'Final Phase'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - Delivery Phase */}
                            <ScrollObserver animation="fade-up" threshold={0.3} delay={300}>
                                <a href="/news/delivery-phase" className="group relative block">
                                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gold/20 hover:border-gold/50">
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent z-10"></div>
                                            <img src="/News/finish/3t.webp" alt="Delivery Phase" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg z-20">
                                                <span className="text-white font-bold text-xl">3</span>
                                            </div>
                                            <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2 shadow-lg z-20">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-5 h-5 text-gold" />
                                                </div>
                                                <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                                                    {isRTL ? 'مرحلة تسليم المشروع' : 'Project Delivery Phase'}
                                                </h3>
                                            </div>
                                            <p className="text-charcoal/70 text-sm mb-4">
                                                {isRTL ? 'التسليم النهائي بأعلى معايير الجودة' : 'Final delivery with highest quality standards'}
                                            </p>
                                            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300">
                                                <span className="text-sm font-medium">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                                <ArrowRightIcon className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </ScrollObserver>
                        </div>

                        {/* Mobile Layout */}
                        <div className="lg:hidden flex flex-col">
                            {/* Card 1 */}
                            <ScrollObserver animation="fade-up" threshold={0.3} delay={100}>
                                <a href="/news/planning-phase" className="group relative block">
                                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gold/20 hover:border-gold/50">
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent z-10"></div>
                                            <img src="/News/cover.webp" alt="Planning Phase" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg z-20">
                                                <span className="text-white font-bold text-xl">1</span>
                                            </div>
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <FileText className="w-5 h-5 text-gold" />
                                                </div>
                                                <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                                                    {isRTL ? 'مرحلة الاتفاق والتخطيط' : 'Agreement & Planning Phase'}
                                                </h3>
                                            </div>
                                            <p className="text-charcoal/70 text-sm mb-4">
                                                {isRTL ? 'وضع الأسس والتخطيط الدقيق للمشروع' : 'Setting foundations and precise project planning'}
                                            </p>
                                            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300">
                                                <span className="text-sm font-medium">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                                <ArrowRightIcon className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </ScrollObserver>

                            {/* Mobile Arrow 1 to 2 */}
                            <div className="flex justify-center my-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-1 h-16 bg-gradient-to-b from-gold via-gold/50 to-gold/30"></div>
                                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-gold/30"></div>

                                </div>
                            </div>

                            {/* Card 2 */}
                            <ScrollObserver animation="fade-up" threshold={0.3} delay={200}>
                                <a href="/news/execution-phase" className="group relative block">
                                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gold/20 hover:border-gold/50">
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent z-10"></div>
                                            <img src="/News/hero-1.jpeg" alt="Execution Phase" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg z-20">
                                                <span className="text-white font-bold text-xl">2</span>
                                            </div>
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Hammer className="w-5 h-5 text-gold" />
                                                </div>
                                                <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                                                    {isRTL ? 'مرحلة التنفيذ والتركيب' : 'Execution & Installation Phase'}
                                                </h3>
                                            </div>
                                            <p className="text-charcoal/70 text-sm mb-4">
                                                {isRTL ? 'التنفيذ الدقيق والتركيب الاحترافي' : 'Precise execution and professional installation'}
                                            </p>
                                            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300">
                                                <span className="text-sm font-medium">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                                <ArrowRightIcon className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </ScrollObserver>

                            {/* Mobile Arrow 2 to 3 */}
                            <div className="flex justify-center my-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-1 h-16 bg-gradient-to-b from-gold via-gold/50 to-gold/30"></div>
                                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-gold/30"></div>

                                </div>
                            </div>

                            {/* Card 3 */}
                            <ScrollObserver animation="fade-up" threshold={0.3} delay={300}>
                                <a href="/news/delivery-phase" className="group relative block">
                                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gold/20 hover:border-gold/50">
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent z-10"></div>
                                            <img src="/News/hero-3.webp" alt="Delivery Phase" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg z-20">
                                                <span className="text-white font-bold text-xl">3</span>
                                            </div>
                                            <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2 shadow-lg z-20">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-5 h-5 text-gold" />
                                                </div>
                                                <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                                                    {isRTL ? 'مرحلة تسليم المشروع' : 'Project Delivery Phase'}
                                                </h3>
                                            </div>
                                            <p className="text-charcoal/70 text-sm mb-4">
                                                {isRTL ? 'التسليم النهائي بأعلى معايير الجودة' : 'Final delivery with highest quality standards'}
                                            </p>
                                            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300">
                                                <span className="text-sm font-medium">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                                <ArrowRightIcon className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </ScrollObserver>
                        </div>
                    </div>



                    {/* Card 2 already exists here in the grid */}

                    {/* Mobile Arrow 2 to 3 */}
                    <div className="lg:hidden flex justify-center my-6">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-1 h-16 bg-gradient-to-b from-gold via-gold/50 to-gold/30"></div>
                            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-gold/30"></div>
                            <div className="bg-gold/10 px-4 py-2 rounded-full mt-2">
                                <span className="text-xs text-gold font-medium whitespace-nowrap">
                                    {isRTL ? 'النتيجة النهائية' : 'Final Result'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Timeline Indicator */}
                    <div className="mt-16 flex justify-center">
                        <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gold rounded-full"></div>
                                <span className="text-sm text-charcoal font-medium">
                                    {isRTL ? '14 يوم' : '14 Days'}
                                </span>
                            </div>
                            <div className="w-px h-6 bg-charcoal/20"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-charcoal font-medium">
                                    {isRTL ? 'اكتمل بنجاح' : 'Successfully Completed'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollObserver>
            {/* Final Section with Video */}
            <ScrollObserver animation="fade-up" threshold={0.3} delay={50} className="py-20 bg-gradient-to-br from-charcoal/5 to-gold/5">
                <div
                    ref={(el) => (sectionsRef.current['video'] = el)}
                    className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24"
                >
                    <ScrollObserver
                        animation="fade-right"
                        threshold={0.4}
                        delay={100}
                        className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}
                    >
                        <div dir="ltr">
                            <VideoPlayer
                                src="/videos/h2.mp4"
                                poster="/News/finish/preview.jpg"
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
                                        ? 'المهندس أشرف قنديل يستعرض الثرايا الكرستالية بعد اتمام المشروع.'
                                        : 'Engineer Ashraf Qandil reviews the crystal chandeliers after completing the project.'
                                    }
                                </p>
                            </div>
                        </div>
                    </ScrollObserver>

                    <ScrollObserver
                        animation="fade-left"
                        threshold={0.4}
                        delay={200}
                        className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                        <Card className="p-8 lg:p-16 elegant-shadow border-none bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl transition-all duration-500">
                            <blockquote className="text-2xl lg:text-3xl font-bold text-charcoal leading-relaxed mb-6">
                                {isRTL
                                    ? '"أنهى فريق Hebat East تنفيذ مشروع تركيب النجف الكريستالية والنحاسية في المتحف الأحمر بجدة التاريخية على مساحة 220 متر مربع. يشرف المهندس أشرف قنديل، مدير المشاريع، بعرض الفنيات الدقيقة للعمل، معربًا عن فخره بالجهود الاستثنائية للفريق الذي أكمل المهمة في زمن قياسي مع الالتزام بأعلى معايير الجودة والدقة."'
                                    : '"The Hebat East team has successfully completed the installation of crystal and brass chandeliers at the Red Museum in Historic Jeddah, covering 220 square meters. Eng. Ashraf Kandil, Projects Director, proudly showcased the technical details of the work, expressing his pride in the team exceptional efforts to accomplish the project within a record timeframe while maintaining the highest standards of quality and precision."'
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
                    </ScrollObserver>
                </div>
            </ScrollObserver>
        </div>
    );
};

export default Award;