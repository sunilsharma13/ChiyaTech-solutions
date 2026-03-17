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
    } catch (error: unknown) {
      setError("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#F1F5F9] py-24 md:py-32 overflow-hidden">
      <div className="w-[90%] md:w-[72%] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 border-l-4 border-slate-900 pl-6 md:pl-10">
          <p className="text-[10px] md:text-xs font-black tracking-[0.4em] text-slate-500 uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-7xl font-[800] tracking-tighter leading-none text-slate-900 uppercase">
            TELL US WHAT YOU <br />
            <span className="text-slate-400 italic font-medium">WANT TO BUILD.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Share your idea, problem, or requirement — we’ll help you figure out the fastest way to build and scale it.
            </p>
            
            <div className="space-y-6 pt-4">

              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Response Time</p>
                  <p className="text-slate-900 font-bold text-lg">Within 24 Hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                  <a href="mailto:chiyatech17@gmail.com" className="text-slate-900 font-bold text-lg hover:text-indigo-600 no-underline">
                    chiyatech17@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call / WhatsApp</p>
                  <a href="tel:+918890199213" className="text-slate-900 font-bold text-lg hover:text-indigo-600 no-underline">
                    +91 8890199213
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-10">

              <div className="grid md:grid-cols-2 gap-10">
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white border-b-2 border-slate-300 py-3 px-2 focus:border-slate-900 outline-none font-semibold"
                />

                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-white border-b-2 border-slate-300 py-3 px-2 focus:border-slate-900 outline-none font-semibold"
                />
              </div>

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company / Project (optional)"
                className="w-full bg-white border-b-2 border-slate-300 py-3 px-2 focus:border-slate-900 outline-none font-semibold"
              />

              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you want to build? (website, app, AI, etc.)"
                className="w-full bg-white border-b-2 border-slate-300 py-3 px-2 focus:border-slate-900 outline-none font-semibold resize-none"
              />

              {error && (
                <div className="text-red-600 text-xs font-bold">{error}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-indigo-600 transition-all"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Plan'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-3xl text-center max-w-md"
            >
              <FiCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Request Sent</h3>
              <p className="text-slate-500 mb-6">
                We’ll review your idea and get back within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}