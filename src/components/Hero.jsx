import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative py-24 overflow-hidden">
      <div className="absolute top-[20%] left-[5%] text-[8rem] md:text-[15rem] font-montserrat font-black text-white/[0.02] uppercase select-none -z-10 pointer-events-none hidden md:block">
        Dinesh
      </div>
      
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12">
          
          {/* Text Content */}
          <div className="flex flex-col order-2 lg:order-1 items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.5, 0, 0, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-4"
            >
              Hi, I'm
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.5, 0, 0, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6 text-[#ccd6f6]"
            >
              Dinesh S.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.5, 0, 0, 1] }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-300 max-w-[600px] mb-8"
            >
              Motivated Information Technology student and AI Developer Intern at Tekzow with a strong foundation in Web Development and AI-driven application development. Passionate
              about building real-world applications and continuously learning modern technologies to
              contribute effectively in a professional environment.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.5, 0, 0, 1] }}
              viewport={{ once: true }}
            >
              <a href="#about" className="ai-button inline-block">
                More About Me
              </a>
            </motion.div>
          </div>

          {/* Profile Image Group */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.5, 0, 0, 1] }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center w-full min-h-[300px]"
          >
            <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] mx-auto group">
              <img
                src="/IMG_1874.jpg"
                alt="Dinesh S"
                className="w-full h-full object-cover rounded-xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300'; }}
              />
              <div className="absolute top-5 left-5 w-full h-full border-2 border-blue-500 rounded-xl z-0 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
