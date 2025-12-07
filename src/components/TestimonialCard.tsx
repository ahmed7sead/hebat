import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import LazyImage from './LazyImage';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  image?: string;
  isRTL?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  text,
  image,
  isRTL = false
}) => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group bg-white p-5 md:p-6 rounded-lg shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl transform 
      md:hover:-translate-y-1   border border-transparent   hover:border-gold/20 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'} h-full`}>

        <div className={`mb-3 md:mb-4 text-gold transition-transform duration-300 
            `}>

          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M10.667 13.3334H5.33366C5.33366 13.3334 5.33366 8.00004 10.667 8.00004M10.667 8.00004C10.667 8.00004 10.667 5.33337 8.00033 6.66671C5.33366 8.00004 5.33366 13.3334 5.33366 13.3334C5.33366 17.3334 10.667 17.3334 10.667 13.3334V8.00004ZM26.667 13.3334H21.3337C21.3337 13.3334 21.3337 8.00004 26.667 8.00004M26.667 8.00004C26.667 8.00004 26.667 5.33337 24.0003 6.66671C21.3337 8.00004 21.3337 13.3334 21.3337 13.3334C21.3337 17.3334 26.667 17.3334 26.667 13.3334V8.00004Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className={`text-gray-600 mb-4 md:mb-6 text-sm md:text-base flex-grow transition-all duration-500 md:group-hover:line-clamp-none line-clamp-4 break-words whitespace-pre-wrap`}>
          {text}
        </p>
        <div className={`flex items-center ${isRTL ? 'justify-end' : ''} mt-4`}>
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${isHovered ? 'border-gold shadow-gold/30 shadow-lg' : 'border-gold shadow-sm'}`}>
            {image ? (
              <LazyImage
                src={image}
                alt={name}
                className={`w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gold-light text-gold font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className={`${isRTL ? 'mr-3 md:mr-4 ml-0' : 'ml-3 md:ml-4'}`}>
            <h4 className="text-charcoal font-semibold text-sm md:text-base">{name}</h4>
            <p className="text-gray-500 text-xs md:text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
