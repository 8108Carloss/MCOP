import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Login: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;