'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`); // ✅ URL hash update
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="group">
            <Image
              src="/Chiyatech.jpeg"
              alt="Logo"
              width={48}
              height={48}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex gap-10 text-sm font-medium text-white">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Services', id: 'services' },
              { label: 'Vision', id: 'vision' },
              { label: 'Work', id: 'portfolio' },
              { label: 'Contact', id: 'register' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative group"
              >
                <span className="group-hover:text-blue-400 transition">{label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>

          {/* Contact Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="hidden md:inline-block px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition duration-300 shadow-md hover:shadow-lg"
          >
            Connect Us
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f0f0f] border-t border-white/10 px-6 py-4 space-y-4 text-white text-sm font-medium animate-fade-in">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Services', id: 'services' },
              { label: 'Vision', id: 'vision' },
              { label: 'Work', id: 'portfolio' },
              { label: 'Contact', id: 'register' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left hover:text-blue-400 transition"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setShowPopup(true);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded transition text-sm"
            >
              Connect Us
            </button>
          </div>
        )}
      </nav>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div
            ref={popupRef}
            className="bg-[#0a1f3d] text-white p-6 rounded-xl shadow-xl border border-blue-500 max-w-sm w-full text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Let’s Connect</h3>
            <p className="text-sm text-blue-200 mb-4">Reach out anytime—we’re here to build something bold.</p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://wa.me/918890199213"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded transition"
              >
                WhatsApp Us
              </a>
              <a
                href="mailto:hello@chiyantra.com"
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded transition"
              >
                Email: sunil13.sharma08@gmail.com
              </a>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-3 py-1.5 bg-gray-700 hover:bg-gray-800 rounded transition text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
