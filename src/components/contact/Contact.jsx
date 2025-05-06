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
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
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
    <section id="contact" className="w-full min-h-screen py-24 pb-20 px-8 md:px-16 bg-transparent flex flex-col items-center text-center relative">
      
      {/* Title */}
      <h2 className="text-5xl font-bold text-slate-100 mb-20">
        Contact
      </h2>

      {/* Social Icon Buttons */}
      <div className="flex gap-6 mb-16">
        {/* Email */}
        <a href="mailto:h.custodio.dev@gmail.com" target="_blank" className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-110 hover:shadow-md">
          <FaEnvelope size={28} />
        </a>

        {/* GitHub */}
        <a href="https://github.com/hcustod" target="_blank" className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-110 hover:shadow-md">
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/hcustod" target="_blank" className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-emerald-900 border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-110 hover:shadow-md">
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg text-left">
        <h3 className="text-2xl text-slate-100 mb-6 text-center">Send Me a Message</h3>
        <form onSubmit={handleSubmit} id="email_form" className="flex flex-col gap-6">
          <input type="hidden" name="access_token" value="d2pih08z1mvqtkyqdk31dcsu" />
          <input type="hidden" name="subject" value="Message from Portfolio Site" />

          <div className="flex flex-col">
            <label htmlFor="message" className="text-blue-300 mb-2">Your Message</label>
            <textarea id="message" name="text" required className="p-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[120px]" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-blue-300 mb-2">Your Email</label>
            <input type="email" id="email" name="reply_to" required className="p-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
          </div>

          <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 self-center mt-4">
            Send <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </form>

        {statusMessage && (
          <div className="text-teal-300 text-center mt-4">{statusMessage}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
