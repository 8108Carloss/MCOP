import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre MedicalOptional
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Con más de 15 años de experiencia en el sector de la salud, MedicalOptional se ha consolidado como un centro médico de referencia, ofreciendo servicios de alta calidad a miles de pacientes.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Nuestro compromiso es brindar atención médica personalizada, utilizando tecnología de vanguardia y contando con un equipo de profesionales altamente calificados.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Calidad garantizada</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Todos nuestros servicios cumplen con los más altos estándares de calidad y seguridad.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Atención oportuna</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Valoramos su tiempo y nos esforzamos por brindar atención rápida y eficiente.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Equipo profesional</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Contamos con médicos especialistas y personal capacitado para brindar la mejor atención.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Reconocimiento</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nuestro centro médico ha sido reconocido por su excelencia en la atención al paciente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 relative">
            <div className="relative h-full overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Equipo médico en consulta"
              />
              <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-10"></div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-6 px-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-white">15+</p>
                    <p className="text-sm text-white opacity-80">Años de experiencia</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-sm text-white opacity-80">Especialistas</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">10k+</p>
                    <p className="text-sm text-white opacity-80">Pacientes atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;