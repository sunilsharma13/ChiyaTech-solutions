'use client';

import { motion } from 'framer-motion';
import { FiZap, FiShield, FiUsers, FiCpu } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap />,
    title: 'BLAZING FAST DELIVERY',
    description:
      'High-quality projects delivered on time—every single time. Our agile workflows ensure your MVP hits the market faster.',
  },
  {
    icon: <FiShield />,
    title: 'ROCK-SOLID SECURITY',
    description:
      'Security-first mindset from day one. Encryption, secure auth, and scalable architecture—zero compromises on safety.',
  },
  {
    icon: <FiUsers />,
    title: 'CLIENT-CENTRIC FOCUS',
    description:
      'Your vision drives every decision. Transparent pricing and 24/7 updates—we treat your project like our own.',
  },
  {
    icon: <FiCpu />,
    title: 'MODERN TECH STACK',
    description:
      'Next.js, AI integrations, and Cloud Native solutions. We stay ahead so your product never feels outdated.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F9FAFB] text-slate-900 overflow-hidden">
      <div className="w-[90%] md:w-[72%] mx-auto">
        
        <div className="mb-16 md:mb-20 border-l-4 border-slate-900 pl-6 md:pl-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3"
          >
            The ChiyaTech Advantage
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05]"
          >
            WHY SMART TEAMS <br className="hidden md:block"/> 
            <span className="text-slate-400 font-medium">PARTNER WITH US.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-slate-200/60 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-all hover:border-slate-400 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-slate-100 blur-[80px] group-hover:bg-slate-200 transition-all duration-500" />

              <div className="relative z-10">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 uppercase text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium max-w-sm">
                  {feature.description}
                </p>
                
                <div className="mt-8 h-[2px] w-8 bg-slate-200 group-hover:w-16 group-hover:bg-slate-900 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}