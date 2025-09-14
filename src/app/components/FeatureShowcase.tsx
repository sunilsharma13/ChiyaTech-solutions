'use client';
import {
  FaPaintBrush,
  FaUserAlt,
  FaCogs,
  FaEye,
  FaMobileAlt,
  FaHeadset,
  FaRobot,
} from 'react-icons/fa';

export default function MainFeatures() {
  const features = [
    {
      title: 'Creative Design',
      description:
        'We craft layouts that are bold, expressive, and visually unforgettable. Every pixel matters.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'User Experience',
      description:
        'We design interactions that feel intuitive, cinematic, and emotionally engaging.',
      icon: <FaUserAlt />,
    },
    {
      title: 'AI Integration',
      description:
        'We build intelligent interfaces powered by AI—smart forms, predictive UX, and conversational flows that adapt to your users.',
      icon: <FaRobot />,
    },
    {
      title: 'Customizability',
      description:
        'Every section is modular and scalable. Tailored to your brand, your goals, your vibe.',
      icon: <FaCogs />,
    },
    {
      title: 'Fully Responsive',
      description:
        'From mobile to desktop, every layout adapts seamlessly. No compromises, no hacks.',
      icon: <FaMobileAlt />,
    },
    {
      title: 'Custom Support',
      description:
        'We partner with you beyond launch—updates, fixes, and enhancements that evolve with you.',
      icon: <FaHeadset />,
    },
  ];

  return (
    <section
      id="main-features"
      className="relative bg-fixed bg-center bg-cover text-white py-28 px-6"
      style={{ backgroundImage: "url('/main-feature-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Main Features</h2>
        <p className="text-gray-300 mb-14 max-w-2xl mx-auto text-base md:text-lg">
          From design to deployment, we deliver features that elevate your brand and captivate your audience.
          Our process blends creativity, AI, and engineering—built for impact, designed for growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-xl p-6 text-left transition duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="text-blue-500 text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
