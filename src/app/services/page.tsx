'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiZap } from 'react-icons/fi';

export default function ServicesPage() {
  const services = [
    {
      id: 'app-development',
      title: 'APP DEVELOPMENT',
      desc: 'We deliver scalable mobile apps for Android, iOS, and cross‑platform. Secure, intuitive, and performance‑driven architecture.',
      image: '/services_1.png',
    },
    {
      id: 'web-development',
      title: 'WEB DEVELOPMENT',
      desc: 'SEO‑optimized websites and web apps built with Next.js, React, and Tailwind. Fast, responsive, and conversion‑focused.',
      image: '/services_2.png',
    },
    {
      id: 'ai-chatbots-automation',
      title: 'AI & AUTOMATION',
      desc: 'Smart chatbots trained on your data. Automate support, lead generation, and CRM workflows with cutting-edge AI.',
      image: '/services_3.png',
    },
    {
      id: 'cloud-solutions-devops',
      title: 'CLOUD & DEVOPS',
      desc: 'Secure, cost‑optimized cloud architecture on AWS, Azure, Google Cloud. Migration, CI/CD, and real-time monitoring.',
      image: '/services_4.png',
    },
    {
      id: 'cybersecurity-services',
      title: 'CYBERSECURITY',
      desc: 'Vulnerability assessments, penetration testing, and compliance audits. Strong defenses against modern digital threats.',
      image: '/services_5.png',
    },
    {
      id: 'ui-ux-design-branding',
      title: 'UI/UX & BRANDING',
      desc: 'Intuitive designs, wireframes, prototypes, and full branding kits. Premium looks combined with high performance.',
      image: '/services_6.png',
    },
    {
      id: 'lets-build-together',
      title: "LET'S BUILD TOGETHER",
      desc: 'Got a bold idea or a complex challenge? Let’s collaborate to bring your vision to life with results‑driven engineering.',
      image: '/services_7.png',
    },
  ];

  return (
    // Background changed to #e2e8f0 for contrast with Navbar and previous section
    <section className="relative bg-[#e2e8f0] py-32 overflow-hidden">
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative z-10 w-[90%] md:w-[75%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 border-l-4 border-slate-900 pl-6 md:pl-10"
        >
          <div className="flex items-center gap-2 mb-4">
             <FiZap className="text-indigo-600 text-sm animate-pulse" />
             <p className="text-[10px] md:text-xs font-black tracking-[0.4em] text-slate-500 uppercase">Capabilities</p>
          </div>
          <h1 className="text-5xl md:text-8xl font-[900] tracking-tighter leading-[0.9] text-slate-900 uppercase">
            OUR CORE <br />
            <span className="text-slate-500 italic font-medium">SERVICES.</span>
          </h1>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group grid md:grid-cols-2 gap-0 items-stretch rounded-[3rem] overflow-hidden border border-white/40 bg-white/70 backdrop-blur-md hover:bg-white hover:border-slate-900 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              {/* Image Side */}
              <div className="relative h-72 md:h-auto overflow-hidden bg-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#e2e8f0]/80 via-transparent to-transparent md:hidden" />
              </div>

              {/* Text Side */}
              <div className="p-10 md:p-20 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Phase 0{i + 1}</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight group-hover:text-indigo-600 transition-colors duration-500">
                  {service.title}
                </h2>
                
                <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">
                  {service.desc}
                </p>
                
                <div className="pt-4">
                   <div className="h-[2px] w-12 bg-slate-200 group-hover:w-24 group-hover:bg-indigo-600 transition-all duration-700" />
                </div>

                {service.id === 'lets-build-together' && (
                  <Link
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-3 w-fit px-12 py-5 rounded-full bg-slate-900 text-white font-black text-[11px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl hover:scale-105 active:scale-95 no-underline"
                  >
                    Discuss Project <FiArrowRight className="text-lg" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 h-[1px] w-full bg-slate-300/50" />
    </section>
  );
}