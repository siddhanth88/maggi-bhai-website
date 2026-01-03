import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <About />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
