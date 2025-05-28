import React from 'react';
import AppointmentBooking from '../components/patient/AppointmentBooking';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AppointmentBookingPage: React.FC = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Cargando...</div>;
  }
  
  if (!user || user.role !== 'paciente') {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <Navbar />
      <AppointmentBooking />
      <Footer />
    </div>
  );
};

export default AppointmentBookingPage;