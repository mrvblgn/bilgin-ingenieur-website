import type { Metadata } from 'next';
import Header from '../components/Header';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Referenzen',
  description: 'Unsere realisierten Projekte und Immobilien in Planung. Entdecken Sie unsere Architektur- und Ingenieurprojekte.',
  alternates: {
    canonical: '/referenzen',
    languages: {
      'de': '/referenzen',
      'tr': '/referanslar',
      'x-default': '/referenzen',
    },
  },
  openGraph: {
    title: 'Referenzen | Bilgin Ingenieurbüro & Deca Architektur',
    description: 'Unsere realisierten Projekte und Immobilien in Planung',
    url: '/referenzen',
    locale: 'de_DE',
    alternateLocale: 'tr_TR',
  },
};

export default function ReferenzenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
