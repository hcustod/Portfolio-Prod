import React from 'react';

const Skills = ({ skillImages }) => {
  const categories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', src: skillImages.java },
        { name: 'C#', src: skillImages.csharp },
        { name: 'JavaScript', src: skillImages.javascript },
        { name: 'Python', src: skillImages.python },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', src: skillImages.react },
        { name: 'Astro', src: skillImages.astro },
        { name: 'Tailwind', src: skillImages.tailwind },
        { name: 'Redux', src: skillImages.redux },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: '.NET Core', src: skillImages.aspnet },
        { name: 'Node.js', src: skillImages.node },
        { name: 'Flask', src: skillImages.flask },
        { name: 'Laravel', src: skillImages.laravel },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', src: skillImages.aws },
        { name: 'GCP', src: skillImages.gcp },
        { name: 'Docker', src: skillImages.docker },
        { name: 'Terraform', src: skillImages.terraform },
      ],
    },
    {
      title: 'Databases & Systems',
      skills: [
        { name: 'Postgres', src: skillImages.postgresql },
        { name: 'Oracle', src: skillImages.oracle },
        { name: 'DBeaver', src: skillImages.dbeaver },
        { name: 'Linux', src: skillImages.linux },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', src: skillImages.git },
        { name: 'Github Actions', src: skillImages.githubactions },
        { name: 'Scripting', src: skillImages.shell },
        { name: 'Jira', src: skillImages.jira },
      ],
    },
  ];

  
  return (
    <section id="skills" className="w-full px-8 py-24 md:px-16 flex flex-col items-center text-center relative">
      <h2 className="text-5xl font-bold text-slate-100 mb-4 z-10 relative">
        Skills
      </h2>
      <div className="w-30 h-1 bg-teal-400 rounded-full mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {categories.map((category, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] hover:scale-[1.01] transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center p-4 bg-white/10 rounded-xl transition-transform duration-300 transform shadow-inner"
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
