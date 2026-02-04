'use client';

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918890199213"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14 md:w-16 md:h-16
        flex items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white text-3xl md:text-4xl
        shadow-xl
        hover:scale-110 hover:shadow-green-500/40
        transition-all duration-300
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
