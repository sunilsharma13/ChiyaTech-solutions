'use client';

import { motion } from 'framer-motion';
import { FiZap, FiShield, FiUsers, FiCpu } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap />,
    title: 'Fast Execution, Real Results',
    description:
      'We move fast without breaking things. From idea to launch, we build and deploy systems that start delivering results immediately.',
  },
  {
    icon: <FiShield />,
    title: 'Built to Scale & Secure',
    description:
      'Your product is engineered with performance, scalability, and security at its core — so it grows with your business, not against it.',
  },
  {
    icon: <FiUsers />,
    title: 'Not Just Developers',
    description:
      'We think like business partners. Every decision we make is focused on helping you grow, convert more users, and generate revenue.',
  },
  {
    icon: <FiCpu />,
    title: 'AI-First Approach',
    description:
      'From intelligent chatbots to automation systems, we integrate AI where it actually matters — saving time, cost, and effort.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-[#0f172a] text-slate-200 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-[90%] md:w-[75%] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 border-l-2 border-indigo-500 pl-6 md:pl-8">
          
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-3"
          >
            Why ChiyaTech
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase italic"
          >
            More Than Just Code. <br /> 
            <span className="text-slate-500 not-italic">We Build Growth Systems.</span>
          </motion.h2>

        </div>

        {/* Grid */}
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

              {/* Hover Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600/5 blur-3xl group-hover:bg-indigo-600/20 transition-all duration-500" />
            
            </motion.div>
          ))}
        </div>

        {/* Bottom Punch Line (IMPORTANT 🔥) */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm md:text-base">
            We don’t just build products — we build systems that help you grow faster, 
            automate smarter, and convert better.
          </p>
        </div>

      </div>
    </section>
  );
}