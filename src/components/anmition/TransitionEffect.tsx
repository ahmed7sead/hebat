import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface TransitionEffectProps {
    type?: 'default' | 'circle' | 'slide';
}

const TransitionEffect: React.FC<TransitionEffectProps> = ({ type = 'default' }) => {
    const { isLanguageChanging, language } = useLanguage();
    const [isActive, setIsActive] = useState(false);
    const [direction, setDirection] = useState<'ltr' | 'rtl'>('rtl');

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isLanguageChanging) {
            // Store current direction before change
            setDirection(language === 'ar' ? 'rtl' : 'ltr');

            // Activate transition effect
            setIsActive(true);

            // Hide transition effect after animation completes
            timeoutId = setTimeout(() => {
                setIsActive(false);
            }, 800); // Match with your CSS animation duration
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isLanguageChanging, language]);

    if (!isActive) return null;

    // Render different transition effects based on type
    const renderTransitionEffect = () => {
        switch (type) {
            case 'circle':
                return (
                    <div className="reveal-animation">
                        <div className="reveal-circle"></div>
                    </div>
                );
            case 'slide':
                return (
                    <div
                        className="reveal-animation"
                        style={{
                            transform: direction === 'rtl' ? 'translateX(-100%)' : 'translateX(100%)',
                            animation: `slide${direction === 'rtl' ? 'Right' : 'Left'} 0.8s forwards`
                        }}
                    ></div>
                );
            default:
                return <div className="transition-overlay"></div>;
        }
    };

    return (
        <div className={`transition-container ${isActive ? 'active' : ''}`}>
            {renderTransitionEffect()}
        </div>
    );
};

export default TransitionEffect;