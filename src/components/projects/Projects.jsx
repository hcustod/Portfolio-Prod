import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import useInViewAnimation from '../../hooks/useInViewAnimation';

const projects = [
  {
    title: 'Smart Inventory System',
    description: 'A full-stack web app to manage product inventory, orders, and analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    image: '/assets/projects/inventory.png',
    demo: 'https://smart-inventory-demo.com',
    code: 'https://github.com/hcustod/smart-inventory',
  },
  {
    title: 'Voting Web App',
    description: 'A dynamic voting platform for poll creation and secure voting.',
    tech: ['PHP', 'MySQL', 'Laravel', 'Docker'],
    image: '/assets/projects/votingapp.png',
    demo: 'https://voting-app-demo.com',
    code: 'https://github.com/hcustod/voting-web-app',
  },
  {
    title: 'Cloud Deployment Scripts',
    description: 'Automation scripts for infrastructure deployment on AWS & GCP.',
    tech: ['Terraform', 'AWS', 'GCP', 'Linux'],
    image: '/assets/projects/cloudscripts.png',
    demo: 'https://cloud-deployments-demo.com',
    code: 'https://github.com/hcustod/cloud-deployments',
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio! Built with React, Tailwind, and deployed on cloud.',
    tech: ['React', 'Vite', 'Netlify'],
    image: '/assets/projects/portfolio.png',
    demo: 'https://hcustodio.com',
    code: 'https://github.com/hcustod/portfolio-site',
  },
];

const Projects = () => {
  const [ref, inView] = useInViewAnimation(0.3);

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold text-slate-100 mb-4 z-10 relative">
        Projects
      </h2>
      <div className="w-24 h-1 bg-teal-400 rounded-full mb-12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              transitionDelay: inView ? `${index * 150}ms` : '0ms',
            }}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] text-left flex flex-col`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-5"
            />
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-blue-100 text-base mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between gap-4 mt-auto">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center border-2 border-white text-emerald-900 bg-white px-4 py-2 rounded-full font-bold uppercase text-sm transition-all duration-300 hover:bg-transparent hover:text-teal-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaGlobe className="text-sm" /> Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 text-center border-2 border-white text-emerald-900 bg-white px-4 py-2 rounded-full font-bold uppercase text-sm transition-all duration-300 hover:bg-transparent hover:text-teal-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaGithub className="text-sm" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
