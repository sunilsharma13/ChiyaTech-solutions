"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

const GeometricSpark = () => {
  return (
    <Canvas className="h-[300px] md:h-[450px] lg:h-[550px]">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366F1" />
      <Suspense fallback={null}>
        <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
          <Icosahedron args={[1, 15]} scale={2.2}>
            <MeshDistortMaterial
              color="#94A3B8"
              attach="material"
              distort={0.3}
              speed={2}
              wireframe={true}
            />
          </Icosahedron>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default function AuroraHero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#020617] flex items-center justify-center overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas>
          <Stars radius={50} count={2000} factor={4} fade speed={1} />
        </Canvas>
      </div>

      {/* FIXED: Added more padding-top (pt-32) for mobile to clear the Navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-24 lg:pt-20 flex flex-col items-center">
        
        {/* Next-Gen Engineering Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center w-full"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 mt-4 text-[10px] font-bold tracking-[0.3em] text-slate-400 backdrop-blur-md uppercase">
            <FiZap className="text-indigo-500" /> Next-Gen Engineering
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full">
          
          {/* Left Side: Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] text-white uppercase italic tracking-tighter"
            >
              AI. Data. <br /> 
              <span className="text-slate-500 not-italic">Web Architecture.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-lg text-base md:text-xl text-slate-400 font-medium leading-relaxed"
            >
              ChiyaTech specializes in building high-performance websites, 
              intelligent AI integrations, and scalable data storage solutions.
            </motion.p>
          </div>

          {/* Right Side: Geometric Spark */}
          <div className="flex justify-center items-center h-[280px] md:h-[450px] relative order-1 lg:order-2">
            <GeometricSpark />
            <div className="absolute w-56 h-56 bg-indigo-500/10 blur-[100px] rounded-full z-[-1]" />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 lg:mt-8 flex flex-col sm:flex-row gap-6 items-center justify-center w-full pb-16">
          <motion.a
            href="#ready-to-move"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 rounded-full bg-indigo-600 px-12 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition-all no-underline shadow-2xl shadow-indigo-500/20"
          >
            Start a Project
            <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <a href="#portfolio" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors no-underline">
            Our Expertise
          </a>
        </div>
      </div>

      {/* 3D Grid Floor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[400px] opacity-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg)',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />
    </section>
  );
}