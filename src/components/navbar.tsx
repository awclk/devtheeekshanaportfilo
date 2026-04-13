'use client';

import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-black border-b-2 border-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center h-16 hover:opacity-80 transition">
              <img src="/media/dev.png" alt="Dev Theekshana Logo" className="h-full w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <button
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 text-white font-bold hover:bg-white hover:text-black transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 text-white font-bold hover:bg-white hover:text-black transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-4 py-2 text-white font-bold hover:bg-white hover:text-black transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 text-white font-bold hover:bg-white hover:text-black transition"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-gray-900 font-bold text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-white bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-gray-900 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-gray-900 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-gray-900 transition"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-gray-900 transition"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
