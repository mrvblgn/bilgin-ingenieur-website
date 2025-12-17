import type { Metadata } from 'next';
import Header from '../components/Header';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Referanslar',
  description: 'Tamamladığımız projeler ve planlama aşamasındaki gayrimenkuller. Mimarlık ve mühendislik projelerimizi keşfedin.',
  alternates: {
    canonical: '/referanslar',
    languages: {
      'de': '/referenzen',
      'tr': '/referanslar',
      'x-default': '/referenzen',
    },
  },
  openGraph: {
    title: 'Referanslar | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Tamamladığımız projeler ve planlama aşamasındaki gayrimenkuller',
    url: '/referanslar',
    locale: 'tr_TR',
    alternateLocale: 'de_DE',
  },
};

export default function ReferanslarPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
