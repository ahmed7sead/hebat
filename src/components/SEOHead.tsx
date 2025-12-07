import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const currentUrl = `https://hibateast.com${location.pathname}`;

  // Default SEO data based on language
  const defaultSEO = {
    ar: {
      title: 'هبات ايست - نجف وثريات فاخرة | تركيب وصيانة احترافية',
      description: 'هبات ايست متخصصة في تركيب وصيانة النجف والثريات الفاخرة للفنادق والقصور والمنازل. خدمات احترافية وتشكيلة واسعة من أفخم الثريات',
      keywords: 'هبات ايست, نجف, ثريات, تركيب نجف, صيانة نجف, فنادق, قصور, ديكور فاخر, اضاءة, شراء نجف, تركيب ثريات, جدة, السعودية',
      siteName: 'هبات ايست'
    },
    en: {
      title: 'Hibat East - Luxury Chandeliers | Professional Installation & Maintenance',
      description: 'Hibat East specializes in luxury chandelier installation and maintenance for hotels, palaces, and homes. Professional services and wide selection of premium chandeliers',
      keywords: 'Hibat East, chandeliers, luxury lighting, chandelier installation, chandelier maintenance, hotels, palaces, luxury decor, lighting solutions, Jeddah, Saudi Arabia',
      siteName: 'Hibat East'
    }
  };

  const seoData = defaultSEO[language];
  const finalTitle = title ? `${title} | ${seoData.siteName}` : seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;

  // Create structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: seoData.siteName,
    description: finalDescription,
    url: currentUrl,
    image: image,
    ...(schemaType === 'LocalBusiness' && {
      '@type': 'LocalBusiness',
      name: seoData.siteName,
      image: image,
      telephone: '+966 50 000 0000',
      email: 'info@hebateast.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'King Faisal Road',
        addressLocality: 'Jeddah',
        addressCountry: 'SA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '21.584524972944244',
        longitude: '39.18417487554701'
      },
      openingHours: 'Mo-Su 09:00-22:00',
      priceRange: '$$$',
      seriesAreaServed: 'Saudi Arabia'
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

  // Helper function to safely update meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  // Helper function to update link tags
  const updateLinkTag = (rel: string, href: string, additional?: Record<string, string>) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);

    if (additional) {
      Object.entries(additional).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
    }
  };

  // Helper function to update structured data
  const updateStructuredData = () => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update html attributes
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Update basic meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', seoData.siteName);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');

    // Update Open Graph meta tags
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:alt', finalTitle, true);
    updateMetaTag('og:site_name', seoData.siteName, true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_SA' : 'en_US', true);
    updateMetaTag('og:locale:alternate', language === 'ar' ? 'en_US' : 'ar_SA', true);

    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@hibateast');
    updateMetaTag('twitter:creator', '@hibateast');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', finalTitle);

    // Update additional SEO meta tags
    updateMetaTag('theme-color', '#D4AF37');
    updateMetaTag('msapplication-TileColor', '#D4AF37');
    updateMetaTag('application-name', seoData.siteName);
    updateMetaTag('apple-mobile-web-app-title', seoData.siteName);
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('format-detection', 'telephone=no');

    // Update canonical link
    updateLinkTag('canonical', currentUrl);

    // Update hreflang links
    updateLinkTag('alternate', currentUrl, { hreflang: 'ar' });
    updateLinkTag('alternate', currentUrl, { hreflang: 'en' });
    updateLinkTag('alternate', currentUrl, { hreflang: 'x-default' });

    // Update preconnect links
    updateLinkTag('preconnect', 'https://images.unsplash.com');
    updateLinkTag('preconnect', 'https://fonts.googleapis.com');
    updateLinkTag('preconnect', 'https://fonts.gstatic.com', { crossorigin: 'anonymous' });

    // Update structured data
    updateStructuredData();

  }, [finalTitle, finalDescription, finalKeywords, currentUrl, language, isRTL, seoData.siteName, image, type, structuredData]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHead;