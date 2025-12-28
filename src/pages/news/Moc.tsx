import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import ScrollObserver from '../../components/home-index/ScrollObserver';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import VideoPlayer from '../../components/VideoPlayer';
import LazyImage from '../../components/LazyImage';

const Moc: React.FC = () => {
    const { isRTL } = useLanguage();
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

    // Other news items - excluding current news
    const otherNews = [
        {
            id: 1,
            title: isRTL
                ? 'بدء تركيب النجف في المتحف الأحمر'
                : 'Red Museum Chandelier Installation Begins',

            summary: isRTL
                ? 'الشركة بدأت أعمال تركيب النجف في موقع المتحف الأحمر بجدة التاريخية، ضمن الشراكة مع وزارة الثقافة لتطوير الإضاءة.'
                : 'Hebat East has commenced the installation of chandeliers at the Red Museum in Historic Jeddah, as part of the strategic partnership with the Ministry of Culture for lighting development.',

            date: isRTL ? 'ديسمبر 2025' : 'December 2025',

            image: '/News/mr2.jfif',

            category: isRTL ? 'مشاريع' : 'Projects',

            link: '/news/ritz-carlton'
        }
        ,

        {
            id: 2,
            title: isRTL
                ? 'تحفة ضوئية معمارية في مسجد ضحايا سديم'
                : 'Architectural Lighting Masterpiece at the Sadim Victims Mosque',
            summary: isRTL
                ? 'نجفة مركزية ذات تصميم هندسي معقّد، تجمع بين الدقة المعمارية والابتكار في توزيع الإضاءة، لتصبح أحد أبرز أعمال شركة هبات الشرق في المساجد الحديثة.'
                : 'A central masterpiece chandelier with a clean, detailed geometric design—one of Hebat East’s standout mosque projects.',
            date: isRTL ? 'نوفمبر 2025' : 'November 2025',
            image: '/projects-page/mosque5/1.jpeg',
            category: isRTL ? 'مشاريع مساجد' : 'Projects',
            link: '/news/ministry-partnership'
        },
        {
            id: 3,
            title: isRTL
                ? 'إنجاز أعمال الإضاءة في فندق مكارم المدينة'
                : 'Completion of Lighting Works at Makarem Al-Madina Hotel',

            summary: isRTL
                ? 'تنفيذ منظومة إضاءة تجمع بين الفخامة والطابع الإسلامي الحديث في أهم فنادق المدينة.'
                : 'A lighting system combining luxury and modern Islamic aesthetics completed for one of Madinah’s landmark hotels.',

            date: isRTL ? 'أكتوبر 2025' : 'October 2025',

            image: '/projects-page/Makarem/2t.jpg',

            category: isRTL ? 'فنادق' : 'Hotels',

            link: '/projects/Makarem'
        },


    ];

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
                                {isRTL ? 'يناير 2026' : 'January 2026'}
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
                                    ? 'هبات إيست تُنجز أعمال الإضاءة المعمارية لمبنى وزارة الثقافة – الدرعية'
                                    : "Hibat East completes architectural lighting work for the Ministry of Culture building – Diriyah MOC"
                                }
                            </h1>

                            <p className="text-lg lg:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-2xl">
                                {isRTL
                                    ? 'فخورون بإعلان إكمالنا لأعمال تركيب النجف والإضاءة المتقدمة في مشروع مقر وزارة الثقافة (MOC) بمحافظة الدرعية - الرياض، أحد أبرز المشاريع الثقافية في المملكة.'
                                    : 'We are proud to announce the completion of the installation of chandeliers and advanced lighting in the Ministry of Culture (MOC) headquarters project in Diriyah Governorate - Riyadh, one of the most prominent cultural projects in the Kingdom.'
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
                                        src="/News/moc/main.jpg"
                                        alt="Historic Jeddah Museum Project"
                                        className="w-full h-80 lg:h-96 object-cover"
                                        style={{
                                            filter: 'brightness(1.05) contrast(1.1)'
                                        }}
                                    />
                                </div>

                                <div className="p-4 text-center transition-colors duration-300 rounded-b-xl">
                                    <p className="text-sm font-medium text-charcoal/80 transition-colors duration-300">
                                        {isRTL ? ' MOC مبني وزارة الثقافة بمحافظة الدرعية - الرياض' : 'Ministry of Culture Building, Diriyah Governorate - Riyadh , MOC '}
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
                                {isRTL ? 'تفاصيل المشروع ' : 'Project details'}
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'في مشروع مقر وزارة الثقافة بالدرعية، قمنا بتنفيذ كامل أعمال الإضاءة والتركيب. من ضمن ما نفذناه: تركيب وحدات الإضاءة الموجهة (سبوت لايت) المدمجة مع الألواح الدائرية النسيجية.'
                                    : 'In the Ministry of Culture headquarters project in Diriyah, we carried out all lighting and installation work. This included the installation of integrated spotlights with circular acoustic fabric panels..'
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
                                src="/News/moc/1.jfif"
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
                                src="/News/moc/2.jfif"
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
                                {isRTL ? 'فنيات المشروع' : 'Project techniques'}
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'تم تركيب وحدات الإضاءة بدقة عالية لتتكامل تماماً مع عناصر السقف الصوتية المعلقة، مما يعزز من الجمال البصري والأداء.'
                                    : 'The lighting units were precisely installed to perfectly integrate with the suspended acoustic ceiling elements, enhancing the visual appeal.'
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
                                {isRTL ? 'فريقنا والتعاون مع رؤية 2030' : 'Our team and collaboration with Vision 2030'}
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'يفتخر فريقنا المؤهل بتنفيذ كامل أعمال الإضاءة في مشروع مقر وزارة الثقافة بالدرعية، أحد أهم المشاريع الثقافية في المملكة. هذا الإنجاز يعكس استمرار تعاوننا الناجح مع وزارة الثقافة السعودية، حيث قدمنا حلول إضاءة عالية الجودة تتناغم مع التصميم المستوحى من التراث السعودي بأسلوب معاصر، لنضيء مساحات ثقافية تخدم الوطن والمجتمع.'
                                    : 'Our qualified team takes pride in executing all lighting works for the Ministry of Culture headquarters project in Diriyah, one of the Kingdom\'s most important cultural projects. This achievement reflects our successful ongoing cooperation with the Saudi Ministry of Culture, where we delivered high-quality lighting solutions that harmonize with designs inspired by Saudi heritage in a contemporary style, illuminating cultural spaces that serve the nation and society.'}
                            </p>
                        </div>
                    </div>

                    <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/News/moc/3.jfif"
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
                                src="/News/moc/vid.mp4"
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
                                        ? 'المهندس اشرف قنديل يستعرض الانتهاء من مشروع الاضاءة'
                                        : 'Engineer Ashraf Kandil reviews the completion of the lighting project..'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                        <Card className="p-8 lg:p-16 elegant-shadow border-none bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl transition-all duration-500">
                            <blockquote className="text-2xl lg:text-3xl font-bold text-charcoal leading-relaxed mb-6">
                                {isRTL
                                    ? '"يشرفنا المساهمة في إضاءة أحد أبرز المعالم الثقافية في المملكة من خلال تنفيذ كامل أعمال تركيب الإضاءة والنجف في مقر وزارة الثقافة (MOC) بمحافظة الدرعية، حيث حرصنا على تقديم حلول إضاءة عالية الجودة تبرز الجمال المعماري للمبنى وتعزز التجربة الثقافية للزوار والموظفين."'
                                    : '"We are honored to contribute to illuminating one of the Kingdom\'s most prominent cultural landmarks by executing all lighting and chandelier installation works at the Ministry of Culture headquarters (MOC) in Diriyah Governorate, where we ensured high-quality lighting solutions that highlight the building\'s architectural beauty and enhance the cultural experience for visitors and staff."'}
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

            {/* Other News Section - أخبار أخرى */}
            <section className="py-20 bg-white">
                <div className="container-custom mx-auto">
                    <ScrollObserver animation="fade-up" threshold={0.2} delay={0}>
                        <div className={`${isRTL ? 'text-right' : 'text-left'} mb-12`}>
                            <div className="inline-block mb-3">
                                <span className="text-gold text-xs font-bold tracking-widest uppercase border-b-2 border-gold pb-1.5">
                                    {isRTL ? 'تابع القراءة' : 'Continue Reading'}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 leading-tight">
                                {isRTL ? 'أخبار أخرى' : 'Other News'}
                            </h2>
                        </div>
                    </ScrollObserver>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherNews.map((news, index) => (
                            <ScrollObserver
                                key={news.id}
                                animation="fade-up"
                                threshold={0.1}
                                delay={100 * (index + 1)}
                            >
                                <a
                                    href={news.link}
                                    className="block group h-full"
                                    onMouseEnter={() => setHoveredCard(news.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 relative">
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <LazyImage
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>

                                            {/* Category Badge */}
                                            <div className="absolute top-5 left-5">
                                                <span className="bg-gold text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg group-hover:bg-white group-hover:text-charcoal transition-all duration-300">
                                                    {news.category}
                                                </span>
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500"></div>
                                        </div>

                                        {/* Content */}
                                        <CardContent className={`p-7 ${isRTL ? 'text-right' : 'text-left'} bg-white relative`}>
                                            {/* Date */}
                                            <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{news.date}</span>
                                            </div>

                                            <h3 className="text-lg font-bold text-gold/95 text-charcoal mb-3 leading-snug line-clamp-2">
                                                {news.title}
                                            </h3>
                                            <p className="text-base text-charcoal leading-relaxed mb-5 line-clamp-3 min-h-[4.5rem] font-medium">
                                                {news.summary}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="inline-flex items-center gap-2 text-gold font-bold text-sm group-hover:gap-3 transition-all duration-300">
                                                <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                                {isRTL ? <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            </ScrollObserver>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Moc;