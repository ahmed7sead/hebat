import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from '../components/LazyImage';
import {
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Factory as FactoryIcon,
  Users,
  Ruler,
  Award,
  Cog,
  Hammer,
  CheckCircle2,
  PackageCheck
} from 'lucide-react';

const Gallery = () => {
  const { isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(9);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ------------------------------
  // Factory overview content
  // ------------------------------
  const factoryFeatures = [
    {
      textEN: 'Over 15 years of experience in chandelier manufacturing',
      textAR: 'أكثر من 15 عامًا من الخبرة في تصنيع الثريات'
    },
    {
      textEN: 'Modern machinery and precision production lines',
      textAR: 'آلات حديثة وخطوط إنتاج عالية الدقة'
    },
    {
      textEN: 'Skilled craftsmen and quality control specialists',
      textAR: 'حرفيون مهرة ومتخصصون في مراقبة الجودة'
    },
    {
      textEN: 'Custom designs tailored to every project',
      textAR: 'تصاميم مخصصة تناسب كل مشروع'
    }
  ];

  // ------------------------------
  // Stats
  // ------------------------------
  const stats = [
    { icon: Award, valueEN: '15+', valueAR: '15+', labelEN: 'Years of Experience', labelAR: 'سنة خبرة' },
    { icon: Users, valueEN: '50+', valueAR: '50+', labelEN: 'Skilled Employees', labelAR: 'موظف محترف' },
    { icon: Ruler, valueEN: '5000 m²', valueAR: '5000 م²', labelEN: 'Factory Area', labelAR: 'مساحة المصنع' },
    { icon: PackageCheck, valueEN: '1000+', valueAR: '1000+', labelEN: 'Projects Delivered', labelAR: 'مشروع منجز' }
  ];

  // ------------------------------
  // Manufacturing process steps
  // ------------------------------
  const processSteps = [
    {
      icon: Cog,
      titleEN: 'Design',
      titleAR: 'التصميم',
      descEN: 'Our designers turn ideas and client requirements into detailed technical drawings.',
      descAR: 'يقوم مصمّمونا بتحويل الأفكار ومتطلبات العميل إلى رسومات فنية تفصيلية.'
    },
    {
      icon: Hammer,
      titleEN: 'Manufacturing',
      titleAR: 'التصنيع',
      descEN: 'Skilled craftsmen shape and assemble every piece with precision.',
      descAR: 'يقوم الحرفيون المهرة بتشكيل وتجميع كل قطعة بدقة عالية.'
    },
    {
      icon: CheckCircle2,
      titleEN: 'Quality Check',
      titleAR: 'فحص الجودة',
      descEN: 'Every product passes strict quality control before approval.',
      descAR: 'يمر كل منتج بمراقبة جودة صارمة قبل اعتماده.'
    },
    {
      icon: PackageCheck,
      titleEN: 'Packaging & Delivery',
      titleAR: 'التغليف والتسليم',
      descEN: 'Products are carefully packaged and delivered on schedule.',
      descAR: 'يتم تغليف المنتجات بعناية وتسليمها في الموعد المحدد.'
    }
  ];

  // ------------------------------
  // Inside the factory - workshop photos (placeholder paths)
  // ------------------------------
  const workshopImages = [
    { id: 1, url: '/factory/workshop-1.jpg', titleEN: 'Production Line', titleAR: 'خط الإنتاج' },
    { id: 2, url: '/factory/workshop-2.jpg', titleEN: 'Metal Work Station', titleAR: 'محطة تشغيل المعادن' },
    { id: 3, url: '/factory/workshop-3.jpg', titleEN: 'Assembly Area', titleAR: 'منطقة التجميع' },
    { id: 4, url: '/factory/workshop-4.jpg', titleEN: 'Quality Inspection', titleAR: 'فحص الجودة' },
    { id: 5, url: '/factory/workshop-5.jpg', titleEN: 'Finishing Department', titleAR: 'قسم التشطيب' },
    { id: 6, url: '/factory/workshop-6.jpg', titleEN: 'Packaging Section', titleAR: 'قسم التغليف' }
  ];

  // ------------------------------
  // Products (formerly the full Gallery page content)
  // ------------------------------
  const categories = [
    { id: 'all', nameEN: 'All', nameAR: 'الكل' },
    { id: 'modern', nameEN: 'Modern', nameAR: 'عصري' },
    { id: 'classic', nameEN: 'Classic', nameAR: 'كلاسيكي' },
    { id: 'crystal', nameEN: 'Ring modern', nameAR: 'نجف حلقي ' },
    { id: 'custom', nameEN: 'Custom', nameAR: 'مخصص' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'modern',
      imageUrl: '/gallery/4-modern.jpg',
      titleEN: 'Cylindrical chandelier',
      titleAR: 'اكواب اسطوانية',
      locationEN: 'Luxury Villa, Riyadh',
      locationAR: 'فيلا فاخرة، الرياض'
    },
    {
      id: 2,
      category: 'classic',
      imageUrl: '/gallery/1-classic.jpg',
      titleEN: 'Grand Classic',
      titleAR: 'كلاسيكي فخم',
      locationEN: 'Royal Palace, Jeddah',
      locationAR: 'مسجد الرحمن , جدة'
    },
    {
      id: 3,
      category: 'crystal',
      imageUrl: '/gallery/2-ring.jpeg',
      titleEN: 'Modern Ring',
      titleAR: 'تصميم دائري عصري',
      locationEN: 'Grand Hotel, Riyadh',
      locationAR: 'فندق جراند، الرياض'
    },
    {
      id: 4,
      category: 'modern',
      imageUrl: '/gallery/3-modern.jpg',
      titleEN: 'modern chandelier',
      titleAR: ' ثريا هندسية ',
      locationEN: 'Modern office, Dammam',
      locationAR: 'شقة حديثة، الدمام'
    },
    {
      id: 5,
      category: 'custom',
      imageUrl: '/gallery/2-modern.jpg',
      titleEN: 'Bespoke Design',
      titleAR: 'تصميم مخصص',
      locationEN: 'Private Residence, Riyadh',
      locationAR: 'إقامة خاصة، الرياض'
    },
    {
      id: 6,
      category: 'crystal',
      imageUrl: '/gallery/3-ring.jpg',
      titleEN: 'ring luxurious',
      titleAR: 'تصميم دائري فاخر',
      locationEN: 'Luxury Mall, Khobar',
      locationAR: 'مطعم فاخر، الخبر'
    },
    {
      id: 7,
      category: 'classic',
      imageUrl: '/gallery/2-classic.jpg',
      titleEN: 'Islamic chandelier',
      titleAR: 'نجفة اسلامية',
      locationEN: 'Heritage Hotel, Riyadh',
      locationAR: 'فندق تراثي، جدة'
    },
    {
      id: 8,
      category: 'modern',
      imageUrl: '/gallery/liner.jpg',
      titleEN: 'liner Chandelier',
      titleAR: 'ثرايا خطية',
      locationEN: 'Conference hall, Jeddah',
      locationAR: 'قاعة مؤاتمرات، جدة'
    },
    {
      id: 9,
      category: 'custom',
      imageUrl: '/gallery/1-modern.jpg',
      titleEN: 'Modern lamb',
      titleAR: 'داليات مودرن',
      locationEN: 'Art Gallery, Dubai',
      locationAR: 'معرض فني، الرياض'
    },
    {
      id: 10,
      category: 'crystal',
      imageUrl: '/gallery/1-ring.jpg',
      titleEN: 'Multi-Tier ring',
      titleAR: 'تصميم دائري متعدد ',
      locationEN: 'Luxury mall, Riyadh',
      locationAR: 'مول فاخر، الرياض'
    },
    {
      id: 11,
      category: 'classic',
      imageUrl: '/gallery/3-classic.jpg',
      titleEN: 'Modern metal roof',
      titleAR: 'سقف معدني',
      locationEN: 'Luxury hotel bar, Jeddah',
      locationAR: 'مطعم فاخر , جدة'
    },
    {
      id: 12,
      category: 'custom',
      imageUrl: '/gallery/halal-Mosque.jpg',
      hoverImageUrl: '/gallery/hover-hala.jpg',
      titleEN: 'Hilal Mosque',
      titleAR: 'هلال جامع',
      locationEN: 'Kuwaiti Mosque, Dammam',
      locationAR: 'مسجد الكويتي ، الدمام'
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredItems.length));
  };

  // Lightbox functionality
  const openLightbox = (imageUrl: string) => {
    const imageIndex = filteredItems.findIndex(item => item.imageUrl === imageUrl);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(imageUrl);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex].imageUrl);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex].imageUrl);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isLightboxOpen && selectedImage) {
        e.preventDefault();
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen, selectedImage, currentImageIndex]);

  // Container and item variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isRTL ? -40 : 40
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <div className="pt-24">

        {/* ============ HERO ============ */}
        <section className="bg-charcoal text-white py-20">
          <div className="container-custom mx-auto">
            <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {isRTL ? 'مصنعنا' : 'Our Factory'}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {isRTL
                  ? 'من التصميم إلى التصنيع، تعرف على مصنعنا وشاهد أحدث منتجاتنا من الثريات الفاخرة والعصرية'
                  : 'From design to manufacturing — discover our factory and explore our latest collection of luxury and modern chandeliers'}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============ FACTORY OVERVIEW ============ */}
        <section className="py-20">
          <div className="container-custom mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg elegant-shadow h-96"
                initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <LazyImage
                  src="/factory/main.jpg"
                  alt={isRTL ? 'مصنعنا' : 'Our Factory'}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className={isRTL ? 'text-right' : 'text-left'}
                initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <FactoryIcon className="w-8 h-8 text-gold" />
                  <h2 className="text-3xl font-bold text-charcoal">
                    {isRTL ? 'نبذة عن مصنعنا' : 'About Our Factory'}
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {isRTL
                    ? 'يجمع مصنعنا بين الحرفية التقليدية والتقنيات الحديثة لإنتاج ثريات فاخرة تلبي أعلى معايير الجودة. نفخر بفريق من الحرفيين المهرة وخطوط إنتاج متطورة تمكننا من تنفيذ أي تصميم مهما كانت تفاصيله.'
                    : 'Our factory combines traditional craftsmanship with modern technology to produce luxury chandeliers that meet the highest quality standards. We take pride in our skilled craftsmen and advanced production lines that allow us to execute any design, no matter how detailed.'}
                </p>
                <ul className="space-y-3">
                  {factoryFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span className="text-gray-700">
                        {isRTL ? feature.textAR : feature.textEN}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="bg-charcoal text-white py-16">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-1">
                      {isRTL ? stat.valueAR : stat.valueEN}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {isRTL ? stat.labelAR : stat.labelEN}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ MANUFACTURING PROCESS ============ */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom mx-auto">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                {isRTL ? 'مراحل التصنيع' : 'Our Manufacturing Process'}
              </h2>
              <p className="text-gray-600">
                {isRTL
                  ? 'كل قطعة تمر بمراحل دقيقة لضمان أعلى مستوى من الجودة والإتقان'
                  : 'Every piece goes through precise stages to ensure the highest level of quality and craftsmanship'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg elegant-shadow text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-gold font-bold mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {isRTL ? step.titleAR : step.titleEN}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {isRTL ? step.descAR : step.descEN}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ INSIDE THE FACTORY ============ */}
        <section className="py-20">
          <div className="container-custom mx-auto">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                {isRTL ? 'لمحة من داخل مصنعنا' : 'Inside Our Factory'}
              </h2>
              <p className="text-gray-600">
                {isRTL
                  ? 'جولة سريعة داخل خطوط الإنتاج وورش العمل لدينا'
                  : 'A quick look inside our production lines and workshops'}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {workshopImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative h-56 rounded-lg overflow-hidden shadow-lg elegant-shadow group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <LazyImage
                    src={image.url}
                    alt={isRTL ? image.titleAR : image.titleEN}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                    <span className="text-white font-medium">
                      {isRTL ? image.titleAR : image.titleEN}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRODUCTS (formerly the standalone Gallery page) ============ */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom mx-auto">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                {isRTL ? 'منتجاتنا' : 'Our Products'}
              </h2>
              <p className="text-gray-600">
                {isRTL
                  ? 'استكشف مجموعتنا من الثريات الفاخرة والعصرية ومشاريعنا السابقة'
                  : 'Explore our collection of luxury and modern chandeliers and previous projects'}
              </p>
            </motion.div>

            {/* Categories */}
            <motion.div
              className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setVisibleItems(9);
                  }}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category.id
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                    }`}
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isRTL ? category.nameAR : category.nameEN}
                </motion.button>
              ))}
            </motion.div>

            {/* Gallery Items */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={activeCategory} // Re-render animation when category changes
            >
              {filteredItems.slice(0, visibleItems).map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow group cursor-pointer"
                  onClick={() => openLightbox(item.imageUrl)}
                >
                  <div className="h-64 overflow-hidden relative">
                    <LazyImage
                      src={item.imageUrl}
                      alt={isRTL ? item.titleAR : item.titleEN}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                        <Eye className="w-6 h-6 text-gold" />
                      </div>
                    </div>
                  </div>
                  <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-charcoal mb-1">
                      {isRTL ? item.titleAR : item.titleEN}
                    </h3>
                    <p className="text-gold">
                      {isRTL ? item.locationAR : item.locationEN}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {visibleItems < filteredItems.length && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.button
                  onClick={loadMore}
                  className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isRTL ? 'عرض المزيد' : 'Load More'}
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="relative w-full h-full flex items-center justify-center max-w-7xl">
              {/* Close Button */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className={`absolute ${isRTL ? 'right-6' : 'left-6'} top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-200 hover:scale-110`}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isRTL ? <ChevronRight className="w-8 h-8" /> : <ChevronLeft className="w-8 h-8" />}
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className={`absolute ${isRTL ? 'left-6' : 'right-6'} top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-200 hover:scale-110`}
                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isRTL ? <ChevronLeft className="w-8 h-8" /> : <ChevronRight className="w-8 h-8" />}
                  </motion.button>
                </>
              )}

              {/* Image Container */}
              <motion.div
                className="relative flex items-center justify-center w-full h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt={filteredItems[currentImageIndex]?.titleEN}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  style={{ maxWidth: '90vw' }}
                />

                {/* Image Info Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 rounded-b-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {isRTL ? filteredItems[currentImageIndex]?.titleAR : filteredItems[currentImageIndex]?.titleEN}
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      {isRTL ? filteredItems[currentImageIndex]?.locationAR : filteredItems[currentImageIndex]?.locationEN}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">
                        {isRTL ?
                          `${filteredItems.length} من ${currentImageIndex + 1}` :
                          `${currentImageIndex + 1} of ${filteredItems.length}`
                        }
                      </span>
                      <span className="bg-gradient-to-r from-gold to-gold-dark px-4 py-2 rounded-full text-white text-sm font-medium">
                        {isRTL ? categories.find(cat => cat.id === filteredItems[currentImageIndex]?.category)?.nameAR : categories.find(cat => cat.id === filteredItems[currentImageIndex]?.category)?.nameEN}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;