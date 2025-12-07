import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
 * Ana sayfa bileşeni
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
