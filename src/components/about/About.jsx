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
      {/* Tailwind doesn't have w-30; make it explicit */}
      <div className="w-[120px] h-1 bg-teal-400 rounded-full mb-12"></div>

      <div
        style={{ transitionDelay: inView ? '150ms' : '0ms' }}
        className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } w-full max-w-md sm:max-w-2xl md:max-w-3xl bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_35px_rgba(0,255,255,0.25)] hover:scale-[1.01] text-left`}
      >
        <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 sm:text-left md:text-justify">
          I’m a <strong>Full-Stack Developer</strong> with a complementary focus in <strong>Cloud Engineering</strong>, and <strong>System Administration</strong>. I build web apps end-to-end and ship them with production-ready CI/CD, IaC, and observability. Recent work includes containerizing legacy apps, migrating databases, and deploying to AWS/GCP with automated rollouts and backups.
        </p>

        <div className="text-blue-300 text-sm sm:text-base space-y-3 mb-6 sm:mb-8">
          <h3 className="font-semibold text-blue-200">Skill Highlights</h3>
          <ul className="space-y-3">
            <li>
              <strong>Languages:</strong><br />
              JavaScript/TypeScript · PHP · Python · C# · Java · Bash
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong><br />
              React · Next.js · Tailwind CSS · Bootstrap · Laravel · ASP.NET · Flask · Jest · JUnit
            </li>
            <li>
              <strong>Databases:</strong><br />
              PostgreSQL · Redis · Firestore · BigQuery · Sybase · Data Modeling
            </li>
            <li>
              <strong>Cloud & DevOps:</strong><br />
              Docker · Kubernetes · AWS · GCP · DigitalOcean · Terraform · CI/CD · Ansible · Jenkins · Datadog
            </li>
            <li>
              <strong>Platforms & Tools:</strong><br />
              Git/GitHub · Jira · ServiceNow · IntelliJ/VS Code · Microsoft 365 · Google Workspace
            </li>
            <li>
              <strong>System Administration:</strong><br />
              Linux (RHEL, Alpine) · Network troubleshooting · Backup Automation · Log Investigation · Server Management (APACHE) · Automation
            </li>
          </ul>
        </div>



        <p className="text-blue-200 text-base sm:text-lg leading-relaxed sm:text-left md:text-justify">
          <strong>Goal:</strong> To join a forward-thinking team where I can make a real impact by applying my breadth of skills, while continuing to grow and learn from experienced colleagues.
        </p>
      </div>
    </section>
  );
};

export default About;
