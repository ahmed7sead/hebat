import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import ScrollObserver from '../components/home-index/ScrollObserver';
import LazyImage from '../components/LazyImage';
import { useLanguage } from '../context/LanguageContext';

const News = () => {
    const { isRTL } = useLanguage();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // بيانات الأخبار مع المسارات الصحيحة
    const newsItems = [

        {
            id: 1,
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
        }
        ,
        {
            id: 2,
            title: isRTL
                ? 'بدء تركيب النجف في المتحف الأحمر'
                : 'Red Museum Chandelier Installation Begins',

            summary: isRTL
                ? 'الشركة بدأت أعمال تركيب النجف في موقع المتحف الأحمر بجدة التاريخية، ضمن الشراكة مع وزارة الثقافة لتطوير الإضاءة.'
                : 'Hebat East has commenced the installation of chandeliers at the Red Museum in Historic Jeddah, as part of the strategic partnership with the Ministry of Culture for lighting development.',

            date: isRTL ? 'ديسمبر 2025' : 'December 2025',

            image: '/News/mrr.webp',

            category: isRTL ? 'مشاريع' : 'Projects',

            link: '/news/ritz-carlton'
        }
        ,
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

        {
            id: 4,
            title: isRTL
                ? 'إتمام مشروع جامع الشيخ سعد بن محمد العجلان'
                : 'Muhammad Al-Ajlan Mosque Project Completed',

            summary: isRTL
                ? 'تصميم وتصنيع وتركيب النجف الرئيسي والفوانيس الجانبية، مع توزيع الإضاءة بدقة لتكملة الطابع المعماري للمسجد.'
                : 'Design, manufacturing, and installation of the main chandelier and side wall lanterns, with precise lighting distribution to complement the mosque’s architectural style.',

            date: isRTL ? 'اغسطس 2025' : 'August 2025',

            image: '/projects-page/mosque4/6.jpeg',

            category: isRTL ? 'مساجد' : 'Projects',

            link: '/projects/mosque4'
        },

        {
            id: 5,
            title: isRTL
                ? 'مشروع المتحف الأحمر بجدة التاريخية'
                : 'Red Museum Project in Historic Jeddah',
            summary: isRTL
                ? 'شراكة استراتيجية مع وزارة الثقافة لتطوير إضاءة المتحف الأحمر'
                : 'Strategic partnership with Ministry of Culture for Red Museum lighting',
            date: isRTL ? 'مايو 2025' : 'May 2025',
            image: '/News/mr1.jpg',
            category: isRTL ? 'مشاريع' : 'Projects',
            link: '/news/red-museum'
        },

        {
            id: 6,
            title: isRTL
                ? 'إتمام مشروع فندق ركيسوس'
                : 'Rixos Hotel Project Completed',
            summary: isRTL
                ? 'تركيب النجفة الوردية المميزة وأنظمة الإضاءة الفاخرة، مع إبراز تصميم النجف المودرن الراقي  وتفاصيله المعمارية الفريدة.'
                : 'Installation of the signature pink chandelier and luxury lighting, highlighting the chandelier elegant and modern design and unique architectural details.',
            date: isRTL ? 'يناير 2025' : 'January 2025',
            image: '/projects-page/Rixos/14.webp',
            category: isRTL ? 'فنادق' : 'Hotels',
            link: '/projects/rixos'
        },
        {
            id: 7,
            title: isRTL
                ? 'إتمام مشروع إضاءة فندق WORTH'
                : 'WORTH Hotel Lighting Project Completed',

            summary: isRTL
                ? 'تنفيذ وتركيب أطول نجفة في المملكة بتصميم فاخر ومودرن، ضمن مشروع إضاءة متكاملة للفندق الذكي في المدينة المنورة.'
                : 'Installation of the tallest chandelier in the Kingdom with luxury modern design, part of a comprehensive lighting project at the smart WORTH Hotel in Madinah.',

            date: isRTL ? 'نوفمبر 2024' : 'November 2024',

            image: '/projects-page/Worth/1.webp',

            category: isRTL ? 'فنادق' : 'Hotels',

            link: '/projects/commercial-plaza'
        }

    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Simple Elegant Header */}
            <div className="pt-24 pb-12 container-custom mx-auto">
                <ScrollObserver animation="fade-up" threshold={0.1} delay={0}>
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                        <div className="inline-block mb-3">
                        </div>
                    </div>
                </ScrollObserver>
            </div>

            {/* Featured News - الخبر الرئيسي */}
            <section className="pb-16 container-custom mx-auto">
                <ScrollObserver animation="fade-up" threshold={0.2} delay={100}>
                    <a href={newsItems[0].link} className="block group">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                            {/* Background Image with Overlay */}
                            <div className="relative h-[450px] md:h-[520px] lg:h-[550px]">
                                <LazyImage
                                    src={newsItems[0].image}
                                    alt={newsItems[0].title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
                                    <div className="max-w-3xl">
                                        {/* Category & Meta */}
                                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                                            <span className="bg-gold text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                                                {newsItems[0].category}
                                            </span>
                                            <div className="flex items-center gap-2 text-white/80">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span className="text-xs font-medium">{newsItems[0].date}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                                            {newsItems[0].title}
                                        </h2>

                                        {/* Summary */}
                                        <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                                            {newsItems[0].summary}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="inline-flex items-center gap-2 bg-white text-charcoal px-6 py-3 rounded-full font-bold text-sm hover:bg-gold hover:text-white transition-all duration-300 group-hover:gap-4">
                                            <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                                            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </ScrollObserver>
            </section>

            {/* Other News - باقي الأخبار */}
            <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="container-custom mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsItems.slice(1).map((news, index) => (
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
                                            {/* Date Only */}
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

            {/* CTA Section - تصفح آخر مشاريعنا */}
            <section className="py-20 bg-charcoal relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>

                <div className="container-custom mx-auto relative z-10">
                    <ScrollObserver animation="fade-up" threshold={0.2}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className={`${isRTL ? 'text-right lg:order-2' : 'text-left lg:order-1'}`}>
                                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-6 border border-gold/20">
                                    <Sparkles className="w-4 h-4" />
                                    <span>{isRTL ? 'استكشف المزيد' : 'Explore More'}</span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                    {isRTL ? 'تصفح آخر مشاريعنا' : 'Browse Our Latest Projects'}
                                </h3>

                                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                    {isRTL
                                        ? 'اكتشف مجموعة من أروع مشاريع الإضاءة الفاخرة التي نفذناها في الفنادق والقصور والمعالم الثقافية'
                                        : 'Discover our finest luxury lighting projects in hotels, palaces and cultural landmarks'}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">

                                    {/* BUTTON 1 – Official CTA Style */}
                                    <a
                                        href="/projects"
                                        className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/30 inline-flex items-center justify-center gap-3"
                                    >
                                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                                        <span className="relative z-10">
                                            {isRTL ? 'شاهد المشاريع' : 'View Projects'}
                                        </span>

                                        {isRTL ? (
                                            <ArrowLeft className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        ) : (
                                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        )}
                                    </a>

                                    {/* BUTTON 2 – Official CTA Style */}
                                    <a
                                        href="/contact"
                                        className="group relative overflow-hidden bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm inline-flex items-center justify-center gap-3"
                                    >
                                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-charcoal">
                                            {isRTL ? 'تواصل معنا' : 'Contact Us'}
                                        </span>

                                        {isRTL ? (
                                            <ArrowLeft className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        ) : (
                                            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        )}
                                    </a>

                                </div>
                            </div>

                            {/* Image Grid (unchanged 100%) */}
                            <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-5">
                                        <a href="/projects/crown" className="block rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                                            <div className="relative h-56 overflow-hidden">
                                                <img src="projects-page/crown/4.webp" alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300"></div>
                                            </div>
                                        </a>
                                        <a href="/projects/mosque1" className="block rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                                            <div className="relative h-64 overflow-hidden">
                                                <img src="projects-page/mosque1/8.webp" alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300"></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="space-y-5 mt-8">
                                        <a href="/projects/hotel-lobby" className="block rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                                            <div className="relative h-64 overflow-hidden">
                                                <img src="/projects-page/emmar/3.jpg" alt="Project 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300"></div>
                                            </div>
                                        </a>
                                        <a href="/projects/mosque1" className="block rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                                            <div className="relative h-56 overflow-hidden">
                                                <img src="/projects-page/emmar/a.jfif" alt="Project 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ScrollObserver>
                </div>
            </section>
        </div >
    );
};

export default News;