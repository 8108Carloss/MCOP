import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { Link } from 'react-router-dom';
import { FileText, Calendar } from 'lucide-react';
import Button from '../../components/common/Button';

const LabPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8376158/pexels-photo-8376158.jpeg"
                alt="Laboratorio Clínico"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-3xl sm:text-4xl font-bold">Laboratorio Clínico</h1>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del servicio</h2>
              <p className="text-gray-600 mb-6">
                Nuestro laboratorio clínico está equipado con tecnología de última generación y cuenta con personal altamente calificado para garantizar resultados precisos y confiables en todos nuestros análisis.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tipos de exámenes:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Hemograma completo</li>
                <li>Perfil lipídico</li>
                <li>Perfil hepático</li>
                <li>Perfil renal</li>
                <li>Perfil tiroideo</li>
                <li>Pruebas de coagulación</li>
                <li>Exámenes de orina</li>
                <li>Pruebas hormonales</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preparación para exámenes</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Ayuno de 8-12 horas para la mayoría de los exámenes de sangre</li>
                <li>No realizar ejercicio intenso el día anterior</li>
                <li>Informar sobre medicamentos que esté tomando</li>
                <li>Traer orden médica y documentos de identificación</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Información importante</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Documentos necesarios</h4>
                    <p className="text-sm text-gray-600">Orden médica, documento de identidad y carnet del seguro (si aplica)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Horario de atención</h4>
                    <p className="text-sm text-gray-600">Lunes a viernes: 6:00 AM - 5:00 PM<br />Sábados: 6:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Link to="/agendar-cita">
                  <Button variant="primary" fullWidth>
                    Agendar cita
                  </Button>
                </Link>
                
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" fullWidth>
                    Consultar por WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LabPage;