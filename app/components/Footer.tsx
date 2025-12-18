'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  const getLocalizedHref = (key: string): string => {
    if (language === 'DE') {
      const deRoutes: { [key: string]: string } = {
        home: '/',
        services: '/leistungen',
        projects: '/referenzen',
        about: '/uber-uns',
        contact: '/kontakt',
        impressum: '/impressum',
        datenschutz: '/datenschutz',
      };
      return deRoutes[key] || '/';
    } else {
      const trRoutes: { [key: string]: string } = {
        home: '/',
        services: '/hizmetler',
        projects: '/referanslar',
        about: '/hakkimizda',
        contact: '/iletisim',
        impressum: '/kunye',
        datenschutz: '/gizlilik-politikasi',
      };
      return trRoutes[key] || '/';
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          
          {/* Left Column - Logos & Description */}
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity block">
                <Image 
                  src="/assets/Bilgin_Ingenieurbüro_Logo_page-0001.png" 
                  alt="Bilgin Ingenieurbüro Logo" 
                  width={180}
                  height={100}
                  className="h-20 md:h-24 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <Link href="/" className="hover:opacity-80 transition-opacity block -ml-2">
                <Image 
                  src="/assets/deca_architektur_logo_page-0001.png" 
                  alt="Deca Architektur Logo" 
                  width={180}
                  height={86}
                  className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left max-w-xs -mt-2">
              {language === 'DE' 
                ? 'Architektur- und Ingenieurdienstleistungen in Heilbronn und Umgebung.'
                : 'Heilbronn ve çevresinde mimarlık ve mühendislik hizmetleri.'
              }
            </p>
          </div>

          {/* Middle Column - Navigation */}
          <div className="flex flex-col items-center footer-social-icons">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#8B7355] mb-2">
              {language === 'DE' ? 'Navigation' : 'Menü'}
            </h3>
            <nav className="flex flex-col items-center gap-2">
              <Link href={getLocalizedHref('services')} className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide">
                {t('footer.services')}
              </Link>
              <Link href={getLocalizedHref('projects')} className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide">
                {t('footer.references')}
              </Link>
              <Link href={getLocalizedHref('about')} className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide">
                {t('footer.about')}
              </Link>
              <Link href={getLocalizedHref('contact')} className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide">
                {t('footer.contact')}
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="flex flex-col items-center md:items-end footer-social-icons">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#8B7355] mb-2">
              {t('footer.contact')}
            </h3>
            <div className="text-gray-300 text-sm text-center md:text-right space-y-2">
              <p>Speyerer Str. 4</p>
              <p>74078 Heilbronn</p>
              <a href="mailto:projekte@deca-online.de" className="hover:text-white transition-colors block">
                projekte@deca-online.de
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 footer-social-icons">
              <a 
                href="https://www.instagram.com/ingenieurbuero.bilgin?igsh=MTYwZGo2ZTBic2xlag==" target="_blank"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all" 
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://share.google/ibv6FysYOrlL2E0tB" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all" 
                aria-label="Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright & Legal Links */}
      <div className="border-t border-white/10">
        <div className="mx-auto pt-1 pb-1">
          <div className="flex flex-col items-center text-center gap-2">
            {/* Legal Links - First Line */}
            <div className="flex items-center justify-center gap-3">
              <Link 
                href={getLocalizedHref('impressum')} 
                className="text-sm text-white/90 hover:text-white uppercase tracking-wider transition-colors font-light"
              >
                {t('footer.impressum')}
              </Link>
              <span className="text-white/40 text-sm">|</span>
              <Link 
                href={getLocalizedHref('datenschutz')} 
                className="text-sm text-white/90 hover:text-white uppercase tracking-wider transition-colors font-light"
              >
                {t('footer.datenschutz')}
              </Link>
            </div>
            
            {/* Copyright - Second Line */}
            <p className="text-xs text-white/60 font-light">
              © {new Date().getFullYear()} {language === 'DE' ? 'Bilgin Ingenieurbüro & Deca Architektur' : 'Bilgin Ingenieurbüro & Deca Architektur'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
