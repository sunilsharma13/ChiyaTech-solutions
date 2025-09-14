'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'Chiyantra Tech',
      details:
        'Built with Next.js, TailwindCSS, and GSAP. Features include scroll-triggered scenes, branded icons, and ambient particles.',
    },
    {
      title: 'Talesy',
      details:
        'A narrative-first platform with expressive transitions, cinematic loaders, and bold typography. Designed for emotional impact.',
    },
    {
      title: 'Drive',
      details:
        'Minimalist layout with animated contact forms, branded icon grid, and responsive design across all devices.',
    },
    {
      title: 'Twitter X Redesign',
      details:
        'Concept redesign with custom icons, animated loaders, and a dark-mode-first layout. Built for visual storytelling.',
    },
    {
      title: 'Dev Logs',
      details:
        'A blog-style showcase with scroll-triggered animations, expressive typography, and modular content blocks.',
    },
    {
      title: 'Brand Grid',
      details:
        'Internal branding experiment featuring a grid of premium icons, hover effects, and visual consistency across sections.',
    },
  ];

  return (
    <section id="portfolio" className="bg-[#0f0f0f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Recent Work</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg">
          Every project is a cinematic upgrade—crafted with expressive design, scalable code, and bold storytelling.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 min-h-[220px] flex flex-col transition duration-300 hover:from-blue-900 hover:to-blue-700 hover:shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">{project.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
