'use client';

import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            {t('hero.subtitle')}
          </p>
          <Button
            onClick={() => {
              const element = document.querySelector('#real-estate');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black hover:bg-gray-100"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
