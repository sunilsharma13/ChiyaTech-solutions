'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
  ];

  const services = [
    { name: 'App Development', href: '/services#app-development' },
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'AI & Automation', href: '/services#ai' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          width: scrolled ? 'min(72vw, 1100px)' : 'min(95vw, 1400px)',
          backgroundColor: scrolled ? 'rgba(3,7,18,0.97)' : 'rgba(3,7,18,0.78)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(99,102,241,0.10), 0 2px 0 rgba(255,255,255,0.04)'
            : '0 2px 20px rgba(0,0,0,0.2)',
        }}
        transition={{ y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.7 }, width: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, backgroundColor: { duration: 0.4 }, boxShadow: { duration: 0.4 } }}
        style={{ backdropFilter: 'blur(24px)' }}
        className="px-6 md:px-8 py-3 rounded-[1.5rem] border border-white/[0.07] flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 no-underline">
          <motion.div
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="relative w-8 h-8 overflow-hidden rounded-lg border border-white/10 shadow-lg shadow-indigo-500/20"
          >
            <Image src="/Chiyatech.jpeg" alt="ChiyaTech Logo" fill className="object-cover" />
          </motion.div>
          <h1 className="text-lg font-black tracking-tighter text-white italic">
            CHIYA<span className="text-indigo-400 not-italic uppercase font-black">TECH</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setActiveLink(link.name)}
              onMouseLeave={() => setActiveLink('')}
              className="relative text-[11px] font-bold text-gray-400 hover:text-white tracking-[0.2em] uppercase transition-colors duration-200 no-underline"
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 h-[1.5px] bg-indigo-400 rounded-full block"
                initial={{ width: 0 }}
                animate={{ width: activeLink === link.name ? '100%' : 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              />
            </Link>
          ))}

          {/* Services Dropdown — no width animation conflict */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-[11px] font-bold text-gray-400 hover:text-white tracking-[0.2em] uppercase transition-colors duration-200 no-underline"
            >
              Services
              <motion.span
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.22 }}
                className="inline-flex"
              >
                <FiChevronDown size={12} />
              </motion.span>
            </Link>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full -left-4 mt-5 w-56 bg-[#080b14] border border-white/[0.07] rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
                >
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent rounded-full" />
                  {services.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={s.href}
                        className="flex items-center gap-2 px-4 py-3 text-[10px] font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all no-underline uppercase tracking-widest group"
                      >
                        <span className="w-1 h-1 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors flex-shrink-0" />
                        {s.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#contact"
              className="relative px-7 py-2.5 bg-indigo-600 text-white text-[11px] font-black rounded-xl tracking-widest uppercase no-underline overflow-hidden group inline-block"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="relative z-10">Contact Us</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 text-white bg-white/5 border border-white/10 rounded-xl"
        >
          <FiMenu size={22} />
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[110]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[#05070f] border-l border-white/[0.06] z-[120] p-10 flex flex-col overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex justify-between items-center mb-16 relative z-10">
                <span className="font-black text-2xl italic text-white uppercase tracking-tighter">
                  CHIYA<span className="text-indigo-400 font-black not-italic">TECH</span>
                </span>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => setMobileOpen(false)}
                  className="p-3 bg-white/5 border border-white/10 rounded-full text-white"
                >
                  <FiX size={22} />
                </motion.button>
              </div>

              <div className="flex flex-col gap-8 relative z-10">
                {[
                  { label: 'Home', href: '/#hero' },
                  { label: 'About', href: '/#about' },
                  { label: 'Work', href: '/#portfolio' },
                  { label: 'Services', href: '/services' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-5xl font-black text-white/80 hover:text-white tracking-tighter uppercase no-underline italic transition-colors duration-200 block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link
                    href="/#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-6 w-full py-5 rounded-2xl bg-indigo-600 text-white text-center font-black tracking-[0.2em] text-xs uppercase shadow-2xl shadow-indigo-500/20 no-underline block relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              <div className="mt-auto pt-10 relative z-10">
                <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">
                  © 2026 ChiyaTech — Built for real results.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}