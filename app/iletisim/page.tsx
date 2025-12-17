import type { Metadata } from 'next';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Mimarlık ve mühendislik projeleriniz için bizimle iletişime geçin. Heilbronn\'da hizmetinizdeyiz.',
  alternates: {
    canonical: '/iletisim',
    languages: {
      'de': '/kontakt',
      'tr': '/iletisim',
      'x-default': '/kontakt',
    },
  },
  openGraph: {
    title: 'İletişim | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Projeleriniz için bizimle iletişime geçin',
    url: '/iletisim',
    locale: 'tr_TR',
    alternateLocale: 'de_DE',
  },
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
