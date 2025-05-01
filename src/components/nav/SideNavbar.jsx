import React, { useState } from 'react';
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaBars,
} from 'react-icons/fa';

const navItems = [
  { label: 'Home', icon: <FaHome />, href: '#home' },
  { label: 'Projects', icon: <FaProjectDiagram />, href: '#projects' },
  { label: 'About', icon: <FaUser />, href: '#about' },
  { label: 'Experience', icon: <FaBriefcase />, href: '#experience' },
  { label: 'Education', icon: <FaGraduationCap />, href: '#education' },
  { label: 'Certifications', icon: <FaCertificate />, href: '#certifications' },
  { label: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setCollapsed(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <>
      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-2xl bg-white/10 border border-white/20 rounded-lg p-2 backdrop-blur-md"
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-40 h-full transition-all duration-300
        bg-white/7 backdrop-blur-sm shadow-lg border-r border-white/10
        ${mobileMenuOpen ? 'w-48' : collapsed ? 'w-16' : 'w-48'} 
        ${!mobileMenuOpen && 'hidden md:block'}`}
      >
        
        {/* Collapse Button (desktop only) */}
        {!mobileMenuOpen && (
          <div className="flex justify-end px-2 pb-2 pt-5">
            <button
              onClick={toggleSidebar}
              className="text-white hover:scale-110 transition-transform"
            >
              {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          </div>
        )}
        {/* Logo */}
        <div className="flex justify-center py-6">
          <a
            href="#home"
            className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
            title="Home"
          >
            <img
              src="/assets/logo.svg" // replace with your actual logo
              alt="Logo"
              className={`transition-all duration-300 ${collapsed ? 'w-8 h-8' : 'w-12 h-12'}`}
            />
          </a>
        </div>

        {/* Navigation Items */}
        <ul className="flex flex-col items-center mt-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={index} className="w-full group">
              <a
                href={item.href}
                className={`flex items-center w-full px-4 py-2 text-white hover:text-teal-300 group-hover:bg-white/10 transition-all duration-200 
                  ${collapsed || mobileMenuOpen ? 'justify-center' : 'justify-start gap-4'}`}
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && !mobileMenuOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;
