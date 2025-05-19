import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typed from 'typed.js';
import useInViewAnimation from '../../hooks/useInViewAnimation';

const HomeSection = () => {
  const typedRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ref, inView] = useInViewAnimation(0.2);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Cloud Engineer", "Developer", "Researcher", "System Architect"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      startDelay: 500,
      smartBackspace: true,
      showCursor: true,
    });
    return () => typed.destroy();
  }, []);

  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
    setDropdownOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Henrique-Custodio-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDropdownOpen(false);
  };

  return (
    <section
      id="home"
      ref={ref}
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-20 text-left relative"
    >
      <div
        style={{ transitionDelay: inView ? '150ms' : '0ms' }}
        className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        } lg:max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-3xl p-12 md:p-10 sm:p-6 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.25)] hover:scale-[1.01] border border-white/10`}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-5 leading-tight">
          I'm{' '}
          <span className="border-2 border-teal-400 px-5 py-2 rounded-md uppercase font-bold inline-block">
            Henrique Custodio
          </span>
        </h1>

        <h2 className="text-3xl sm:text-5xl md:text-4xl font-semibold text-blue-200 mt-6">
          a{' '}
          <span className="border-2 border-white px-4 py-2 rounded-md uppercase font-bold inline-block text-2xl md:text-3xl sm:text-4xl">
            <span ref={typedRef}></span>
          </span>
        </h2>

        <p className="mt-8 text-lg text-blue-300 leading-relaxed">
          with a passion for building clean, scalable, and sustainable cloud infrastructure.
        </p>

        <div className="flex gap-5 mt-10">
          <a href="https://www.linkedin.com/in/hcustod/" target="_blank" className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-teal-300 hover:scale-110 hover:shadow-md">
            <FaLinkedin size={36} />
          </a>
          <a href="https://github.com/hcustod" target="_blank" className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-teal-300 hover:scale-110 hover:shadow-md">
            <FaGithub size={36} />
          </a>
        </div>

        <div className="relative flex flex-wrap gap-5 mt-10">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(prev => !prev)}
              className="border-2 border-white text-emerald-900 bg-white px-6 py-3 text-base rounded-full font-bold uppercase transition-all duration-300 hover:text-teal-300 hover:bg-transparent hover:scale-105"
            >
              Resume
            </button>
            {dropdownOpen && (
              <div className="absolute mt-3 left-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 w-56 shadow-lg z-50">
                <button
                  onClick={handleViewResume}
                  className="block w-full text-left px-4 py-2 bg-white text-emerald-900 hover:text-teal-300 hover:bg-transparent rounded-md"
                >
                  View Resume
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="block w-full text-left px-4 py-2 bg-white text-emerald-900 hover:text-teal-300 hover:bg-transparent rounded-md mt-2"
                >
                  Download PDF
                </button>
              </div>
            )}
          </div>

          <a href="#contact" className="border-2 border-white text-emerald-900 bg-white px-6 py-3 text-base rounded-full font-bold uppercase transition-all duration-300 hover:text-teal-300 hover:bg-transparent hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
