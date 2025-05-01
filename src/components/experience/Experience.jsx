import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <>
      <style>
        {`
          .fade-slide-up {
            animation: fadeSlideUp 1s ease-out forwards;
            animation-delay: 0.2s;
          }
        `}
      </style>

      <section id="experience" className="w-full min-h-screen py-24 px-8 md:px-16 flex flex-col items-center text-center relative">
        <h2 className="text-4xl font-bold text-slate-100 mb-20 pb-5 z-10 relative">
          Experience
        </h2>

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-[75%] w-1 mt-35 bg-white/20"></div>

        <div className="flex flex-col gap-20 relative w-full max-w-6xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} group fade-slide-up`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-emerald-400 rounded-full shadow-lg group-hover:scale-125 transition-transform"></div>

              <div style={{ transform: 'translateZ(0)' }} className={`w-full sm:w-[45%] bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] transition-all duration-500 text-left ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {exp.company}
                      </a>
                    </h3>
                    <p className="text-blue-300 text-sm">{exp.role}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-blue-200 text-sm space-y-1 pl-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <p className="text-xs text-blue-400 mt-4">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
