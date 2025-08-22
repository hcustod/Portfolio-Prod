import React, { useMemo, useState } from "react";
import { FaGithub, FaGlobe, FaDocker } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const ProjectCard = ({ p, index, inView }) => {
  const hasDocker = p.docker && p.docker !== "#";
  const imageLink = p.demo && p.category === "Web" ? p.demo : p.code;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] text-left flex flex-col overflow-hidden"
    >
      <a href={imageLink} target="_blank" rel="noreferrer">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-48 object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </a>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-white">{p.title}</h3>
        <p className="text-blue-100 text-sm line-clamp-2">{p.description}</p>

        <div className="flex flex-wrap gap-2">
          {p.demo && p.category === "Web" && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-white border border-white/0 text-emerald-900 rounded-full hover:bg-transparent hover:text-teal-300 hover:border-white/40 transition"
            >
              <FaGlobe /> Live
            </a>
          )}
          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-white text-emerald-900 rounded-full hover:bg-teal-300 hover:text-white transition"
          >
            <FaGithub /> Code
          </a>
          {hasDocker && (
            <a
              href={p.docker}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 bg-white text-emerald-900 rounded-full hover:bg-teal-300 hover:text-white transition"
            >
              <FaDocker /> Docker
            </a>
          )}
        </div>

        <div className="border-t border-white/10 pt-3">
          <p className="text-sm text-blue-300 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="bg-white/10 text-white text-xs px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ images }) => {
  const img = images || {};
  const [ref, inView] = useInViewAnimation(0.3);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const allProjects = [
    {
      title: "Voting Web App",
      category: "Web",
      description: "A PHP topic creation and voting platform with CRUD functionality, and basic user profiles",
      tech: ["PHP", "MySQL", "Docker"],
      image: img.voting,
      demo: "http://voting.hcustodio.com/",
      code: "https://github.com/hcustod/topic-voting-php-webapp",
      docker: "https://hub.docker.com/r/hcustodio/voting-app",
      year: 2025,
    },
    {
      title: "Project Management System",
      category: "Web",
      description: "ASP.NET Core MVC app to manage projects/tasks with users/roles.",
      tech: ["C#", ".NET", "MVC", "PostgreSQL"],
      image: img.management,
      code: "https://github.com/hcustod/project-management-system",
      docker: "https://hub.docker.com/repository/docker/hcustodio/project-management-system/general",
      year: 2025,
    },
    {
      title: "Inventory Management System",
      category: "Web",
      description: "ASP.NET Core MVC app for inventory, products, stock and orders.",
      tech: ["C#", ".NET", "MVC", "PostgreSQL"],
      image: img.inventory,
      code: "https://github.com/hcustod/inventory-management-system",
      docker: "https://hub.docker.com/repository/docker/hcustodio/inventory-management-system/general",
      year: 2025,
    },
    {
      title: "Gomoku Java Console Game",
      category: "Games",
      description: "Turn-based Gomoku with Minimax AI.",
      tech: ["Java", "Console", "Minimax"],
      image: img.gomoku,
      code: "https://github.com/hcustod/gomoku-minimax-ai-console",
      docker: "",
      year: 2025,
    },
    {
      title: "ASCII Roguelike",
      category: "Games",
      description: "Python roguelike using Libtcod, ASCII in terminal.",
      tech: ["Python", "ASCII", "Console"],
      image: img.ascii,
      code: "https://github.com/hcustod/ascii-rogue-libtcod-console",
      docker: "",
      year: 2024,
    },
    {
      title: "MUD Roguelike",
      category: "Games",
      description: "Python text MUD with party generation, items, combat.",
      tech: ["Python", "Console", "Networking"],
      image: img.mud,
      code: "https://github.com/hcustod/mud-roguelike-python-console",
      docker: "",
      year: 2024,
    },
    {
      title: "Flight Reservation System",
      category: "Console Apps",
      description: "C# console app to create/search/reserve bookings.",
      tech: ["C#", "Console"],
      image: img.flight,
      code: "https://github.com/hcustod/flight-res-sys-console",
      docker: "https://hub.docker.com/repository/docker/hcustodio/flight-res-sys-console/general",
      year: 2024,
    },
    {
      title: "Simple Chat Server",
      category: "Console Apps",
      description: "C++ chat server/client with sockets and multithreading.",
      tech: ["C++", "Console", "Networking"],
      image: img.chat,
      code: "https://github.com/hcustod/simple-chat-cpp",
      docker: "",
      year: 2025,
    },
  ];

  // derive categories
  const categories = useMemo(() => {
    const set = new Set(allProjects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [allProjects]);

  // filter by category + search
  const filtered = useMemo(() => {
    const byCat =
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === selectedCategory);

    const q = query.trim().toLowerCase();
    if (!q) return byCat;

    return byCat.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q)
    );
  }, [allProjects, selectedCategory, query]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="projects" ref={ref} className="w-full py-20 px-6 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-slate-100 mb-4">Projects</h2>
      <div className="w-24 h-1 bg-teal-400 rounded-full mb-8" />

      {/* Search */}
      <div className="w-full flex justify-center mb-4">
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setVisibleCount(6); }}
          placeholder="Search projects or tech (e.g., C#, sockets)…"
          className="w-full max-w-md px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-sm text-white outline-none focus:border-teal-300 text-center"
          aria-label="Search projects"
        />
      </div>

      {/* Categories */}
      <div className="w-full flex justify-center mb-8">
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setVisibleCount(6); }}
              className={`px-3 py-1.5 rounded-full border-2 text-xs uppercase transition ${
                selectedCategory === cat
                  ? "text-teal-300 border-teal-300"
                  : "text-white border-white/30 hover:text-teal-300 hover:border-teal-300"
              }`}
              role="tab"
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        >
          {visible.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} inView={inView} />
          ))}
        </motion.div>
      </AnimatePresence>

      {visible.length < filtered.length && (
        <button
          onClick={() => setVisibleCount((c) => c + 6)}
          className="mt-10 px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold uppercase text-sm hover:text-teal-300 hover:border-teal-300 transition"
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default Projects;
