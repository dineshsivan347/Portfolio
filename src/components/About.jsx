import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center relative py-24 overflow-hidden">
      <div className="absolute top-[20%] left-[5%] text-[8rem] md:text-[15rem] font-montserrat font-black text-white/[0.02] uppercase select-none -z-10 pointer-events-none hidden md:block">
        About
      </div>
      
      <div className="max-w-6xl mx-auto px-8 w-full">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="font-montserrat text-3xl md:text-4xl font-bold whitespace-nowrap">
            <span className="text-blue-500 font-mono mr-3 text-2xl">01.</span>
            About Me
          </div>
          <div className="h-[1px] bg-slate-400 opacity-30 flex-grow max-w-[300px]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
          {/* Bio & Skills (Left) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
            viewport={{ once: true }}
          >
            <div className="text-slate-300 mb-6 text-lg leading-relaxed">
              I am a Bachelor of Technology student in Information Technology at <strong>K.S.R. College of Engineering</strong> (2023 – Present).
              I previously completed my HSC at <strong>Maharishi Vidya Mandir</strong> with 78%.
            </div>

            <h4 className="mt-8 mb-4 text-[#f8fafc] text-xl font-bold font-montserrat">Skills</h4>
            
            <div className="mb-6">
              <div className="mb-2 text-slate-400 text-sm">Languages & Frameworks:</div>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript (React.js)', 'HTML/CSS', 'SQL (MySQL)'].map(skill => (
                  <span key={skill} className="bg-blue-500/5 border border-blue-500/20 text-blue-500 px-4 py-2 rounded font-mono text-sm hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 text-slate-400 text-sm">Tools & Soft Skills:</div>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'GitHub', 'Power BI', 'Team Leadership'].map(skill => (
                  <span key={skill} className="bg-blue-500/5 border border-blue-500/20 text-blue-500 px-4 py-2 rounded font-mono text-sm hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Gooey Animation blob (Right) */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.5, 0, 0, 1] }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center items-center relative w-full h-[400px]"
          >
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              </filter>
            </svg>
            <div className="relative w-[300px] h-[300px] transition-transform duration-300" style={{ filter: 'url("#goo")' }}>
              <div className="absolute bg-[#3b82f6] rounded-full opacity-70 w-[150px] h-[150px] top-0 left-[20%] animate-[moveBlob_8s_infinite_ease-in-out]"></div>
              <div className="absolute bg-[#60a5fa] rounded-full opacity-70 w-[120px] h-[120px] bottom-[10%] right-[20%] animate-[moveBlob_8s_infinite_ease-in-out] delay-[-2s]"></div>
              <div className="absolute bg-[#2563eb] rounded-full opacity-70 w-[100px] h-[100px] bottom-[30%] left-[30%] animate-[moveBlob_8s_infinite_ease-in-out] delay-[-4s]"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Keyframes for gooey blob */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes moveBlob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}} />
    </section>
  );
};

export default About;
