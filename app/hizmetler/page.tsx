import type { Metadata } from 'next';
import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description: 'Kapsamlı mimarlık ve mühendislik hizmetleri: Yapı ruhsatı, planlama, uygulama projeleri ve daha fazlası.',
  alternates: {
    canonical: '/hizmetler',
    languages: {
      'de': '/leistungen',
      'tr': '/hizmetler',
      'x-default': '/leistungen',
    },
  },
  openGraph: {
    title: 'Hizmetler | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Kapsamlı mimarlık ve mühendislik hizmetleri',
    url: '/hizmetler',
    locale: 'tr_TR',
    alternateLocale: 'de_DE',
  },
};

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesSection />
      <Footer />
    </main>
  );
}
