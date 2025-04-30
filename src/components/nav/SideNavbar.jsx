import React, { useState } from 'react';
import { FaHome, FaProjectDiagram, FaUser, FaBriefcase, FaGraduationCap, FaCertificate, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const navItems = [
  { label: 'Home', icon: <FaHome />, href: '#home' },
  { label: 'About', icon: <FaUser />, href: '#about' },
  { label: 'Projects', icon: <FaProjectDiagram />, href: '#projects' },
  { label: 'Experience', icon: <FaBriefcase />, href: '#experience' },
  { label: 'Education', icon: <FaGraduationCap />, href: '#education' },
  { label: 'Certifications', icon: <FaCertificate />, href: '#certifications' },
  { label: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`fixed top-0 left-0 h-full z-50 bg-white/10 backdrop-blur-lg shadow-lg border-r border-white/10 transition-all duration-300 ${collapsed ? 'w-16' : 'w-48'}`}>
      <div className="flex flex-col h-full justify-between">
        <ul className="mt-10 space-y-4">
          {navItems.map((item, index) => (
            <li key={index} className="group">
              <a
                href={item.href}
                className="flex items-center gap-4 text-white hover:text-teal-300 px-4 py-2 transition-all duration-200 group-hover:bg-white/10"
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-6 mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-white text-emerald-900 border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
