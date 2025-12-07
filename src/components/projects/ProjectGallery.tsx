import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  full: string;
  thumbnail: string;
}

interface Project {
  title: string;
  gallery: GalleryItem[];
  thumbnail?: string;
  thumbnailAlt?: string;
}

interface ProjectGalleryProps {
  project: Project;
  isRTL: boolean;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, isRTL }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [thumbnailErrors, setThumbnailErrors] = useState<Set<number>>(new Set());
  const [imageLoadStatus, setImageLoadStatus] = useState<{ [key: number]: boolean }>({});

  const totalImages = project.gallery.length;

  // تحميل ذكي للصور - فقط الحالية والمجاورة
  const imagesToPreload = useMemo(() => {
    const images = new Set<number>();
    images.add(currentIndex);
    images.add((currentIndex + 1) % totalImages);
    images.add((currentIndex - 1 + totalImages) % totalImages);
    return images;
  }, [currentIndex, totalImages]);

  // تحميل الصور المطلوبة فقط
  useEffect(() => {
    imagesToPreload.forEach(index => {
      if (!loadedImages.has(index)) {
        const img = new Image();
        img.src = project.gallery[index].full;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(index));
          setImageLoadStatus(prev => ({ ...prev, [index]: true }));
        };
      }
    });
  }, [imagesToPreload, loadedImages, project.gallery]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || isLightboxOpen || totalImages <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isLightboxOpen, totalImages]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const handleThumbnailClick = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setCurrentIndex(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 4000);
    },
    [currentIndex]
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsAutoPlaying(true);
  };

  const goToNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % totalImages);
  };

  const goToPreviousLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleThumbnailError = (index: number) => {
    setThumbnailErrors(prev => new Set(prev).add(index));
  };

  const getThumbnailSrc = (item: GalleryItem, index: number) => {
    return thumbnailErrors.has(index) ? item.full : item.thumbnail;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      switch (e.key) {
        case 'ArrowLeft':
          isRTL ? goToNextLightbox() : goToPreviousLightbox();
          break;
        case 'ArrowRight':
          isRTL ? goToPreviousLightbox() : goToNextLightbox();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, isRTL]);

  const isImageLoaded = imageLoadStatus[currentIndex];

  return (
    <div className="py-8 px-2">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`text-heading-4 font-playfair text-gold/90 mb-8 ${isRTL ? 'text-right font-cairo' : ''}`}
      >
        {isRTL ? 'معرض المشروع' : 'Project Gallery'}
      </motion.h3>

      <div
        className="relative mb-8"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Gallery Container - أبعاد محسّنة */}
        <div className="relative h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[600px] overflow-hidden rounded-2xl bg-cream border-2 border-gray-200 shadow-2xl group">
          {/* Loading Spinner */}
          {!isImageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-cream z-20"
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gold/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Image Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 60 : -60 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            >
              <img
                src={project.gallery[currentIndex].full}
                alt={`${project.title} - ${isRTL ? 'صورة' : 'Image'} ${currentIndex + 1}`}
                className="w-full h-full object-contain transition-all duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl"
                >
                  <ZoomIn className="w-8 h-8 text-gold" strokeWidth={2.5} />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Buttons */}
          {totalImages > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, x: isRTL ? 5 : -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={isRTL ? goToNext : goToPrevious}
                className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4 md:right-6' : 'left-4 md:left-6'} 
                  bg-white/95 backdrop-blur-md hover:bg-gold text-charcoal hover:text-white 
                  w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:shadow-2xl 
                  border-2 border-gray-200 hover:border-gold
                  transition-all duration-300 z-30 flex items-center justify-center
                  opacity-80 hover:opacity-100`}
              >
                <ChevronLeft className={`w-6 h-6 md:w-7 md:h-7 ${isRTL ? 'rotate-180' : ''}`} strokeWidth={2.5} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: isRTL ? -5 : 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={isRTL ? goToPrevious : goToNext}
                className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-4 md:left-6' : 'right-4 md:right-6'} 
                  bg-white/95 backdrop-blur-md hover:bg-gold text-charcoal hover:text-white 
                  w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl hover:shadow-2xl 
                  border-2 border-gray-200 hover:border-gold
                  transition-all duration-300 z-30 flex items-center justify-center
                  opacity-80 hover:opacity-100`}
              >
                <ChevronRight className={`w-6 h-6 md:w-7 md:h-7 ${isRTL ? 'rotate-180' : ''}`} strokeWidth={2.5} />
              </motion.button>
            </>
          )}

          {/* Image Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 right-4 bg-charcoal/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-body-small font-roboto shadow-xl border border-white/10"
          >
            <span className="font-bold text-gold">{currentIndex + 1}</span>
            <span className="mx-1 text-white/60">/</span>
            <span>{totalImages}</span>
          </motion.div>

          {/* Zoom Icon Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1.5 rounded-full text-xs font-roboto shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Maximize2 className="w-4 h-4 inline mr-1" />
            {isRTL ? 'انقر للتكبير' : 'Click to zoom'}
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-gold z-50 hover:bg-white/10 rounded-full p-3 transition-all duration-300 group"
              >
                <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
              </button>

              {/* Lightbox Navigation */}
              {totalImages > 1 && (
                <>
                  <button
                    onClick={isRTL ? goToNextLightbox : goToPreviousLightbox}
                    className={`absolute top-1/2 ${isRTL ? 'right-6' : 'left-6'} transform -translate-y-1/2 text-white hover:text-gold hover:bg-white/10 rounded-full p-4 transition-all duration-300 z-50`}
                  >
                    <ChevronLeft className={`w-8 h-8 ${isRTL ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={isRTL ? goToPreviousLightbox : goToNextLightbox}
                    className={`absolute top-1/2 ${isRTL ? 'left-6' : 'right-6'} transform -translate-y-1/2 text-white hover:text-gold hover:bg-white/10 rounded-full p-4 transition-all duration-300 z-50`}
                  >
                    <ChevronRight className={`w-8 h-8 ${isRTL ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                  </button>
                </>
              )}

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-full max-h-full w-full h-full flex items-center justify-center"
              >
                <img
                  src={project.gallery[lightboxIndex].full}
                  alt={`${project.title} Lightbox ${lightboxIndex + 1}`}
                  className="object-contain max-w-full max-h-full rounded-lg"
                />
              </motion.div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-roboto border border-white/20">
                <span className="font-bold text-gold">{lightboxIndex + 1}</span>
                <span className="mx-2 text-white/60">/</span>
                <span>{totalImages}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Thumbnail Navigation */}
      {totalImages > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mb-6 px-2">
          {project.gallery.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleThumbnailClick(index)}
              className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-xl overflow-hidden border-3 transition-all duration-300 ${index === currentIndex
                ? 'border-gold shadow-2xl ring-4 ring-gold/30 scale-105'
                : 'border-gray-200 hover:border-gold shadow-md hover:shadow-xl'
                }`}
            >
              <img
                src={getThumbnailSrc(item, index)}
                alt={`${project.title} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
                onError={() => handleThumbnailError(index)}
              />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeThumbnail"
                  className="absolute inset-0 bg-gold/20 border-2 border-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* Elegant Dot Indicators */}
      {totalImages > 1 && (
        <div className="hidden sm:flex justify-center gap-2.5 mt-4">
          {project.gallery.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleThumbnailClick(index)}
              className="relative group"
            >
              <motion.div
                animate={{
                  scale: index === currentIndex ? 1 : 0.7,
                  opacity: index === currentIndex ? 1 : 0.5
                }}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-3 h-3 bg-gold shadow-lg shadow-gold/50'
                  : 'w-2.5 h-2.5 bg-gray-400 group-hover:bg-gold/70'
                  }`}
              />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-75"
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;