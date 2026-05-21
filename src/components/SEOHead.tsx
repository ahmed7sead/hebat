import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schemaType?: 'WebPage' | 'Organization' | 'LocalBusiness' | 'Product' | 'Service';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'src',
  type = 'website',
  schemaType = 'WebPage',
  breadcrumbs = []
}) => {
  const { language, isRTL } = useLanguage();
  const currentUrl = typeof window !== 'undefined'
    ? `https://hibateast.com${window.location.pathname}`
    : 'https://hibateast.com';

  const defaultSEO = {
    ar: {
      title: 'هبات ايست - نجف وثريات فاخرة | تركيب وصيانة احترافية',
      description: 'هبات ايست متخصصة في تركيب وصيانة النجف والثريات الفاخرة للفنادق والقصور والمنازل.',
      keywords: 'هبات ايست, نجف, ثريات, تركيب نجف, صيانة نجف, فنادق, قصور, ديكور فاخر, اضاءة, جدة, السعودية',
      siteName: 'هبات ايست'
    },
    en: {
      title: 'Hibat East - Luxury Chandeliers | Professional Installation & Maintenance',
      description: 'Hibat East specializes in luxury chandelier installation and maintenance for hotels, palaces, and homes.',
      keywords: 'Hibat East, chandeliers, luxury lighting, chandelier installation, hotels, palaces, Jeddah, Saudi Arabia',
      siteName: 'Hibat East'
    }
  };

  const seoData = defaultSEO[language];
  const finalTitle = title ? `${title} | ${seoData.siteName}` : seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: seoData.siteName,
    description: finalDescription,
    url: currentUrl,
    image: image,
    ...(schemaType === 'LocalBusiness' && {
      telephone: '+96658007680',
      email: 'info@hebateast.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'King Faisal Road',
        addressLocality: 'Jeddah',
        addressCountry: 'SA'
      },
      openingHours: 'Mo-Su 09:00-22:00',
      priceRange: '$$$',
    }),
    ...(breadcrumbs.length > 0 && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `https://hibateast.com${crumb.url}`
        }))
      }
    })
  };

  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      if (property) meta.setAttribute('property', name);
      else meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateLinkTag = (rel: string, href: string, additional?: Record<string, string>) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
    if (additional) {
      Object.entries(additional).forEach(([key, value]) => link.setAttribute(key, value));
    }
  };

  useEffect(() => {
    document.title = finalTitle;
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', seoData.siteName, true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_SA' : 'en_US', true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@hibateast');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);

    updateMetaTag('theme-color', '#D4AF37');

    updateLinkTag('canonical', currentUrl);

    // Structured Data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [finalTitle, finalDescription, finalKeywords, currentUrl, language, isRTL]);

  return null;
};

export default SEOHead;