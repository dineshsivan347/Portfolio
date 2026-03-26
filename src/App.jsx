import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      const docEl = document.getElementById("scroll-progress-bar");
      if (docEl) {
        docEl.style.width = scrolled;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-[#f8fafc] w-full min-h-screen overflow-x-hidden selection:bg-blue-500/30">
      <Background />
      <CustomCursor />
      
      <Navbar />
      
      <main className="relative z-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 z-[200] w-0 transition-all duration-100 ease-out"
        id="scroll-progress-bar"
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;600&display=swap');
        
        body { font-family: 'Quicksand', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-mono { font-family: 'Source Code Pro', monospace; }
      `}} />
    </div>
  );
}

export default App;
