import React, { useState } from 'react';

type Props = {
    src: string;
    alt: string;
    className?: string;
};

const FadeInImage: React.FC<Props> = ({ src, alt, className = '' }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            className={`
        transition-opacity duration-700 ease-in-out 
        ${loaded ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
        />
    );
};

export default FadeInImage;
