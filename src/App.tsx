import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
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
      <CaseStudies />
      <Process />
      <TechStack />
      <Testimonials />
      <Footer />
    </main>
  );
}
