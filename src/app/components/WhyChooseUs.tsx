'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiZap, FiShield, FiUsers, FiCpu, FiArrowRight } from 'react-icons/fi';

const features = [
  {
    icon: FiZap,
    number: '01',
    title: 'Fast Execution, Real Results',
    description: 'From idea to launch — we move fast without breaking things. Systems that start delivering from day one.',
    accent: 'from-indigo-500/20 to-violet-500/10',
    border: 'hover:border-indigo-500/40',
    iconColor: 'text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    icon: FiShield,
    number: '02',
    title: 'Built to Scale & Secure',
    description: 'Engineered with performance and security at the core — grows with your business, not against it.',
    accent: 'from-violet-500/20 to-purple-500/10',
    border: 'hover:border-violet-500/40',
    iconColor: 'text-violet-400 group-hover:bg-violet-600 group-hover:text-white',
  },
  {
    icon: FiUsers,
    number: '03',
    title: 'Not Just Developers',
    description: 'We think like business partners. Every decision focused on growth, conversions, and real revenue.',
    accent: 'from-blue-500/20 to-indigo-500/10',
    border: 'hover:border-blue-500/40',
    iconColor: 'text-blue-400 group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    icon: FiCpu,
    number: '04',
    title: 'AI-First Approach',
    description: 'We integrate AI where it actually matters — saving time, cutting cost, and automating what slows you down.',
    accent: 'from-purple-500/20 to-violet-500/10',
    border: 'hover:border-purple-500/40',
    iconColor: 'text-purple-400 group-hover:bg-purple-600 group-hover:text-white',
  },
];

const stats = [
  { value: '24/7', label: 'AI Availability' },
  { value: '99%', label: 'Uptime SLA' },
  { value: '6+', label: 'Products Live' },
  { value: '<24h', label: 'Response Time' },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 bg-[#020817] text-slate-200 overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/8 blur-[120px] rounded-full" />
      </div>

      <div ref={ref} className="relative z-10 w-[90%] md:w-[78%] mx-auto">

        {/* ── Header ── */}
        <div className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-px bg-indigo-500" />
            <span className="text-[9px] font-black tracking-[0.35em] text-indigo-400 uppercase">
              Why ChiyaTech
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-black tracking-tighter leading-[0.9] uppercase text-white"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
            >
              More Than<br />
              <span className="text-slate-600 font-medium not-italic">Just Code.</span><br />
              We Build<br />
              <span className="text-indigo-400 italic">Growth Systems.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="flex flex-col gap-5"
            >
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                We don't just build products — we engineer systems that grow your business, automate operations, and generate revenue while you sleep.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-400 hover:text-white transition-colors no-underline w-fit"
              >
                <span className="w-5 h-px bg-indigo-500 group-hover:w-8 transition-all duration-300" />
                Let's Talk
                <FiArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.09 }}
              className={`group relative rounded-[1.75rem] border border-white/[0.07] bg-white/[0.03] p-8 md:p-9 overflow-hidden transition-all duration-500 ${f.border} hover:bg-white/[0.05]`}
            >
              {/* Card gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem]`} />

              {/* Number */}
              <span className="absolute top-7 right-8 text-[11px] font-black text-white/8 tracking-widest">
                {f.number}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/8 transition-all duration-300 ${f.iconColor}`}>
                  <f.icon size={18} />
                </div>

                <h3 className="text-[15px] md:text-base font-black tracking-tight mb-3 uppercase text-white leading-snug">
                  {f.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm font-medium group-hover:text-slate-400 transition-colors duration-300">
                  {f.description}
                </p>

                {/* Bottom line expand */}
                <div className="mt-6 h-px w-8 bg-white/10 group-hover:w-full group-hover:bg-indigo-500/30 transition-all duration-700 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.03] px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center ${i > 0 ? 'md:border-l md:border-white/[0.07]' : ''}`}
            >
              <p className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                {s.value}
              </p>
              <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-1.5">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}