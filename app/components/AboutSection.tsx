'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="relative py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-2 md:px-3 lg:px-4">
        {/* 12 Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Text Content (7/12 columns, starting from column 2) */}
          <div className="lg:col-span-7 lg:col-start-2">
            {/* Title Section - Grid aligned */}
            <div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-amoret uppercase"
                style={{ 
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                  marginBottom: '20px'
                }}
              >
                {t('about.title')}
              </h2>
              
              {/* Accent line */}
              <div className="w-12 h-px bg-black/20"></div>
            </div>

            {/* Text Content - Editorial Card (slightly inset) */}
            <div 
              className="bg-white/70 backdrop-blur-[2px] rounded-xl p-8 md:p-10 space-y-8 ml-4 md:ml-6"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.04)' }}
            >
              <div className="prose prose-lg max-w-prose">
                <p 
                  className="text-base md:text-lg text-gray-600 normal-case"
                  style={{ 
                    textTransform: 'none', 
                    fontVariant: 'normal',
                    letterSpacing: '0.01em',
                    lineHeight: '1.85'
                  }}
                >
                  {t('about.intro1')}
                </p>
                
                {t('about.intro2') && (
                  <p 
                    className="text-base md:text-lg text-gray-600 normal-case"
                    style={{ 
                      textTransform: 'none', 
                      fontVariant: 'normal',
                      letterSpacing: '0.01em',
                      lineHeight: '1.85'
                    }}
                  >
                    {t('about.intro2')}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Balance (5/12 columns) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Vertical divider line - subtle */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-black/5"></div>
            
            {/* Large subtle background text - alternative decorative element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p 
                className="text-[180px] md:text-[240px] font-bold text-black opacity-[0.02] font-amoret uppercase select-none pointer-events-none"
                style={{ 
                  letterSpacing: '-0.05em',
                  lineHeight: '1'
                }}
              >
                {t('about.title')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
