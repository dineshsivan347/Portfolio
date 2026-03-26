import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaBed, FaPencilAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Institution Guesthouse Booking Portal",
      featured: "Featured Project",
      description: "Built a web-based system for institutional guest room booking and food ordering. Implemented backend logic using PHP and MySQL. Enabled web-based approval workflows for HOD users, resulting in 89% efficiency improvement.",
      techs: ["PHP", "MySQL", "Tailwind CSS"],
      link: "http://gbsystem2327.free.nf",
      icon: <FaBed size={60} />,
      bgGradient: "from-blue-900 to-blue-700"
    },
    {
      title: "Image to Sketch Converter",
      featured: "GitHub Repository",
      description: "Built a Python-based tool that converts real images into sketch-style illustrations using OpenCV and NumPy for efficient pixel transformations. Packaged into a user-friendly script for easy input/output.",
      techs: ["Python", "OpenCV", "NumPy"],
      github: "https://github.com/dineshsivan347/IMAGETOSKETCH",
      icon: <FaPencilAlt size={60} />,
      bgGradient: "from-gray-700 to-gray-800",
      inverse: true
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center relative py-24 overflow-hidden">
      <div className="absolute top-[20%] left-[10%] text-[8rem] md:text-[15rem] font-montserrat font-black text-white/[0.02] uppercase select-none -z-10 pointer-events-none hidden md:block">
        Build
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
            <span className="text-blue-500 font-mono mr-3 text-2xl">03.</span>
            Projects
          </div>
          <div className="h-[1px] bg-slate-400 opacity-30 flex-grow max-w-[300px]"></div>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
              viewport={{ once: true }}
              className={`mb-24 grid grid-cols-1 gap-8 md:gap-12 relative items-center ${project.inverse ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr]'}`}
            >
              
              {/* Image / Window Side */}
              <div className={`w-full z-10 group relative perspective-1000 ${project.inverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="bg-[#1e293b]/80 rounded-lg overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_30px_50px_rgba(0,0,0,0.5)] border border-white/5 backdrop-blur-sm">
                  {/* Taskbar */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="bg-black/20 text-slate-400 font-mono text-xs px-3 py-1 rounded w-full line-clamp-1">{project.title}</div>
                  </div>
                  {/* Content Mockup */}
                  <div className={`h-[250px] md:h-[350px] bg-gradient-to-tr ${project.bgGradient} flex items-center justify-center text-white/80 transition-all duration-500 group-hover:scale-105 group-hover:text-white`}>
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className={`w-full z-20 flex flex-col justify-center ${project.inverse ? 'lg:order-1 lg:items-start text-left' : 'lg:order-2 lg:items-end lg:text-right'}`}>
                <div className="text-blue-500 font-mono text-sm mb-2">{project.featured}</div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-slate-100 mb-6">{project.title}</h3>
                
                <div className="bg-[#112240]/95 backdrop-blur-md p-6 rounded-lg text-slate-300 shadow-xl border border-white/5 mb-6">
                  {project.description}
                </div>

                <ul className="flex flex-wrap gap-4 font-mono text-sm text-slate-400 mb-6">
                  {project.techs.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-500 transition-colors">
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-500 transition-colors">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
