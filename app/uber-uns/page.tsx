import type { Metadata } from 'next';
import Header from '../components/Header';
import AboutContactSection from '../components/AboutContactSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Über Uns',
  description: 'Erfahren Sie mehr über Bilgin Ingenieurbüro und Deca Architektur. Unsere Expertise in Architektur und Ingenieurwesen.',
  alternates: {
    canonical: '/uber-uns',
    languages: {
      'de': '/uber-uns',
      'tr': '/hakkimizda',
      'x-default': '/uber-uns',
    },
  },
  openGraph: {
    title: 'Über Uns | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Erfahren Sie mehr über unser Team und unsere Expertise',
    url: '/uber-uns',
    locale: 'de_DE',
    alternateLocale: 'tr_TR',
  },
};

export default function UberUnsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutContactSection />
      <Footer />
    </main>
  );
}
