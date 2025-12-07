import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../hooks/use-toast';

const ContactForm: React.FC = () => {
  const { isRTL } = useLanguage();
  const { toast } = useToast();

  // استبدل "YOUR_FORM_ID" بالـ Form ID الخاص بك من Formspree
  const [state, handleSubmit] = useForm("mjkrrllb");

  const formDirection = isRTL ? 'rtl text-right' : 'ltr text-left';

  // عرض رسالة نجاح عند إرسال النموذج
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: isRTL ? 'تم إرسال الرسالة بنجاح' : 'Message Sent Successfully',
        description: isRTL ? 'سنتواصل معك قريبًا' : 'We will contact you soon',
      });
    }
  }, [state.succeeded, isRTL, toast]);

  if (state.succeeded) {
    return (
      <div className="text-center p-8">
        <div className="mb-4">
          <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-2">
          {isRTL ? 'شكراً لتواصلك معنا!' : 'Thank you for contacting us!'}
        </h3>
        <p className="text-charcoal-light">
          {isRTL ? 'تم إرسال رسالتك بنجاح وسنتواصل معك قريباً' : 'Your message has been sent successfully and we will contact you soon'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-xl mx-auto ${formDirection}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-charcoal mb-2">
          {isRTL ? 'الاسم' : 'Name'}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded contact-form-custom focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-charcoal mb-2">
          {isRTL ? 'البريد الإلكتروني' : 'Email'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-charcoal mb-2">
          {isRTL ? 'رقم الهاتف' : 'Phone'}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-charcoal mb-2">
          {isRTL ? 'رسالتك' : 'Message'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-gold text-white py-3 px-6 rounded hover:bg-gold-dark transition-colors duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {isRTL ? 'جارِ الإرسال...' : 'Sending...'}
          </span>
        ) : (
          isRTL ? 'إرسال' : 'Submit'
        )}
      </button>

      {/* عرض رسائل الأخطاء العامة */}
      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="text-sm">
            {isRTL ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'An error occurred while sending the message. Please try again.'}
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;