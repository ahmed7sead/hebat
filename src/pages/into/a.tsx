import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from '../../components/LazyImage';
import ScrollObserver from '../../components/home-index/ScrollObserver';
import { Home, Sofa, Armchair, Bed, Fence, Tv, Eye, Star, ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const { isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // ضع البطاقات هنا
  const projects = [
    {
      id: 1,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_01.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Modern Living Room',
      description: isRTL ? 'تصميم عصري مع إضاءة مميزة' : 'Modern design with premium lighting',
      type: 'residential'
    },
    {
      id: 2,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_02.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Modern Living Room',
      description: isRTL ? 'تصميم عصري مع إضاءة مميزة' : 'Modern design with premium lighting',
      type: 'residential'
    },
    {
      id: 3,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_03.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Modern Living Room',
      description: isRTL ? 'تصميم عصري مع إضاءة مميزة' : 'Modern design with premium lighting',
      type: 'residential'
    },
    {
      id: 4,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_04.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Modern Living Room',
      description: isRTL ? 'تصميم عصري مع إضاءة مميزة' : 'Modern design with premium lighting',
      type: 'residential'
    },
    {
      id: 5,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_05.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Modern Living Room',
      description: isRTL ? 'تصميم عصري مع إضاءة مميزة' : 'Modern design with premium lighting',
      type: 'residential'
    },
    {
      id: 6,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_06.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Reception hall bathroom',
      description: isRTL ? 'حمام صالة استقبال عصري فاخر' : 'Luxurious modern reception hall bathroom',
      type: 'residential'
    },
    {
      id: 7,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_07.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Reception hall bathroom',
      description: isRTL ? 'حمام صالة استقبال عصري فاخر' : 'Luxurious modern reception hall bathroom',
      type: 'residential'
    },
    {
      id: 8,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_08.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Reception hall bathroom',
      description: isRTL ? 'حمام صالة استقبال عصري فاخر' : 'Luxurious modern reception hall bathroom',
      type: 'residential'
    },
    {
      id: 9,
      category: 'living',
      image: 'projects-page/Interior/01_RECEPTION AREA/CAM_09.webp',
      title: isRTL ? 'صالة معيشة عصرية' : 'Reception hall bathroom',
      description: isRTL ? 'حمام صالة استقبال عصري فاخر' : 'Luxurious modern reception hall bathroom',
      type: 'residential'
    },
    {
      id: 10,
      category: 'living',
      image: 'projects-page/Interior/living.webp',
      title: isRTL ? 'صالة معيشة فاخرة' : 'Luxury Living Room',
      description: isRTL ? 'تصميم عصري مع إضاءة مميزة' : 'Modern design with premium lighting',
      type: 'residential'
    },
    {
      id: 11,
      category: 'living',
      image: 'projects-page/Interior/living2.webp',
      title: isRTL ? 'صالة استقبال' : 'Reception Hall',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 12,
      category: 'living',
      image: 'projects-page/Interior/living3.webp',
      title: isRTL ? 'صالة استقبال' : 'Reception Hall',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 13,
      category: 'MAJLIS',
      image: 'projects-page/Interior//02_MAJLIS/CAM_01.webp',
      title: isRTL ? 'مجلس عصري' : 'Luxury MAJLIS',
      description: isRTL ? 'تصميم مجلس عصري راقي ' : 'Sophisticated modern Majlis design',
      type: 'residential'
    },
    {
      id: 14,
      category: 'MAJLIS',
      image: 'projects-page/Interior//02_MAJLIS/CAM_02.webp',
      title: isRTL ? 'مجلس عصري' : 'Luxury MAJLIS',
      description: isRTL ? 'تصميم مجلس عصري راقي ' : 'Sophisticated modern Majlis design',
      type: 'residential'
    },
    {
      id: 15,
      category: 'MAJLIS',
      image: 'projects-page/Interior//02_MAJLIS/CAM_03.webp',
      title: isRTL ? 'مجلس عصري' : 'Luxury MAJLIS',
      description: isRTL ? 'تصميم مجلس عصري راقي ' : 'Sophisticated modern Majlis design',
      type: 'residential'
    },
    {
      id: 16,
      category: 'MAJLIS',
      image: 'projects-page/Interior//02_MAJLIS/CAM_04.webp',
      title: isRTL ? 'مجلس عصري' : 'Luxury MAJLIS',
      description: isRTL ? ' حمام مجلس عصري وافخر' : 'Luxurious Majlis bathroom',
      type: 'residential'
    },
    {
      id: 17,
      category: 'MAJLIS',
      image: 'projects-page/Interior//02_MAJLIS/CAM_05.webp',
      title: isRTL ? 'مجلس عصري' : 'Luxury MAJLIS',
      description: isRTL ? ' حمام مجلس عصري وافخر' : 'Luxurious Majlis bathroom',
      type: 'residential'
    },
    {
      id: 18,
      category: 'office',
      image: 'projects-page/Interior/cofe1.JPG',
      title: isRTL ? 'كافييه فاخر' : 'Luxurious cafe',
      description: isRTL ? 'كافيه فاخر داخل فندق ' : 'Luxury hotel Coffie Bar',
      type: 'commercial'
    },
    {
      id: 19,
      category: 'office',
      image: 'projects-page/Interior/cofe2.JPG',
      title: isRTL ? 'كافييه فاخر' : 'Luxurious cafe',
      description: isRTL ? 'كافيه فاخر داخل فندق ' : 'Luxury hotel Coffie Bar',
      type: 'commercial'
    },
    {
      id: 20,
      category: 'office',
      image: 'projects-page/Interior/cofe3.JPG',
      title: isRTL ? 'كافييه فاخر' : 'Luxurious cafe',
      description: isRTL ? 'كافيه فاخر داخل فندق ' : 'Luxury hotel Coffie Bar',
      type: 'commercial'
    },

    {
      id: 22,
      category: 'bedroom',
      image: 'projects-page/Interior/04_BEDROOM 1/CAM_ 02.webp',
      title: isRTL ? 'الغرفة الرئيسية' : 'Master room',
      description: isRTL ? 'غرفة رئيسية فاخرة وعصرية ' : 'Luxurious and modern master room',
      type: 'residential'
    },
    {
      id: 23,
      category: 'bedroom',
      image: 'projects-page/Interior/04_BEDROOM 1/CAM_ 03.webp',
      title: isRTL ? 'الغرفة الرئيسية' : 'Master room',
      description: isRTL ? 'غرفة رئيسية فاخرة وعصرية ' : 'Luxurious and modern master room',
      type: 'residential'
    },
    {
      id: 24,
      category: 'bedroom',
      image: 'projects-page/Interior/04_BEDROOM 1/CAM_ 04.webp',
      title: isRTL ? 'الغرفة الرئيسية' : 'Master room',
      description: isRTL ? 'غرفة رئيسية فاخرة وعصرية ' : 'Luxurious and modern master room',
      type: 'residential'
    },
    {
      id: 25,
      category: 'bedroom',
      image: 'projects-page/Interior/04_BEDROOM 1/CAM_05.webp',
      title: isRTL ? 'حمام الغرفة الماستر' : 'Main room bathroom',
      description: isRTL ? 'حمام عصري بتصميم انيق ' : 'Modern bathroom with elegant design',
      type: 'residential'
    },
    {
      id: 26,
      category: 'bedroom',
      image: 'projects-page/Interior/04_BEDROOM 1/CAM_06.webp',
      title: isRTL ? 'حمام الغرفة الماستر' : 'Main room bathroom',
      description: isRTL ? 'حمام عصري بتصميم انيق ' : 'Modern bathroom with elegant design',
      type: 'residential'
    },
    {
      id: 27,
      category: 'bedroom',
      image: 'projects-page/Interior/05_BEDROOM 2/CAM_01.webp',
      title: isRTL ? 'غرفة ثنائية عصرية' : 'Modern youth room',
      description: isRTL ? 'غرفة شبابية عصرية بتصميم فاخر وعصري ' : 'A modern youth room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 28,
      category: 'bedroom',
      image: 'projects-page/Interior/05_BEDROOM 2/CAM_02.webp',
      title: isRTL ? 'غرفة ثنائية عصرية' : 'Modern youth room',
      description: isRTL ? 'غرفة شبابية عصرية بتصميم فاخر وعصري ' : 'A modern youth room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 29,
      category: 'bedroom',
      image: 'projects-page/Interior/05_BEDROOM 2/CAM_03.webp',
      title: isRTL ? 'غرفة ثنائية عصرية' : 'Modern youth room',
      description: isRTL ? 'غرفة شبابية عصرية بتصميم فاخر وعصري ' : 'A modern youth room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 30,
      category: 'bedroom',
      image: 'projects-page/Interior/05_BEDROOM 2/CAM_05.webp',
      title: isRTL ? 'غرفة ثنائية عصرية' : 'Modern youth room',
      description: isRTL ? 'غرفة شبابية عصرية بتصميم فاخر وعصري ' : 'A modern youth room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 31,
      category: 'Outdoor',
      image: 'projects-page/Interior/06_OUTDOOR/CAM_01.webp',
      title: isRTL ? 'الباحة الخارجية' : 'Modern Outdoor',
      description: isRTL ? 'فناء خارجي فاخر وحديث  ' : 'Luxurious and modern outdoor patio',
      type: 'residential'
    },
    {
      id: 32,
      category: 'Outdoor',
      image: 'projects-page/Interior/06_OUTDOOR/CAM_02.webp',
      title: isRTL ? 'الباحة الخارجية' : 'Modern Outdoor',
      description: isRTL ? 'فناء خارجي فاخر وحديث  ' : 'Luxurious and modern outdoor patio',
      type: 'residential'
    },
    {
      id: 33,
      category: 'Outdoor',
      image: 'projects-page/Interior/06_OUTDOOR/CAM_03.webp',
      title: isRTL ? 'الباحة الخارجية' : 'Modern Outdoor',
      description: isRTL ? 'فناء خارجي فاخر وحديث  ' : 'Luxurious and modern outdoor patio',
      type: 'residential'
    },
    {
      id: 34,
      category: 'bedroom',
      image: 'projects-page/Interior/badroom1.webp',
      title: isRTL ? 'غرفة عصرية ' : 'Modern  room',
      description: isRTL ? 'غرفة  حديثة بتصميم عصري ' : 'A modern room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 35,
      category: 'bedroom',
      image: 'projects-page/Interior/badroom2.webp',
      title: isRTL ? 'غرفة عصرية ' : 'Modern  room',
      description: isRTL ? 'غرفة  حديثة بتصميم عصري ' : 'A modern room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 36,
      category: 'bedroom',
      image: 'projects-page/Interior/badroom3.webp',
      title: isRTL ? 'غرفة عصرية ' : 'Modern  room',
      description: isRTL ? 'غرفة  حديثة بتصميم عصري ' : 'A modern room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 37,
      category: 'bedroom',
      image: 'projects-page/Interior/badroom4.webp',
      title: isRTL ? 'غرفة عصرية ' : 'Modern  room',
      description: isRTL ? 'غرفة  حديثة بتصميم عصري ' : 'A modern room with a luxurious and modern design',
      type: 'residential'
    },
    {
      id: 38,
      category: 'living',
      image: 'projects-page/Interior/hero1.webp',
      title: isRTL ? 'صالة استقبال' : 'Reception Hall',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 39,
      category: 'living',
      image: 'projects-page/Interior/hero3.webp',
      title: isRTL ? 'صالة استقبال' : 'Reception Hall',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 40,
      category: 'living',
      image: 'projects-page/Interior/Interior1.webp',
      title: isRTL ? 'صالة استقبال' : 'Reception Hall',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 41,
      category: 'MAJLIS',
      image: 'projects-page/Interior/03_DIWANIYA/CAM_01.webp',
      title: isRTL ? 'مجلس عصري بسيط' : 'Simple modern Majlis',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 42,
      category: 'MAJLIS',
      image: 'projects-page/Interior/03_DIWANIYA/CAM_02.webp',
      title: isRTL ? 'مجلس عصري بسيط' : 'Simple modern Majlis',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 43,
      category: 'MAJLIS',
      image: 'projects-page/Interior/03_DIWANIYA/CAM_03.webp',
      title: isRTL ? 'مجلس عصري بسيط' : 'Simple modern Majlis',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    },
    {
      id: 44,
      category: 'MAJLIS',
      image: 'projects-page/Interior/03_DIWANIYA/CAM_04.webp',
      title: isRTL ? 'مجلس عصري بسيط' : 'Simple modern Majlis',
      description: isRTL ? 'تصميم أنيق للضيوف' : 'Elegant design for guests',
      type: 'residential'
    }
  ];

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
  },
  {
    id: 'MAJLIS',
    nameEN: 'MAJLIS',
    nameAR: 'مجلس',
    icon: Armchair
  },

  {
    id: 'bedroom',
    nameEN: 'Bedrooms',
    nameAR: 'غرف النوم',
    icon: Bed
  },
  {
    id: 'Outdoor',
    nameEN: 'Outdoor',
    nameAR: 'الفناء الخارجي',
    icon: Fence
  }, {
    id: 'office',
    nameEN: 'Commercial',
    nameAR: 'تجاري',
    icon: Tv
  }];

  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);

  // Simple Load more functionality
  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredProjects.length));
  };

  // Simple View All Projects functionality
  const viewAllProjects = () => {
    setVisibleItems(filteredProjects.length);
  };

  // Lightbox functionality (unchanged)
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

  // Keyboard navigation (unchanged)
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

  // Simple animation variants
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
      y: 30
    },
    show: {
      opacity: 1,
      y: 0,
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
            className="flex flex-wrap gap-4 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleItems(6);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium border-2 text-sm ${selectedCategory === category.id
                    ? 'bg-gold text-white border-gold shadow-lg transform scale-105'
                    : 'bg-white text-charcoal hover:bg-gray-50 border-gray-200 hover:border-gold/50 hover:text-gold shadow-sm hover:shadow-md'
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: selectedCategory === category.id ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent className="w-3 h-3" />
                  <span className="text-xs md:text-sm">
                    {isRTL ? category.nameAR : category.nameEN}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Simple Projects Grid */}
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

          {/* Enhanced Load More and View All Buttons */}
          {visibleItems < filteredProjects.length && (
            <motion.div
              className="text-center mt-20 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {/* Load More Button */}
              <motion.button
                onClick={loadMore}
                className="group relative overflow-hidden bg-white border border-gray-200 text-charcoal px-6 py-3 rounded-lg hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10 text-charcoal transition-colors duration-300">
                  {isRTL ? 'عرض المزيد' : 'Load More'}
                </span>
              </motion.button>

              {/* View All Projects Button */}
              <motion.button
                onClick={viewAllProjects}
                className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/30 font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">
                  {isRTL ? 'عرض جميع المشاريع' : 'View All Projects'}
                </span>
              </motion.button>
            </motion.div>
          )}

        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
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