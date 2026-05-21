'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiSend, FiCheckCircle, FiClock, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiClock,
    label: 'Response Time',
    value: 'Within 24 Hours',
    href: null,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/8',
    border: 'border-indigo-500/20',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'contact@chiyatech.in',
    href: 'mailto:contact@chiyatech.in',
    color: 'text-violet-400',
    bg: 'bg-violet-500/8',
    border: 'border-violet-500/20',
  },
  {
    icon: FiPhone,
    label: 'Call / WhatsApp',
    value: '+91 8890199213',
    href: 'tel:+918890199213',
    color: 'text-blue-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '', email: '', company: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [focused, setFocused] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const query = new URLSearchParams(
        Object.entries(formData).filter(([_, v]) => v.trim() !== '')
      ).toString();
      const res = await fetch(`/api/proxy?${query}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      });
      if (!res.ok) throw new Error(`Proxy error ${res.status}`);
      const result = await res.json();
      if (result.status === 'success') {
        setShowSuccess(true);
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setError(result.message || 'Server error occurred');
      }
    } catch {
      setError('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full bg-transparent border-b border-white/10 py-3.5 px-0 text-white text-[14px] font-medium placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-indigo-500';

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-[#020817] overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/7 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/6 blur-[120px] rounded-full" />
      </div>

      <div ref={ref} className="relative z-10 w-[90%] md:w-[78%] mx-auto">

        {/* ── Header ── */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-px bg-indigo-500" />
            <span className="text-[9px] font-black tracking-[0.35em] text-indigo-400 uppercase">
              Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-black tracking-tighter leading-[0.9] text-white uppercase"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Tell Us What<br />
            <span className="text-slate-600 font-medium not-italic">You Want</span><br />
            <span className="text-indigo-400 italic">To Build.</span>
          </motion.h2>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-slate-400 text-[15px] md:text-[17px] font-medium leading-[1.8]"
            >
              Share your idea, problem, or requirement — we'll help you figure out the fastest way to build and scale it.
            </motion.p>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3 mt-2">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.18 + i * 0.08 }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border ${info.border} ${info.bg} transition-all duration-300 hover:border-opacity-60`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border ${info.border} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <info.icon size={16} className={info.color} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-[14px] font-bold text-slate-300 hover:${info.color} no-underline transition-colors duration-200`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[14px] font-bold text-slate-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: 'name', placeholder: 'Your Name', type: 'text', required: true },
                  { name: 'email', placeholder: 'Your Email', type: 'email', required: true },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <input
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused('')}
                      placeholder={field.placeholder}
                      className={inputBase}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-indigo-500"
                      animate={{ width: focused === field.name ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                ))}
              </div>

              {/* Company */}
              <div className="relative">
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused('')}
                  placeholder="Company / Project (optional)"
                  className={inputBase}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-indigo-500"
                  animate={{ width: focused === 'company' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder="What do you want to build? (website, app, AI, etc.)"
                  className={`${inputBase} resize-none`}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-indigo-500"
                  animate={{ width: focused === 'message' ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Error */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs font-bold"
                >
                  {error}
                </motion.p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className="group relative flex items-center gap-3 px-10 py-4 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-indigo-600/25 overflow-hidden hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Plan
                    <FiArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── Success Modal ── */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[200] px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#080c1a] border border-indigo-500/20 rounded-[2rem] p-10 md:p-14 text-center max-w-md w-full shadow-2xl overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_65%)] pointer-events-none" />
              <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6"
                >
                  <FiCheckCircle size={28} className="text-emerald-400" />
                </motion.div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                  Request Sent!
                </h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                  We'll review your idea and get back to you within 24 hours. Let's build something great.
                </p>

                <button
                  onClick={() => setShowSuccess(false)}
                  className="group relative flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full mx-auto hover:bg-indigo-500 transition-colors overflow-hidden"
                >
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}