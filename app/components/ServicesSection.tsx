'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      id: '1',
      title: t('services.service1.title'),
      description: t('services.service1.description'),
    },
    {
      id: '2',
      title: t('services.service2.title'),
      description: t('services.service2.description'),
    },
    {
      id: '3',
      title: t('services.service3.title'),
      description: t('services.service3.description'),
    },
    {
      id: '4',
      title: t('services.service4.title'),
      description: t('services.service4.description'),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-black font-amoret uppercase tracking-tight">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all bg-white"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 text-black font-amoret uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
