'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiLayers, FiShield, FiTrendingUp, FiShoppingBag, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'Talesy.in', category: 'AI & Media', desc: 'Scalable AI storytelling engine. Architected a custom pipeline for image-to-speech synchronization.', stats: '10k+ Generations', link: 'https://talesy.in', icon: <FiLayers /> },
  { id: 2, title: 'FinEdge Analytics', category: 'FinTech', desc: 'High-performance financial monitoring tool. Features real-time data streaming and predictive analytics.', stats: '99.9% Uptime', icon: <FiTrendingUp /> },
  { id: 3, title: 'ShopSphere V2', category: 'E-Commerce', desc: 'Optimized headless storefront built for conversion. Integrated custom inventory management.', stats: '40% Conversion Lift', icon: <FiShoppingBag /> },
  { id: 4, title: 'CloudOps Secure', category: 'Infrastructure', desc: 'Automated security auditing tool for AWS/Azure. Streamlines compliance checks.', stats: 'SOC2 Ready', icon: <FiShield /> },
];

const partners = [
  { name: 'DLB Motors', logo: '/dlb.png' },
  { name: 'GCD Classes', logo: '/gcd.png' },
  { name: 'Amora', logo: '/amora.jpg' },
  { name: 'Poshak', logo: '/poshak.png' },
  { name: 'Talesy', logo: '/talesy.PNG' },
  { name: 'TechVibe', logo: '/techvibe.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#cbd5e1] text-slate-900 overflow-hidden">
      <div className="w-[95%] md:w-[75%] mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-slate-900 pl-6">
          <p className="text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase mb-1">Our Work</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Engineering <span className="text-slate-500 italic">Value.</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/60 backdrop-blur-md border border-white/40 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-400/50"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  {/* Icon Hover Animation: Background flips and Icon turns White */}
                  <div className="flex gap-2">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 text-slate-900 text-2xl transition-all duration-500 group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                      {project.icon}
                    </div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 py-1 px-3 bg-white/80 border border-white rounded-full italic">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">{project.desc}</p>
                <span className="inline-block text-[10px] bg-slate-900/5 text-slate-700 font-black px-3 py-1 rounded-md uppercase mb-6 italic border border-slate-900/10">
                  {project.stats}
                </span>
              </div>
              <div className="pt-6 border-t border-slate-900/5">
                {project.link ? (
                  <a href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-indigo-600 no-underline transition-all hover:translate-x-2">
                    Launch Project <FiExternalLink />
                  </a>
                ) : (
                  <Link href="#contact" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 no-underline transition-all hover:translate-x-2">
                    Case Study <FiArrowRight />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Marquee */}
        <div className="pt-16 border-t border-slate-900/10">
          <h4 className="text-[10px] font-black text-slate-500 flex items-center gap-2 uppercase tracking-[0.4em] mb-10">
            Trusted Partners <FiCheckCircle className="text-indigo-600" />
          </h4>

          <div className="relative flex overflow-hidden">
            <motion.div 
              className="flex gap-20 items-center whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="relative w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex-shrink-0">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer Line */}
        <div className="mt-20 pt-8 border-t border-slate-900/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em]">
            © 2026 CHIYATECH — ARCHITECTING THE FUTURE
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-900 font-black text-[10px] tracking-[0.2em] uppercase px-4 py-1 bg-white/80 rounded-full border border-white shadow-sm">
              Verified Systems
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}