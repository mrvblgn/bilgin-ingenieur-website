'use client';

import { useState, useEffect } from 'react';
import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/assets/PHOTO-2025-11-30-14-48-45.jpg',
    '/assets/PHOTO-2025-11-30-14-48-45-2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Her 5 saniyede bir değişir

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative">
      {/* Images Section - Üst Bölüm */}
      <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-black font-amoret uppercase tracking-tight">
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
