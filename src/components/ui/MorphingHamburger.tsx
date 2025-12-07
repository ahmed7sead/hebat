// components/MorphingHamburger.tsx
import { motion } from 'framer-motion';
import React from 'react';

type MorphingHamburgerProps = {
    isOpen: boolean;
};

const lineVariants = {
    closed: (i: number) => ({
        rotate: 0,
        y: i * 8,
        width: 24,
    }),
    open: (i: number) => ({
        rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
        y: i === 0 ? 8 : i === 2 ? 8 : 8,
        width: i === 1 ? 0 : 24,
    }),
};

const MorphingHamburger: React.FC<MorphingHamburgerProps> = ({ isOpen }) => {
    return (
        <div className="relative w-3 h-5">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="absolute block h-0.5 bg-charcoal rounded-sm"
                    style={{ left: 0 }}
                    custom={i}
                    initial={false}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={lineVariants}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
};

export default MorphingHamburger;
