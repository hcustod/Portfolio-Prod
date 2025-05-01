import React from 'react';

const educations = [
  {
    school: "George Brown College",
    location: "Toronto, Ontario",
    degree: "Advanced Diploma in Computer Programming and Analysis",
    cgpa: "3.84/4.0",
    link: "https://www.georgebrown.ca/",
    date: "Sept 2023 – Apr 2026",
    coursework: [
      "Object-Oriented Programming",
      "Agile Software Development",
      "Data Structures and Algorithms",
      "Web Application Development",
      "Operating Systems"
    ]
  },
  {
    school: "The University of British Columbia",
    location: "Vancouver, British Columbia",
    degree: "Bachelor of Arts in Psychology",
    cgpa: "3.13/4.33",
    link: "https://www.ubc.ca/",
    date: "Sept 2016 – April 2021",
    coursework: [
      "Behavioral Neuroscience",
      "Research Methods",
      "Data Analysis in Psychology",
      "Evolutionary Psychology",
      "Cognitive Psychology"
    ]
  }
];

const Education = () => {
  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>

      <section id="education" className="w-full py-24 px-8 md:px-16 flex flex-col items-center text-center relative bg-transparent">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-100 mb-20 pb-5 z-10 relative">
          Education
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl backdrop-blur-sm">
          {educations.map((edu, index) => (
            <div key={index} className="bg-white/7 border border-white/10 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-500 text-left fade-in-up">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white hover:underline">
                  <a href={edu.link} target="_blank" rel="noopener noreferrer">
                    {edu.school}
                  </a>
                </h3>
                <p className="text-blue-300 text-sm">{edu.location}</p>
              </div>

              <p className="text-blue-200 mb-4 text-sm">
                <b>Degree:</b> {edu.degree}<br/>
                <b>CGPA:</b> {edu.cgpa}
              </p>

              <div className="text-blue-200 text-sm mb-4">
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  {edu.coursework.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-xs text-blue-400">
                {edu.date}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
