'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle, FiClock, FiMail, FiPhone } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

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
      const url = `/api/proxy?${query}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
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
    } catch (err: any) {
      setError('Failed to send. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#F1F5F9] py-24 md:py-32 overflow-hidden">
      <div className="w-[90%] md:w-[72%] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 border-l-4 border-slate-900 pl-6 md:pl-10">
          <p className="text-[10px] md:text-xs font-black tracking-[0.4em] text-slate-500 uppercase mb-4">Inquiry</p>
          <h2 className="text-4xl md:text-7xl font-[800] tracking-tighter leading-none text-slate-900 uppercase">
            LET&apos;S START <br />
            <span className="text-slate-400 italic font-medium">THE DIALOGUE.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Have a vision? We have the engineering power to make it real. Reach out for high-impact collaborations.
            </p>
            
            <div className="space-y-6 pt-4">
              {/* Response Time */}
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-0.5">Response Time</p>
                  <p className="text-slate-900 font-bold text-lg tracking-tight">Under 24 Hours.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-0.5">Email Us</p>
                  <a href="mailto:chiyatech17@gmail.com" className="text-slate-900 font-bold text-lg tracking-tight hover:text-indigo-600 transition-colors no-underline">chiyatech17@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-0.5">Call / WhatsApp</p>
                  <a href="tel:+918890199213" className="text-slate-900 font-bold text-lg tracking-tight hover:text-indigo-600 transition-colors no-underline">+91 8890199213</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-Contrast Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 block group-focus-within:text-slate-900 transition-colors">Your Name</label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/50 border-b-2 border-slate-300 py-3 px-1 text-slate-900 focus:border-slate-900 focus:bg-white outline-none transition-all font-semibold placeholder:text-slate-400 placeholder:font-medium"
                    placeholder="Type your full name"
                  />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 block group-focus-within:text-slate-900 transition-colors">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/50 border-b-2 border-slate-300 py-3 px-1 text-slate-900 focus:border-slate-900 focus:bg-white outline-none transition-all font-semibold placeholder:text-slate-400 placeholder:font-medium"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 block group-focus-within:text-slate-900 transition-colors">Company / Project Name</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/50 border-b-2 border-slate-300 py-3 px-1 text-slate-900 focus:border-slate-900 focus:bg-white outline-none transition-all font-semibold placeholder:text-slate-400 placeholder:font-medium"
                  placeholder="e.g. ChiyaTech Solutions"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 block group-focus-within:text-slate-900 transition-colors">How can we help?</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/50 border-b-2 border-slate-300 py-3 px-1 text-slate-900 focus:border-slate-900 focus:bg-white outline-none transition-all font-semibold resize-none placeholder:text-slate-400 placeholder:font-medium"
                  placeholder="Tell us about your project or vision..."
                />
              </div>

              {error && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-red-600 text-[10px] font-black uppercase tracking-widest bg-red-50 p-4 rounded-xl border border-red-200">
                  <FiAlertCircle /> {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full md:w-auto px-12 py-5 bg-slate-900 text-white font-black text-[12px] uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-800 transition-all disabled:opacity-50 flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-slate-200"
              >
                {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                <FiSend className={`text-lg transition-transform ${isSubmitting ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl flex items-center justify-center z-[200] px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white border border-slate-200 p-12 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                <FiCheckCircle className="text-4xl text-emerald-500" />
              </div>
              <h3 className="text-3xl font-[800] text-slate-900 mb-4 tracking-tighter uppercase">Signal Received</h3>
              <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                Your engineering request is in. Our team will review and connect within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
              >
                Back to Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}