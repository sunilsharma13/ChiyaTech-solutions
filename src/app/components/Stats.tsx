'use client';
import { FaUsers, FaFolderOpen, FaDownload, FaCode } from 'react-icons/fa';

export default function Stats() {
  const stats = [
    {
      label: 'Happy Clients',
      value: 6,
      icon: <FaUsers />,
    },
    {
      label: 'Projects Completed',
      value: 13,
      icon: <FaFolderOpen />,
    },
    {
      label: 'Files Delivered',
      value: 12,
      icon: <FaDownload />,
    },
    {
      label: 'Lines of Code',
      value: 18421,
      icon: <FaCode />,
    },
  ];

  return (
    <section id="stats" className="bg-[#0f0f0f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Achievements</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-base md:text-lg">
          We don’t just build—we deliver. Here’s a glimpse of what we’ve accomplished with passion and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 flex flex-col items-center justify-center transition duration-300 hover:from-blue-900 hover:to-blue-700 hover:shadow-[0_0_20px_rgba(0,123,255,0.3)]"
            >
              <div className="text-blue-500 text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value.toLocaleString()}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
