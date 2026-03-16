import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Services from './components/Services';
import TrustedSupport from './components/TrustedSupport';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import FeaturedProjects from './components/FeaturedProjects';
import ClientReviews from './components/ClientReviews';
import Projects from './components/Projects';
import Consultation from './components/Consultation';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-loom-black min-h-screen text-loom-text selection:bg-loom-accent selection:text-white">
      <Navbar />
      <Hero />
      <Authority />
      <Services />
      <TrustedSupport />
      <Experience />
      <CaseStudies />
      <FeaturedProjects />
      <ClientReviews />
      <Projects />
      <Consultation />
      <Process />
      <TechStack />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  );
}
