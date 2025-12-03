'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  salutation: string;
  interest: string;
  name: string;
  email: string;
  message: string;
  captcha: string;
  privacy: boolean;
}

const initialFormData: FormData = {
  salutation: '',
  interest: '',
  name: '',
  email: '',
  message: '',
  captcha: '',
  privacy: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setFormData(initialFormData);
    alert('Mesajınız gönderildi!');
  };

  return (
    <section id="iletisim" className="py-20 px-4 bg-white dark:bg-black">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-light text-black dark:text-white mb-12 text-center uppercase tracking-wider">
          İletişim
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              Cinsiyet
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="salutation"
                  value="male"
                  checked={formData.salutation === 'male'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-zinc-700 dark:text-zinc-300">Bay</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="salutation"
                  value="female"
                  checked={formData.salutation === 'female'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-zinc-700 dark:text-zinc-300">Bayan</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              İlgi Alanım
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
              required
            >
              <option value="">Seçiniz</option>
              <option value="projects">Projeler</option>
              <option value="architecture">Mimarlık</option>
              <option value="interior">İç Mimarlık</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              Ad Soyad *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              E-posta *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              Mesaj
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              Güvenlik Sorusu: Türkiye'nin başkenti neresidir? *
            </label>
            <input
              type="text"
              name="captcha"
              value={formData.captcha}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="flex items-start">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleInputChange}
                required
                className="mt-1 mr-2"
              />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Gizlilik politikasına göre verilerimin elektronik işlenmesine onay veriyorum. *
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-lg font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </form>

        <div className="mt-12 text-center space-y-2">
          <p className="text-lg font-medium text-black dark:text-white">
            Bilgin İnşaat Mühendisliği
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Örnek Adres, Örnek Şehir
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Tel: +90 XXX XXX XX XX
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            E-posta: info@example.com
          </p>
        </div>
      </div>
    </section>
  );
}

