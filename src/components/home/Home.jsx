import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typed from 'typed.js';

const HomeSection = () => {
  const typedRef = useRef(null);

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

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center px-4 md:px-12 text-left relative"
    >
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-lg rounded-2xl p-12 shadow-[0_0_20px_rgba(0,255,255,0.15)] border border-white/10 animate-slideInFromLeft">
        <h1 className="text-5xl font-bold text-slate-100 mb-4 leading-tight">
          I'm{' '}
          <span className="border-2 border-white px-5 py-2 rounded-md uppercase font-bold inline-block">
            Henrique Custodio
          </span>
        </h1>

        <h2 className="text-3xl font-semibold text-blue-200 mt-6">
          a{' '}
          <span className="border-2 border-white px-4 py-2 rounded-md uppercase font-bold inline-block">
            <span ref={typedRef}></span>
          </span>
        </h2>

        <p className="mt-8 text-lg text-blue-300 leading-relaxed">
          with a passion for building clean, scalable, and sustainable cloud infrastructure.
        </p>

        <div className="flex gap-4 mt-10">
          <a href="https://www.linkedin.com/in/hcustod/" target="_blank" className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-110 hover:shadow-md">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/hcustod" target="_blank" className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-110 hover:shadow-md">
            <FaGithub size={28} />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#about" className="border-2 border-white text-emerald-900 bg-white px-6 py-3 rounded-full font-bold uppercase transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-105">
            Read More
          </a>
          <a href="#contact" className="border-2 border-white text-emerald-900 bg-white px-6 py-3 rounded-full font-bold uppercase transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes slideInFromLeft {
            0% { opacity: 0; transform: translateX(-80px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInFromLeft {
            animation: slideInFromLeft 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default HomeSection;
