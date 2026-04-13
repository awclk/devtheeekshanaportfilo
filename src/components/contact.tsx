'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="float-element float-1" style={{ opacity: '0.08' }}></div>
        <div className="float-element float-2" style={{ opacity: '0.08' }}></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black mb-4 text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg font-semibold">Let's create something amazing together!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border-2 border-gray-800 card-3d">
              <h3 className="text-3xl font-black mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Have a question or want to work together? I'd love to hear from you. 
                Feel free to reach out using the contact form or through my social media channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-gray-800 card-3d">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white text-black rounded-xl flex items-center justify-center text-3xl flex-shrink-0 font-bold border-2 border-white">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1 text-lg">Email</h4>
                    <a href="mailto:dev.theekshana@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline font-bold text-base">
                      dev.theekshana@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-gray-800 card-3d">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white text-black rounded-xl flex items-center justify-center text-3xl flex-shrink-0 font-bold border-2 border-white">
                    📱
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1 text-lg">Phone</h4>
                    <p className="text-gray-300 font-bold text-base">+94 701234567</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-gray-800 card-3d">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white text-black rounded-xl flex items-center justify-center text-3xl flex-shrink-0 font-bold border-2 border-white">
                    📍
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1 text-lg">Location</h4>
                    <p className="text-gray-300 font-bold text-base">Matale, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white text-black rounded-2xl p-8 shadow-lg border-2 border-white">
              <h4 className="font-black mb-6 text-2xl">Connect on Social Media</h4>
              <div className="flex gap-4 flex-wrap">
                {[
                  { name: 'GitHub', emoji: '🐙', url: 'https://github.com' },
                  { name: 'Twitter', emoji: '𝕏', url: 'https://twitter.com' },
                  { name: 'LinkedIn', emoji: '💼', url: 'https://linkedin.com' },
                  { name: 'Instagram', emoji: '📸', url: 'https://instagram.com' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center text-2xl transition-all transform hover:scale-125 font-bold border-2 border-black hover:bg-white hover:text-black"
                    title={social.name}
                  >
                    {social.emoji}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-green-900/40 border-2 border-green-600 rounded-2xl p-12 text-center shadow-lg card-3d">
                <div className="mb-4 text-7xl">✅</div>
                <p className="text-green-400 font-black text-2xl mb-2">Thank you!</p>
                <p className="text-green-300 font-semibold text-lg">
                  I've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 shadow-lg border-2 border-gray-800">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-base font-black text-white mb-3 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition font-semibold"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-base font-black text-white mb-3 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition font-semibold"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-base font-black text-white mb-3 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition font-semibold"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-base font-black text-white mb-3 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition resize-none font-semibold"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-white text-black font-black text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer border-2 border-white"
                >
                  Send Message ✈️
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center font-semibold">
                  I'll respond to your message within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
