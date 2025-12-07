import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRTL?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, isRTL = false }) => {
  return (
    <div
      className="bg-white p-5 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-full transform"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className={`flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className="mb-4 text-gold bg-gold/10 p-3 rounded-full transform transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        <h3
          className="text-lg md:text-xl font-semibold text-charcoal mb-2"
          itemProp="name"
        >
          {title}
        </h3>
        <p
          className="text-gray-600 text-sm md:text-base"
          itemProp="description"
        >
          {description}
        </p>
        <meta itemProp="provider" content="هبات ايست | Hebat East" />
        <meta itemProp="areaServed" content="المملكة العربية السعودية | Saudi Arabia" />
      </div>
    </div>
  );
};

export default ServiceCard;