'use client';
import { FaPalette, FaCode, FaPenNib, FaBullhorn, FaRobot } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'Web Design',
      description:
        'Immersive, responsive websites that reflect your brand’s personality. From layout to typography, every pixel is crafted to captivate and convert.',
      icon: <FaPalette />,
    },
    {
      title: 'Development',
      description:
        'Scalable platforms built with Next.js, TailwindCSS, and clean architecture. Blazing speed, seamless UX—engineered to perform.',
      icon: <FaCode />,
    },
    {
      title: 'AI Integration',
      description:
        'We build intelligent interfaces powered by AI. From smart forms to predictive UX, we blend design with data to create futuristic experiences.',
      icon: <FaRobot />,
    },
    {
      title: 'Branding',
      description:
        'Bold visual identities that resonate. Logos, color systems, and iconography that feel premium, balanced, and unforgettable.',
      icon: <FaPenNib />,
    },
    {
      title: 'Marketing',
      description:
        'Campaigns that connect. From SEO to social media, we blend strategy and storytelling to drive engagement and build trust.',
      icon: <FaBullhorn />,
    },
  ];

  return (
    <section id="services" className="bg-[#0f0f0f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-semibold mb-4 tracking-tight text-white">Services</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg">
          From design to deployment, we deliver digital experiences that are bold, scalable, and unforgettable.
          Whether you&apos;re launching a brand or integrating AI into your platform—we&apos;ve got you covered.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] rounded-xl p-8 min-h-[360px] flex flex-col justify-start items-center text-center transition duration-300 border border-transparent hover:border-blue-500 hover:bg-[#1f1f1f] hover:shadow-[0_0_30px_rgba(0,123,255,0.3)] hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="text-blue-500 text-4xl mb-6 transition duration-300 group-hover:text-blue-400">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
