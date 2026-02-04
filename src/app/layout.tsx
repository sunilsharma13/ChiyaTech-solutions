import './globals.css'
import type { Metadata } from "next"
import Navbar from './components/Navbar'
import ScrollFix from './components/ScrollFix'
import WhatsAppFloat from './components/WhatsAppFloat'

export const metadata: Metadata = {
  title: "ChiyaTech | Engineering Digital Dominance",
  description: "We build fast, scalable, and intelligent digital products—AI, Web, Apps, and Cloud Solutions.",
  metadataBase: new URL('https://chiyatech.in'),
  icons: {
    icon: "/favicon.png",
  },
}

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-pt-24`}>
      <body className="font-sans bg-[#F1F5F9] text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
        <ScrollFix />
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  )
}