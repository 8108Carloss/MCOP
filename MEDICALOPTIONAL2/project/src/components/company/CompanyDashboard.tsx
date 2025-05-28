import React, { useState } from 'react';
import { 
  Users, 
  User, 
  Plus, 
  Search, 
  Settings, 
  Building2, 
  ChevronDown, 
  Edit, 
  Trash2, 
  UserPlus, 
  FileText, 
  Calendar 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import Input from '../common/Input';

interface UserCardProps {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  specialty?: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  role,
  email,
  phone,
  specialty,
  onEdit,
  onDelete
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <div className="mt-1 flex items-center">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${role === 'Médico' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                {role}
              </span>
              {specialty && (
                <span className="ml-2 text-sm text-gray-500">
                  {specialty}
                </span>
              )}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Edit className="h-4 w-4" />}
          onClick={() => onEdit(id)}
        >
          Editar
        </Button>
        <Button
          variant="danger"
          size="sm"
          leftIcon={<Trash2 className="h-4 w-4" />}
          onClick={() => onDelete(id)}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
};

const CompanyDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('medicos');
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data
  const doctors = [
    {
      id: '1',
      name: 'Dr. Juan Pérez',
      role: 'Médico',
      email: 'juan.perez@medicaloptional.com',
      phone: '+123 456 7890',
      specialty: 'Medicina General'
    },
    {
      id: '2',
      name: 'Dra. María López',
      role: 'Médico',
      email: 'maria.lopez@medicaloptional.com',
      phone: '+123 456 7891',
      specialty: 'Cardiología'
    },
    {
      id: '3',
      name: 'Dr. Carlos Rodríguez',
      role: 'Médico',
      email: 'carlos.rodriguez@medicaloptional.com',
      phone: '+123 456 7892',
      specialty: 'Pediatría'
    }
  ];
  
  const patients = [
    {
      id: '101',
      name: 'Ana García',
      role: 'Paciente',
      email: 'ana.garcia@example.com',
      phone: '+123 456 7893'
    },
    {
      id: '102',
      name: 'Roberto Fernández',
      role: 'Paciente',
      email: 'roberto.fernandez@example.com',
      phone: '+123 456 7894'
    },
    {
      id: '103',
      name: 'Sofía Martínez',
      role: 'Paciente',
      email: 'sofia.martinez@example.com',
      phone: '+123 456 7895'
    }
  ];
  
  const handleEditUser = (id: string) => {
    console.log(`Edit user with ID: ${id}`);
    // Handle edit logic
  };
  
  const handleDeleteUser = (id: string) => {
    console.log(`Delete user with ID: ${id}`);
    // Handle delete logic
  };
  
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const AddUserModal = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      cedula: '',
      email: '',
      telefono: '',
      especialidad: '',
      password: '',
      confirmPassword: '',
      role: 'medico'
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form data:', formData);
      // Handle submission logic
      setShowAddModal(false);
    };
    
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 max-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {formData.role === 'medico' ? 'Agregar Médico' : 'Agregar Paciente'}
            </h2>
            <button
              onClick={() => setShowAddModal(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de usuario
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="medico">Médico</option>
                <option value="paciente">Paciente</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Nombre"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                fullWidth
                required
              />
              
              <Input
                label="Apellido"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            
            <Input
              label="Cédula"
              id="cedula"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              fullWidth
              required
            />
            
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            
            <Input
              label="Teléfono"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              fullWidth
              required
            />
            
            {formData.role === 'medico' && (
              <Input
                label="Especialidad"
                id="especialidad"
                name="especialidad"
                value={formData.especialidad}
                onChange={handleChange}
                fullWidth
                required
              />
            )}
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Contraseña"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />
              
              <Input
                label="Confirmar Contraseña"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowAddModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Bienvenido, {user?.nombreEmpresa}</h1>
                <p className="mt-1 text-blue-100">Panel de administración</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button
                  variant="success"
                  leftIcon={<Plus className="h-5 w-5" />}
                  onClick={() => setShowAddModal(true)}
                >
                  Agregar Usuario
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              <button
                onClick={() => setActiveTab('medicos')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'medicos'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Médicos
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('pacientes')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'pacientes'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Pacientes
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('reportes')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'reportes'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Reportes
                </div>
              </button>
              
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
                  Citas
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('configuracion')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'configuracion'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Configuración
                </div>
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {(activeTab === 'medicos' || activeTab === 'pacientes') && (
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {activeTab === 'medicos' ? 'Médicos' : 'Pacientes'}
                </h2>
                <div className="flex space-x-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Buscar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button
                    variant="outline"
                    leftIcon={<Plus className="h-5 w-5" />}
                    onClick={() => setShowAddModal(true)}
                  >
                    Agregar {activeTab === 'medicos' ? 'Médico' : 'Paciente'}
                  </Button>
                </div>
              </div>
            )}
            
            {activeTab === 'medicos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <UserCard
                      key={doctor.id}
                      id={doctor.id}
                      name={doctor.name}
                      role={doctor.role}
                      email={doctor.email}
                      phone={doctor.phone}
                      specialty={doctor.specialty}
                      onEdit={handleEditUser}
                      onDelete={handleDeleteUser}
                    />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <User className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron médicos</h3>
                    <p className="mt-1 text-gray-500">
                      {searchTerm ? 'Intente con otra búsqueda.' : 'Agregue un médico para comenzar.'}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'pacientes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPatients.length > 0 ? (
                  filteredPatients.map((patient) => (
                    <UserCard
                      key={patient.id}
                      id={patient.id}
                      name={patient.name}
                      role={patient.role}
                      email={patient.email}
                      phone={patient.phone}
                      onEdit={handleEditUser}
                      onDelete={handleDeleteUser}
                    />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <Users className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron pacientes</h3>
                    <p className="mt-1 text-gray-500">
                      {searchTerm ? 'Intente con otra búsqueda.' : 'Los pacientes registrados aparecerán aquí.'}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'reportes' && (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Reportes y Estadísticas</h3>
                <p className="mt-1 text-gray-500">Aquí podrá ver informes y estadísticas del sistema.</p>
                <p className="text-gray-500">Funcionalidad en desarrollo.</p>
              </div>
            )}
            
            {activeTab === 'citas' && (
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Gestión de Citas</h3>
                <p className="mt-1 text-gray-500">Aquí podrá ver y gestionar todas las citas programadas.</p>
                <p className="text-gray-500">Funcionalidad en desarrollo.</p>
              </div>
            )}
            
            {activeTab === 'configuracion' && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de la Empresa</h3>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div className="sm:col-span-2">
                      <p className="text-sm font-medium text-gray-500">Nombre de la Empresa</p>
                      <p className="mt-1 text-gray-900">{user?.nombreEmpresa}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Nombre del Administrador</p>
                      <p className="mt-1 text-gray-900">{user?.nombre} {user?.apellido}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Cédula/RUC</p>
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
                      Editar información
                    </Button>
                    <Button variant="outline">
                      Cambiar contraseña
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Configuración del Sistema</h4>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Notificaciones por email</p>
                          <p className="text-sm text-gray-500">Recibir notificaciones por email de nuevas citas</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input type="checkbox" name="email-notifications" id="email-notifications" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                          <label htmlFor="email-notifications" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Aprobación automática</p>
                          <p className="text-sm text-gray-500">Aprobar automáticamente las solicitudes de citas</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input type="checkbox" name="auto-approve" id="auto-approve" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                          <label htmlFor="auto-approve" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        Guardar configuración
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {showAddModal && <AddUserModal />}
    </div>
  );
};

export default CompanyDashboard;