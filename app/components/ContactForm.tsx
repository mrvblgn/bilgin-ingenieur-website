'use client';

import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    salutation: language === 'DE' ? t('contact.mr') : t('contact.mr'),
    interest: language === 'DE' ? t('contact.interest1') : t('contact.interest1'),
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
    captcha: '',
  });

  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const captchaQuestion = t('contact.captcha');
  const correctAnswer = language === 'DE' ? 'Wien' : 'Viyana';

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      salutation: language === 'DE' ? t('contact.mr') : t('contact.mr'),
      interest: language === 'DE' ? t('contact.interest1') : t('contact.interest1'),
    }));
  }, [language, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      alert(t('contact.privacyError'));
      return;
    }

    if (captchaAnswer.trim().toLowerCase() !== correctAnswer.toLowerCase()) {
      alert(t('contact.captchaError'));
      return;
    }

    console.log('Form submitted:', formData);
    alert(t('contact.success'));
    
    setFormData({
      salutation: language === 'DE' ? t('contact.mr') : t('contact.mr'),
      interest: language === 'DE' ? t('contact.interest1') : t('contact.interest1'),
      name: '',
      email: '',
      message: '',
      privacyAccepted: false,
      captcha: '',
    });
    setCaptchaAnswer('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('contact.title')}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.salutation')}</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="salutation"
                    value={t('contact.mr')}
                    checked={formData.salutation === t('contact.mr')}
                    onChange={(e) => setFormData({ ...formData, salutation: e.target.value })}
                    className="mr-2"
                  />
                  {t('contact.mr')}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="salutation"
                    value={t('contact.mrs')}
                    checked={formData.salutation === t('contact.mrs')}
                    onChange={(e) => setFormData({ ...formData, salutation: e.target.value })}
                    className="mr-2"
                  />
                  {t('contact.mrs')}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.interest')}
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value={t('contact.interest1')}>{t('contact.interest1')}</option>
                <option value={t('contact.interest2')}>{t('contact.interest2')}</option>
                <option value={t('contact.interest3')}>{t('contact.interest3')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {captchaQuestion}
              </label>
              <input
                type="text"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.privacyAccepted}
                  onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                  className="mt-1 mr-2"
                  required
                />
                <span className="text-sm">
                  {t('contact.privacy')}
                </span>
              </label>
            </div>

            <Button type="submit" className="w-full">
              {t('contact.submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
