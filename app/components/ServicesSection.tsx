'use client';

// SOLID: Single Responsibility Principle - ServicesSection only handles services display

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
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
