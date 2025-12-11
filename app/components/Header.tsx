'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NavigationItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [padding, setPadding] = useState({ left: 24, right: 24, top: 12, bottom: 12 });

  const getLocalizedHref = (key: string): string => {
    if (language === 'DE') {
      const deRoutes: { [key: string]: string } = {
        home: '/',
        services: '/leistungen',
        projects: '/referenzen',
        about: '/uber-uns',
        contact: '/kontakt',
      };
      return deRoutes[key] || '/';
    } else {
      const trRoutes: { [key: string]: string } = {
        home: '/',
        services: '/hizmetler',
        projects: '/referanslar',
        about: '/hakkimizda',
        contact: '/iletisim',
      };
      return trRoutes[key] || '/';
    }
  };

  const getCurrentPageKey = (path: string): string => {
    const deToKey: { [key: string]: string } = {
      '/': 'home',
      '/leistungen': 'services',
      '/referenzen': 'projects',
      '/uber-uns': 'about',
      '/kontakt': 'contact',
    };
    const trToKey: { [key: string]: string } = {
      '/': 'home',
      '/hizmetler': 'services',
      '/referanslar': 'projects',
      '/hakkimizda': 'about',
      '/iletisim': 'contact',
    };
    return deToKey[path] || trToKey[path] || 'home';
  };

  // Handle language change and redirect to corresponding page
  const handleLanguageChange = (newLanguage: 'TR' | 'DE') => {
    if (newLanguage === language) return;
    
    const currentPageKey = getCurrentPageKey(pathname);
    const newHref = newLanguage === 'DE' 
      ? getLocalizedHref(currentPageKey)
      : getLocalizedHref(currentPageKey);
    
    setLanguage(newLanguage);
    router.push(newHref);
  };

  const navigationItems: NavigationItem[] = [
    { label: t('nav.home'), href: getLocalizedHref('home') },
    { label: t('nav.services'), href: getLocalizedHref('services') },
    { label: t('nav.projects'), href: getLocalizedHref('projects') },
    { label: t('nav.about'), href: getLocalizedHref('about') },
    { label: t('nav.contact'), href: getLocalizedHref('contact') },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
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
      setIsScrolled(window.scrollY > 50);
    };

    // Check if current page is about, contact, or project detail page
    const isAboutPage = pathname === '/uber-uns' || pathname === '/hakkimizda';
    const isContactPage = pathname === '/kontakt' || pathname === '/iletisim';
    const isProjectDetailPage = typeof pathname === 'string' && pathname.startsWith('/projekt/');
    if (isAboutPage || isContactPage || isProjectDetailPage) {
      setIsScrolled(true); // Always show scrolled state on about, contact, and project detail pages
    } else {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (!isAboutPage && !isContactPage && !isProjectDetailPage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);

  // Handle responsive padding
  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setPadding({ left: 72, right: 72, top: 12, bottom: 12 });
      } else if (width >= 768) {
        setPadding({ left: 44, right: 44, top: 12, bottom: 12 });
      } else {
        setPadding({ left: 24, right: 24, top: 12, bottom: 12 });
      }
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? 'bg-white/80 shadow-md' : 'bg-transparent'
        }`}
        style={{ margin: 0, padding: 0 }}
      >
        <nav className="p-0 w-full">
          <div 
            className="flex items-center justify-between w-full"
            style={{ 
              paddingLeft: `${padding.left}px`, 
              paddingRight: `${padding.right}px`,
              paddingTop: `${padding.top}px`,
              paddingBottom: `${padding.bottom}px`,
              display: 'flex',
              boxSizing: 'border-box'
            }}
          >
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/assets/Bilgin_Ingenieurbüro_Logo_page-0001.png" 
                  alt="Bilgin Ingenieurbüro Logo" 
                  className="h-12 md:h-16 lg:h-20 object-contain"
                />
              </Link>
              <Link 
                href="/"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/assets/deca_architektur_logo_page-0001.png" 
                  alt="Deca Architektur Logo" 
                  className="h-12 md:h-16 lg:h-20 object-contain"
                />
              </Link>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              {/* Language Selector - Hidden when menu is open */}
              {!isMenuOpen && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleLanguageChange('TR')}
                    className={`text-base md:text-lg font-normal transition-opacity ${
                      language === 'TR'
                        ? isScrolled ? 'text-black opacity-100' : 'text-white opacity-100'
                        : isScrolled ? 'text-gray-600 opacity-70' : 'text-white opacity-70'
                    } hover:opacity-100`}
                  >
                    TR
                  </button>
                  <span className={`text-xl md:text-2xl ${isScrolled ? 'text-gray-600 opacity-70' : 'text-white opacity-70'}`}>|</span>
                  <button
                    onClick={() => handleLanguageChange('DE')}
                    className={`text-base md:text-lg font-normal transition-opacity ${
                      language === 'DE'
                        ? isScrolled ? 'text-black opacity-100' : 'text-white opacity-100'
                        : isScrolled ? 'text-gray-600 opacity-70' : 'text-white opacity-70'
                    } hover:opacity-100`}
                  >
                    DE
                  </button>
                </div>
              )}

              {/* Hamburger Menu Button - Hidden when menu is open */}
              {!isMenuOpen && (
                <button
                  className={`z-50 relative transition-opacity hover:opacity-80 ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Dark overlay - only on right half */}
        <div 
          className={`absolute top-0 right-0 h-full w-1/2 bg-black transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-80' : 'opacity-0'
          }`}
        />

        {/* Menu content - Right half of screen */}
        <div
          className={`absolute top-0 right-0 h-full w-1/2 flex flex-col transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top right controls: Language selector and Close button */}
          <div className="absolute top-8 right-8 flex items-center gap-6 z-50">
            

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:opacity-80 transition-opacity z-10"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
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
          </div>

          {/* Navigation items with equal font sizes and centered */}
          <div className="flex flex-col justify-center h-full items-center gap-3 md:gap-4 lg:gap-5">
            {navigationItems.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`text-white hover:text-gray-200 transition-all cursor-pointer tracking-wider text-lg md:text-xl lg:text-2xl font-light opacity-80 ${
                    pathname === item.href ? 'opacity-100 font-medium' : ''
                  }`}
                  style={{ 
                    fontFamily: '"The Amoret Collection Sans", Helvetica, Arial, Lucida, sans-serif',
                    letterSpacing: '0.1em',
                    color: '#ffffff',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
