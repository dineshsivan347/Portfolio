import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Tekzow",
      role: "AI Developer Intern",
      location: "Bangalore, India",
      current: true,
      responsibilities: [
        "Currently working as an AI Developer Intern, contributing to AI-driven application development and real-world software projects.",
        "Developing and integrating AI-based features into web applications using modern development tools and frameworks.",
        "Collaborating with the development team to design, implement, test, and improve production-ready solutions."
      ]
    },
    {
      company: "Sparkout Solutions",
      role: "Web Development Intern",
      responsibilities: [
         "Developed responsive web applications using HTML, CSS, JavaScript, and Node.js.",
         "Collaborated with team members to design, test, and deploy front-end and back-end solutions.",
         "Gained hands-on experience with real-world web development workflows."
      ]
    },
    {
      company: "THIRAN 360 AI",
      role: "Data Science Intern",
      responsibilities: [
        "Contributing to multiple data-driven projects under the guidance of the data science team.",
        "Gained 91% of experience working with real-world datasets with the Power BI and created many deep insightfull graphs with those datasets."
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center relative py-24 overflow-hidden">
      <div className="absolute top-[20%] left-[50%] text-[8rem] md:text-[15rem] font-montserrat font-black text-white/[0.02] uppercase select-none -z-10 pointer-events-none hidden md:block">
        Experience
      </div>
      
      <div className="max-w-6xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="font-montserrat text-3xl md:text-4xl font-bold whitespace-nowrap">
            <span className="text-blue-500 font-mono mr-3 text-2xl">02.</span>
            Experience
          </div>
          <div className="h-[1px] bg-slate-400 opacity-30 flex-grow max-w-[300px]"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.5, 0, 0, 1] }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 border-l-2 md:border-l-0 border-blue-500 pl-6 md:pl-0"
            >
              <div className="hidden md:block relative w-[2px] bg-slate-600 opacity-30 mt-2">
                <div className="absolute top-0 -left-[4px] w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-montserrat font-bold mb-1 text-slate-200">
                  {exp.company}
                  {exp.current && (
                    <span className="ml-3 inline-flex items-center text-xs font-mono font-normal bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full align-middle">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                      Present
                    </span>
                  )}
                </h3>
                <div className="flex items-center gap-2 text-blue-500 font-mono mb-4 text-sm">
                  <span>{exp.role}</span>
                  {exp.location && <span className="text-slate-500">| {exp.location}</span>}
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-slate-400 text-sm md:text-base relative pl-6">
                      <span className="absolute left-0 text-blue-500 font-mono">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
