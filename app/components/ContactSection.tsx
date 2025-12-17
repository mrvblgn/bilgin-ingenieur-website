'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [headerHeight, setHeaderHeight] = useState(72);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const width = window.innerWidth;
      // Header yüksekliği: globals.css'deki .header-logo-container değerlerine göre
      if (width >= 1024) {
        setHeaderHeight(80); // desktop: 80px
      } else if (width >= 768) {
        setHeaderHeight(72); // tablet: 72px
      } else {
        setHeaderHeight(56); // mobil: 56px
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Google Maps paylaşım linki
  const googleMapsShareUrl = "https://share.google/ibv6FysYOrlL2E0tB";
  
  // Google Maps embed URL with dynamic language parameter
  const langCode = language === 'DE' ? 'de' : 'tr';
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.35308082948!2d9.13251983908826!3d49.16054656923068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798296f7d941059%3A0x440b94b506de8bab!2sBilgin%20Ingenieurb%C3%BCro%20%26%20deca%20Architektur!5e0!3m2!1s${langCode}!2s${langCode}!4v1765317291995!5m2!1s${langCode}!2s${langCode}`;

  // Subtitle text based on language
  const subtitleText = language === 'DE' 
    ? 'Kontaktieren Sie uns für Ihre Projekte'
    : 'Projeleriniz için bizimle iletişime geçin';

  return (
    <>
      {/* Hero Map Section - Header'ın tam altında, boşluksuz */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden" style={{ marginTop: `${headerHeight}px` }}>
        <iframe
          src={mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: 'auto' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="w-full text-center mb-8 md:mb-10 lg:mb-12">
            {/* Title - Haritanın altında */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-amoret uppercase tracking-tight text-[#8B7355] mb-4 md:mb-5 lg:mb-6">
              {t('contact.title')}
            </h1>
            
            {/* Decorative divider */}
            <div className="w-12 md:w-16 h-px bg-gray-300 mx-auto mb-2 md:mb-2.5"></div>
            
            {/* Subtitle for better context */}
            <div className="max-w-3xl mx-auto">
              <p 
                className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed font-light italic mb-8" 
                style={{ 
                  textTransform: 'none', 
                  fontVariant: 'normal',
                  letterSpacing: '0.01em',
                  lineHeight: '1.7'
                }}
              >
                {subtitleText}
              </p>
            </div>
          </div>

          {/* Contact Info Cards - Modern card design */}
          <div className="max-w-7xl mx-auto hero-section">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                {/* Icon with brand-colored background */}
                <div className="w-16 h-16 rounded-full bg-[#8B7355]/10 flex items-center justify-center" style={{ marginBottom: '16px', marginTop: '12px' }}>
                  <svg className="w-7 h-7 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black font-amoret uppercase tracking-tight mb-4">
                  {t('contact.addressTitle')}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Speyerer Str. 4<br />74078 Heilbronn
                </p>
                {/* CTA Button */}
                <a
                  href={googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B7355] text-base font-medium rounded-lg hover:bg-[#7a6349] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 transition-colors duration-200 mt-3 mb-6 p-1"
                  style={{ color: '#ffffff' }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {t('contact.viewOnMaps')}
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#8B7355]/10 flex items-center justify-center mb-6" style={{ marginBottom: '16px', marginTop: '12px' }}>
                  <svg className="w-7 h-7 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black font-amoret uppercase tracking-tight mb-4">
                  {t('contact.phoneTitle')}
                </h2>
                <a 
                  href={`tel:${t('contact.phone')}`}
                  className="text-base text-gray-700 hover:text-[#8B7355] transition-colors mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 rounded"
                >
                  {t('contact.phone')}
                </a>
                {/* CTA Button */}
                <a
                  href={`tel:${t('contact.phone')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B7355] text-base font-medium rounded-lg hover:bg-[#7a6349] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 transition-colors duration-200 mt-3 mb-6 p-1"
                  style={{ color: '#ffffff' }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  {language === 'DE' ? 'Anrufen' : 'Hemen Ara'}
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#8B7355]/10 flex items-center justify-center mb-6" style={{ marginBottom: '16px', marginTop: '12px' }}>
                  <svg className="w-7 h-7 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black font-amoret uppercase tracking-tight mb-4">
                  {t('contact.emailTitle')}
                </h2>
                <a 
                  href={`mailto:${t('contact.email')}`}
                  className="text-base text-gray-700 hover:text-[#8B7355] transition-colors mb-6 break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 rounded"
                >
                  {t('contact.email')}
                </a>
                {/* CTA Button */}
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B7355] text-base font-medium rounded-lg hover:bg-[#7a6349] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 transition-colors duration-200 mt-3 mb-6 p-1"
                  style={{ color: '#ffffff' }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {language === 'DE' ? 'E-Mail senden' : 'E-posta Gönder'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}