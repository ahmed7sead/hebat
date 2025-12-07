import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { useLanguage } from '../context/LanguageContext';

const PartnerSlider: React.FC = () => {
  const isMobile = useIsMobile();
  const { isRTL } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const positionRef = useRef<number>(0);

  const partners = [
    {
      name: "Alrajhi Bank",
      image: "/Partner/f194580f-23f0-4724-9e30-b6c8fb02bffd.png"
    },
    {
      name: "Hilton Hotels & Resorts",
      image: "/Partner/3016a5b5-cfc2-4c0c-b1d1-6a45abd34e26.png"
    },
    {
      name: "Four Seasons",
      image: "/Partner/868a8435-6fbe-4e97-bd7c-4a4df1efa90d.png"
    },
    {
      name: "Sheraton Hotels & Resorts",
      image: "/Partner/98a56810-84e7-494c-be94-a309d239af22.png"
    },
    {
      name: "Drascom",
      image: "/Partner/8f983c9b-fbdc-4cfc-b4be-f34d706c6116.png"
    },
    {
      name: "Worth Hotels",
      image: "/Partner/90aaddb3-a181-46d4-835c-ef462fad074e.png"
    },
    {
      name: "الحرمين",
      image: "/Partner/be4811a0-9af4-4bf1-941a-edb484702eb4.png"
    },
    {
      name: "Ministry of Culture",
      image: "/Partner/d4c78668-c00b-4950-a350-1abe4a8af2f9.png"
    },
    {
      name: "NHC",
      image: "/Partner/nhc.png"
    }
  ];

  // Create multiple copies for smoother infinite scroll
  const allPartners = [...partners, ...partners, ...partners];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    const speed = 30; // pixels per second
    const itemWidth = 264 + 40; // 264px width + 40px margin (20px each side)
    const totalWidth = partners.length * itemWidth;

    const animate = (currentTime: number) => {
      if (!isPaused && marqueeElement) {
        if (lastTimeRef.current === 0) {
          lastTimeRef.current = currentTime;
        }

        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;

        // Update position based on time passed
        positionRef.current += (speed * deltaTime) / 1000;

        // Reset position when one full set is scrolled
        if (positionRef.current >= totalWidth) {
          positionRef.current = 0;
        }

        // Apply transform
        const translateX = isRTL ? positionRef.current : -positionRef.current;
        marqueeElement.style.transform = `translateX(${translateX}px)`;
      } else if (isPaused) {
        // Reset time reference when paused to avoid jumps
        lastTimeRef.current = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isRTL, partners.length]);

  return (
    <div className="w-full overflow-hidden py-4">
      {/* Desktop version: Full width Marquee with smooth hover pause */}
      <div className="hidden md:block overflow-hidden relative w-full">
        <div className="relative">
          <div
            ref={marqueeRef}
            className={`flex transition-none ${isRTL ? 'flex-row-reverse' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width: `${allPartners.length * 264 + allPartners.length * 40}px`
            }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`partner-desktop-${index}`}
                className="w-64 h-40 mx-5 flex-shrink-0 transition-all duration-300 hover:scale-105  flex items-center justify-center bg-white rounded-lg"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-20 h-full bg-gradient-to-r ${isRTL ? 'from-transparent to-white' : 'from-white to-transparent'} pointer-events-none z-10`}></div>
          <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-20 h-full bg-gradient-to-l ${isRTL ? 'from-transparent to-white' : 'from-white to-transparent'} pointer-events-none z-10`}></div>
        </div>
      </div>

      {/* Mobile version: Clean Grid View */}
      <div className="md:hidden px-4">
        <div className="grid grid-cols-2 gap-4">
          {partners.map((partner, index) => (
            <div
              key={`partner-mobile-${index}`}
              className="h-24 bg-white rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-[70%] max-h-[70%] object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;