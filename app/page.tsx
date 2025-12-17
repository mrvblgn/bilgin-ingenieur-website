import Header from './components/Header';
import Hero from './components/Hero';
import ProjectReelsCarousel from './components/ProjectReelsCarousel';
import ProjectCarousel from './components/ProjectCarousel';
import AboutSection from './components/AboutSection';
import ServicesPreview from './components/ServicesPreview';
import Footer from './components/Footer';

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
