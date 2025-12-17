'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesPreview() {
  const { t, language } = useLanguage();

  // Short preview services (3 main categories)
  const previewServices = [
    {
      id: '1',
      title: t('services.service1.title'),
      summary: language === 'TR' 
        ? 'Yapı ruhsatları ve onaylar için tüm belgeleri hazırlıyoruz.'
        : 'Wir erstellen sämtliche Unterlagen für Bauanträge und Genehmigungen.'
    },
    {
      id: '2',
      title: t('services.service2.title'),
      summary: language === 'TR'
        ? 'Projenizin her aşamasında profesyonel planlama hizmeti sunuyoruz.'
        : 'Professionelle Planung und detaillierte Ausführungspläne für jede Projektphase.'
    },
    {
      id: '3',
      title: t('services.service3.title'),
      summary: language === 'TR'
        ? 'İnşaat sürecinizde uzman danışmanlık ve koordinasyon hizmeti veriyoruz.'
        : 'Fachkundige Beratung und Koordination durch den gesamten Bauprozess.'
    }
  ];

  const servicesPagePath = language === 'TR' ? '/hizmetler' : '/leistungen';

  return (
    <section 
      id="services-preview" 
      className="bg-[#f5f5f0] py-10 md:py-14 lg:py-16"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-amoret uppercase tracking-tight text-black mb-4 md:mb-5 lg:mb-6">
            {t('services.title')}
          </h2>
          
          {/* Decorative divider */}
          <div className="w-12 md:w-16 h-px bg-gray-300 mx-auto mb-2 md:mb-2.5"></div>
          
          <div className="max-w-3xl mx-auto">
            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center leading-relaxed font-light italic" 
              style={{ 
                textTransform: 'none', 
                fontVariant: 'normal',
                letterSpacing: '0.01em',
                lineHeight: '1.7'
              }}
            >
              {language === 'TR' 
                ? 'Mimarlık ve mühendislik projeleriniz için kapsamlı hizmet çözümleri.'
                : 'Umfassende Dienstleistungslösungen für Ihre Architektur- und Ingenieurprojekte.'}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 lg:mb-10">
          {previewServices.map((service) => (
            <Link
              key={service.id}
              href={servicesPagePath}
              className="group bg-white border border-gray-200 rounded-xl hover:border-[#8B7355] hover:shadow-lg transition-all duration-300 flex flex-col p-8"
            >
              {/* Service Icon/Indicator */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center group-hover:bg-[#8B7355]/20 transition-colors duration-300">
                  <svg 
                    className="w-6 h-6 text-[#8B7355]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-bold font-amoret uppercase tracking-tight text-black mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Summary */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow" style={{ textTransform: 'none' }}>
                {service.summary}
              </p>

              {/* Arrow Indicator */}
              <div className="mt-6 flex items-center text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium uppercase tracking-wide mr-2">
                  {language === 'TR' ? 'Detaylar' : 'Details'}
                </span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={servicesPagePath}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-base font-normal uppercase tracking-wide font-amoret hover:bg-gray-800 transition-colors duration-300 rounded-lg"
            style={{ color: '#ffffff' }}
          >
            {language === 'TR' ? 'Tüm Hizmetleri Görüntüle' : 'Alle Leistungen ansehen'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
