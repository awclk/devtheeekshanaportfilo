'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 border-t-2 border-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-black mb-4 text-white">About</h3>
            <p className="text-gray-400 leading-relaxed">
              A passionate developer creating modern, responsive web applications with clean code and elegant design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-black mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition font-semibold">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-black mb-4 text-white">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { emoji: '🐙', url: 'https://github.com', label: 'GitHub' },
                { emoji: '𝕏', url: 'https://twitter.com', label: 'Twitter' },
                { emoji: '💼', url: 'https://linkedin.com', label: 'LinkedIn' },
                { emoji: '📸', url: 'https://instagram.com', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl transition-all transform hover:scale-110 font-bold hover:shadow-lg"
                  title={social.label}
                >
                  {social.emoji}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 font-semibold">
            &copy; {currentYear} Dev Theekshana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
