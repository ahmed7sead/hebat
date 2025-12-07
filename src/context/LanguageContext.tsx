import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

type Language = 'en' | 'ar';
type TransitionState = 'idle' | 'start' | 'changing' | 'complete';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  previousLanguage: Language | null;
  isRTL: boolean;
  isLanguageChanging: boolean;
  transitionState: TransitionState;
  isTransitioning: boolean;
}

interface LanguageProviderProps {
  children: ReactNode;
  transitionDuration?: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
  children,
  transitionDuration = 500
}: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedLanguage = localStorage.getItem('language');
        return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'en'; // <<--  Change language
      } catch (error) {
        console.warn('Cannot access localStorage:', error);
        return 'en';  //// Load saved language from localStorage if valid, otherwise default to Arabic
      }
    }
    return 'en'; // if not just english 
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousLanguage, setPreviousLanguage] = useState<Language | null>(null);
  const [transitionState, setTransitionState] = useState<TransitionState>('idle');

  const isLanguageChanging = transitionState !== 'idle';
  const isRTL = language === 'ar';

  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage !== language && transitionState === 'idle') {
      setPreviousLanguage(language);
      setTransitionState('start');
      setIsTransitioning(true);

      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('language-transition');
        document.documentElement.setAttribute('data-prev-lang', language);
        document.documentElement.setAttribute('data-new-lang', newLanguage);
      }

      setTimeout(() => {
        setTransitionState('changing');
        setLanguageState(newLanguage);
      }, 50);
    }
  }, [language, transitionState]);

  useEffect(() => {
    if (transitionState === 'changing') {
      if (typeof document === 'undefined') return;

      const newIsRTL = language === 'ar';

      document.documentElement.setAttribute('dir', newIsRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', language);

      document.documentElement.classList.add(language);
      document.documentElement.classList.remove(language === 'ar' ? 'en' : 'ar');

      document.documentElement.classList.toggle('rtl', newIsRTL);
      document.documentElement.classList.toggle('ltr', !newIsRTL);

      document.documentElement.classList.toggle('font-arabic', newIsRTL);
      document.documentElement.classList.toggle('font-english', !newIsRTL);

      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('language', language);
        } catch (error) {
          console.warn('Cannot save to localStorage:', error);
        }
      }

      setTransitionState('complete');
    }
  }, [language, transitionState]);

  useEffect(() => {
    if (transitionState === 'complete') {
      const completeTimeout = setTimeout(() => {
        if (typeof document !== 'undefined') {
          document.documentElement.classList.remove('language-transition');
          document.documentElement.removeAttribute('data-prev-lang');
          document.documentElement.removeAttribute('data-new-lang');
        }

        setTransitionState('idle');
        setPreviousLanguage(null);
        setIsTransitioning(false);
      }, transitionDuration);

      return () => clearTimeout(completeTimeout);
    }
  }, [transitionState, transitionDuration]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      previousLanguage,
      isRTL,
      isLanguageChanging,
      transitionState,
      isTransitioning,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
