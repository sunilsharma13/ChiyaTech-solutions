'use client';

import { motion } from 'framer-motion';
import { FiZap, FiShield, FiUsers, FiCpu } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap />,
    title: 'High-Velocity Shipping',
    description:
      'We execute with precision. Our agile pipelines ensure your MVP hits the market while the idea is still fresh.',
  },
  {
    icon: <FiShield />,
    title: 'Enterprise Security',
    description:
      'Zero-trust architecture and end-to-end encryption are baked into our DNA from day one.',
  },
  {
    icon: <FiUsers />,
    title: 'Strategic Partnership',
    description:
      'Transparent updates and deep collaboration. We act as your internal tech arm, not just a vendor.',
  },
  {
    icon: <FiCpu />,
    title: 'Future-Proof Tech',
    description:
      'AI, Cloud-Native systems, and Next.js. We build products that scale without technical debt.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-[#0f172a] text-slate-200 overflow-hidden relative">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-[90%] md:w-[75%] mx-auto relative z-10">
        
        {/* Section Header - Sized Down for Elegance */}
        <div className="mb-16 md:mb-20 border-l-2 border-indigo-500 pl-6 md:pl-8">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-3"
          >
            The ChiyaTech Advantage
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase italic"
          >
            Why Smart Teams <br /> 
            <span className="text-slate-500 not-italic">Partner with us.</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              className="group relative bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden transition-all hover:border-indigo-500/50"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <span className="text-xl">{feature.icon}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold tracking-tight mb-3 uppercase text-white">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm md:text-base font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600/5 blur-3xl group-hover:bg-indigo-600/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}