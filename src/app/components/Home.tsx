"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus, Environment } from "@react-three/drei";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

/* ─── 3D Ring / Torus ─── */
function ElegantRing() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.14;
      groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.18;
    }

    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={groupRef}>
        {/* Outer torus */}
        <Torus args={[1.6, 0.18, 64, 128]}>
          <MeshDistortMaterial
            color="#4f46e5"
            distort={0.15}
            speed={1.5}
            roughness={0.05}
            metalness={1}
          />
        </Torus>

        {/* Mid torus */}
        <Torus
          args={[1.1, 0.07, 32, 100]}
          rotation={[Math.PI / 2.4, 0.4, 0]}
        >
          <meshStandardMaterial
            color="#818cf8"
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.6}
          />
        </Torus>

        {/* Inner ring */}
        <mesh ref={innerRef}>
          <torusGeometry args={[0.65, 0.03, 16, 80]} />
          <meshBasicMaterial
            color="#a5b4fc"
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Center dot */}
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#c7d2fe"
            emissive="#6366f1"
            emissiveIntensity={2}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── Particles ─── */
function Particles() {
  const points = useRef<THREE.Points>(null);

  const count = 320;

  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.018;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.018}
        color="#818cf8"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Cursor Glow ─── */
function CursorGlow() {
  const [smooth, setSmooth] = useState({ x: -500, y: -500 });
  const posRef = useRef({ x: -500, y: -500 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let raf: number;

    const animate = () => {
      setSmooth((prev) => ({
        x: prev.x + (posRef.current.x - prev.x) * 0.07,
        y: prev.y + (posRef.current.y - prev.y) * 0.07,
      }));

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 rounded-full"
      style={{
        width: 520,
        height: 520,
        left: smooth.x - 260,
        top: smooth.y - 260,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)",
      }}
    />
  );
}

/* ─── Counter ─── */
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let cur = 0;

    const step = Math.ceil(to / 45);

    const t = setInterval(() => {
      cur += step;

      if (cur >= to) {
        setVal(to);
        clearInterval(t);
      } else {
        setVal(cur);
      }
    }, 28);

    return () => clearInterval(t);
  }, [to]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

/* ─── Cycling Word ─── */
const WORDS = ["Revenue.", "Growth.", "Leads.", "Results."];

function CyclingWord() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % WORDS.length);
    }, 2400);

    return () => clearInterval(t);
  }, []);

  return (
    <span
      className="relative inline-flex overflow-hidden align-bottom leading-none"
      style={{
        minWidth: "7ch",
        height: "1.25em",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 text-indigo-400 italic whitespace-nowrap"
        >
          {WORDS[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020817] flex items-center overflow-hidden">
      <CursorGlow />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(67,56,202,0.16) 0%, transparent 70%)",
            top: -160,
            left: -180,
          }}
          animate={{ scale: [1, 1.07, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 70%)",
            bottom: -100,
            right: -80,
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Line sweep */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
          animate={{ top: ["10%", "90%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-screen pt-28 md:pt-32 pb-16">

        {/* LEFT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/4 px-5 py-2 text-[9px] font-black tracking-[0.32em] text-slate-400 uppercase">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              AI • Web • Automation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-black leading-[0.92] text-white uppercase tracking-tighter"
            style={{
              fontSize: "clamp(2.4rem, 5.8vw, 5rem)",
            }}
          >
            We Engineer
            <br />

            <span className="text-slate-400/80 not-italic font-medium">
              Digital Systems
            </span>

            <br />

            That Drive <CyclingWord />
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-12 h-[2px] bg-indigo-500 rounded-full mt-8 mb-6 origin-left"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[380px] md:max-w-[420px] text-[15px] md:text-[17px] text-slate-400 font-medium leading-[1.75]"
          >
            From high-performance websites to AI automation — we build systems
            that work while you sleep, turning visitors into paying customers.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.33,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start"
          >
            <motion.a
              href="#ready-to-move"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2.5 rounded-full bg-indigo-600 px-7 md:px-9 py-3.5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-2xl shadow-indigo-600/25 overflow-hidden no-underline"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />

              Start Your Project

              <FiArrowRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            <a
              href="#portfolio"
              className="group flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 hover:text-slate-200 transition-colors duration-200 no-underline"
            >
              <span className="w-5 h-px bg-slate-600 group-hover:w-8 group-hover:bg-indigo-400 transition-all duration-300" />

              View Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.44,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14 flex flex-wrap gap-8 md:gap-10 items-center justify-center lg:justify-start"
          >
            {[
              { to: 10, suffix: "k+", label: "AI Generations" },
              { to: 99, suffix: "%", label: "Uptime" },
              { to: 6, suffix: "+", label: "Products Live" },
            ].map((s) => (
              <div key={s.label} className="relative">
                <p className="text-[1.6rem] md:text-[1.8rem] font-black text-white tracking-tight leading-none">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>

                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="relative flex justify-center items-center h-[300px] sm:h-[380px] md:h-[460px] lg:h-[560px] order-1 lg:order-2"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600/8 blur-[70px]" />
          </div>

          {/* Canvas */}
          <Canvas
            camera={{
              position: [0, 0, 5.5],
              fov: 42,
            }}
            className="w-full h-full"
          >
            <ambientLight intensity={0.35} />

            <pointLight
              position={[5, 5, 5]}
              intensity={3}
              color="#818cf8"
            />

            <pointLight
              position={[-5, -3, -3]}
              intensity={1.5}
              color="#6d28d9"
            />

            <pointLight
              position={[0, -5, 3]}
              intensity={1}
              color="#c7d2fe"
            />

            <Suspense fallback={null}>
              <ElegantRing />
              <Particles />
              <Environment preset="city" />
            </Suspense>
          </Canvas>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.55,
            }}
            className="absolute left-0 md:left-2 top-[18%] md:top-[30%] scale-90 md:scale-100 bg-white/4 border border-white/8 backdrop-blur-2xl rounded-2xl px-4 py-3 shadow-2xl"
          >
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">
              Response
            </p>

            <p className="text-[13px] font-black text-white">
              {"< 24 Hours"}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.3,
              duration: 0.55,
            }}
            className="absolute right-0 md:right-2 bottom-[18%] md:bottom-[30%] scale-90 md:scale-100 bg-indigo-950/60 border border-indigo-500/20 backdrop-blur-2xl rounded-2xl px-4 py-3 shadow-2xl"
          >
            <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest mb-1">
              Status
            </p>

            <div className="flex items-center gap-1.5">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />

              <p className="text-[13px] font-black text-white">
                AI Active 24/7
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none z-10" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-1 text-slate-600"
        >
          <FiArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}