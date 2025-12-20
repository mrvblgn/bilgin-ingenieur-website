'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesSection() {
  const { t, language } = useLanguage();

  // Get translations - t() can return arrays for items
  const getItems = (key: string): string[] => {
    try {
      const translations = require(`../locales/${language}.json`);
      const keys = key.split('.');
      let value: any = translations;
      for (const k of keys) {
        value = value?.[k];
      }
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  };

  const services = [
    {
      id: '1',
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      items: getItems('services.service1.items'),
      image: '/assets/projekt_6/1_page-0001.jpg'
    },
    {
      id: '2',
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      items: getItems('services.service2.items'),
      image: '/assets/projekt_6/3_page-0001.jpg'
    },
    {
      id: '3',
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      items: getItems('services.service3.items'),
      image: '/assets/projekt_4/PHOTO-2025-11-30-14-50-46 3.jpg'
    }
  ];

  return (
    <>
      {/* Hero Cover Image with Title */}
      <section className="relative w-full h-screen overflow-hidden hero-section">
        <Image
          src="/assets/projekt_2/PHOTO-2025-11-30-14-50-15 7.jpg"
          alt="Services Cover"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Title on Hero */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-amoret uppercase tracking-tight text-white text-center"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              {t('services.title')}
            </h2>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id}>
          <div className="generalplaner-grid">
            {/* Image - alternating left/right */}
            {index % 2 === 1 && (
              <div className="generalplaner-image">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </div>
            )}

            {/* Text Content */}
            <div className="generalplaner-content generalplaner-section">
              <h2 className="font-amoret generalplaner-title">
                {service.title}
              </h2>
              
              {service.description && (
                <p className="generalplaner-text" style={{ marginBottom: '24px' }}>
                  {service.description}
                </p>
              )}

              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {service.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: '#4a4a4a'
                    }}
                  >
                    <svg 
                      style={{ 
                        width: '20px', 
                        height: '20px', 
                        color: '#8B7355', 
                        flexShrink: 0,
                        marginTop: '2px'
                      }} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - alternating left/right */}
            {index % 2 === 0 && (
              <div className="generalplaner-image">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </div>
            )}
          </div>

          {/* Spacer between sections */}
          {index < services.length - 1 && (
            <div style={{ height: '80px', backgroundColor: 'white' }}></div>
          )}
        </section>
      ))}

      {/* Bottom spacing */}
      <div style={{ height: '80px', backgroundColor: 'white' }}></div>
    </>
  );
}
