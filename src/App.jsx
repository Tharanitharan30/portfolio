import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import LoadingScreen from "./components/LoadingScreen";  
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import InteractiveParticles from "./components/InteractiveParticles";
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';

const VALID_SECTIONS = ['hero', 'about', 'skills', 'certificates', 'projects', 'experience', 'education', 'contact'];

export default function App() {
   const [loading, setLoading] = useState(true);
   const [terminalOpen, setTerminalOpen] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

     return () => clearTimeout(timer);
  }, []);

  const handleNavigateSection = (sectionId) => {
    const target = VALID_SECTIONS.includes(sectionId) ? sectionId : null;
    if (!target) return;
    setTerminalOpen(false);
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return loading ? (
    <LoadingScreen />
  ) : (
    <div>

      <InteractiveParticles />
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Floating terminal launcher */}
      <button
        onClick={() => setTerminalOpen(true)}
        aria-label="Open interactive terminal"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-[#0d1117]/90 border border-emerald-500/40 text-emerald-400 font-mono text-xs rounded-full shadow-lg shadow-emerald-500/10 backdrop-blur hover:border-emerald-400 hover:scale-105 transition-all"
      >
        <Terminal size={14} />
        <span className="hidden sm:inline">./terminal.sh</span>
      </button>

      <InteractiveTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
