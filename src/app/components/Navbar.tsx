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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4">
      <motion.div
        animate={{
          width: scrolled ? '73%' : '95%',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(16px)',
          borderColor: scrolled ? 'rgba(226, 232, 240, 1)' : 'rgba(226, 232, 240, 0.4)',
        }}
        className="max-w-7xl px-6 md:px-8 py-3 rounded-[1.5rem] border flex items-center justify-between shadow-sm transition-all"
      >
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-sm">
<Image 
  src="/Chiyatech.jpeg" 
alt="ChiyaTech — Digital Product Studio"
  fill 
  className="object-cover" 
/>
          </div>
          <h1 className="text-lg font-bold tracking-tighter text-slate-900 italic">
  CHIYA<span className="text-slate-800 not-italic uppercase font-black">TECH</span>
</h1>

        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[12px] font-bold text-slate-500 hover:text-slate-900 tracking-widest uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className="relative" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[12px] font-bold text-slate-500 hover:text-slate-900 tracking-widest uppercase transition-colors">
              Services <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  className="absolute top-full -left-4 mt-4 w-52 bg-white border border-slate-100 rounded-2xl p-2 shadow-xl"
                >
                  {services.map(s => (
                    <Link key={s.name} href={s.href} className="block px-4 py-3 text-[11px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all">
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/#contact" 
            className="px-6 py-2.5 bg-slate-800 text-white text-[11px] font-bold rounded-xl hover:bg-slate-900 transition-all shadow-md tracking-widest uppercase"
          >
            Start Project
          </Link>
        </div>

        <button 
          onClick={() => setMobileOpen(true)} 
          className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-xl"
        >
          <FiMenu size={22} />
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setMobileOpen(false)} 
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]" 
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white z-[120] p-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-bold text-xl italic text-slate-900">CHIYA<span className="text-slate-800 font-black not-italic uppercase">TECH</span></span>
                <button onClick={() => setMobileOpen(false)} className="p-2 bg-slate-50 rounded-full"><FiX size={24}/></button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((l) => (
                  <Link key={l.name} href={l.href} onClick={() => setMobileOpen(false)} className="text-3xl font-black text-slate-900 tracking-tighter lowercase">{l.name}</Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <p className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Expertise</p>
                <div className="grid grid-cols-1 gap-4">
                  {services.map((s) => (
                    <Link key={s.name} href={s.href} onClick={() => setMobileOpen(false)} className="text-lg font-bold text-slate-600">{s.name}</Link>
                  ))}
                </div>
                <Link 
                  href="/#contact" 
                  onClick={() => setMobileOpen(false)} 
                  className="mt-10 w-full py-4 rounded-xl bg-slate-800 text-white text-center font-bold tracking-widest text-xs uppercase"
                >
                  Start Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}