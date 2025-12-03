import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
