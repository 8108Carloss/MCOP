import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, FileText, Thermometer, HeartPulse, Stethoscope, Microscope, Brain, Scan } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, to }) => {
  return (
    <Link 
      to={to}
      className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4 group-hover:bg-blue-600 transition-all">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-800">
        <span className="text-sm font-medium">Saber más</span>
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scan className="h-6 w-6" />,
      title: "Radiografías",
      description: "Diagnóstico por imagen utilizando la última tecnología para detectar diversas condiciones médicas.",
      to: "/servicios/radiografias"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Terapias",
      description: "Sesiones terapéuticas personalizadas para recuperación física y bienestar mental.",
      to: "/servicios/terapias"
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Exámenes de Laboratorio",
      description: "Análisis clínicos precisos con resultados rápidos para un diagnóstico efectivo.",
      to: "/servicios/examenes"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Consultas Médicas",
      description: "Atención especializada con médicos certificados en diversas áreas de la medicina.",
      to: "/servicios/consultas"
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Cardiología",
      description: "Diagnóstico y tratamiento de enfermedades cardiovasculares con equipos de última generación.",
      to: "/servicios/cardiologia"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Neurología",
      description: "Evaluación y tratamiento de trastornos del sistema nervioso por especialistas calificados.",
      to: "/servicios/neurologia"
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Pediatría",
      description: "Cuidado especializado para niños y adolescentes, desde recién nacidos hasta los 18 años.",
      to: "/servicios/pediatria"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Certificados Médicos",
      description: "Emisión de certificados médicos para diversos trámites personales y laborales.",
      to: "/servicios/certificados"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ofrecemos una amplia gama de servicios médicos para cuidar de su salud y bienestar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              to={service.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;