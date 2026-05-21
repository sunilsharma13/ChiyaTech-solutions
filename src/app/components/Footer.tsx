'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiArrowRight, FiZap } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/#contact' },
];

const socials = [
  { Icon: FaInstagram, href: 'https://instagram.com/ChiyaTech.in', label: 'Instagram' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/company/ChiyaTech', label: 'LinkedIn' },
  { Icon: FaXTwitter, href: 'https://twitter.com/ChiyaTech', label: 'Twitter' },
  { Icon: FaReddit, href: 'https://reddit.com/user/ChiyaTech', label: 'Reddit' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#010610] text-slate-500 overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top fade from contact section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-[90%] md:w-[78%] mx-auto pt-16 md:pt-20 pb-10">

        {/* ── Mini CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 md:mb-20 rounded-[1.75rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#080c1a] to-violet-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(99,102,241,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 border border-indigo-500/15 rounded-[1.75rem]" />
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-8 md:py-10">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <FiZap size={12} className="text-indigo-400" />
                <span className="text-[9px] font-black tracking-[0.3em] text-indigo-400 uppercase">
                  Ready to start?
                </span>
              </div>
              <h4
                className="font-black text-white uppercase tracking-tighter leading-tight"
                style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}
              >
                Have Something in Mind?
              </h4>
              <p className="text-slate-500 text-sm font-medium mt-1">
                Let's build something that actually brings results.
              </p>
            </div>

            <Link
              href="/#contact"
              className="group flex-shrink-0 relative flex items-center gap-2.5 px-7 py-3.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden no-underline hover:bg-indigo-500 transition-colors shadow-xl shadow-indigo-600/20"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              Start Project
              <FiArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-14">

          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-5 text-center md:text-left">
            <Link href="/" className="no-underline inline-block">
              <h3 className="text-xl font-black text-white tracking-tighter uppercase italic w-fit mx-auto md:mx-0">
                CHIYA<span className="text-indigo-400 not-italic font-black">TECH</span>
              </h3>
            </Link>

            <p className="text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0 text-slate-500">
              We build websites, apps, and AI systems that help businesses grow, generate leads, and scale faster.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 justify-center md:justify-start mt-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-600 hover:text-white hover:bg-indigo-600 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 text-center md:text-left">
            <p className="text-[9px] font-black text-slate-700 tracking-[0.35em] uppercase mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-slate-500 hover:text-white transition-colors duration-200 no-underline w-fit mx-auto md:mx-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4 text-center md:text-right flex flex-col gap-4">
            <p className="text-[9px] font-black text-slate-700 tracking-[0.35em] uppercase mb-1">
              Get In Touch
            </p>
            <a
              href="mailto:contact@chiyatech.in"
              className="text-[13px] font-medium text-slate-500 hover:text-indigo-400 transition-colors no-underline"
            >
              contact@chiyatech.in
            </a>
            <a
              href="tel:+918890199213"
              className="text-[13px] font-medium text-slate-500 hover:text-indigo-400 transition-colors no-underline"
            >
              +91 8890199213
            </a>
            <a
              href="https://calendly.com/chiyatech17/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 hover:text-white transition-colors no-underline justify-center md:justify-end mt-1"
            >
              Book a Free Call
              <FiArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-700">
            © {new Date().getFullYear()} ChiyaTech — All rights reserved.
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-600">
            Built for{' '}
            <span className="text-indigo-400">Real Results.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}