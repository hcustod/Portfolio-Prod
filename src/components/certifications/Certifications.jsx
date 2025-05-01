import React from 'react';

const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2025"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    year: "2024"
  },
  {
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2023"
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    year: "2023"
  },
  {
    title: "SSCP – Systems Security Certified Practitioner",
    issuer: "(ISC)²",
    year: "2023"
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    year: "2022"
  }
];

const Certifications = () => {
  return (
    <>
      <style>
        {`
          @keyframes fadeInZoom {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .fade-in-zoom {
            animation: fadeInZoom 1s ease-out forwards;
          }
        `}
      </style>

      <section id="certifications" className="w-full px-8 py-24 md:px-16 flex flex-col items-center text-center relative">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-100 mb-20 pb-5 z-10 relative">
          Certifications
        </h2>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500 fade-in-zoom">
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-blue-300 text-sm">{cert.issuer}</p>
              <p className="text-blue-400 text-xs mt-4">Issued: {cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certifications;
