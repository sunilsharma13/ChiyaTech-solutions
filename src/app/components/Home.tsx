"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import Link from 'next/link';
import { FiArrowRight, FiZap } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

export default function AuroraHero() {
  const color = useMotionValue("#64748B");

  useEffect(() => {
    animate(color, ["#64748B", "#6B7280", "#475569", "#64748B"], {
      ease: "easeInOut",
      duration: 16,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(120% 120% at 50% 0%, #F9FAFB 45%, ${color}08),
    radial-gradient(90% 90% at 30% 70%, #F1F5F9 0%, transparent 60%),
    radial-gradient(90% 90% at 70% 30%, #E2E8F0 0%, transparent 60%)
  `;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pb-20 overflow-hidden bg-[#F9FAFB]">
      <motion.div style={{ backgroundImage }} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-[92%] sm:w-[85%] md:w-[70%] lg:w-[65%] mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm mb-6 md:mb-10 text-sm md:text-base"
        >
          <FiZap className="text-slate-600 text-sm md:text-base" />
          <span className="font-semibold tracking-wide text-slate-800 uppercase text-xs md:text-sm">
            AI · Innovate · Scale
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight md:leading-[1.05] mb-6 md:mb-8"
        >
          Software That <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Actually Moves the Needle
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10 md:mb-14"
        >
          We build scalable, AI-driven digital products and immersive web experiences. High-performance code. Zero excuses. Real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center"
        >
          <Link
            href="/#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-slate-800 text-white rounded-xl font-semibold text-base md:text-lg tracking-wide hover:bg-slate-900 transition shadow-md hover:shadow-xl active:scale-98"
          >
            Explore Our Work
          </Link>

          <Link
            href="/#contact"
            className="group w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-white/80 backdrop-blur-sm border border-slate-300 text-slate-800 rounded-xl font-semibold text-base md:text-lg tracking-wide hover:bg-white hover:border-slate-400 hover:shadow-md transition flex items-center justify-center gap-2 active:scale-98"
          >
            Get in Touch
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={50} count={400} factor={4} fade speed={0.4} />
        </Canvas>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-[#F9FAFB] to-transparent pointer-events-none" />
    </section>
  );
}