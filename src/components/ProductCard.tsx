
import React, { useState, useEffect } from 'react';
import LazyImage from './LazyImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  images: string[];
  isRTL?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  images,
  isRTL = false
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto cycle through images when not hovered
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with navigation */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <LazyImage
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Navigation - Only visible on hover or on mobile */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prevImage}
              className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center text-gray-800 hover:bg-gold hover:text-white transition-colors"
              aria-label={isRTL ? "الصورة السابقة" : "Previous image"}
            >
              {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button
              onClick={nextImage}
              className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center text-gray-800 hover:bg-gold hover:text-white transition-colors"
              aria-label={isRTL ? "الصورة التالية" : "Next image"}
            >
              {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 inset-x-0 flex justify-center">
            <div className="px-2 py-1 bg-black/50 rounded-full flex gap-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className={`p-4 flex flex-col flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
        <h3 className="text-lg font-bold text-charcoal mb-1">{title}</h3>
        <div className="mt-auto pt-2">
          <span className="text-gold font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
