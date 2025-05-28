import React, { useState } from 'react';
import { Calendar, Clock, FileText, CreditCard, MessageSquare, History, User, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

interface AppointmentCardProps {
  id: string;
  tipo: string;
  fecha?: string;
  hora?: string;
  estado: 'pendiente' | 'confirmada' | 'cancelada' | 'completada';
  doctor?: string;
  lugar?: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ 
  tipo, 
  fecha, 
  hora, 
  estado,
  doctor,
  lugar
}) => {
  const getStatusColor = () => {
    switch (estado) {
      case 'pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'confirmada': return 'bg-green-100 text-green-800';
      case 'cancelada': return 'bg-red-100 text-red-800';
      case 'completada': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusText = () => {
    switch (estado) {
      case 'pendiente': return 'Pendiente';
      case 'confirmada': return 'Confirmada';
      case 'cancelada': return 'Cancelada';
      case 'completada': return 'Completada';
      default: return 'Desconocido';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{tipo}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </span>
      </div>
      
      <div className="space-y-3">
        {fecha && (
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{fecha}</span>
          </div>
        )}
        
        {hora && (
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{hora}</span>
          </div>
        )}
        
        {doctor && (
          <div className="flex items-start">
            <User className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{doctor}</span>
          </div>
        )}
        
        {lugar && (
          <div className="flex items-start">
            <FileText className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">{lugar}</span>
          </div>
        )}
      </div>
      
      <div className="mt-5 flex space-x-2">
        {estado === 'pendiente' && (
          <Button variant="danger\" size="sm">
            Cancelar
          </Button>
        )}
        
        {estado === 'confirmada' && (
          <Button variant="outline" size="sm">
            Reagendar
          </Button>
        )}
        
        {estado === 'completada' && (
          <Button variant="outline" size="sm">
            Ver Detalles
          </Button>
        )}
        
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" leftIcon={<MessageSquare className="h-4 w-4" />}>
            Consultar
          </Button>
        </a>
      </div>
    </div>
  );
};

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('citas');
  
  // Mock data
  const appointments: AppointmentCardProps[] = [
    {
      id: '1',
      tipo: 'Consulta General',
      fecha: '15/07/2025',
      hora: '14:30',
      estado: 'confirmada',
      doctor: 'Dr. Juan Pérez',
      lugar: 'Consultorio 203'
    },
    {
      id: '2',
      tipo: 'Radiografía Dental',
      fecha: '22/07/2025',
      hora: '10:15',
      estado: 'pendiente',
      doctor: 'Dra. María López',
      lugar: 'Sala de Rayos X'
    },
    {
      id: '3',
      tipo: 'Terapia Física',
      estado: 'completada',
      fecha: '05/06/2025',
      hora: '11:00',
      doctor: 'Lic. Carlos Rodríguez',
      lugar: 'Sala de Terapia 2'
    }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Bienvenido, {user?.nombre}</h1>
                <p className="mt-1 text-blue-100">Panel de paciente</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Link to="/agendar-cita">
                  <Button variant="success" leftIcon={<Calendar className="h-5 w-5" />}>
                    Agendar nueva cita
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              <button
                onClick={() => setActiveTab('citas')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'citas'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Mis Citas
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('historial')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'historial'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Historial Médico
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('pagos')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'pagos'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Pagos
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('perfil')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'perfil'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Mi Perfil
                </div>
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'citas' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Próximas citas</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Todas
                    </Button>
                    <Button variant="outline" size="sm">
                      Pendientes
                    </Button>
                    <Button variant="outline" size="sm">
                      Confirmadas
                    </Button>
                  </div>
                </div>
                
                {appointments.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appointments.map((appointment) => (
                      <AppointmentCard key={appointment.id} {...appointment} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No tiene citas programadas</h3>
                    <p className="mt-1 text-gray-500">Agende una nueva cita para comenzar.</p>
                    <div className="mt-6">
                      <Link to="/agendar-cita">
                        <Button variant="primary">
                          Agendar Cita
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'historial' && (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Historial médico</h3>
                <p className="mt-1 text-gray-500">Aquí podrá ver su historial médico y resultados de exámenes.</p>
                <p className="text-gray-500">No hay registros disponibles.</p>
              </div>
            )}
            
            {activeTab === 'pagos' && (
              <div className="text-center py-12">
                <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Historial de pagos</h3>
                <p className="mt-1 text-gray-500">Aquí podrá ver sus pagos realizados y facturas pendientes.</p>
                <p className="text-gray-500">No hay registros disponibles.</p>
              </div>
            )}
            
            {activeTab === 'perfil' && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Mi Perfil</h3>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Nombre</p>
                      <p className="mt-1 text-gray-900">{user?.nombre}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Apellido</p>
                      <p className="mt-1 text-gray-900">{user?.apellido}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Cédula</p>
                      <p className="mt-1 text-gray-900">{user?.cedula}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="mt-1 text-gray-900">{user?.email}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Teléfono</p>
                      <p className="mt-1 text-gray-900">{user?.telefono}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <Button variant="outline">
                      Editar perfil
                    </Button>
                    <Button variant="outline">
                      Cambiar contraseña
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;