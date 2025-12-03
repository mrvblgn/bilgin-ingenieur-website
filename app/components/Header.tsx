'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 dark:bg-zinc-900/95 dark:border-zinc-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white">
          BİLGİN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
            Ana Sayfa
          </a>
          <a href="#hizmetler" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
            Hizmetler
          </a>
          <a href="#referanslar" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
            Referanslar
          </a>
          <a href="#hakkimizda" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
            Hakkımızda
          </a>
          <a href="#iletisim" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
            İletişim
          </a>
        </div>

        {/* Language Selector */}
        <div className="hidden md:flex items-center gap-2">
          <button className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            TR
          </button>
          <span className="text-zinc-300 dark:text-zinc-600">|</span>
          <button className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            EN
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-700 dark:text-zinc-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
              Ana Sayfa
            </a>
            <a href="#hizmetler" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
              Hizmetler
            </a>
            <a href="#referanslar" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
              Referanslar
            </a>
            <a href="#hakkimizda" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
              Hakkımızda
            </a>
            <a href="#iletisim" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
              İletişim
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

