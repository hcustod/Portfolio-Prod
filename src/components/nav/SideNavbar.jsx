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
        className="md:hidden fixed top-4 left-4 z-50 text-white text-3xl bg-white/10 border border-white/20 rounded-lg p-3 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
        onClick={toggleMobileMenu}
      >
        <i className="fa-solid fa-bars" />
      </button>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 text-white flex flex-col items-center justify-center space-y-8 text-2xl backdrop-blur-lg md:hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-teal-300 transition duration-300 hover:scale-110"
            onClick={toggleMobileMenu}
          >
            <i className="fa-solid fa-xmark drop-shadow-lg" />
          </button>

          {/* Logo */}
          <div className="flex justify-center items-center w-full">
            <img src={logo} alt="Logo" className="w-20 ml-2 shadow-lg" />
          </div>

          {/* Navigation Items */}
          <div className="w-full flex justify-center">
            <ul className="flex flex-col items-start space-y-4 mt-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="ml-16 flex items-center gap-4 text-white hover:text-teal-300 hover:bg-white/10 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:scale-105"
                  >
                    {/* Fixed-width icon for alignment */}
                    <span className="text-2xl w-8 flex justify-center">{item.icon}</span>
                    <span className="pl-2 text-2xl w-8 flex justify-center"> - </span>
                    {/* Consistently spaced label */}
                    <span className="text-xl font-semibold pl-4">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Sidebar (only visible on desktop and when mobile menu is not active) */}
      <div
        className={`${
          mobileMenuOpen ? 'hidden' : 'hidden md:flex'
        } fixed top-0 left-0 z-40 h-full w-16 bg-white/7 backdrop-blur-sm border-r border-white/10 
        flex-col items-center transition-all duration-700 ease-in-out shadow-[0_0_30px_rgba(0,255,255,0.15)]`}
      >

        {/* Logo */}
        <div className="flex justify-center py-6">
          <a href="#home" className="transition-transform duration-300 hover:scale-110 hover:opacity-100 hover:bg-white/10">
            <img
              src={logo}
              alt="Logo"
              width={60}
              height={20}
              className="shadow-md max-w-13"
            />
          </a>
        </div>

        <div className="w-12 h-0.5 bg-teal-400 rounded-full mb-2 hover:bg-teal-300 duration-300 "></div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center mt-4 space-y-4 overflow-visible">
          {navItems.map((item, index) => (
            <li key={index} className="relative group w-full overflow-visible">
              <a
                href={item.href}
                className="flex items-center justify-center w-full py-3 px-4 text-white hover:text-teal-300 hover:bg-transparent transition-all duration-300 relative z-10"
              >
                {/* Icon */}
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
