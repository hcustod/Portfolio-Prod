import React from 'react';
import useInViewAnimation from '../../hooks/useInViewAnimation';

const Experience = ({ experiences }) => {
  const [ref, inView] = useInViewAnimation(0.2);

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-16 flex flex-col items-center text-center relative bg-transparent"
    >
      <h2 className="text-5xl font-bold text-slate-100 mb-4 z-10 relative">
        Experience
      </h2>
      <div className="w-30 h-1 bg-teal-400 rounded-full mb-12"></div>

      {/* Timeline vertical line - hidden on small screens */}
      <div className="hidden sm:block absolute top-20 left-1/2 transform -translate-x-1/2 h-[75%] w-1 mt-35 bg-white/20"></div>

      <div className="flex flex-col gap-16 sm:gap-20 relative w-full max-w-3xl sm:max-w-5xl md:max-w-6xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              transitionDelay: inView ? `${index * 150}ms` : '0ms',
            }}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } relative w-full flex ${
              index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
            } justify-center`}
          >
            {/* Dot on the timeline - hidden on small screens */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-emerald-300 rounded-full shadow-lg group-hover:scale-125 transition-transform"></div>

            <div
              className={`w-full sm:w-[45%] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:scale-[1.01] transition-all duration-500 text-left ${
                index % 2 === 0 ? 'sm:ml-8' : 'sm:mr-8'
              }`}
            >
              <header className="flex items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 object-contain rounded-full border border-white/20"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white hover:underline">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="text-blue-300 text-sm">{exp.role}</p>
                </div>
              </header>

              <ul className="list-disc list-inside pl-4 space-y-1 text-blue-100 text-sm sm:text-base">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="hover:text-white transition duration-200">
                    {point}
                  </li>
                ))}
              </ul>

              <p className="text-blue-400 text-xs mt-6">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
