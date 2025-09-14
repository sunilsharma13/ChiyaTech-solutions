import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Latest X logo

export default function Footer() {
  return (
    <footer className="bg-[#0a1f3d] text-white py-8 px-6 border-t border-blue-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-blue-300">© 2025 ChiyaTech, All rights reserved.</p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://instagram.com/ChiyaTech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition transform hover:scale-110 hover:drop-shadow-md"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/ChiyaTech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110 hover:drop-shadow-md"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/ChiyaTech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition transform hover:scale-110 hover:drop-shadow-md"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
