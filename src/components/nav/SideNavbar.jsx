import React, { useState } from 'react';

const SideNavbar = ({ logo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const navItems = [
    { label: 'Home', icon: <i className="fa-solid fa-house" />, href: '#home' },
    { label: 'Projects', icon: <i className="fa-solid fa-diagram-project" />, href: '#projects' },
    { label: 'About', icon: <i className="fa-solid fa-user-astronaut" />, href: '#about' },
    { label: 'Experience', icon: <i className="fa-solid fa-briefcase" />, href: '#experience' },
    { label: 'Education', icon: <i className="fa-solid fa-graduation-cap" />, href: '#education' },
    { label: 'Skills', icon: <i className="fa-solid fa-brain" />, href: '#skills' },
    { label: 'Certifications', icon: <i className="fa-solid fa-certificate" />, href: '#certifications' },
    { label: 'Contact', icon: <i className="fa-solid fa-envelope" />, href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-3xl bg-white/10 border border-white/20 rounded-lg p-3 backdrop-blur-md"
        onClick={toggleMobileMenu}
      >
        <i className="fa-solid fa-bars" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-16 bg-white/7 backdrop-blur-sm shadow-lg border-r border-white/10 
        overflow-visible transition-all duration-700 ease-in-out 
        ${!mobileMenuOpen && 'hidden md:block'}`}
      >
        {/* Logo */}
        <div className="flex justify-center py-6">
          <a href="#home" className="transition-transform duration-300 hover:scale-110">
            <img
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full shadow-md"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center mt-4 space-y-4 overflow-visible">
          {navItems.map((item, index) => (
            <li key={index} className="relative group w-full overflow-visible">
              <a
                href={item.href}
                className="flex items-center justify-center w-full py-3 px-4 text-white hover:text-teal-300 hover:bg-white/10 transition-all duration-300 relative z-10"
              >
                {/* Icon (larger size) */}
                <span className="text-2xl">{item.icon}</span>

                {/* Expanding Label */}
                <span
                  className="absolute left-full ml-2 whitespace-nowrap bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-md 
                  opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 
                  transition-all duration-300 origin-left z-20 backdrop-blur-md shadow-md"
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;
