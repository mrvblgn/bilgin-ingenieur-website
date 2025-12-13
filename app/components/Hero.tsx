'use client';

import { useState, useEffect, useCallback } from 'react';
import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/assets/PHOTO-2025-11-30-14-48-45.jpg',
    '/assets/PHOTO-2025-11-30-14-48-45-2.jpg',
  ];

  // Previous image
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Next image
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Her 5 saniyede bir değişir

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section id="home" className="relative">
      {/* Images Section - Full Screen */}
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text Content Section - Alt Bölüm */}
      <div className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-amoret uppercase tracking-tight page-title">
              {t('hero.title')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('hero.subtitle')}
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector('#real-estate');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm md:text-base font-medium tracking-wide uppercase font-amoret transition-colors"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
