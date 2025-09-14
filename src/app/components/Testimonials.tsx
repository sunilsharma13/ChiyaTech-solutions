'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sunil Sharma',
      role: 'Founder, Talesy',
      quote:
        'Talesy isn’t just a project—it’s a reflection of everything I stand for. Every scroll, every detail carries my story. Sunil helped me turn emotion into experience, and the final result feels cinematic and personal.',
    },
    {
      name: 'Arjun Geetansh',
      role: 'CTO, Drive',
      quote:
        'We partnered with ChiyaTech to elevate Drive’s digital presence. Their attention to detail is unmatched—from branding to animation, everything felt premium and tailored to our vision.',
    },
    {
      name: 'Devika Rao',
      role: 'Brand Lead, Chiyantra Tech',
      quote:
        'Working with ChiyaTech was seamless. They instantly felt like family, and collaborated like one too. Our identity finally feels bold, balanced, and unforgettable—ChiyaTech Tech has never looked sharper.',
    },
  ];

  return (
    <section id="testimonials" className="bg-[#0f0f0f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg">
          We don’t chase praise—but when it comes, it’s raw, real, and cinematic. Here’s what our partners say.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 h-full min-h-[280px] flex flex-col justify-between text-left transition duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div>
                <div className="text-sm text-gray-400 mb-2">{t.role}</div>
                <h3 className="text-lg font-semibold text-white mb-4">{t.name}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
