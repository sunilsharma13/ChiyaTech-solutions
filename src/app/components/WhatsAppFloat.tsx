'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-[#111827] border border-white/10 text-white text-[11px] font-bold px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap"
          >
            Chat with us on WhatsApp
            {/* Arrow */}
            <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#111827] border-r border-t border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <div className="relative">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-10" />

        <motion.a
          href="https://wa.me/918890199213"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30"
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </div>
    </div>
  );
}