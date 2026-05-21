'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiLayers, FiShield, FiTrendingUp, FiShoppingBag, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Automotive Lead Generation',
    category: 'Automotive',
    desc: 'DLB Motors needed strong online presence to attract buyers. We built a fast, mobile-first website focused on showcasing inventory and increasing customer conversions.',
    result: 'More Qualified Leads',
    link: 'https://dlbmotors.in',
    Icon: FiShoppingBag,
    accent: 'from-indigo-500/15 to-indigo-500/5',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    tag: 'Live Project',
  },
  {
    id: 2,
    title: 'AI Content Generation Platform',
    category: 'AI & Media',
    desc: 'Built a scalable AI storytelling engine that automates image-to-speech content creation, enabling high-volume generation with minimal manual effort.',
    result: '10k+ Content Generations',
    link: 'https://talesy.in',
    Icon: FiLayers,
    accent: 'from-violet-500/15 to-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    tag: 'Live Project',
  },
  {
    id: 3,
    title: 'Real-Time Financial Analytics',
    category: 'FinTech',
    desc: 'High-performance analytics platform with real-time data processing and predictive insights for faster, smarter financial decisions.',
    result: '99.9% System Reliability',
    link: '',
    Icon: FiTrendingUp,
    accent: 'from-emerald-500/15 to-emerald-500/5',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    tag: 'Concept',
  },
  {
    id: 4,
    title: 'High-Converting E-Commerce',
    category: 'E-Commerce',
    desc: 'Conversion-focused headless e-commerce experience with seamless checkout and optimized product flows that turn browsers into buyers.',
    result: 'Improved Conversion Rate',
    link: '',
    Icon: FiShoppingBag,
    accent: 'from-orange-500/15 to-orange-500/5',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    tag: 'Concept',
  },
  {
    id: 5,
    title: 'Cloud Security & Compliance',
    category: 'Infrastructure',
    desc: 'Automated cloud auditing system for AWS & Azure to simplify compliance and continuously monitor security risks in real time.',
    result: 'Enterprise Ready',
    link: '',
    Icon: FiShield,
    accent: 'from-blue-500/15 to-blue-500/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    tag: 'Concept',
  },
];

const partners = [
  { name: 'DLB Motors', logo: '/dlb.png' },
  { name: 'GCD Classes', logo: '/gcd.png' },
  { name: 'Amora', logo: '/amora.jpg' },
  { name: 'Poshak', logo: '/poshak.png' },
  { name: 'Talesy', logo: '/talesy.PNG' },
  { name: 'TechVibe', logo: '/techvibe.jpg' },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" className="relative py-28 md:py-36 bg-[#0a0f1e] overflow-hidden">

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
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-indigo-600/6 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/6 blur-[120px] rounded-full" />
      </div>

      <div ref={ref} className="relative z-10 w-[90%] md:w-[78%] mx-auto">

        {/* ── Header ── */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-px bg-indigo-500" />
            <span className="text-[9px] font-black tracking-[0.35em] text-indigo-400 uppercase">
              Proven Work
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-black tracking-tighter leading-[0.9] text-white uppercase"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
            >
              Built for<br />
              <span className="text-slate-600 font-medium not-italic">Real</span>{' '}
              <span className="text-indigo-400 italic">Impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-slate-500 text-[15px] font-medium leading-relaxed"
            >
              Every project is engineered to deliver measurable outcomes — more leads, better conversions, and systems that scale.
            </motion.p>
          </div>
        </div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.55 }}
              className="group relative rounded-[1.75rem] border border-white/[0.07] bg-white/[0.03] p-7 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05]"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem]`} />

              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl ${project.iconBg} border flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <project.Icon size={18} className={project.iconColor} />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.tag === 'Live Project' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-600 border border-white/8 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-[15px] md:text-base font-black text-white uppercase tracking-tight mb-3 group-hover:text-indigo-300 transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-5 group-hover:text-slate-400 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Result badge */}
                <span className={`inline-flex items-center gap-1.5 text-[9px] font-black px-3 py-1.5 rounded-full border ${project.iconBg} ${project.iconColor} border-current/20 uppercase tracking-widest`}>
                  <FiCheckCircle size={10} />
                  {project.result}
                </span>
              </div>

              {/* Bottom */}
              <div className="relative z-10 pt-5 mt-5 border-t border-white/[0.06]">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white no-underline transition-colors duration-200"
                  >
                    <span className="w-4 h-px bg-slate-600 group-hover/link:w-6 group-hover/link:bg-indigo-400 transition-all duration-300" />
                    View Live
                    <FiExternalLink size={11} />
                  </a>
                ) : (
                  <Link
                    href="/#contact"
                    className="group/link inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-slate-300 no-underline transition-colors duration-200"
                  >
                    <span className="w-4 h-px bg-slate-700 group-hover/link:w-6 group-hover/link:bg-slate-500 transition-all duration-300" />
                    Request Similar
                    <FiArrowRight size={11} />
                  </Link>
                )}
              </div>

              {/* Bottom expand line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-white/0 group-hover:bg-indigo-500/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* ── Trusted By ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-white/15" />
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.35em]">
              Trusted By
            </span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          <div className="relative flex overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0f1e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0f1e] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{ x: [0, -900] }}
              transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="relative w-28 h-10 grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition-all duration-500 flex-shrink-0"
                >
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Final CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0d0f1f] to-violet-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.18)_0%,transparent_60%)]" />
          <div className="absolute inset-0 border border-indigo-500/15 rounded-[2rem]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 text-center md:text-left">
            <div>
              <p className="text-[9px] font-black tracking-[0.35em] text-indigo-400 uppercase mb-3">
                Next Step
              </p>
              <h3
                className="font-black uppercase tracking-tighter leading-[0.92] text-white"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
              >
                Want Similar<br />
                <span className="text-slate-400 font-medium not-italic italic">Results?</span>
              </h3>
              <p className="text-slate-500 font-medium mt-3 text-sm">
                Let's build a system that drives real growth for your business.
              </p>
            </div>

            <Link
              href="/#contact"
              className="group flex-shrink-0 relative flex items-center gap-3 rounded-full bg-indigo-600 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-2xl shadow-indigo-600/25 overflow-hidden no-underline hover:bg-indigo-500 transition-colors"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              Start Your Project
              <FiArrowRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}