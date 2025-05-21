import React, { useState } from 'react';
import { FaGithub, FaGlobe, FaDocker } from 'react-icons/fa';
import useInViewAnimation from '../../hooks/useInViewAnimation';
import { AnimatePresence, motion } from 'framer-motion';


const allProjects = [
  {
    title: 'Voting Web App',
    category: 'Web',
    description: 'A PHP/Laravel-based voting platform with CRUD functionality.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Docker'],
    image: '/assets/projects/votingapp.png',
    demo: '#',
    code: 'https://github.com/hcustod/topic-voting-php-webapp',
    docker: 'https://hub.docker.com/r/hcustodio/voting-app',
  },
  {
    title: 'Project Management System',
    category: 'Web',
    description: 'A C# ASP.NET Core MVC web app to manage tasks, roles, and users.',
    tech: ['C#', '.NET', 'MVC', 'PostgreSQL'],
    image: '/assets/projects/projectmgmt.png',
    demo: '#',
    code: 'https://github.com/hcustod/project-management-system',
    docker: '#',
  },
  {
    title: 'Inventory Management System',
    category: 'Web',
    description: 'A C# ASP.NET Core MVC web system to manage product stock and orders.',
    tech: ['C#', '.NET', 'MVC', 'PostgreSQL'],
    image: '/assets/projects/inventorymgmt.png',
    demo: '#',
    code: 'https://github.com/hcustod/inventory-management-system',
    docker: '#',
  },
  {
    title: 'Gomoku Java Console Game',
    category: 'Games',
    description: 'A turn-based Gomoku game built with Java and Minimax AI.',
    tech: ['Java', 'Console', 'Minimax'],
    image: '/assets/projects/gomoku.png',
    code: 'https://github.com/hcustod/gomoku-minimax-ai-console',
    docker: '#',
  },
  {
    title: 'ASCII Roguelike',
    category: 'Games',
    description: 'A turn-based Python roguelike rendered using ASCII in terminal.',
    tech: ['Python', 'ASCII', 'Console'],
    image: '/assets/projects/asciirogue.png',
    code: 'https://github.com/hcustod/ascii-roguelike',
    docker: '#',
  },
  {
    title: 'MUD Roguelike',
    category: 'Games',
    description: 'A multiplayer Python-based MUD roguelike with room generation.',
    tech: ['Python', 'Console', 'Networking'],
    image: '/assets/projects/mudrogue.png',
    code: 'https://github.com/hcustod/mud-roguelike-python-console',
    docker: '#',
  },
  {
    title: 'Flight Reservation System',
    category: 'Console Apps',
    description: 'A C# console-based app to search and reserve flight seats.',
    tech: ['C#', 'Console'],
    image: '/assets/projects/flights.png',
    code: 'https://github.com/hcustod/flight-res-sys-console',
    docker: '#',
  },
];

const categories = ['All', 'Web', 'Games', 'Console Apps'];

const Projects = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [ref, inView] = useInViewAnimation(0.3);

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold text-slate-100 mb-4 z-10 relative">Projects</h2>
      <div className="w-24 h-1 bg-teal-400 rounded-full mb-8"></div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setShowAll(false); setExpandedIndex(null); }}
            className={`px-5 py-2 rounded-full border-2 transition-all duration-300 font-semibold text-sm uppercase hover:text-teal-300 hover:border-teal-300 ${
              selectedCategory === cat
                ? 'text-teal-300 border-teal-300'
                : 'text-white border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + showAll}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
        >
          {visibleProjects.map((project, index) => {
            const imageLink = project.demo && project.category === 'Web' ? project.demo : project.code;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] text-left flex flex-col overflow-hidden transition-transform"
              >
                <a href={imageLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </a>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-blue-100 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-3">
                    {project.demo && project.category === 'Web' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Demo"
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-white border-2 border-white text-emerald-900 rounded-full hover:bg-transparent hover:text-teal-300 hover:scale-105 transition"
                      >
                        <FaGlobe /> Live
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-white text-emerald-900 rounded-full hover:bg-teal-300 hover:text-white hover:shadow-md hover:shadow-teal-400/40 transition"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.docker && (
                      <a
                        href={project.docker}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Docker Image"
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-white text-emerald-900 rounded-full hover:bg-teal-300 hover:text-white hover:shadow-md hover:shadow-teal-400/40 transition"
                      >
                        <FaDocker /> Docker
                      </a>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <p className="text-sm text-blue-300 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2 max-h-16 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-400">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-12 px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold uppercase text-sm hover:text-teal-300 hover:border-teal-300 transition-all duration-300"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
};

export default Projects;
