import type { Metadata } from 'next';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie uns für Ihre Architektur- und Ingenieurprojekte. Wir sind in Heilbronn für Sie da.',
  alternates: {
    canonical: '/kontakt',
    languages: {
      'de': '/kontakt',
      'tr': '/iletisim',
      'x-default': '/kontakt',
    },
  },
  openGraph: {
    title: 'Kontakt | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Kontaktieren Sie uns für Ihre Projekte',
    url: '/kontakt',
    locale: 'de_DE',
    alternateLocale: 'tr_TR',
  },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
