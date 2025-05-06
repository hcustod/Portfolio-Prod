import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new URLSearchParams(new FormData(form));

    try {
      const response = await fetch("https://postmail.invotes.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });

      if (response.ok) {
        setStatusMessage("Thanks! Your message was sent.");
        form.reset();
      } else {
        setStatusMessage("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatusMessage("Failed to send. Check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-24 px-6 md:px-16 flex flex-col items-center relative"
    >
      <h2 className="text-5xl font-bold text-slate-100 mb-4">
        Contact
      </h2>
      <div className="w-30 h-1 bg-teal-400 rounded-full mb-12"></div>


      {/* Social Icons */}
      <div className="flex gap-6 mb-12">
        {[
          {
            href: "mailto:h.custodio.dev@gmail.com",
            icon: <FaEnvelope size={28} />,
          },
          {
            href: "https://github.com/hcustod",
            icon: <FaGithub size={28} />,
          },
          {
            href: "https://linkedin.com/in/hcustod",
            icon: <FaLinkedin size={28} />,
          },
        ].map(({ href, icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-110 hover:shadow-md"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] hover:scale-[1.01]">
        <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">
          Send Me a Message
        </h3>

        <form onSubmit={handleSubmit} id="email_form" className="flex flex-col gap-6">
          <input type="hidden" name="access_token" value="d2pih08z1mvqtkyqdk31dcsu" />
          <input type="hidden" name="subject" value="Message from Portfolio Site" />

          <div className="flex flex-col">
            <label htmlFor="message" className="text-blue-300 mb-1 text-sm">
              Your Message
            </label>
            <textarea
              id="message"
              name="text"
              required
              className="p-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[120px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-blue-300 mb-1 text-sm">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="reply_to"
              required
              className="p-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 self-center mt-2"
          >
            Send <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </form>

        {statusMessage && (
          <div className="text-teal-300 text-center text-sm mt-4">{statusMessage}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
