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
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-black font-amoret uppercase tracking-tight">
              {t('contact.title')}
            </h1>

            <div className="space-y-8">
              {/* Address */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black font-amoret uppercase tracking-tight">
                  {t('contact.addressTitle')}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
                  {t('contact.address')}
                </p>
              </div>

              {/* Phone */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black font-amoret uppercase tracking-tight">
                  {t('contact.phoneTitle')}
                </h2>
                <a 
                  href={`tel:${t('contact.phone')}`}
                  className="text-base md:text-lg lg:text-xl text-gray-700 hover:text-black transition-colors normal-case" 
                  style={{ textTransform: 'none', fontVariant: 'normal' }}
                >
                  {t('contact.phone')}
                </a>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black font-amoret uppercase tracking-tight">
                  {t('contact.emailTitle')}
                </h2>
                <a 
                  href={`mailto:${t('contact.email')}`}
                  className="text-base md:text-lg lg:text-xl text-gray-700 hover:text-black transition-colors normal-case" 
                  style={{ textTransform: 'none', fontVariant: 'normal' }}
                >
                  {t('contact.email')}
                </a>
              </div>

              {/* Link to Google Maps */}
              <div className="pt-4">
                <a
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base md:text-lg text-gray-700 hover:text-black transition-colors normal-case underline"
                  style={{ textTransform: 'none', fontVariant: 'normal' }}
                >
                  {t('contact.viewOnMaps')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
