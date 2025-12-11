'use client';

import React from 'react';
import Link from 'next/link';
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

  return (
    <footer className="bg-black text-white py-20 md:py-24">
      <div className="container mx-auto px-4 pt-10">
        {/* Top Section - Navigation Links and Social Media */}
        <div className="flex items-center justify-between pb-10 pt-16 mt-8 mb-8 min-h-[60px]">
          {/* Navigation Links - Centered */}
          <div className="flex-1 flex items-center justify-center gap-12">
            <Link href={getLocalizedHref('projects')} className="hover:opacity-80 transition-opacity uppercase tracking-wide">
              {t('footer.references')}
            </Link>
            <span className="text-white mx-4 w-px bg-white h-[2.5em]"></span>
            <Link href={getLocalizedHref('services')} className="hover:opacity-80 transition-opacity uppercase tracking-wide">
              {t('footer.services')}
            </Link>
            <span className="text-white mx-4 w-px bg-white h-[2.5em]"></span>
            <Link href={getLocalizedHref('about')} className="hover:opacity-80 transition-opacity uppercase tracking-wide">
              {t('footer.about')}
            </Link>
            <span className="text-white mx-4 w-px bg-white h-[2.5em]"></span>
            <Link href={getLocalizedHref('contact')} className="hover:opacity-80 transition-opacity uppercase tracking-wide">
              {t('footer.contact')}
            </Link>
          </div>

          {/* Social Media Icons - Right */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Facebook">
              <span className="text-white text-xs font-bold">f</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Instagram">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <span className="text-white text-xs font-bold">in</span>
            </a>
          </div>
        </div>

        {/* Bottom Section - Legal Links and Copyright */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <a href="#" className="hover:opacity-80 transition-opacity uppercase tracking-wide text-sm">
              IMPRESSUM
            </a>
            <span className="text-white font-light" style={{ fontSize: '16px', display: 'inline-block', height: '24px', lineHeight: '24px' }}>|</span>
            <a href="#" className="hover:opacity-80 transition-opacity uppercase tracking-wide text-sm">
              DATENSCHUTZ
            </a>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="text-sm">© 2025</p>
            {/* Logos next to copyright - inverted colors for visibility on dark background */}
            <div className="flex items-center gap-3">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/assets/Bilgin_Ingenieurbüro_Logo_page-0001.png" 
                  alt="Bilgin Ingenieurbüro Logo" 
                  className="h-6 md:h-8 object-contain brightness-0 invert"
                />
              </Link>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/assets/deca_architektur_logo_page-0001.png" 
                  alt="Deca Architektur Logo" 
                  className="h-6 md:h-8 object-contain brightness-0 invert"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
