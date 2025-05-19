import React from 'react';
import useInViewAnimation from '../../hooks/useInViewAnimation';

const certifications = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF / The Linux Foundation",
    year: "Upcoming",
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
  },
  {
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    year: "2024",
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    year: "2023",
  },
  {
    title: "Systems Security Certified Practitioner (SSCP)",
    issuer: "(ISC)²",
    year: "2023",
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    year: "2022",
  },
  {
    title: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2022",
  },
  {
    title: "CompTIA A+",
    issuer: "CompTIA",
    year: "2022",
  },
];

const Certifications = () => {
  const [ref, inView] = useInViewAnimation(0.2);

  return (
    <section
      id="certifications"
      ref={ref}
      className="w-full px-6 py-24 md:px-16 flex flex-col items-center text-center relative"
    >
      <h2 className="text-5xl font-bold text-slate-100 mb-4 z-10 relative">
        Certifications
      </h2>
      <div className="w-30 h-1 bg-teal-400 rounded-full mb-12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-[1.01]`}
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">
              {cert.title}
            </h3>
            <p className="text-blue-300 text-sm italic mb-1">{cert.issuer}</p>
            <p className="text-blue-400 text-xs">Issued: {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
