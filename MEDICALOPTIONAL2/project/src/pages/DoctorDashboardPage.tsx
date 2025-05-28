import React from 'react';
import DoctorDashboard from '../components/doctor/DoctorDashboard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const DoctorDashboardPage: React.FC = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Cargando...</div>;
  }
  
  if (!user || user.role !== 'medico') {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <Navbar />
      <DoctorDashboard />
      <Footer />
    </div>
  );
};

export default DoctorDashboardPage;