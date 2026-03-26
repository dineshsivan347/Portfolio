import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      title: "Web Development Specialization",
      issuer: "Sparkout Solutions",
      desc: "Focused on HTML, CSS, JavaScript, and backend integration using Node.js."
    },
    {
      title: "2nd Prize Winner - NEXOVATE24",
      issuer: "Kongu Engineering College, 2024",
      desc: "Secured 2nd Prize in the NEXOVATE24 technical event, demonstrating innovation and problem-solving skills."
    }
  ];

  return (
    <section id="certifications" className="min-h-[70vh] flex items-center relative py-24 overflow-hidden">
      <div className="absolute top-[20%] left-[50%] text-[8rem] md:text-[15rem] font-montserrat font-black text-white/[0.02] uppercase select-none -z-10 pointer-events-none hidden md:block">
        Expert
      </div>
      
      <div className="max-w-6xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="font-montserrat text-3xl md:text-3xl font-bold whitespace-nowrap">
            <span className="text-blue-500 font-mono mr-3 text-2xl">04.</span>
            Certifications & Awards
          </div>
          <div className="h-[1px] bg-slate-400 opacity-30 flex-grow max-w-[200px]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.5, 0, 0, 1] }}
              viewport={{ once: true }}
              className="bg-[#1e293b]/50 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-blue-500 hover:-translate-y-2 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
              <div className="text-blue-500 font-mono text-sm mb-4">{cert.issuer}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
