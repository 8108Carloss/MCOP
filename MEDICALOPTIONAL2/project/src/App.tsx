import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PatientDashboardPage from './pages/PatientDashboardPage';
import DoctorDashboardPage from './pages/DoctorDashboardPage';
import CompanyDashboardPage from './pages/CompanyDashboardPage';
import AppointmentBookingPage from './pages/AppointmentBookingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RadiologyPage from './pages/services/RadiologyPage';
import TherapyPage from './pages/services/TherapyPage';
import LabPage from './pages/services/LabPage';
import ConsultationPage from './pages/services/ConsultationPage';
import CardiologyPage from './pages/services/CardiologyPage';
import NeurologyPage from './pages/services/NeurologyPage';
import PediatricsPage from './pages/services/PediatricsPage';
import CertificatesPage from './pages/services/CertificatesPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard-paciente" element={<PatientDashboardPage />} />
          <Route path="/dashboard-medico" element={<DoctorDashboardPage />} />
          <Route path="/dashboard-empresa" element={<CompanyDashboardPage />} />
          <Route path="/agendar-cita" element={<AppointmentBookingPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/servicios/radiografias" element={<RadiologyPage />} />
          <Route path="/servicios/terapias" element={<TherapyPage />} />
          <Route path="/servicios/examenes" element={<LabPage />} />
          <Route path="/servicios/consultas" element={<ConsultationPage />} />
          <Route path="/servicios/cardiologia" element={<CardiologyPage />} />
          <Route path="/servicios/neurologia" element={<NeurologyPage />} />
          <Route path="/servicios/pediatria" element={<PediatricsPage />} />
          <Route path="/servicios/certificados" element={<CertificatesPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;