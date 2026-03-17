'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiLayers, FiShield, FiTrendingUp, FiShoppingBag, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Automotive Lead Generation Platform',
    category: 'Automotive',
    desc: 'DLB Motors needed a strong online presence to attract buyers and generate consistent inquiries. We built a fast, mobile-first website focused on showcasing inventory and increasing customer conversions.',
    result: 'More Qualified Leads',
    link: 'https://dlbmotors.in',
    icon: <FiShoppingBag />,
  },
  {
    id: 2,
    title: 'AI Content Generation Platform',
    category: 'AI & Media',
    desc: 'Built a scalable AI storytelling engine that automates image-to-speech content creation, enabling high-volume content generation with minimal manual effort.',
    result: '10k+ Content Generations',
    link: 'https://talesy.in',
    icon: <FiLayers />,
  },
  {
    id: 3,
    title: 'Real-Time Financial Analytics System',
    category: 'FinTech',
    desc: 'Developed a high-performance analytics platform with real-time data processing and predictive insights for faster and smarter financial decisions.',
    result: '99.9% System Reliability',
    icon: <FiTrendingUp />,
  },
  {
    id: 4,
    title: 'High-Converting E-Commerce Platform',
    category: 'E-Commerce',
    desc: 'Designed and built a conversion-focused headless e-commerce experience with seamless checkout and optimized product flows.',
    result: 'Improved Conversion Rate',
    icon: <FiShoppingBag />,
  },
  {
    id: 5,
    title: 'Cloud Security & Compliance System',
    category: 'Infrastructure',
    desc: 'Created an automated cloud auditing system for AWS & Azure to simplify compliance and continuously monitor security risks.',
    result: 'Enterprise Ready Infrastructure',
    icon: <FiShield />,
  },
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
        
        {/* HEADER */}
        <div className="mb-12 border-l-4 border-slate-900 pl-6">
          <p className="text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase mb-1">
            Proven Work
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Built for <span className="text-slate-500 italic">Real Impact.</span>
          </h2>
        </div>

        {/* PROJECT GRID */}
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
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 text-slate-900 text-2xl transition-all duration-500 group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                    {project.icon}
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 py-1 px-3 bg-white/80 border border-white rounded-full italic">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {project.desc}
                </p>

                <span className="inline-block text-[10px] bg-indigo-600/10 text-indigo-700 font-black px-3 py-1 rounded-md uppercase mb-6 italic border border-indigo-600/20">
                  {project.result}
                </span>
              </div>

              <div className="pt-6 border-t border-slate-900/5">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-indigo-600 no-underline transition-all hover:translate-x-2"
                  >
                    View Live <FiExternalLink />
                  </a>
                ) : (
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 no-underline transition-all hover:translate-x-2"
                  >
                    Request Similar Build <FiArrowRight />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="pt-16 border-t border-slate-900/10">
          <h4 className="text-[10px] font-black text-slate-500 flex items-center gap-2 uppercase tracking-[0.4em] mb-10">
            Trusted By Businesses <FiCheckCircle className="text-indigo-600" />
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

        {/* FINAL CTA */}
        <div className="mt-20 pt-12 border-t border-slate-900/10 text-center">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Want Similar Results?
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 font-medium">
            We help businesses build systems that drive growth, generate leads, and scale efficiently.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all"
          >
            Start Your Project
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}