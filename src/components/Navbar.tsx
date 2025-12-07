import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet';
import {
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  Home,
  Users,
  Newspaper,
  Image,
  MessageSquare,
  Phone,
  Building2
} from 'lucide-react';
import { ProjectsDropdown } from './ProjectsDropdown';
import { MobileProjectsMenu } from './MobileProjectsMenu';
import { motion, AnimatePresence } from 'framer-motion';
import MorphingHamburger from './ui/MorphingHamburger';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const projectsTriggerRef = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHeroPage = location.pathname === '/' || location.pathname === '/testimonials';

  const navItems = [
    { name: isRTL ? 'الرئيسية' : 'Home', path: '/', icon: Home, isSemiBold: true },
    { name: isRTL ? 'من نحن' : 'About Us', path: '/about', icon: Users },
    { name: isRTL ? 'منتجات مصنعنا' : 'Products', path: '/gallery', icon: Image },
    { name: isRTL ? 'التصميم الداخلي' : 'Interior Design', path: '/testimonials', icon: MessageSquare },
    { name: isRTL ? 'أخبارنا' : 'News', path: '/News', icon: Newspaper, isSemiBold: true },
    { name: isRTL ? 'تواصل معنا' : 'Contact Us', path: '/contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSheetOpen(false);
  }, [location.pathname]);

  // Handle closing dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (projectsTriggerRef.current && !projectsTriggerRef.current.contains(e.target as Node)) {
        setShowProjectsDropdown(false);
      }
    };

    if (showProjectsDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showProjectsDropdown]);

  const getNavbarClasses = () => {
    if (isHeroPage) {
      return isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
        : 'bg-black/20 backdrop-blur-sm py-5';
    } else {
      return 'bg-white shadow-md py-3';
    }
  };

  const getTextColor = () => {
    if (isHeroPage && !isScrolled) {
      return 'text-white';
    }
    return 'text-charcoal';
  };

  const getHoverColor = () => {
    if (isHeroPage && !isScrolled) {
      return 'hover:text-gold';
    }
    return 'hover:text-gold';
  };

  const getActiveColor = () => {
    if (isHeroPage && !isScrolled) {
      return 'text-gold';
    }
    return 'text-primary';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white backdrop-blur-md shadow-md py-3'
      : 'bg-transparnt backdrop-blur-sm py-4'
      }`}>

      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className={`${getTextColor()} ${getHoverColor()} transition-colors duration-300 flex items-center gap-3`}>
          <img
            src="/Logo_and_identity/logo.png"
            alt={isRTL ? 'هبات أيست' : 'Hebat East'}
            className="w-11 h-11 object-contain"
          />
          <h1 className={`text-2xl font-bold ${isRTL ? 'font-cairo' : 'font-playfair'}`}>
            {isRTL ? 'هبات أيست' : 'Hebat East'}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center justify-center flex-1 ${isRTL ? 'space-x-reverse' : ''} space-x-9`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${location.pathname === item.path ? getActiveColor() : getTextColor()
                } ${getHoverColor()} whitespace-nowrap transition-colors duration-300 ${isRTL ? 'font-tajawal text-[16px]' : 'font-roboto text-[16px]'} ${item.isSemiBold ? 'font-semibold' : 'font-medium'}`}
            >
              {item.name}
            </Link>
          ))}

          {/* Projects Dropdown - Desktop */}
          <div className="relative">
            <div
              ref={projectsTriggerRef}
              className={`flex items-center gap-1.5 cursor-pointer ${location.pathname.includes('/projects') ? getActiveColor() : getTextColor()} ${getHoverColor()} transition-colors duration-300 ${isRTL ? 'text-[16px]' : 'text-[16px]'} font-medium`}
              onClick={(e) => {
                e.stopPropagation();
                setShowProjectsDropdown(!showProjectsDropdown);
              }}
            >
              <span>{isRTL ? 'مشروعاتنا' : 'Our Projects'}</span>
              <motion.div
                animate={{ rotate: showProjectsDropdown ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
            <AnimatePresence>
              {showProjectsDropdown && <ProjectsDropdown triggerRef={projectsTriggerRef} />}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <LanguageSwitcher />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className={`${isRTL ? 'mr-4' : 'ml-4'} ${getTextColor()} ${getHoverColor()} transition-colors duration-300 p-2 rounded-md ${isHeroPage && !isScrolled ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                aria-label="Open menu"
              >
                <MorphingHamburger isOpen={sheetOpen} />
              </button>
            </SheetTrigger>
            <SheetContent
              side={isRTL ? "right" : "left"}
              className={`p-0 w-80 ${isRTL ? 'text-right' : 'text-left'}`}
              closeButton={false}
            >
              <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-gold/5 to-transparent">
                <div className="flex items-center gap-3">
                  <img
                    src="/Logo_and_identity/logo.png"
                    alt={isRTL ? 'هبات أيست' : 'Hebat East'}
                    className="w-10 h-10 object-contain"
                  />
                  <h2 className={`text-xl font-bold text-charcoal ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
                    {isRTL ? 'هبات أيست' : 'Hebat East'}
                  </h2>
                </div>
                <motion.button
                  onClick={() => setSheetOpen(false)}
                  className="rounded-full h-10 w-10 flex items-center justify-center bg-white shadow-md hover:shadow-lg hover:bg-gold/5 transition-all duration-300"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-6 w-6 text-charcoal" />
                </motion.button>
              </div>

              <div className="py-6 px-5">
                <div className={`flex flex-col space-y-2 ${isRTL ? 'items-end' : 'items-start'}`}>
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="w-full"
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center gap-3 w-full px-5 py-3.5 rounded-lg transition-all duration-300 ${isRTL ? 'font-tajawal text-[15px]' : 'font-roboto text-[15px]'}
                            ${location.pathname === item.path
                              ? 'bg-gold text-white shadow-md hover:bg-gold/90 hover:shadow-lg'
                              : 'text-charcoal hover:bg-gold/10 hover:text-gold hover:shadow-sm'
                            }
                            ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}
                          `}
                          onClick={() => setSheetOpen(false)}
                        >
                          <IconComponent className={`h-5 w-5 ${location.pathname === item.path ? 'text-white' : 'text-gold'}`} />
                          <span className={`${item.isBold ? 'font-bold' : 'font-semibold'}`}>{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Projects Dropdown - Mobile */}
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  >
                    <button
                      onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                      className={`flex items-center gap-3 justify-between w-full px-5 py-3.5 rounded-lg transition-all duration-300 ${isRTL ? 'text-[15px]' : 'text-[15px]'}
                        ${location.pathname.includes('/projects')
                          ? 'bg-gold text-white shadow-md hover:bg-gold/90 hover:shadow-lg'
                          : 'text-charcoal hover:bg-gold/10 hover:text-gold hover:shadow-sm'
                        }
                        ${isRTL ? 'text-right' : 'text-left'}
                      `}
                    >
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Building2 className={`h-5 w-5 ${location.pathname.includes('/projects') ? 'text-white' : 'text-gold'}`} />
                        <span className="font-semibold">{isRTL ? 'مشروعاتنا' : 'Our Projects'}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: mobileProjectsOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`h-5 w-5 ${location.pathname.includes('/projects') ? 'text-white' : 'text-gold'}`} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {mobileProjectsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2"
                        >
                          <MobileProjectsMenu setSheetOpen={setSheetOpen} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className={`mt-auto p-5 border-t bg-gradient-to-r from-gold/5 to-transparent text-[15px] text-gray-500 ${isRTL ? 'text-right font-tajawal' : 'text-left font-roboto'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="font-medium">{isRTL ? 'هبات أيست - خبرة في الإضاءة والتركيبات الفاخرة' : 'Hebat East - Lighting Expertise'}</p>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;