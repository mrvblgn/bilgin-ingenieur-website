'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export type Language = 'TR' | 'DE';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>('DE');

  // Detect language from URL
  const detectLanguageFromPath = (path: string): Language | null => {
    // German routes
    if (path.startsWith('/leistungen') || 
        path.startsWith('/referenzen') || 
        path.startsWith('/uber-uns') || 
        path.startsWith('/kontakt') ||
        path.startsWith('/impressum') ||
        path.startsWith('/datenschutz') ||
        path.startsWith('/projekt/')) {
      return 'DE';
    }
    // Turkish routes
    if (path.startsWith('/hizmetler') || 
        path.startsWith('/referanslar') || 
        path.startsWith('/hakkimizda') || 
        path.startsWith('/iletisim') ||
        path.startsWith('/kunye') ||
        path.startsWith('/gizlilik-politikasi') ||
        path.startsWith('/proje/')) {
      return 'TR';
    }
    // Homepage - return null to use localStorage
    return null;
  };

  useEffect(() => {
    const urlLanguage = detectLanguageFromPath(pathname);
    const savedLanguage = localStorage.getItem('language') as Language;
    
    // Priority: URL > localStorage > default (DE)
    const detectedLanguage = urlLanguage || (savedLanguage && (savedLanguage === 'TR' || savedLanguage === 'DE') ? savedLanguage : 'DE');
    
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    try {
      // Dynamic import for translations
      const translations = require(`../locales/${language}.json`);
      const keys = key.split('.');
      let value: any = translations;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    } catch {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
