import type { Metadata } from 'next';
import Header from '../components/Header';
import AboutContactSection from '../components/AboutContactSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Bilgin Ingenieurbüro ve Deca Architektur hakkında bilgi edinin. Mimarlık ve mühendislik alanındaki uzmanlığımız.',
  alternates: {
    canonical: '/hakkimizda',
    languages: {
      'de': '/uber-uns',
      'tr': '/hakkimizda',
      'x-default': '/uber-uns',
    },
  },
  openGraph: {
    title: 'Hakkımızda | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Ekibimiz ve uzmanlığımız hakkında bilgi edinin',
    url: '/hakkimizda',
    locale: 'tr_TR',
    alternateLocale: 'de_DE',
  },
};

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutContactSection />
      <Footer />
    </main>
  );
}
