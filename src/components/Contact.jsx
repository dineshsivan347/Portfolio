import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center relative py-24 pb-12 overflow-hidden">
      <div className="absolute top-[20%] left-[20%] text-[8rem] md:text-[15rem] font-montserrat font-black text-white/[0.02] uppercase select-none -z-10 pointer-events-none hidden md:block">
        Hello
      </div>
      
      <div className="max-w-2xl mx-auto px-8 w-full text-center flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          viewport={{ once: true }}
        >
          <div className="text-blue-500 font-mono mb-4">05. What's Next?</div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-100 mb-6">Get In Touch</h2>
          
          <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            I'm currently accessible at Tirupur, Tamil Nadu, India. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-12 text-slate-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" /> 
              <span>+91-8870846466</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" /> 
              <span>ceitdinesh27@gmail.com</span>
            </div>
          </div>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ceitdinesh27@gmail.com" target="_blank" rel="noreferrer" className="ai-button">
            Say Hello
          </a>

          {/* Mobile Socials */}
          <div className="flex lg:hidden justify-center gap-6 mt-16 text-slate-400">
            <a href="https://github.com/dineshsivan347" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:-translate-y-1 transition-all"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/dinesh-s-58a892331/" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:-translate-y-1 transition-all"><FaLinkedin size={24} /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ceitdinesh27@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:-translate-y-1 transition-all"><FaEnvelope size={24} /></a>
          </div>
        </motion.div>
      </div>

      <div className="mt-auto pt-16 font-mono text-sm text-slate-300 text-center hover:text-blue-400 transition-colors duration-300 tracking-wide font-medium mt-8">
        Designed & Built by Dinesh S
      </div>
    </section>
  );
};

export default Contact;
