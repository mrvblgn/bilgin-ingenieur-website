import type { Metadata } from 'next';
import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Umfassende Architektur- und Ingenieurdienstleistungen: Bauanträge, Planung, Ausführungspläne und mehr.',
  alternates: {
    canonical: '/leistungen',
    languages: {
      'de': '/leistungen',
      'tr': '/hizmetler',
      'x-default': '/leistungen',
    },
  },
  openGraph: {
    title: 'Leistungen | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Umfassende Architektur- und Ingenieurdienstleistungen',
    url: '/leistungen',
    locale: 'de_DE',
    alternateLocale: 'tr_TR',
  },
};

export default function LeistungenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesSection />
      <Footer />
    </main>
  );
}
