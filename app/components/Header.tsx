'use client';

import React, { useState, useEffect } from 'react';
import { NavigationItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.realEstate'), href: '#real-estate' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className={`text-2xl md:text-3xl font-bold transition-colors ${
              isScrolled ? 'text-black' : 'text-white drop-shadow-lg'
            }`}>
              <a 
                href="#home" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavClick('#home'); 
                }}
                className="hover:opacity-80 transition-opacity"
              >
                MACH
              </a>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Selector - Next to hamburger menu */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage('TR')}
                  className={`text-sm font-light transition-opacity ${
                    language === 'TR' 
                      ? isScrolled 
                        ? 'text-black opacity-100' 
                        : 'text-white opacity-100'
                      : isScrolled
                        ? 'text-gray-500 opacity-70'
                        : 'text-white opacity-50'
                  } hover:opacity-100`}
                >
                  TR
                </button>
                <span className={isScrolled ? 'text-gray-400' : 'text-white opacity-50'}>|</span>
                <button
                  onClick={() => setLanguage('DE')}
                  className={`text-sm font-light transition-opacity ${
                    language === 'DE'
                      ? isScrolled 
                        ? 'text-black opacity-100' 
                        : 'text-white opacity-100'
                      : isScrolled
                        ? 'text-gray-500 opacity-70'
                        : 'text-white opacity-50'
                  } hover:opacity-100`}
                >
                  DE
                </button>
              </div>

              {/* Hamburger Menu Button */}
              <button
                className={`z-50 relative transition-colors ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-40' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.6))'
          }}
        />

        <div
          className={`absolute top-0 right-0 h-full w-1/2 md:w-2/5 bg-white transition-transform duration-300 ease-in-out shadow-2xl ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-700 hover:text-black transition-colors z-10"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col justify-center h-full items-start pl-8 pr-16 gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavClick(item.href); 
                }}
                className="text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors cursor-pointer"
                style={{ 
                  fontFamily: 'sans-serif'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
