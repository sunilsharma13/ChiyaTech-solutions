'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiZap } from 'react-icons/fi';

const services = [
  {
    id: 'app-development',
    title: 'Scalable App Systems',
    desc: 'We build mobile apps engineered to handle real growth — from MVP to 100K+ users. Performance, security, and seamless UX from day one.',
    image: '/services_1.png',
    tag: 'Mobile & Web Apps',
    accent: 'from-indigo-500/10 to-indigo-500/0',
    tagColor: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/8',
  },
  {
    id: 'web-development',
    title: 'High-Converting Websites',
    desc: 'Not just websites — conversion machines. Fast, SEO-optimized, and built to turn visitors into leads and revenue.',
    image: '/services_2.png',
    tag: 'Web Development',
    accent: 'from-violet-500/10 to-violet-500/0',
    tagColor: 'text-violet-400 border-violet-500/20 bg-violet-500/8',
  },
  {
    id: 'ai-chatbots-automation',
    title: 'AI That Drives Revenue',
    desc: 'AI chatbots and automation systems that capture leads, close queries, and run 24/7 — reducing manual effort and increasing conversions.',
    image: '/services_3.png',
    tag: 'AI & Automation',
    accent: 'from-blue-500/10 to-blue-500/0',
    tagColor: 'text-blue-400 border-blue-500/20 bg-blue-500/8',
  },
  {
    id: 'cloud-solutions-devops',
    title: 'Infrastructure That Scales',
    desc: 'Cloud systems designed for performance and cost efficiency. Deploy, scale, and monitor with zero downtime.',
    image: '/services_4.png',
    tag: 'Cloud & DevOps',
    accent: 'from-emerald-500/10 to-emerald-500/0',
    tagColor: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/8',
  },
  {
    id: 'cybersecurity-services',
    title: 'Security You Can Trust',
    desc: 'Protect your systems from modern threats. We identify vulnerabilities before attackers do — so you can scale with confidence.',
    image: '/services_5.png',
    tag: 'Cybersecurity',
    accent: 'from-red-500/10 to-red-500/0',
    tagColor: 'text-red-400 border-red-500/20 bg-red-500/8',
  },
  {
    id: 'ui-ux-design-branding',
    title: 'Design That Sells',
    desc: 'We craft interfaces that don\'t just look good — they guide users, build trust, and drive action.',
    image: '/services_6.png',
    tag: 'UI/UX & Branding',
    accent: 'from-orange-500/10 to-orange-500/0',
    tagColor: 'text-orange-400 border-orange-500/20 bg-orange-500/8',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      id={service.id}
      className="group grid grid-cols-1 md:grid-cols-2 items-stretch rounded-[2rem] overflow-hidden border border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-700"
    >
      {/* Image — alternates sides on desktop */}
      <div className={`relative h-64 md:h-auto overflow-hidden bg-slate-900 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-transparent to-[#020817]/80' : 'from-[#020817]/80 to-transparent'} hidden md:block`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 to-transparent md:hidden" />

        {/* Phase label on image */}
        <div className="absolute top-6 left-6">
          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`relative p-8 md:p-14 flex flex-col justify-center gap-5 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        {/* Hover gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        <div className="relative z-10 flex flex-col gap-5">
          {/* Tag */}
          <span className={`inline-flex w-fit items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full border ${service.tagColor}`}>
            <FiZap size={9} />
            {service.tag}
          </span>

          {/* Title */}
          <h2
            className="font-black text-white uppercase tracking-tighter leading-[0.92] group-hover:text-indigo-300 transition-colors duration-500"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
          >
            {service.title}
          </h2>

          {/* Desc */}
          <p className="text-slate-500 text-[15px] md:text-[16px] leading-relaxed font-medium group-hover:text-slate-400 transition-colors duration-300">
            {service.desc}
          </p>

          {/* Trust micro line */}
          <p className="text-[9px] text-slate-700 uppercase tracking-[0.25em] font-black">
            Built for performance • Designed to scale
          </p>

          {/* Expand line */}
          <div className="h-px w-8 bg-white/10 group-hover:w-20 group-hover:bg-indigo-500/40 transition-all duration-700 rounded-full" />

          {/* CTA — only on last card */}
          {service.id === 'ui-ux-design-branding' && (
            <Link
              href="/#contact"
              className="group/btn relative mt-2 inline-flex items-center gap-2.5 w-fit px-8 py-3.5 rounded-full bg-indigo-600 text-white font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden no-underline hover:bg-indigo-500 transition-colors shadow-xl shadow-indigo-600/20"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              Start Your Project
              <FiArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="relative bg-[#020817] min-h-screen py-32 overflow-hidden">

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
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-indigo-600/6 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-violet-600/6 blur-[120px] rounded-full" />
      </div>

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent z-0 pointer-events-none"
        animate={{ top: ['5%', '95%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 w-[90%] md:w-[78%] mx-auto">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-px bg-indigo-500" />
            <span className="text-[9px] font-black tracking-[0.35em] text-indigo-400 uppercase">
              Capabilities
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-end">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-black tracking-tighter leading-[0.9] text-white uppercase"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              Our Core<br />
              <span className="text-slate-600 font-medium not-italic">Services.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-slate-500 text-[15px] md:text-[17px] font-medium leading-relaxed"
            >
              We don't just build digital products — we engineer systems that grow your business, automate operations, and generate revenue.
            </motion.p>
          </div>
        </div>

        {/* ── Service Cards ── */}
        <div className="flex flex-col gap-5 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

      </div>

      {/* Bottom divider */}
      <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  );
}