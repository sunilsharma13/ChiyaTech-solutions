"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

/* 🔥 Liquid Gradient Background (Lightweight Fake Shader) */
const LiquidBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] animate-pulse top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse bottom-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse top-[40%] left-[50%]" />
    </div>
  );
};

/* 🔷 Floating 3D Element */
const GeometricSpark = () => {
  return (
    <Canvas className="h-[300px] md:h-[450px] lg:h-[550px]">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.2}>
          <Icosahedron args={[1, 15]} scale={2}>
            <MeshDistortMaterial
              color="#94A3B8"
              distort={0.4}
              speed={2}
              wireframe
            />
          </Icosahedron>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default function AuroraHero() {
  return (
    <section className="relative min-h-screen bg-[#020617] flex items-center justify-center overflow-hidden">

      {/* 🌊 Liquid Background */}
      <LiquidBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-24 lg:pt-20 flex flex-col items-center">

        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center w-full"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 mt-4 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-slate-400 backdrop-blur-md uppercase">
            <FiZap className="text-indigo-400" /> AI • Web • Automation
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full">

          {/* LEFT */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] text-white uppercase italic tracking-tighter"
            >
              Build Smarter <br /> 
              <span className="text-slate-400 not-italic">Grow Faster.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-lg text-base md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              We design high-performance websites, build powerful applications, 
              and integrate AI systems that automate workflows and turn visitors 
              into real customers.
            </motion.p>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center items-center h-[280px] md:h-[450px] relative order-1 lg:order-2">
            <GeometricSpark />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 items-center justify-center w-full pb-16">
          
          <motion.a
            href="#ready-to-move"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 rounded-full bg-indigo-600 px-12 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl"
          >
            Start Your Project
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <a href="#portfolio" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition">
            Explore Work
          </a>
        </div>

        {/* Trust */}
        <p className="text-xs text-slate-500 -mt-10 mb-10 text-center">
          Built for startups, businesses, and scaling brands.
        </p>

      </div>
    </section>
  );
}