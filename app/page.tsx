import type { Metadata } from 'next';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectReelsCarousel from './components/ProjectReelsCarousel';
import ProjectCarousel from './components/ProjectCarousel';
import AboutSection from './components/AboutSection';
import ServicesPreview from './components/ServicesPreview';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Bilgin Ingenieurbüro & Deca Architektur | Architektur- und Ingenieurdienstleistungen',
  description: 'Architektur- und Ingenieurdienstleistungen in Heilbronn und Umgebung. Professionelle Planung, Bauanträge und Ausführungspläne.',
  alternates: {
    canonical: '/',
    languages: {
      'de': '/',
      'tr': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Architektur- und Ingenieurdienstleistungen in Heilbronn und Umgebung',
    url: '/',
    siteName: 'Bilgin Ingenieurbüro & Deca Architektur',
    locale: 'de_DE',
    alternateLocale: 'tr_TR',
    type: 'website',
  },
};

/**
 * Ana sayfa bileşeni
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectCarousel />
      <AboutSection />
      <ServicesPreview />
      <ProjectReelsCarousel />
      <Footer />
    </main>
  );
}
