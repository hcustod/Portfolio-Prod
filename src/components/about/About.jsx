import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen px-8 md:px-16 py-24 bg-transparent flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold text-slate-100 mb-12">
        About Me
      </h2>

      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300">
        <p className="text-blue-200 text-lg leading-relaxed mb-8">
          I'm a Cloud Engineer and Developer with a strong background in Linux systems, cloud infrastructure, and software development. I’m currently pursuing my Computer Programming and Analysis diploma while delivering real-world IT consulting and cloud migration projects.
        </p>

        <div className="text-blue-300 text-sm text-left space-y-3 mb-8">
          <p><strong>Languages:</strong> Python, Java, Bash, Lua, JavaScript, HTML/CSS</p>
          <p><strong>Databases:</strong> PostgreSQL, MySQL, Sybase</p>
          <p><strong>Frameworks & Tools:</strong> Flask, Docker, Git, Terraform, Node.js</p>
          <p><strong>Cloud & Systems:</strong> AWS, GCP, Kubernetes, Linux (RHEL/Alpine)</p>
          <p><strong>Other:</strong> CI/CD Pipelines, Networking, JIRA</p>
        </div>

        <p className="text-blue-200 text-lg leading-relaxed">
          <strong>Goal:</strong> To grow in a role where I can combine software and cloud engineering skills, while delivering scalable and sustainable solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
