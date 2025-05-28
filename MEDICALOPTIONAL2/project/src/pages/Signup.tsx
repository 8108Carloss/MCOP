import React from 'react';
import SignupForm from '../components/auth/SignupForm';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Signup: React.FC = () => {
  return (
    <div>
      <Navbar />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Signup;