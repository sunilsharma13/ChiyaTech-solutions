import './globals.css'
import type { Metadata } from "next"
import Navbar from './components/Navbar'
import ScrollFix from './components/ScrollFix'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: {
    default: "ChiyaTech | Engineering Digital Dominance",
    template: "%s | ChiyaTech"
  },
  description: "ChiyaTech specializes in AI-powered website development, mobile apps, and branding solutions built for scale.",
  metadataBase: new URL('https://chiyatech.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ChiyaTech | Engineering Digital Dominance',
    description: 'We build fast, scalable, and intelligent digital products—AI, Web, Apps, and Cloud Solutions.',
    url: 'https://chiyatech.in',
    siteName: 'ChiyaTech', // <--- Yeh Google ko batayega brand name
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png", // Mobile users ke liye achha hai
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD Schema: Yeh Google Search results ko "Logo" se "ChiyaTech" mein convert karega
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChiyaTech",
    "url": "https://chiyatech.in",
    "logo": "https://chiyatech.in/Chiyatech.jpeg",
    "description": "Tech company specializing in AI-powered website development and branding."
  };

  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#F1F5F9] text-slate-900 selection:bg-indigo-100 selection:text-indigo-700 antialiased">
        <ScrollFix />
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  )
}