import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-cream via-white to-cream animate-fade-in">
      {/* Header */}
      <section className="py-10 mb-4">
        <div className="container-custom mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gold
              ${isRTL ? 'font-cairo' : 'font-playfair'}`}
          >
            {isRTL ? "تواصل معنا" : "Contact Us"}
          </h1>
          <p className="text-lg md:text-2xl font-light text-charcoal-light">
            {isRTL ? "للاستشارات وحلول الإنارة الفاخرة للمشاريع العملاقة." : "For luxury lighting solutions for prestigious projects."}
          </p>
        </div>
      </section>

      {/* Content grid: Form & Info */}
      <section className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative z-10 pb-8">
        {/* Info Card */}
        <div
          className="bg-white/95 shadow-xl elegant-shadow border border-gold-light rounded-3xl p-8 flex flex-col justify-between gap-12 animate-fade-in"
          style={{ backdropFilter: "blur(6px)" }}>
          <div className="flex flex-col gap-8">
            {/* Saudi Office Address */}
            <div className="flex items-start gap-5">
              <span className="p-2 rounded-full bg-gold-light shadow">
                <MapPin size={26} className="text-gold" />
              </span>
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <span className="block text-base font-bold mb-1 text-gold">
                  {isRTL ? "المقر الرئيسي - السعودية" : "Saudi Head Office"}
                </span>
                <span className="text-charcoal-light">
                  {isRTL
                    ? "المقر الرئيسي للخليج: مكتب 401، بلازا العزيزية، شارع التحلية، جدة — المملكة العربية السعودية"
                    : "Gulf Head Office: Office 401, Al Aziriah Plaza, Tahlia Street, Jeddah, Saudi Arabia"}
                </span>
              </div>
            </div>

            {/* Egypt Factory Address */}
            <div className="flex items-start gap-5">
              <span className="p-2 rounded-full bg-gold-light shadow">
                <MapPin size={26} className="text-gold" />
              </span>
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <span className="block text-base font-bold mb-1 text-gold">
                  {isRTL ? "مصنع مصر" : "Egypt Factory"}
                </span>
                <span className="text-charcoal-light">
                  {isRTL
                    ? "قطعة 155، المنطقة الصناعية الأولى، مدينة بدر، القاهرة"
                    : "Plot 155, First Industrial Zone, Badr City, Cairo — Egypt"}
                </span>
              </div>
            </div>

            {/* Saudi / UAE Phone */}
            <div className="flex items-start gap-5">
              <span className="p-2 rounded-full bg-gold-light shadow">
                <Phone size={22} className="text-gold" />
              </span>
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <span className="block text-base font-bold mb-1 text-gold">
                  {isRTL ? "السعودية / الإمارات" : "Saudi Arabia / UAE"}
                </span>
                <a href="tel:+966561537147" className="text-charcoal hover:text-gold transition font-medium">
                  +966 56 153 7147
                </a>
              </div>
            </div>

            {/* Egypt Phone */}
            <div className="flex items-start gap-5">
              <span className="p-2 rounded-full bg-gold-light shadow">
                <Phone size={22} className="text-gold" />
              </span>
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <span className="block text-base font-bold mb-1 text-gold">
                  {isRTL ? "مصر" : "Egypt"}
                </span>
                <a href="tel:01559893354" className="text-charcoal hover:text-gold transition font-medium">
                  01559893354
                </a>
              </div>
            </div>

            {/* General Email */}
            <div className="flex items-start gap-5">
              <span className="p-2 rounded-full bg-gold-light shadow">
                <Mail size={22} className="text-gold" />
              </span>
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <span className="block text-base font-bold mb-1 text-gold">
                  {isRTL ? "استفسارات عامة" : "General Inquiries"}
                </span>
                <a href="mailto:info@hibateast.com" className="text-charcoal hover:text-gold transition font-medium">
                  info@hebateast.com
                </a>
              </div>
            </div>

            {/* Support Email */}
            <div className="flex items-start gap-5">
              <span className="p-2 rounded-full bg-gold-light shadow">
                <Mail size={22} className="text-gold" />
              </span>
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <span className="block text-base font-bold mb-1 text-gold">
                  {isRTL ? "خدمة العملاء" : "Customer Support"}
                </span>
                <a href="mailto:support@hibateast.com" className="text-charcoal hover:text-gold transition font-medium">
                  m.sales@hebateast.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-5">
              <span className="p-2 rounded-full bg-gold-light shadow">
                🕒
              </span>
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <span className="block text-base font-bold mb-1 text-gold">
                  {isRTL ? "ساعات العمل" : "Working Hours"}
                </span>
                <p className="text-charcoal-light whitespace-pre-line">
                  {isRTL
                    ? `الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً\nالجمعة: مغلق | السبت: 10:00 صباحًا - 4:00 مساءً`
                    : `Sun - Thu: 9:00 AM - 6:00 PM\nFriday: Closed | Saturday: 10:00 AM - 4:00 PM`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/95 shadow-xl elegant-shadow border border-gold-light rounded-3xl p-8 flex flex-col justify-center animate-fade-in shadow-2xl">
          <h2
            className={`text-2xl md:text-3xl font-bold mb-6 text-center text-charcoal
              ${isRTL ? 'font-cairo' : 'font-playfair'}`}
          >
            {isRTL ? "راسلنا مباشرة" : "Send a Message"}
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Google Map section */}
      <section className="md:container-custom px-2 pb-10 pt-2 mt-2 animate-fade-in">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gold-light bg-cream">
          <iframe
            title={isRTL ? "خريطة جوجل جدة" : "Google Map Jeddah"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.123456789!2d39.17278!3d21.54333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d123456789ab%3A0xabcdef1234567890!2sJeddah%20City%20Center!5e0!3m2!1sen!2ssa!4v1621234567890!5m2!1sen!2ssa"
            className="w-full h-64 md:h-80"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "0", filter: "grayscale(0.03) brightness(0.98)" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;