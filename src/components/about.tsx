'use client';

export function About() {
  const technicalSkills = [
    { name: 'Web Design', percentage: 95 },
    { name: 'React.js', percentage: 90 },
    { name: 'Next.js', percentage: 88 },
    { name: 'Graphics Design', percentage: 92 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'WhatsApp Bot Development', percentage: 87 },
    { name: 'TailwindCSS', percentage: 93 },
    { name: 'Node.js', percentage: 82 },
    { name: 'Database Design', percentage: 80 },
    { name: 'UI/UX Design', percentage: 91 },
    { name: 'Responsive Design', percentage: 96 },
    { name: 'API Development', percentage: 83 },
  ];

  const skillCategories = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'RESTful APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma', 'Webpack'] },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="float-element float-2" style={{ opacity: '0.08' }}></div>
        <div className="float-element float-4" style={{ opacity: '0.08' }}></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-6xl font-black mb-4 text-center text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Me</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">Professional Journey & Expertise</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm Dev Theekshana, a 19-year-old passionate full-stack developer from Matale, Sri Lanka. 
              I'm eager to build modern web applications and create intuitive user interfaces while solving complex problems.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              With a strong foundation in web technologies, I focus on creating clean, efficient code and beautiful user experiences.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm always eager to learn and grow, taking on challenging projects that push my boundaries and help me improve my craft.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white text-black rounded-2xl p-8 card-3d text-center border-2 border-white">
              <div className="text-5xl font-black mb-2">50+</div>
              <p className="text-sm font-semibold opacity-90">Projects Completed</p>
            </div>
            <div className="bg-gray-800 text-white rounded-2xl p-8 card-3d text-center border-2 border-gray-700">
              <div className="text-5xl font-black mb-2">30+</div>
              <p className="text-sm font-semibold opacity-90">Happy Clients</p>
            </div>
            <div className="bg-gray-700 text-white rounded-2xl p-8 card-3d text-center border-2 border-gray-600">
              <div className="text-5xl font-black mb-2">5+</div>
              <p className="text-sm font-semibold opacity-90">Years Experience</p>
            </div>
            <div className="bg-gray-600 text-white rounded-2xl p-8 card-3d text-center border-2 border-gray-500">
              <div className="text-5xl font-black mb-2">15+</div>
              <p className="text-sm font-semibold opacity-90">Technologies</p>
            </div>
          </div>
        </div>

        {/* Technical Skills with Percentage */}
        <div className="mb-20">
          <h3 className="text-3xl font-black mb-12 text-center text-white">Technical Skills %</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="bg-gray-900 rounded-xl p-6 border-2 border-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-white font-bold text-lg">{skill.name}</h4>
                  <span className="bg-white text-black px-3 py-1 rounded-lg font-black text-sm">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
                  <div
                    className="h-full bg-gradient-to-r from-white to-gray-400 transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills by Category */}
        <div>
          <h3 className="text-3xl font-black mb-12 text-center text-white">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-gray-900 rounded-2xl p-8 border-2 border-gray-800 card-3d"
              >
                <h4 className="text-2xl font-black mb-6 text-white">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
