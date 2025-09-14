'use client';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import '@/app/styles/why.css'; // ✅ Make sure this import exists

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Chiyantra Tech Background"
        fill
        priority
        className="object-cover blur-sm scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1 className="text-3xl md:text-5xl font-light text-white leading-snug tracking-wide mb-4">
          Welcome to <span className="text-blue-400 font-medium">ChiyaTech Solutions</span>
        </h1>
        <p className="text-sm md:text-lg text-blue-200 max-w-xl leading-relaxed mb-6">
          We craft cinematic websites, bold brand identities, and interactive experiences that leave a lasting impact.
          From animated portfolios to AI-powered tools, ChiyaTech Solutions blends design, code, and intelligence to bring your vision to life.
        </p>
      </div>

      {/* Down Arrow */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FaChevronDown className="text-white text-xl animate-bounce" />
      </a>
    </section>
  );
}
