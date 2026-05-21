"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiZap, FiLayers, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const principles = [
  {
    icon: FiZap,
    title: "Fast. Focused. Done.",
    desc: "No delays, no unnecessary layers. We execute fast and deliver systems ready to perform from day one.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/8",
    border: "border-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/50",
    hoverBg: "hover:bg-indigo-500/5",
  },
  {
    icon: FiLayers,
    title: "Built for Scale",
    desc: "Every product handles growth — more users, more data, more demand — without breaking.",
    color: "text-violet-400",
    bg: "bg-violet-500/8",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/50",
    hoverBg: "hover:bg-violet-500/5",
  },
  {
    icon: FiTrendingUp,
    title: "Results Over Hype",
    desc: "Everything we create is focused on driving real business outcomes — not just looking good.",
    color: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
    hoverBg: "hover:bg-blue-500/5",
  },
];

const tags = ["Web Platforms", "AI Systems", "Automation", "SaaS Products"];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 overflow-hidden bg-[#020817]"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/7 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/7 blur-[120px] rounded-full" />
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0f172a] pointer-events-none z-0" />

      <div ref={ref} className="relative z-10 w-[90%] md:w-[78%] mx-auto">

        {/* ── Top label ── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14 md:mb-18"
        >
          <div className="w-6 h-px bg-indigo-500" />
          <span className="text-[9px] font-black tracking-[0.35em] text-indigo-400 uppercase">
            About ChiyaTech
          </span>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="space-y-7"
            >
              <h2
                className="font-black tracking-tighter leading-[0.9] text-white uppercase"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
              >
                We Build<br />
                Systems That<br />
                <span className="text-indigo-400 italic">Actually Work.</span>
              </h2>

              {/* Animated divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-14 h-[2px] bg-indigo-500 rounded-full origin-left"
              />

              <p className="max-w-lg text-[15px] md:text-[17px] text-slate-400 font-medium leading-[1.8]">
                ChiyaTech is a technology partner for businesses that want more than just a website. We design, build, and scale high-performance digital products — from websites to AI-powered systems — focused on growth, automation, and real results.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full border border-white/8 bg-white/3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-400 hover:text-white transition-colors no-underline"
                >
                  <span className="w-5 h-px bg-indigo-500 group-hover:w-8 transition-all duration-300" />
                  Work With Us
                  <FiArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — Principle cards */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-4">
            {principles.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
                className={`group relative rounded-2xl border ${item.border} ${item.hoverBorder} ${item.hoverBg} bg-white/[0.025] p-6 md:p-7 transition-all duration-400 overflow-hidden`}
              >
                {/* Subtle corner glow */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500/5 blur-2xl rounded-full group-hover:bg-indigo-500/15 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <item.icon size={16} className={item.color} />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-black text-white uppercase tracking-wider mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="mt-4 h-px w-6 bg-white/8 group-hover:w-full group-hover:bg-indigo-500/20 transition-all duration-600 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          id="ready-to-move"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 md:mt-28 relative rounded-[2rem] overflow-hidden"
        >
          {/* Banner bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0d0f1f] to-violet-950 z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.2)_0%,transparent_60%)] z-0" />
          <div className="absolute inset-0 border border-indigo-500/15 rounded-[2rem] z-0" />

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
            <div className="text-center md:text-left">
              <p className="text-[9px] font-black tracking-[0.35em] text-indigo-400 uppercase mb-3">
                Ready to start?
              </p>
              <h4
                className="font-black uppercase tracking-tighter leading-[0.92] text-white"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
              >
                Build Something<br />
                <span className="text-slate-400 font-medium not-italic italic">That Actually Scales.</span>
              </h4>
              <p className="text-slate-500 font-medium mt-3 text-sm">
                Real systems. Real growth. Zero fluff.
              </p>
            </div>

            <Link
              href="/#contact"
              className="group flex-shrink-0 flex items-center gap-3 rounded-full bg-indigo-600 px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-2xl shadow-indigo-600/25 overflow-hidden relative no-underline transition-all hover:bg-indigo-500"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              Get Started
              <FiArrowRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}