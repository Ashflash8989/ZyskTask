
import './App.css';
import Header from './components//Header'
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import HeroHeader from './components/HeroHeader';
import FaqSection from './components/FaqSection';
import Feature from './components/Feature';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Testimonial from './components/Testimonial';
function App() {
  return (
   <>
   <Header />
   <HeroHeader />
  <Feature />
  <Testimonial />
  <FeatureSection />
  <FaqSection />
  <Posts />
  <CTASection />
   <Footer />
   </>
  );
}

export default App;
