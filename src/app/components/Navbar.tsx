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
    { name: 'Cloud Solutions', href: '/services#cloud' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 px-4">
      <motion.div
        animate={{
          width: scrolled ? (typeof window !== 'undefined' && window.innerWidth < 768 ? '95%' : '73%') : '95%',
          // Normal state (unscrolled) ko bhi dark kiya hai (0.8 opacity)
          backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.95)' : 'rgba(3, 7, 18, 0.8)',
          backdropFilter: 'blur(20px)',
          borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.08)',
        }}
        className="max-w-7xl px-6 md:px-8 py-3 rounded-[1.5rem] border flex items-center justify-between shadow-2xl transition-all"
      >
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 no-underline">
          <div className="relative w-8 h-8 overflow-hidden rounded-lg border border-white/10">
            <Image 
              src="/Chiyatech.jpeg" 
              alt="ChiyaTech Logo"
              fill 
              className="object-cover" 
            />
          </div>
          <h1 className="text-lg font-black tracking-tighter text-white italic">
            CHIYA<span className="text-indigo-500 not-italic uppercase font-black">TECH</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold text-gray-300 hover:text-white tracking-[0.2em] uppercase transition-all no-underline"
            >
              {link.name}
            </Link>
          ))}

          {/* Desktop Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link 
              href="/services"
              className="flex items-center gap-1 text-[11px] font-bold text-gray-300 hover:text-white tracking-[0.2em] uppercase transition-all no-underline"
            >
              Services <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </Link>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full -left-4 mt-4 w-52 bg-[#0a0a0c] border border-white/10 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  {services.map(s => (
                    <Link key={s.name} href={s.href} className="block px-4 py-3 text-[10px] font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all no-underline uppercase tracking-widest">
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/#contact" 
            className="px-8 py-2.5 bg-indigo-600 text-white text-[11px] font-black rounded-xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20 tracking-widest uppercase no-underline"
          >
            Contact Us
          </Link>
        </div>

        <button 
          onClick={() => setMobileOpen(true)} 
          className="lg:hidden p-2 text-white bg-white/5 border border-white/10 rounded-xl"
        >
          <FiMenu size={22} />
        </button>
      </motion.div>

      {/* Mobile Menu remains the same */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setMobileOpen(false)} 
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[110]" 
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-gray-950 z-[120] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-black text-2xl italic text-white uppercase tracking-tighter">
                  CHIYA<span className="text-indigo-500 font-black not-italic">TECH</span>
                </span>
                <button onClick={() => setMobileOpen(false)} className="p-3 bg-white/5 border border-white/10 rounded-full text-white">
                  <FiX size={24}/>
                </button>
              </div>

              <div className="flex flex-col gap-10">
                <Link href="/#hero" onClick={() => setMobileOpen(false)} className="text-5xl font-black text-white tracking-tighter uppercase no-underline italic">Home</Link>
                <Link href="/#about" onClick={() => setMobileOpen(false)} className="text-5xl font-black text-white tracking-tighter uppercase no-underline italic">About</Link>
                <Link href="/#portfolio" onClick={() => setMobileOpen(false)} className="text-5xl font-black text-white tracking-tighter uppercase no-underline italic">Work</Link>
                <Link href="/services" onClick={() => setMobileOpen(false)} className="text-5xl font-black text-white tracking-tighter uppercase no-underline italic">Services</Link>
                
                <Link 
                  href="/#contact" 
                  onClick={() => setMobileOpen(false)} 
                  className="mt-8 w-full py-5 rounded-2xl bg-indigo-600 text-white text-center font-black tracking-[0.2em] text-xs uppercase shadow-2xl no-underline"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}