"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiActivity } from "react-icons/fi";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const principles = [
    {
      title: "Direct Execution",
      desc: "Work directly with architects. No middle management, no communication lag—just raw technical speed.",
    },
    {
      title: "Scale First",
      desc: "Our architecture is cloud-native, designed to handle 10x growth without breaking or slowing down.",
    },
    {
      title: "ROI Driven",
      desc: "We prioritize speed and conversion over fluff. If it doesn't move the needle, we don't build it.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#F1F5F9] py-24 md:py-32 text-slate-900 overflow-hidden"
    >
      <div ref={ref} className="w-[90%] md:w-[72%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase">
                <FiActivity /> Our Mission
              </div>

              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 uppercase">
                Engineering <br />
                <span className="text-indigo-600">Digital</span> <br />
                Dominance.
              </h2>

              <p className="max-w-xl text-lg md:text-xl text-slate-600 font-medium leading-relaxed pt-4">
                We started ChiyaTech to fix a broken industry — where founders pay premium prices for mediocre tech. We build{" "}
                <span className="text-slate-900 font-bold">clean, fast, and scalable</span> software.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {["Next.js", "AI/ML", "Cloud Native"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-black border-b-2 border-indigo-500 text-slate-900 uppercase tracking-widest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {principles.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-sm hover:shadow-md transition-all group"
              >
                <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-black uppercase">
              Ready to build the future?
            </h4>
            <p className="text-slate-400 font-medium">
              Stop settling for mediocre. Start your build today.
            </p>
          </div>

          <Link
            href="/#contact"
            className="group flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-[12px] font-black uppercase tracking-widest text-slate-900 transition-all hover:bg-indigo-500 hover:text-white"
          >
            Get Started
            <FiArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
