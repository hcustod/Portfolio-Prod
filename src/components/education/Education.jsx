import React from 'react';
import useInViewAnimation from '../../hooks/useInViewAnimation';

const educations = [
  {
    school: "George Brown College",
    location: "Toronto, Ontario",
    degree: "Advanced Diploma in Computer Programming and Analysis",
    cgpa: "3.84 / 4.0",
    link: "https://www.georgebrown.ca/",
    date: "Sept 2023 – Apr 2026",
    coursework: [
      "Object-Oriented Programming: Java and C# with focus on encapsulation, inheritance, and abstraction.",
      "Agile Software Development: SCRUM practices using Git and Jira in collaborative team environments.",
      "Data Structures and Algorithms: recursion, sorting, and graph traversal with performance analysis.",
      "Web Application Development: built full-stack apps using React, Node.js, Express, and SQL databases.",
      "Operating Systems: shell scripting, process management, and Linux file system navigation."
    ]
  },
  {
    school: "The University of British Columbia",
    location: "Vancouver, British Columbia",
    degree: "Bachelor of Arts in Psychology",
    cgpa: "3.13 / 4.33",
    link: "https://www.ubc.ca/",
    date: "Sept 2016 – Apr 2021",
    coursework: [
      "Cognitive Psychology: studied attention, memory, and problem-solving processes.",
      "Behavioral Neuroscience: examined the biological basis of behavior and brain function.",
      "Research Methods: designed experiments, applied ethical protocols, and collected behavioral data.",
      "Data Analysis: conducted statistical tests using SPSS and R for quantitative research.",
      "Scientific Communication: authored academic papers and delivered research findings effectively."
    ]
  }
];

const Education = () => {
  const [ref, inView] = useInViewAnimation(0.2);

  return (
    <section
      id="education"
      ref={ref}
      className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-16 flex flex-col items-center text-center relative bg-transparent"
    >
      <h2 className="text-5xl font-bold text-slate-100 mb-4 z-10 relative">
        Education
      </h2>
      <div className="w-30 h-1 bg-teal-400 rounded-full mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {educations.map((edu, index) => (
          <div
            key={index}
            style={{
              transitionDelay: inView ? `${index * 150}ms` : '0ms',
            }}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:scale-[1.01] text-left`}
          >
            <header className="mb-4">
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-2xl sm:text-3xl font-bold text-white hover:underline">
                  {edu.school}
                </h3>
              </a>
              <p className="text-blue-300 text-sm sm:text-base">{edu.location}</p>
            </header>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-2">
              <span className="font-semibold text-white">Degree:</span> {edu.degree}
            </p>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
              <span className="font-semibold text-white">CGPA:</span> {edu.cgpa}
            </p>

            <div className="text-blue-100 text-sm sm:text-base">
              <p className="font-semibold text-white mb-2">Relevant Coursework:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                {edu.coursework.map((course, idx) => {
                  const [title, desc] = course.includes(": ")
                    ? course.split(": ")
                    : [course, ''];
                  return (
                    <li
                      key={idx}
                      className="hover:text-white transition duration-200"
                    >
                      <span className="font-semibold text-white">{title}</span>
                      {desc ? `: ${desc}` : ''}
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="text-blue-400 text-xs mt-6">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
