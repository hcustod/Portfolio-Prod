import React from 'react';
import useInViewAnimation from '../../hooks/useInViewAnimation';

const About = () => {
  const [ref, inView] = useInViewAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-transparent flex flex-col py-16 sm:py-20 md:py-24 px-4 sm:px-6 items-center"
    >
      <h2 className="text-5xl font-bold text-slate-100 mb-4 text-center">
        About Me
      </h2>
      <div className="w-30 h-1 bg-teal-400 rounded-full mb-12"></div>

      <div
        style={{
          transitionDelay: inView ? '150ms' : '0ms',
        }}
        className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } w-full max-w-md sm:max-w-2xl md:max-w-3xl bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_35px_rgba(0,255,255,0.25)] hover:scale-[1.01] text-left`}
      >
        <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-justify">
          I’m a Cloud Engineer and Full-Stack Developer with a strong foundation in Linux systems, cloud-native infrastructure, and modern software engineering. I’ve worked on IT consulting projects involving cloud migrations, automation, infrastructure as code, and application deployment pipelines.
        </p>

        <div className="text-blue-300 text-sm sm:text-base space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <p><strong>Languages:</strong> JavaScript, Python, Java, C#, Bash</p>
          <p><strong>Cloud & Infrastructure:</strong> AWS, GCP, Docker, Kubernetes, Terraform</p>
          <p><strong>Frameworks & Tools:</strong> React, Laravel, ASP.NET Core, Node.js, Flask</p>
          <p><strong>Databases & Systems:</strong> PostgreSQL, Oracle, Linux (RHEL, Alpine)</p>
          <p><strong>DevOps & Collaboration:</strong> Git/GitHub, CI/CD, Jira, Shell Scripting</p>
        </div>

        <p className="text-blue-200 text-base sm:text-lg leading-relaxed text-justify">
          <strong>Goal:</strong> To contribute to forward-thinking engineering teams by building scalable systems, improving deployment workflows, and supporting reliable cloud infrastructure.
        </p>
      </div>
    </section>
  );
};

export default About;
