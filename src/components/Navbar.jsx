import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-[80px] z-[100] flex items-center justify-between px-6 md:px-12 backdrop-blur-md bg-[#0a1120]/85 border-b border-white/5 transition-all duration-300">
        <div className="font-montserrat font-extrabold text-2xl tracking-wide text-blue-500">
          DINESH <span className="text-[#f8fafc]">S</span>
        </div>
        <div>
          <a href="/Resume Dinesh S[1].pdf" target="_blank" rel="noreferrer" className="ai-button">
            Resume
          </a>
        </div>
      </header>

      {/* Left Sidebar (Socials) */}
      <div className="fixed bottom-0 left-[40px] z-10 hidden lg:flex flex-col items-center opacity-0 animate-[fadeInSides_1s_ease_1s_forwards]">
        <div className="flex flex-col gap-5">
          <a href="https://github.com/dineshsivan347" target="_blank" rel="noreferrer" className="group relative text-slate-300 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
            <FaGithub size={20} />
            <span className="absolute left-[45px] top-1/2 -translate-y-1/2 translate-x-[10px] bg-slate-800/95 text-blue-500 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-mono border border-blue-500/20 pointer-events-none">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/dinesh-s-58a892331/" target="_blank" rel="noreferrer" className="group relative text-slate-300 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
            <FaLinkedin size={20} />
            <span className="absolute left-[45px] top-1/2 -translate-y-1/2 translate-x-[10px] bg-slate-800/95 text-blue-500 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-mono border border-blue-500/20 pointer-events-none">LinkedIn</span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ceitdinesh27@gmail.com" target="_blank" rel="noreferrer" className="group relative text-slate-300 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
            <FaEnvelope size={20} />
            <span className="absolute left-[45px] top-1/2 -translate-y-1/2 translate-x-[10px] bg-slate-800/95 text-blue-500 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-mono border border-blue-500/20 pointer-events-none">Gmail</span>
          </a>
        </div>
        <div className="w-[1px] h-[100px] bg-blue-500 mt-5 opacity-50"></div>
      </div>

      {/* Right Sidebar (Navigation) */}
      <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 lg:right-[40px] z-[100] hidden sm:flex flex-col items-center gap-5 opacity-0 animate-[fadeInSides_1s_ease_1s_forwards]">
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'experience', label: 'Experience' },
          { id: 'projects', label: 'Projects' },
          { id: 'certifications', label: 'Awards' },
          { id: 'contact', label: 'Contact' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 relative group
              ${activeSection === item.id ? 'bg-blue-500 scale-125 opacity-100' : 'bg-slate-300 opacity-50 hover:bg-blue-500 hover:scale-125 hover:opacity-100'}`}
          >
            <span className="absolute right-[25px] top-1/2 -translate-y-1/2 translate-x-[10px] bg-[#0a1120]/90 px-2 py-1 rounded text-xs text-blue-500 font-mono opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
        <div className="w-[1px] h-[100px] bg-blue-500 mt-5 opacity-50 hidden lg:block"></div>
      </div>
      
      {/* Required for initial animation keyframes inline or in tailwind.config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInSides {
          to { opacity: 1; }
        }
      `}} />
    </>
  );
};

export default Navbar;
