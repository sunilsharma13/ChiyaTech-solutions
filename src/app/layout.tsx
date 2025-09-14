import './globals.css'
import Navbar from './components/Navbar'
import Hero from './components/hero';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<body className="bg-black text-white overflow-x-hidden">
<Navbar />
        <Hero />
        {children}
      </body>
    </html>
  )
}
