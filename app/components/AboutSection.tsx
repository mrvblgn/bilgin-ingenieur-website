'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-black font-amoret uppercase tracking-tight">
            {t('about.title')}
          </h2>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg lg:text-xl normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('about.intro1')}
            </p>
            <p className="text-base md:text-lg lg:text-xl normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('about.intro2')}
            </p>
            <p className="text-base md:text-lg lg:text-xl normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('about.intro3')}
            </p>
            <p className="text-base md:text-lg lg:text-xl normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('about.intro4')}
            </p>
            <p className="text-base md:text-lg lg:text-xl normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('about.intro5')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
