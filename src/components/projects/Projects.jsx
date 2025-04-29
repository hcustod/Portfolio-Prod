import React from 'react';

const projects = [
  {
    title: 'Smart Inventory System',
    description: 'A full-stack web application to manage product inventory, orders, and analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    image: '/assets/projects/inventory.png',
    link: 'https://github.com/hcustod/smart-inventory',
  },
  {
    title: 'Voting Web App',
    description: 'A dynamic voting platform allowing users to create polls and cast votes securely.',
    tech: ['PHP', 'MySQL', 'Laravel', 'Docker'],
    image: '/assets/projects/votingapp.png',
    link: 'https://github.com/hcustod/voting-web-app',
  },
  {
    title: 'Cloud Deployment Scripts',
    description: 'Automation scripts for deploying scalable infrastructure on AWS and GCP.',
    tech: ['Terraform', 'AWS', 'GCP', 'Linux'],
    image: '/assets/projects/cloudscripts.png',
    link: 'https://github.com/hcustod/cloud-deployments',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio you are viewing! Built with React and hosted on cloud.',
    tech: ['React', 'Vite', 'Netlify'],
    image: '/assets/projects/portfolio.png',
    link: 'https://github.com/hcustod/portfolio-site',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen px-8 md:px-16 py-24 bg-transparent flex flex-col items-center">
      <h2 className="text-4xl font-bold text-slate-100 mb-12 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,255,255,0.15)] flex flex-col hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-blue-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-center border-2 border-white text-emerald-900 bg-white px-5 py-2 rounded-full font-bold uppercase transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
