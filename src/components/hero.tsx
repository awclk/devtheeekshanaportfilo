'use client';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
        <div className="float-element float-4"></div>
      </div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white flex items-center justify-center text-6xl animate-float shadow-2xl border-2 border-white">
            <span className="animate-salute">👋</span>
          </div>
        </div>

        <div className="animate-3d">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">Dev Theekshana</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-gray-300 mb-6">
            Full Stack Developer | UI/UX Designer | Problem Solver
          </p>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant digital solutions with precision and creativity. 
            Let's build something exceptional together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-10 py-4 bg-white text-black font-bold text-lg rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all card-3d border-2 border-white"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 border-3 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-black transition-all card-3d"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
