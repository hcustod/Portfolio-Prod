import React from 'react';

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
  return (
    <>
      <style>
        {`
          @keyframes fadeInZoom {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .fade-in-zoom {
            animation: fadeInZoom 0.8s ease-out forwards;
          }
        `}
      </style>

      <section id="certifications" className="w-full px-6 py-24 md:px-16 flex flex-col items-center text-center relative">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-16 pb-5 z-10 relative">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500 fade-in-zoom"
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
    </>
  );
};

export default Certifications;
