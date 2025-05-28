import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  MedicalOptional
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  Brindando atención médica de calidad desde hace 15 años.
                </p>
                <div className="flex space-x-6 mt-8">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Servicios
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/servicios/radiografias" className="text-base text-gray-300 hover:text-white">
                      Radiografías
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/terapias" className="text-base text-gray-300 hover:text-white">
                      Terapias
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/examenes" className="text-base text-gray-300 hover:text-white">
                      Exámenes particulares
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/consultas" className="text-base text-gray-300 hover:text-white">
                      Consultas médicas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Empresa
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/nosotros" className="text-base text-gray-300 hover:text-white">
                      Sobre nosotros
                    </Link>
                  </li>
                  <li>
                    <Link to="/equipo-medico" className="text-base text-gray-300 hover:text-white">
                      Equipo médico
                    </Link>
                  </li>
                  <li>
                    <Link to="/instalaciones" className="text-base text-gray-300 hover:text-white">
                      Instalaciones
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonios" className="text-base text-gray-300 hover:text-white">
                      Testimonios
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/privacidad" className="text-base text-gray-300 hover:text-white">
                      Política de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link to="/terminos" className="text-base text-gray-300 hover:text-white">
                      Términos y condiciones
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Contacto
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex">
                <Phone className="flex-shrink-0 h-5 w-5 text-gray-300 mr-3" />
                <span className="text-base text-gray-300">+57 3008973665</span>
              </li>
              <li className="flex">
                <Mail className="flex-shrink-0 h-5 w-5 text-gray-300 mr-3" />
                <span className="text-base text-gray-300">andresserayap17@gmail.com</span>
              </li>
              <li className="flex">
                <MapPin className="flex-shrink-0 h-5 w-5 text-gray-300 mr-3" />
                <span className="text-base text-gray-300">Av. Principal 123, Ciudad</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} MedicalOptional. Desarrollado Por: Camilo Andres Payares, Jesus Adrian Anaya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;