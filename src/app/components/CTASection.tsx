'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export default function ReadyToStart() {
  return (
    <section id="ready-to-move" className="relative py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 blur-[120px] rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative w-[90%] md:w-[72%] mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[10px] md:text-xs font-black tracking-[0.5em] text-slate-400 uppercase mb-8">
            Start Here
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-[800] tracking-tighter text-slate-900 leading-[0.95] mb-10 uppercase">
            LET’S BUILD SOMETHING <br />
            <span className="text-slate-400 italic font-medium">THAT ACTUALLY GROWS.</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Whether it’s a website, app, or AI system — we build products that bring users, generate leads, 
            and scale with your business.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
              href="https://calendly.com/chiyatech17/30min" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-10 py-6 bg-slate-900 text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-slate-200 transition-all hover:bg-indigo-600 no-underline"
            >
              <FiCalendar className="text-lg" />
              Book Free Strategy Call
            </motion.a>

            <motion.a
              href="/#contact" 
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-3 px-10 py-6 bg-white border border-slate-200 text-slate-900 text-xs md:text-sm font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-50 transition-all shadow-sm no-underline"
            >
              Tell Us Your Idea
              <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </motion.a>
          </div>

          <p className="mt-14 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            No sales talk. Just clear direction on what to build and how to scale it.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[72%] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
}