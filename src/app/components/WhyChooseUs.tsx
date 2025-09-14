'use client';
import { useState, useEffect } from 'react';
import '../styles/why.css';
import Image from 'next/image'; // ✅ Add this at the top

export default function WhyChooseUs() {
  const topics = [
    {
      label: 'Web Design',
      title: 'Cinematic Web Design',
      description:
        'We create immersive layouts, magnetic buttons, and scroll-triggered scenes that feel like a film. Every interaction is designed to evoke emotion and elevate your brand.',
      image: '/img-1.png',
    },
    {
      label: 'Development',
      title: 'Scalable Development',
      description:
        'Built with Next.js, TailwindCSS, and modular architecture—our platforms are fast, clean, and built to grow with you.',
      image: '/img-2.png',
    },
    {
      label: 'Branding',
      title: 'Expressive Branding',
      description:
        'From logos to iconography, we obsess over balance, polish, and visual identity. Your brand deserves to be unforgettable.',
      image: '/img-3.png',
    },
    {
      label: 'Marketing',
      title: 'Conversion-Focused Marketing',
      description:
        'We blend strategy and storytelling—SEO, social, and funnels that drive engagement, build trust, and grow your audience.',
      image: '/img-4.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section id="vision" className="bg-[#0f0f0f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4 tracking-tight">Vision</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We blend expressive design, scalable engineering, and strategic thinking to deliver digital experiences that leave a mark.
            Our work is driven by emotion, powered by technology, and crafted to inspire.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Buttons */}
          <div className="flex flex-col gap-4">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-4 py-3 rounded-lg border transition duration-300 text-sm ${
                  activeIndex === index
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-[#1a1a1a] border-[#2a2a2a] text-gray-300 hover:bg-[#222] hover:border-blue-500'
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>

          {/* Right Image + Content */}
          <div className="md:col-span-2 flex flex-col items-center">
            <div className="relative w-full max-w-[700px] h-[400px] rounded-xl overflow-hidden shadow-xl mb-6">
            <Image
  src={topics[activeIndex].image}
  alt={topics[activeIndex].label}
  fill
  className={`object-cover transition-all duration-700 ease-out transform ${
    fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
  }`}
/>

              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center text-center px-6">
                <div className="max-w-md min-h-[140px] flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                    {topics[activeIndex].title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {topics[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
