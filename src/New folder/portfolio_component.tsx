import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from '../../components/LazyImage';
import ScrollObserver from '../../components/home-index/ScrollObserver';
import { Home, Sofa, Bed, ChefHat, Bath, Tv, Eye, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const { isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6); // عرض 6 صور فقط في البداية
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Interior design projects data
  const projects = [{
    id: 1,
    category: 'living',
    image: 'projects-page/Interior/living.jpg',
    title: isRTL ? 'صالة معيشة فاخرة' : 'Luxury Living Room',
    description: isRTL ? 'تصميم عصري مع إضاءة مميزة' : 'Modern design with premium lighting',
    type: 'residential'
  }, {
    id: 2,
    category: 'bedroom',
    image: 'projects-page/Interior/badroom1.jpg',
    title: isRTL ? 'غرفة نوم رئيسية' : 'Master Bedroom',
    description: isRTL ? 'تصميم هادئ ومريح' : 'Peaceful and comfortable design',
    type: 'residential'
  }, {
    id: 4,
    category: 'bathroom',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: isRTL ? 'حمام فاخر' : 'Luxury Bathroom',
    description: isRTL ? 'حمام بتصميم سبا حديث' : 'Bathroom with modern spa design',
    type: 'residential'
  }, {
    id: 5,
    category: 'bedroom',
    image: 'projects-page/Interior/badroom2.jpg',
    title: isRTL ? 'غرفة نوم رئيسية' : 'Master Bedroom',
    description: isRTL ? 'تصميم هادئ ومريح' : 'Peaceful and comfortable design',
    type: 'residential'
  }, {
    id: 6,
    category: 'office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: isRTL ? 'مكتب تنفيذي' : 'Executive Office',
    description: isRTL ? 'مساحة عمل ملهمة ومريحة' : 'Inspiring and comfortable workspace',
    type: 'commercial'
  }, {
    id: 7,
    category: 'bedroom',
    image: 'projects-page/Interior/badroom3.jpg',
    title: isRTL ? 'غرفة نوم رئيسية' : 'Master Bedroom',
    description: isRTL ? 'تصميم هادئ ومريح' : 'Peaceful and comfortable design',
    type: 'residential'
  }, {
    id: 8,
    category: 'bedroom',
    image: 'projects-page/Interior/badroom4.jpg',
    title: isRTL ? 'غرفة نوم رئيسية' : 'Master Bedroom',
    description: isRTL ? 'تصميم هادئ ومريح' : 'Peaceful and comfortable design',
    type: 'residential'
  }, {
    id: 9,
    category: 'living',
    image: 'projects-page/Interior/living2.jpg',
    title: isRTL ? 'صالة استقبال' : 'Reception Hall',
    description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
    type: 'residential'
  }];

  const categories = [{
    id: 'all',
    nameEN: 'All Designs',
    nameAR: 'جميع التصاميم',
    icon: Home
  }, {
    id: 'living',
    nameEN: 'Living Rooms',
    nameAR: 'صالات المعيشة',
    icon: Sofa
  }, {
    id: 'bedroom',
    nameEN: 'Bedrooms',
    nameAR: 'غرف النوم',
    icon: Bed
  }, {
    id: 'kitchen',
    nameEN: 'Kitchens',
    nameAR: 'المطابخ',
    icon: ChefHat
  }, {
    id: 'bathroom',
    nameEN: 'Bathrooms',
    nameAR: 'الحمامات',
    icon: Bath
  }, {
    id: 'office',
    nameEN: 'Offices',
    nameAR: 'المكاتب',
    icon: Tv
  }];

  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);

  // Load more functionality
  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredProjects.length));
  };

  // View All Projects functionality
  const viewAllProjects = () => {
    setVisibleItems(filteredProjects.length);
  };

  // Lightbox functionality
  const openLightbox = (imageUrl: string) => {
    const imageIndex = filteredProjects.findIndex(project => project.image === imageUrl);
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
    const nextIndex = (currentImageIndex + 1) % filteredProjects.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredProjects[nextIndex].image);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredProjects.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredProjects[prevIndex].image);
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

  // Animation variants
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

  return (
    <>
      <section id="portfolio-section" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom mx-auto px-4 md:px-6">
          {/* Header Section */}
          <ScrollObserver animation="fade-up" threshold={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-charcoal to-charcoal-light bg-clip-text text-transparent">
                {isRTL ? 'معرض أعمالنا' : 'Our Portfolio'}
              </h2>
            </div>
          </ScrollObserver>

          {/* Category Filter */}
          <motion.div
            className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleItems(6); // إعادة تعيين إلى 6 صور
                }}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${selectedCategory === category.id
                  ? 'bg-gold text-white'
                  : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                  }`}
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isRTL ? category.nameAR : category.nameEN}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={selectedCategory}
          >
            {filteredProjects.slice(0, visibleItems).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                onClick={() => openLightbox(project.image)}
              >
                <div className="h-64 overflow-hidden relative">
                  <LazyImage
                    src={project.image}
                    alt={isRTL ? project.title : project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                      <Eye className="w-6 h-6 text-gold" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-gold to-gold-dark text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                      {project.type === 'residential' ? isRTL ? 'سكني' : 'Residential' : isRTL ? 'تجاري' : 'Commercial'}
                    </span>
                  </div>
                </div>

                <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More and View All Buttons */}
          {visibleItems < filteredProjects.length && (
            <motion.div
              className="text-center mt-12 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button
                onClick={loadMore}
                className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isRTL ? 'عرض المزيد' : 'Load More'}
              </motion.button>

              <motion.button
                onClick={viewAllProjects}
                className="inline-block bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isRTL ? 'عرض جميع المشاريع' : 'View All Projects'}
              </motion.button>
            </motion.div>
          )}

          {/* Bottom CTA */}
          <ScrollObserver animation="fade-up" delay={300} threshold={0.3}>
            <div className="text-center mt-24">
              <Button className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/25">
                {isRTL ? 'استكشف المزيد من التصاميم' : 'Explore More Designs'}
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </ScrollObserver>
        </div>
      </section>

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
              {filteredProjects.length > 1 && (
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
                  alt={filteredProjects[currentImageIndex]?.title}
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
                      {filteredProjects[currentImageIndex]?.title}
                    </h3>
                    <p className="text-white/90 text-lg mb-4">
                      {filteredProjects[currentImageIndex]?.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">
                        {isRTL ?
                          `${filteredProjects.length} من ${currentImageIndex + 1}` :
                          `${currentImageIndex + 1} of ${filteredProjects.length}`
                        }
                      </span>
                      <span className="bg-gradient-to-r from-gold to-gold-dark px-4 py-2 rounded-full text-white text-sm font-medium">
                        {filteredProjects[currentImageIndex]?.type === 'residential'
                          ? isRTL ? 'سكني' : 'Residential'
                          : isRTL ? 'تجاري' : 'Commercial'}
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

export default Portfolio;