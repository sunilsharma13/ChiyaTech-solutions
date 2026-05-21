'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiPhone, FiFileText, FiCode, FiZap } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: FiPhone,
    title: 'Discovery Call',
    subtitle: 'Free. No commitment.',
    desc: 'We understand your idea, goals, and requirements. You talk — we listen, ask the right questions, and figure out exactly what needs to be built.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/8',
    border: 'border-indigo-500/20',
    glow: 'rgba(99,102,241,0.15)',
    lineTo: 'from-indigo-500/40',
  },
  {
    number: '02',
    icon: FiFileText,
    title: 'We Send a Plan',
    subtitle: 'Clear scope. Honest pricing.',
    desc: 'Within 24 hours you get a clear plan — what we\'ll build, how long it takes, and what it costs. No vague estimates. No hidden charges.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/8',
    border: 'border-violet-500/20',
    glow: 'rgba(139,92,246,0.15)',
    lineTo: 'from-violet-500/40',
  },
  {
    number: '03',
    icon: FiCode,
    title: 'Build Starts',
    subtitle: 'Transparent. On time.',
    desc: 'We build fast — with regular updates so you always know where things stand. No radio silence, no surprises at the end.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
    glow: 'rgba(59,130,246,0.15)',
    lineTo: 'from-blue-500/40',
  },
  {
    number: '04',
    icon: FiZap,
    title: 'Launch + Support',
    subtitle: 'Live. And we stay.',
    desc: 'We launch your product and stay with you. Questions, fixes, improvements — we\'re a message away. Your success is how we measure ours.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/8',
    border: 'border-emerald-500/20',
    glow: 'rgba(16,185,129,0.15)',
    lineTo: 'from-emerald-500/40',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Connector line — hidden on last */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-[3.5rem] left-[3.5rem] w-full h-px z-0">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`h-full bg-gradient-to-r ${step.lineTo} to-transparent origin-left`}
          />
        </div>
      )}

      <div className={`group relative rounded-[1.75rem] border ${step.border} bg-white/[0.025] p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-opacity-60 hover:bg-white/[0.045] cursor-default`}>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem]"
          style={{ background: `radial-gradient(ellipse at top left, ${step.glow} 0%, transparent 65%)` }}
        />

        {/* Number watermark */}
        <span className="absolute top-5 right-6 text-[2.5rem] font-black text-white/[0.04] tracking-tighter select-none">
          {step.number}
        </span>

        <div className="relative z-10 flex flex-col gap-4">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
            <step.icon size={20} className={step.color} />
          </div>

          {/* Step label */}
          <div className="flex items-center gap-2">
            <span className={`text-[9px] font-black ${step.color} uppercase tracking-[0.3em]`}>
              Step {step.number}
            </span>
            <span className="w-4 h-px bg-white/10" />
            <span className="text-[9px] font-medium text-slate-600 uppercase tracking-widest">
              {step.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[17px] md:text-lg font-black text-white uppercase tracking-tight leading-snug group-hover:text-indigo-200 transition-colors duration-300">
            {step.title}
          </h3>

          {/* Desc */}
          <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
            {step.desc}
          </p>

          {/* Bottom expand line */}
          <div className={`h-px w-6 ${step.bg} group-hover:w-full transition-all duration-700 rounded-full mt-1`}
            style={{ background: `linear-gradient(to right, ${step.glow.replace('0.15', '0.4')}, transparent)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-28 md:py-36 bg-[#020817] overflow-hidden"
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

      {/* Parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/6 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/6 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent z-0 pointer-events-none"
        animate={{ top: ['5%', '95%'] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 w-[90%] md:w-[78%] mx-auto">

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
              Our Process
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-black tracking-tighter leading-[0.9] text-white uppercase"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
            >
              How We<br />
              <span className="text-slate-600 font-medium not-italic">Actually</span>{' '}
              <span className="text-indigo-400 italic">Work.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-slate-500 text-[15px] md:text-[16px] font-medium leading-relaxed"
            >
              No guesswork, no ghosting, no surprise invoices. Just a clear process from first call to final launch — and beyond.
            </motion.p>
          </div>
        </div>

        {/* ── Steps Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* ── Bottom trust bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12"
        >
          {[
            { val: 'Free', label: 'Discovery Call' },
            { val: '<24h', label: 'Plan Delivered' },
            { val: 'Zero', label: 'Hidden Charges' },
            { val: '100%', label: 'Transparent' },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              {i > 0 && <div className="hidden sm:block w-px h-6 bg-white/[0.07]" />}
              <div className="text-center">
                <p className="text-lg font-black text-white tracking-tight leading-none">
                  {item.val}
                </p>
                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-1">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}