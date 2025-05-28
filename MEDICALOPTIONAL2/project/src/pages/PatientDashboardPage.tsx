import React from 'react';
import PatientDashboard from '../components/patient/PatientDashboard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PatientDashboardPage: React.FC = () => {
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
      <PatientDashboard />
      <Footer />
    </div>
  );
};

export default PatientDashboardPage;