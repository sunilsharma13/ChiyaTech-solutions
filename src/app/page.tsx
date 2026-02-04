import WhyChooseUs from './components/WhyChooseUs';
import ReadyToStart from './components/CTASection';
import Portfolio from './components/Portfolio';
import Hero from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <About />
      <Portfolio />
       <ReadyToStart />
      <Contact />
      <Footer />
    </main>
  );
}
