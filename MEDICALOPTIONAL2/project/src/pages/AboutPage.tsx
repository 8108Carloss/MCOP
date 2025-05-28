import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import About from '../components/landing/About';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;