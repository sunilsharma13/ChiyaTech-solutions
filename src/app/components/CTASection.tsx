'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiZap } from 'react-icons/fi';

export default function ReadyToStart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="ready-to-move"
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

      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(67,56,202,0.14) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-violet-600/6 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-indigo-600/6 blur-[100px] rounded-full" />
      </div>

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent z-0 pointer-events-none"
        animate={{ top: ['10%', '90%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div ref={ref} className="relative z-10 w-[90%] md:w-[72%] mx-auto">

        {/* ── Main card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Card bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-[#080c1a] to-violet-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_65%)]" />
          <div className="absolute inset-0 border border-indigo-500/15 rounded-[2.5rem]" />

          {/* Top accent line */}
          <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

          {/* Dot grid inside card */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/8 px-5 py-2 text-[9px] font-black tracking-[0.35em] text-indigo-300 uppercase">
                <FiZap size={10} className="text-indigo-400" />
                Start Here
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-black tracking-tighter text-white uppercase leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
            >
              Let's Build<br />
              <span className="text-slate-500 font-medium not-italic">Something That</span><br />
              <span className="text-indigo-400 italic">Actually Grows.</span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-[2px] bg-indigo-500 rounded-full mx-auto mb-8 origin-center"
            />

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-400 max-w-xl mx-auto text-[15px] md:text-[17px] font-medium leading-relaxed mb-12"
            >
              Whether it's a website, app, or AI system — we build products that bring users, generate leads, and scale with your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://calendly.com/chiyatech17/30min"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-3 px-9 py-4 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-indigo-600/25 overflow-hidden no-underline hover:bg-indigo-500 transition-colors w-full sm:w-auto justify-center"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                <FiCalendar size={14} />
                Book Free Strategy Call
              </motion.a>

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 px-9 py-4 bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/8 hover:border-white/20 transition-all no-underline w-full sm:w-auto justify-center"
              >
                Tell Us Your Idea
                <FiArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Trust note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 text-slate-600 text-[9px] font-black uppercase tracking-[0.3em]"
            >
              No sales talk. Just clear direction on what to build and how to scale it.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Bottom micro stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { val: 'Free', label: 'Strategy Call' },
            { val: '<24h', label: 'First Response' },
            { val: '100%', label: 'Focused on Results' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="text-center py-5 px-4 rounded-2xl border border-white/[0.05] bg-white/[0.02]"
            >
              <p className="text-lg md:text-xl font-black text-white tracking-tight leading-none">
                {s.val}
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