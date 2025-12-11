'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [headerHeight, setHeaderHeight] = useState(72);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const width = window.innerWidth;
      // Header yüksekliği: padding (12px top + 12px bottom) + logo yüksekliği
      if (width >= 1024) {
        setHeaderHeight(12 + 80 + 12); // lg: h-20 = 80px
      } else if (width >= 768) {
        setHeaderHeight(12 + 64 + 12); // md: h-16 = 64px
      } else {
        setHeaderHeight(12 + 48 + 12); // h-12 = 48px
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Google Maps paylaşım linki
  const googleMapsShareUrl = "https://share.google/ibv6FysYOrlL2E0tB";
  
  // Google Maps embed URL - marker ile birlikte, dil parametresi dinamik
  // Dil parametresi: !3m2!1s{lang}!2s{lang} ve !5m2!1s{lang}!2s{lang}
  // tr = Türkçe, de = Almanca
  const langCode = language === 'DE' ? 'de' : 'tr';
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.35308082948!2d9.13251983908826!3d49.16054656923068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798296f7d941059%3A0x440b94b506de8bab!2sBilgin%20Ingenieurb%C3%BCro%20%26%20deca%20Architektur!5e0!3m2!1s${langCode}!2s${langCode}!4v1765317291995!5m2!1s${langCode}!2s${langCode}`;
  const mapsLinkUrl = googleMapsShareUrl;

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
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title - Haritanın altında */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-black font-amoret uppercase tracking-tight">
              {t('contact.title')}
            </h1>

            {/* Contact Details - Yan yana */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12" style={{ padding: '2rem 1rem' }}>
              {/* Address */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black font-amoret uppercase tracking-tight">
                    {t('contact.addressTitle')}
                  </h2>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal', marginLeft: '52px' }}>
                  {t('contact.address')}
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black font-amoret uppercase tracking-tight">
                    {t('contact.phoneTitle')}
                  </h2>
                </div>
                <a 
                  href={`tel:${t('contact.phone')}`}
                  className="text-base md:text-lg text-gray-700 hover:text-black transition-colors normal-case" 
                  style={{ textTransform: 'none', fontVariant: 'normal', marginLeft: '52px' }}
                >
                  {t('contact.phone')}
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black font-amoret uppercase tracking-tight">
                    {t('contact.emailTitle')}
                  </h2>
                </div>
                <a 
                  href={`mailto:${t('contact.email')}`}
                  className="text-base md:text-lg text-gray-700 hover:text-black transition-colors normal-case break-all" 
                  style={{ textTransform: 'none', fontVariant: 'normal', marginLeft: '52px' }}
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
