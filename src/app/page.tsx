import Services from './components/services';
import WhyChooseUs from './components/WhyChooseUs';
import FeatureShowcase from './components/FeatureShowcase';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import RegisterInterest from './components/RegisterInterest';
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Services />
      <WhyChooseUs />
      <FeatureShowcase />
      <Portfolio />
      <Stats />
      <Testimonials />
      <RegisterInterest />
      <Footer />
    </main>
  );
}
