import React from 'react';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import About from '../components/landing/About';
import Contact from '../components/landing/Contact';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;