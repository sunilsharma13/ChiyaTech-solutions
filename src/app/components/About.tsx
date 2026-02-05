"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiActivity, FiLayers, FiTrendingUp, FiZap } from "react-icons/fi";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const principles = [
    {
      title: "Direct Execution",
      icon: <FiZap />,
      desc: "Work directly with architects. No middle management lag—just raw technical speed.",
    },
    {
      title: "Scale First",
      icon: <FiLayers />,
      desc: "Cloud-native architecture designed to handle 10x growth without slowing down.",
    },
    {
      title: "ROI Driven",
      icon: <FiTrendingUp />,
      desc: "We prioritize conversion over fluff. If it doesn't move the needle, we don't build it.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        // Gradient thoda deep kiya hai taaki top text chamke
        background: "linear-gradient(to bottom, #020617 0%, #1e293b 60%, #cbd5e1 100%)"
      }}
    >
      <div ref={ref} className="w-[90%] md:w-[75%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold tracking-widest uppercase">
                <FiActivity className="animate-pulse" /> Our Mission
              </div>

              {/* Heading fix: White for visibility, Indigo for pop */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white uppercase italic">
                Engineering <br />
                <span className="text-indigo-500 not-italic">Digital Dominance.</span>
              </h2>

              <p className="max-w-xl text-lg md:text-xl text-slate-300 font-medium leading-relaxed pt-4">
                We fixed the broken agency model. ChiyaTech builds 
                <span className="text-white font-extrabold italic"> high-velocity </span> 
                systems that turn ambitious founders into market leaders.
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                {["Next.js", "AI/ML", "Cloud Native"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-black border-b-2 border-indigo-500/50 text-slate-300 uppercase tracking-[0.2em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Principles - Metallic Glass Cards */}
          <div className="lg:col-span-5 space-y-4 pt-10 lg:pt-0">
            {principles.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-xl transition-all group hover:border-indigo-500/50 hover:bg-slate-900/60 shadow-2xl"
              >
                <div className="text-indigo-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner - Sleek & High Contrast */}
        <motion.div
          id="ready-to-move"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 p-10 md:p-14 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/5"
        >
          <div className="text-center md:text-left">
            <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
              Ready to architect <br /> the future?
            </h4>
            <p className="text-slate-400 font-medium">
              Stop settling for mediocre. Start your elite build today.
            </p>
          </div>

          <Link
            href="/#contact"
            className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-slate-900"
          >
            Start A Project
            <FiArrowRight className="text-lg transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}