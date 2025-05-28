import React from 'react';
import CompanyDashboard from '../components/company/CompanyDashboard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const CompanyDashboardPage: React.FC = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Cargando...</div>;
  }
  
  if (!user || user.role !== 'empresa') {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <Navbar />
      <CompanyDashboard />
      <Footer />
    </div>
  );
};

export default CompanyDashboardPage;