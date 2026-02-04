'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative bg-[#F8FAFC] text-slate-500 border-t border-slate-200 pt-16 md:pt-20 pb-10 md:pb-12 mt-0">
      <div className="w-[90%] md:w-[72%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">

          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
              CHIYA<span className="text-slate-800 not-italic uppercase font-black">TECH</span>
            </h3>
            <p className="text-sm md:text-base font-medium leading-relaxed max-w-sm mx-auto md:mx-0 text-slate-500">
              Architecting high-performance digital products and AI solutions. 
              Built for velocity, engineered for scale.
            </p>
          </div>

          <div className="md:col-span-4 text-center md:text-left space-y-4">
            <p className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase mb-6">Sitemap</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3 flex flex-col">
                <Link href="/#hero" className="text-sm font-bold text-slate-600 hover:text-slate-900 no-underline transition-colors">Home</Link>
                <Link href="/#about" className="text-sm font-bold text-slate-600 hover:text-slate-900 no-underline transition-colors">About</Link>
              </div>
              <div className="space-y-3 flex flex-col">
                <Link href="/#portfolio" className="text-sm font-bold text-slate-600 hover:text-slate-900 no-underline transition-colors">Work</Link>
                <Link href="/#contact" className="text-sm font-bold text-slate-600 hover:text-slate-900 no-underline transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-10">
            <div className="flex gap-4">
              {[
                { Icon: FaInstagram, href: "https://instagram.com/ChiyaTech.in" },
                { Icon: FaLinkedin, href: "https://linkedin.com/company/ChiyaTech" },
                { Icon: FaXTwitter, href: "https://twitter.com/ChiyaTech" },
                { Icon: FaReddit, href: "https://reddit.com/user/ChiyaTech" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 shadow-sm"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 leading-loose">
                © {new Date().getFullYear()} CHIYATECH. <br /> 
                <span className="text-slate-900 font-black tracking-widest">ENGINEERED FOR EXCELLENCE.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 h-[1px] w-full bg-slate-200/50" />
      </div>
    </footer>
  );
}