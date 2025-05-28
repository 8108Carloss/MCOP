import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-blue-50">
      {/* Decorative pattern */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
        <svg className="absolute right-0 top-0 transform translate-y-8 translate-x-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>
        <svg className="absolute left-0 bottom-0 transform -translate-y-8 -translate-x-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares-2)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-blue-600">
                Su bienestar es nuestra prioridad
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Cuidamos de su</span>
                <span className="block text-blue-600">Salud</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              MedicalOptional ofrece servicios médicos de alta calidad para toda la familia. Con más de 15 años de experiencia, nuestro equipo de especialistas está listo para brindarle la atención que merece.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link to="/signup">
                  <Button variant="primary" fullWidth>
                    Registrarse
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button variant="outline" fullWidth>
                    Ver servicios
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="ml-2 text-gray-700">Médicos especialistas</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="ml-2 text-gray-700">Citas flexibles</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="ml-2 text-gray-700">Atención rápida</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="Equipo médico"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 mix-blend-multiply opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;