import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import ScrollObserver from '../../components/home-index/ScrollObserver';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import LazyImage from '../../components/LazyImage';

const Makarem: React.FC = () => {
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

    const otherNews = [
        {
            id: 1,
            title: isRTL
                ? 'مشروع المتحف الأحمر بجدة التاريخية'
                : 'Red Museum Project in Historic Jeddah',
            summary: isRTL
                ? 'شراكة استراتيجية مع وزارة الثقافة لتطوير إضاءة المتحف الأحمر'
                : 'Strategic partnership with Ministry of Culture for Red Museum lighting',
            date: isRTL ? 'مايو 2025' : 'May 2025',
            image: '/News/hero-1.jpeg',
            category: isRTL ? 'مشاريع' : 'Projects',
            link: '/news/red-museum'
        },
        {
            id: 2,
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
        },
        {
            id: 3,
            title: isRTL
                ? 'إنجاز أعمال الإضاءة في مسجد ضاحية سدايم'
                : 'Completion of Lighting Works at Sadaim Suburb Mosque',
            summary: isRTL
                ? 'تركيب النجفة الهندسية الرئيسية وتنفيذ منظومة الإضاءة الداخلية والخارجية وفق التصميم المعتمد.'
                : 'Installation of the main geometric chandelier and full interior and exterior lighting system as per the approved design.',
            date: isRTL ? 'ديسمبر 2025' : 'December 2025',
            image: '/projects-page/mosque5/1.jpeg',
            category: isRTL ? 'مساجد' : 'Mosques',
            link: '/news/sadaim-mosque'
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
                                {isRTL ? 'أكتوبر 2025' : 'October 2025'}
                            </span>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-8 transform hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl">
                                    <img
                                        src="/News/makarem/logo.jpg"
                                        alt="Makarem Logo"
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-charcoal">
                                        {isRTL ? 'فنادق مكارم' : 'Makarem Hotels'}
                                    </h3>
                                    <p className="text-gold text-sm font-medium">
                                        {isRTL ? 'مشروع إضاءة متكامل' : 'Integrated Lighting Project'}
                                    </p>
                                </div>
                            </div>

                            <h1 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-charcoal mb-6 leading-tight">
                                {isRTL
                                    ? 'إنجاز أعمال الإضاءة الكاملة في فندق مكارم المدينة'
                                    : 'Completion of Full Lighting Works at Makarem Al-Madina Hotel'
                                }
                            </h1>

                            <p className="text-lg lg:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-2xl">
                                {isRTL
                                    ? 'أعلنت شركة هبات الشرق عن إتمام منظومة الإضاءة المتكاملة لفندق مكارم المدينة، التي تجمع بين الفخامة والطابع الإسلامي الحديث في أحد أبرز فنادق المدينة المنورة.'
                                    : 'Hebat East announces the successful completion of the integrated lighting system for Makarem Al-Madina Hotel, combining luxury and modern Islamic aesthetics in one of Madinah\'s most prestigious hotels.'
                                }
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold/50 rounded-full"></div>
                                <span className="text-sm text-charcoal/60 font-medium">
                                    {isRTL ? 'المدينة المنورة' : 'Madinah'}
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
                                        src="/News/makarem/poster.jpeg"
                                        alt="Makarem Al-Madina Hotel"
                                        className="w-full h-80 lg:h-96 object-cover"
                                        style={{
                                            filter: 'brightness(1.05) contrast(1.1)'
                                        }}
                                    />
                                </div>

                                <div className="p-4 text-center transition-colors duration-300 rounded-b-xl">
                                    <p className="text-sm font-medium text-charcoal/80 transition-colors duration-300">
                                        {isRTL ? 'فندق مكارم المدينة المنورة' : 'Makarem Al-Madina Hotel'}
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
                                {isRTL ? 'التصميم الإضاءي الفاخر' : 'Luxury Lighting Design'}
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed mb-6 group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'صُمِّمت منظومة الإضاءة لتعكس هوية الفندق الراقية، إذ تمزج بين عناصر التراث الإسلامي والأسلوب المعاصر في تناغم بصري استثنائي يرتقي بتجربة الضيوف.'
                                    : 'The lighting system was designed to reflect the hotel\'s distinguished identity, blending Islamic heritage elements with contemporary style in an exceptional visual harmony that elevates the guest experience.'}
                            </p>

                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold text-xl leading-none">•</span>
                                    <span className="text-charcoal/80 group-hover:text-charcoal/90 transition-colors duration-300">
                                        {isRTL
                                            ? 'نجف مركزية فاخرة مستوحاة من الزخارف الإسلامية الكلاسيكية'
                                            : 'Luxurious central chandeliers inspired by classical Islamic ornamentation'}
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-gold text-xl leading-none">•</span>
                                    <span className="text-charcoal/80 group-hover:text-charcoal/90 transition-colors duration-300">
                                        {isRTL
                                            ? 'إضاءة محيطية دافئة تُعزز أجواء الراحة والهدوء في أروقة الفندق'
                                            : 'Warm ambient lighting enhancing comfort and tranquility throughout hotel corridors'}
                                    </span>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-gold text-xl leading-none">•</span>
                                    <span className="text-charcoal/80 group-hover:text-charcoal/90 transition-colors duration-300">
                                        {isRTL
                                            ? 'تقنيات LED موفّرة للطاقة مع الحفاظ على جودة الإضاءة العالية'
                                            : 'Energy-efficient LED technology maintaining superior lighting quality'}
                                    </span>
                                </li>
                            </ul>
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
                                src="/News/makarem/2.jpg"
                                alt="Makarem Hotel Lighting"
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


            {/* Section 3 */}
            <section ref={setSectionRef(2)} className="py-20 opacity-0 transform translate-y-10">
                <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'} relative`}>
                        <div
                            className="relative bg-gradient-to-tr from-gold/10 to-gold/20 p-12 lg:p-16 rounded-3xl group hover:shadow-lg transition-all duration-500"
                            style={{
                                clipPath: 'polygon(0% 15%, 90% 0%, 100% 100%, 0% 100%)',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL ? 'تسليم المشروع القياسي' : 'Project Completion'}
                            </h2>

                            <p className="text-lg text-charcoal/80 leading-relaxed group-hover:text-charcoal/90 transition-colors duration-300">
                                {isRTL
                                    ? 'تم تسليم مشروع إضاءة فندق مكارم المدينة بالكامل في الموعد المحدد، عقب إجراء اختبارات شاملة لضمان توزيع الضوء بشكل متوازن وتحقيق أعلى مستويات الجودة الفنية في كافة مناطق الفندق.'
                                    : 'The Makarem Al-Madina Hotel lighting project was fully delivered on schedule, following comprehensive testing to ensure balanced light distribution and achieve the highest technical quality standards across all hotel areas.'
                                }
                            </p>
                        </div>
                    </div>

                    <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/News/makarem/3.jpg"
                                alt="Project Completion"
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

            {/* Final Section with Quote */}
<section ref={setSectionRef(3)} className="py-20 bg-gradient-to-br from-charcoal/5 to-gold/5 opacity-0 transform translate-y-10">
    <div className="container-custom mx-auto">
        <Card className="p-8 lg:p-16 elegant-shadow border-none bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-xl transition-all duration-500">

            <blockquote className="text-2xl lg:text-3xl font-bold text-charcoal leading-relaxed mb-6">
                {isRTL
                    ? '"نفّذنا منظومة الإضاءة الداخلية والخارجية لفندق مكارم المدينة وفق أعلى معايير الجودة، ووفّرنا حلولاً ضوئية تجمع بين الفخامة والهوية الإسلامية لترقى بتجربة الضيوف إلى مستوى استثنائي."'
                    : '"We delivered the full interior and exterior lighting system for Makarem Al-Madina Hotel to the highest quality standards, providing lighting solutions that blend luxury with Islamic identity to elevate the guest experience to an exceptional level."'
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
                        {isRTL ? 'مدير المشاريع والشريك الإداري – مجموعة هِبَات إيست' : 'Projects Director & Managing Partner – Hebat East Group'}
                    </p>
                </div>
            </footer>

        </Card>
    </div>
</section>
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

export default Makarem;