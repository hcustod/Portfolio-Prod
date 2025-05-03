import React from 'react';

const Skills = ({ skillImages }) => {
  const categories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', src: skillImages.javascript },
        { name: 'Python', src: skillImages.python },
        { name: 'PHP', src: skillImages.php },
        { name: 'Java', src: skillImages.java },
      ],
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'React', src: skillImages.react },
        { name: 'Laravel', src: skillImages.laravel },
        { name: 'Tailwind', src: skillImages.tailwind },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', src: skillImages.aws },
        { name: 'GCP', src: skillImages.gcp },
        { name: 'Docker', src: skillImages.docker },
        { name: 'Linux', src: skillImages.linux },
        { name: 'PostgreSQL', src: skillImages.postgresql },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full px-8 py-24 md:px-16 flex flex-col items-center text-center relative">
      <h2 className="text-4xl font-bold text-slate-100 mb-20 pb-5 z-10 relative">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {categories.map((category, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center p-4 bg-white/10 rounded-xl transition-transform duration-300 transform hover:scale-110 shadow-inner hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <span className="text-blue-200 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
