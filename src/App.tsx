import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import HotelBooking from './components/HotelBooking';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <About />
            <Services onNavigate={setCurrentPage} />
            <WhyChooseUs onNavigate={setCurrentPage} />
            <Testimonials />
            <FAQ onNavigate={setCurrentPage} />
          </>
        );
      case 'about':
        return <About detailed />;
      case 'services':
        return <Services onNavigate={setCurrentPage} detailed />;
      case 'hotels':
        return <HotelBooking />;
      case 'packages':
        return <Packages onNavigate={setCurrentPage} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
