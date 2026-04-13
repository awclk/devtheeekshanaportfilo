'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github: string;
}

function ProjectCard({ title, description, techStack, link, github, gradient, icon }: ProjectCardProps & { gradient: string; icon: string }) {
  return (
    <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl transition-all transform hover:-translate-y-3 border-2 border-gray-800 card-3d">
      {/* Header with icon */}
      <div className={`h-48 ${gradient} flex items-center justify-center text-7xl relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
        <span className="relative z-10 transform group-hover:scale-125 transition-transform">{icon}</span>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed text-base">{description}</p>
        
        <div className="mb-6">
          <p className="text-sm font-black text-gray-300 mb-3 uppercase">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-gray-100 rounded-lg text-xs font-bold border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href="https://wa.me/94755335072"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 bg-white text-black rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all text-center text-sm border-2 border-white flex items-center justify-center gap-2"
          >
            <span>💬</span>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      link: 'https://example.com/project1',
      github: 'https://github.com/example/project1',
      gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
      icon: '🛍️',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      link: 'https://example.com/project2',
      github: 'https://github.com/example/project2',
      gradient: 'bg-gradient-to-br from-purple-400 to-purple-600',
      icon: '✓',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with real-time data, forecasts, and location services.',
      techStack: ['Next.js', 'OpenWeather API', 'Tailwind CSS', 'Geolocation'],
      link: 'https://example.com/project3',
      github: 'https://github.com/example/project3',
      gradient: 'bg-gradient-to-br from-cyan-400 to-blue-500',
      icon: '🌤️',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, comments, and social sharing features.',
      techStack: ['Next.js', 'Markdown', 'MongoDB', 'JWT Auth'],
      link: 'https://example.com/project4',
      github: 'https://github.com/example/project4',
      gradient: 'bg-gradient-to-br from-pink-400 to-purple-500',
      icon: '📝',
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile-friendly fitness tracking app with workout logging, progress charts, and goals.',
      techStack: ['React', 'Chart.js', 'Tailwind CSS', 'LocalStorage'],
      link: 'https://example.com/project5',
      github: 'https://github.com/example/project5',
      gradient: 'bg-gradient-to-br from-green-400 to-emerald-600',
      icon: '💪',
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard connecting multiple social media platforms with real-time metrics.',
      techStack: ['Next.js', 'Social APIs', 'Tailwind CSS', 'Node.js'],
      link: 'https://example.com/project6',
      github: 'https://github.com/example/project6',
      gradient: 'bg-gradient-to-br from-orange-400 to-red-500',
      icon: '📊',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="float-element float-1" style={{ opacity: '0.08' }}></div>
        <div className="float-element float-3" style={{ opacity: '0.08' }}></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-6xl font-black mb-4 text-center text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Projects</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">Featured Work & Case Studies</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
