'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function CookieBanner() {
  const { language, t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  // Preferences state for settings modal
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: false,
      marketing: false
    }));
    setShowBanner(false);
    // Trigger custom event to allow components to react
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }));
    setShowBanner(false);
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const savePreferences = (preferences: {
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const getLocalizedHref = (key: string): string => {
    if (language === 'DE') {
      return key === 'datenschutz' ? '/datenschutz' : '/impressum';
    } else {
      return key === 'datenschutz' ? '/gizlilik-politikasi' : '/kunye';
    }
  };

  if (!showBanner) return null;

  const texts = {
    DE: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren. Einige Cookies sind für den Betrieb der Website erforderlich (technisch notwendig). Darüber hinaus verwenden wir Cookies für die Kartenfunktion von Google Maps.',
      necessary: 'Technisch notwendige Cookies',
      necessaryDesc: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      functional: 'Funktionale Cookies',
      functionalDesc: 'Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen (z. B. Google Maps).',
      acceptAll: 'Alle akzeptieren',
      acceptNecessary: 'Nur notwendige',
      customize: 'Einstellungen',
      privacy: 'Datenschutzerklärung',
      imprint: 'Impressum',
      close: 'Schließen'
    },
    TR: {
      title: 'Çerez Ayarları',
      description: 'Web sitemizi ve hizmetimizi optimize etmek için çerezler kullanıyoruz. Bazı çerezler web sitesinin çalışması için gereklidir (teknik olarak gerekli). Ayrıca Google Maps harita işlevi için çerezler kullanıyoruz.',
      necessary: 'Teknik olarak gerekli çerezler',
      necessaryDesc: 'Bu çerezler web sitesinin temel işlevleri için gereklidir ve devre dışı bırakılamaz.',
      functional: 'İşlevsel çerezler',
      functionalDesc: 'Bu çerezler web sitesinin gelişmiş işlevsellik ve kişiselleştirme sağlamasına olanak tanır (ör. Google Maps).',
      acceptAll: 'Tümünü kabul et',
      acceptNecessary: 'Sadece gerekli',
      customize: 'Ayarlar',
      privacy: 'Gizlilik Politikası',
      imprint: 'Künye',
      close: 'Kapat'
    }
  };

  const text = texts[language];

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl" data-cookie-banner>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black mb-2">{text.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {text.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Link 
                    href={getLocalizedHref('datenschutz')} 
                    className="text-[#8B7355] hover:underline"
                  >
                    {text.privacy}
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link 
                    href={getLocalizedHref('impressum')} 
                    className="text-[#8B7355] hover:underline"
                  >
                    {text.imprint}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {text.customize}
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {text.acceptNecessary}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#8B7355] rounded-lg hover:bg-[#7a6349] transition-colors"
                >
                  {text.acceptAll}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-black">{text.title}</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={text.close}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6 mb-6">
                {/* Necessary Cookies - Always enabled */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <input
                          type="checkbox"
                          checked={true}
                          disabled
                          className="w-5 h-5 text-[#8B7355] border-gray-300 rounded focus:ring-[#8B7355] cursor-not-allowed"
                        />
                        <label className="text-base font-semibold text-black">{text.necessary}</label>
                      </div>
                      <p className="text-sm text-gray-600 ml-8">{text.necessaryDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                          className="w-5 h-5 text-[#8B7355] border-gray-300 rounded focus:ring-[#8B7355] cursor-pointer"
                        />
                        <label className="text-base font-semibold text-black cursor-pointer">{text.functional}</label>
                      </div>
                      <p className="text-sm text-gray-600 ml-8">{text.functionalDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="w-5 h-5 text-[#8B7355] border-gray-300 rounded focus:ring-[#8B7355] cursor-pointer"
                        />
                        <label className="text-base font-semibold text-black cursor-pointer">
                          {language === 'DE' ? 'Analyse-Cookies' : 'Analitik Çerezler'}
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 ml-8">
                        {language === 'DE' 
                          ? 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.'
                          : 'Bu çerezler, ziyaretçilerin web sitesi ile nasıl etkileşime girdiğini anlamamıza yardımcı olur.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                          className="w-5 h-5 text-[#8B7355] border-gray-300 rounded focus:ring-[#8B7355] cursor-pointer"
                        />
                        <label className="text-base font-semibold text-black cursor-pointer">
                          {language === 'DE' ? 'Marketing-Cookies' : 'Pazarlama Çerezleri'}
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 ml-8">
                        {language === 'DE' 
                          ? 'Diese Cookies werden verwendet, um Besuchern auf verschiedenen Websites relevante Anzeigen zu zeigen.'
                          : 'Bu çerezler, ziyaretçilere çeşitli web sitelerinde ilgili reklamları göstermek için kullanılır.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {text.close}
                </button>
                <button
                  onClick={() => savePreferences(preferences)}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#8B7355] rounded-lg hover:bg-[#7a6349] transition-colors"
                >
                  {language === 'DE' ? 'Einstellungen speichern' : 'Ayarları kaydet'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
