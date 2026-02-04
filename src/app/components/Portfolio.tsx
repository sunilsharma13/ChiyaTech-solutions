'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiLayers, FiShield, FiTrendingUp, FiShoppingBag, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'Talesy.in', category: 'AI & Media', desc: 'Scalable AI storytelling engine. Architected a custom pipeline for image-to-speech synchronization.', stats: '10k+ Generations', link: 'https://talesy.in', icon: <FiLayers className="text-2xl text-slate-600 group-hover:text-white transition-colors" /> },
  { id: 2, title: 'FinEdge Analytics', category: 'FinTech', desc: 'High-performance financial monitoring tool. Features real-time data streaming and predictive analytics.', stats: '99.9% Uptime', status: 'Enterprise Tool', icon: <FiTrendingUp className="text-2xl text-slate-600 group-hover:text-white transition-colors" /> },
  { id: 3, title: 'ShopSphere V2', category: 'E-Commerce', desc: 'Optimized headless storefront built for conversion. Integrated custom inventory management.', stats: '40% Conversion Lift', status: 'Internal Staging', icon: <FiShoppingBag className="text-2xl text-slate-600 group-hover:text-white transition-colors" /> },
  { id: 4, title: 'CloudOps Secure', category: 'Infrastructure', desc: 'Automated security auditing tool for AWS/Azure. Streamlines compliance checks.', stats: 'SOC2 Ready', status: 'Confidential', icon: <FiShield className="text-2xl text-slate-600 group-hover:text-white transition-colors" /> },
];

const partners = [
  { name: 'DLB Motors', logo: '/dlb.png' },
  { name: 'GCD Classes', logo: '/gcd.png' },
  { name: 'Amora', logo: '/amora.jpg' },
  { name: 'Poshak', logo: '/poshak.png' },
    { name: 'Talesy', logo: '/talesy.PNG' },
  { name: 'TechVibe', logo: '/techvibe.jpg' },
  { name: 'DLB Motors', logo: '/dlb.png' },
  { name: 'GCD Classes', logo: '/gcd.png' },
  { name: 'Amora', logo: '/amora.jpg' },
  { name: 'Poshak', logo: '/poshak.png' },
      { name: 'Talesy', logo: '/talesy.PNG' },
  { name: 'TechVibe', logo: '/techvibe.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="w-[90%] md:w-[72%] mx-auto">
        
        <div className="mb-16 border-l-4 border-slate-900 pl-6">
          <p className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase mb-2">Our Work</p>
          <h2 className="text-4xl md:text-6xl font-[800] tracking-tighter mb-4 uppercase leading-none">
            Engineering <span className="text-slate-300">Value.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#F8FAFC] border border-slate-200/60 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between transition-all hover:bg-white hover:border-slate-900 hover:shadow-2xl hover:shadow-slate-200"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-slate-900 transition-all duration-500">
                    {project.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 py-1.5 px-4 bg-white border border-slate-100 rounded-full italic">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase group-hover:text-slate-900 tracking-tight">{project.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium">{project.desc}</p>
                <div className="flex gap-3 mb-8">
                  <span className="text-[10px] bg-slate-200/50 text-slate-700 font-black px-4 py-1.5 rounded-lg uppercase">{project.stats}</span>
                </div>
              </div>
              <div className="pt-8 border-t border-slate-100">
                {project.link ? (
                  <a href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-indigo-600 no-underline transition-all group-hover:translate-x-1">
                    Launch Project <FiExternalLink />
                  </a>
                ) : (
                  <Link href="#contact" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 no-underline transition-all">
                    Request Case Study <FiArrowRight />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-24 border-t border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <h4 className="shrink-0 text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2 uppercase italic tracking-tighter">
              TRUSTED BY <FiCheckCircle className="text-emerald-500" />
            </h4>
            <div className="h-[2px] w-full bg-slate-100 hidden md:block" />
          </div>

          <div className="relative flex overflow-hidden py-10">
            <motion.div 
              className="flex gap-24 md:gap-32 items-center whitespace-nowrap"
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="relative w-32 h-16 md:w-44 md:h-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer flex-shrink-0"
                >
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 CHIYATECH — ARCHITECTING THE FUTURE
          </p>
          <div className="flex items-center gap-6">
            <div className="h-1 w-12 bg-slate-200 rounded-full hidden md:block" />
            <span className="text-slate-900 font-black text-[11px] tracking-widest uppercase shadow-sm px-4 py-1 bg-slate-50 rounded-full border border-slate-100">
              Verified Systems
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}