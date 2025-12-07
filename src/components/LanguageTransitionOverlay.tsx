import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface LanguageTransitionOverlayProps {
    isVisible: boolean;
}

/**
 * Modern full-screen overlay with animated language switching interface
 * Features floating language symbols and gradient loading effects
 */
const ModernLanguageTransitionOverlay: React.FC<LanguageTransitionOverlayProps> = ({ isVisible }) => {
    const { language } = useLanguage();

    // Loading text in current language
    const loadingText = language === 'en' ? 'Switching language...' : 'تبديل اللغة...';
    const subText = language === 'en' ? 'Please wait' : 'يرجى الانتظار';

    // Floating language symbols animation variants
    const floatingSymbols = ['A', 'ع', 'α', 'أ', 'Z', 'ص'];

    const symbolVariants = {
        initial: {
            opacity: 0,
            scale: 0.3,
            y: 20
        },
        animate: (index: number) => ({
            opacity: [0, 1, 0.7, 1, 0],
            scale: [0.3, 1.2, 0.8, 1, 0.3],
            y: [20, -10, 5, -5, 20],
            transition: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
            }
        })
    };

    // Progress bar animation - slower for longer display
    const progressVariants = {
        initial: { width: "0%" },
        animate: {
            width: "100%",
            transition: {
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-50 flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Animated background particles */}
                    <div className="absolute inset-0">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-neutral-400 rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    opacity: 0
                                }}
                                animate={{
                                    y: [null, -20],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>

                    {/* Main content container */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
                        className="relative z-10 text-center"
                    >
                        {/* Floating language symbols */}
                        <div className="relative mb-8 h-24 w-64 flex items-center justify-center">
                            {floatingSymbols.map((symbol, index) => (
                                <motion.div
                                    key={symbol}
                                    custom={index}
                                    variants={symbolVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute text-2xl font-bold text-primary/80"
                                    style={{
                                        left: `${15 + index * 12}%`,
                                        filter: 'drop-shadow(0 0 10px rgba(var(--primary), 0.3))'
                                    }}
                                >
                                    {symbol}
                                </motion.div>
                            ))}
                        </div>

                        {/* Central loading icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="mb-6 relative"
                        >
                            {/* Outer rotating ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 border-4 border-transparent border-t-primary border-r-accent rounded-full mx-auto"
                            />

                            {/* Inner pulsing core */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto my-auto"
                                style={{
                                    boxShadow: '0 0 20px rgba(var(--primary), 0.5)'
                                }}
                            />

                            {/* Language exchange icon */}
                            <motion.div
                                animate={{
                                    rotateY: [0, 180, 360],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center text-neutral text-sm font-bold"
                            >
                                ⇄
                            </motion.div>
                        </motion.div>

                        {/* Loading text with typing effect */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mb-4"
                        >
                            <motion.h2
                                className="text-2xl font-bold text-neutral mb-2"
                                animate={{
                                    textShadow: [
                                        '0 0 0px rgba(var(--primary), 0)',
                                        '0 0 10px rgba(var(--primary), 0.5)',
                                        '0 0 0px rgba(var(--primary), 0)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {loadingText}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0.7, 1] }}
                                transition={{ delay: 0.6, duration: 1.5, repeat: Infinity }}
                                className="text-neutral/70"
                            >
                                {subText}
                            </motion.p>
                        </motion.div>

                        {/* Animated progress bar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="w-64 mx-auto"
                        >
                            <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
                                <motion.div
                                    variants={progressVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                                    style={{
                                        boxShadow: '0 0 10px rgba(var(--primary), 0.5)'
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Status dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex justify-center space-x-2 mt-6"
                        >
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                    }}
                                    className="w-2 h-2 bg-primary rounded-full"
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModernLanguageTransitionOverlay;