import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, CreditCard, Building2, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import Input from '../common/Input';
import { UserRole } from '../../types';

const SignupForm: React.FC = () => {
  const { signup, error } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
    role: 'paciente' as UserRole,
    nombreEmpresa: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
    nombreEmpresa: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {
      nombre: '',
      apellido: '',
      cedula: '',
      email: '',
      telefono: '',
      password: '',
      confirmPassword: '',
      nombreEmpresa: ''
    };
    let isValid = true;
    
    // Required fields
    if (!formData.nombre) {
      errors.nombre = 'El nombre es requerido';
      isValid = false;
    }
    
    if (!formData.apellido) {
      errors.apellido = 'El apellido es requerido';
      isValid = false;
    }
    
    if (!formData.cedula) {
      errors.cedula = 'La cédula es requerida';
      isValid = false;
    } else if (!/^\d+$/.test(formData.cedula)) {
      errors.cedula = 'La cédula debe contener solo números';
      isValid = false;
    }
    
    if (!formData.email) {
      errors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
      isValid = false;
    }
    
    if (!formData.telefono) {
      errors.telefono = 'El teléfono es requerido';
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      errors.password = 'La contraseña es requerida';
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      errors.password = 'La contraseña debe contener al menos un número, una letra minúscula y una mayúscula';
      isValid = false;
    }
    
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirme su contraseña';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
      isValid = false;
    }
    
    // Empresa validation
    if (formData.role === 'empresa' && !formData.nombreEmpresa) {
      errors.nombreEmpresa = 'El nombre de la empresa es requerido';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      const userData = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        cedula: formData.cedula,
        email: formData.email,
        telefono: formData.telefono,
        role: formData.role,
        ...(formData.role === 'empresa' && { nombreEmpresa: formData.nombreEmpresa })
      };
      
      await signup(userData, formData.password);
      
      // Redirect based on role
      switch (formData.role) {
        case 'paciente':
          navigate('/dashboard-paciente');
          break;
        case 'medico':
          navigate('/dashboard-medico');
          break;
        case 'empresa':
          navigate('/dashboard-empresa');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      // Error is handled by the context
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crear una cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Ya tiene una cuenta?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Inicie sesión aquí
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de usuario
            </label>
            <div className="relative">
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-10"
              >
                <option value="paciente">Paciente</option>
                <option value="medico">Médico</option>
                <option value="empresa">Empresa</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {formData.role === 'paciente' && <User className="h-5 w-5 text-gray-400" />}
                {formData.role === 'medico' && <User className="h-5 w-5 text-gray-400" />}
                {formData.role === 'empresa' && <Building2 className="h-5 w-5 text-gray-400" />}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Nombre"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              error={formErrors.nombre}
              fullWidth
            />
            
            <Input
              label="Apellido"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              error={formErrors.apellido}
              fullWidth
            />
          </div>
          
          <Input
            label="Cédula"
            id="cedula"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            leftIcon={<CreditCard className="h-5 w-5" />}
            error={formErrors.cedula}
            fullWidth
          />
          
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            leftIcon={<Mail className="h-5 w-5" />}
            error={formErrors.email}
            fullWidth
          />
          
          <Input
            label="Teléfono"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            leftIcon={<Phone className="h-5 w-5" />}
            error={formErrors.telefono}
            fullWidth
          />
          
          {formData.role === 'empresa' && (
            <Input
              label="Nombre de la empresa"
              id="nombreEmpresa"
              name="nombreEmpresa"
              value={formData.nombreEmpresa}
              onChange={handleChange}
              leftIcon={<Building2 className="h-5 w-5" />}
              error={formErrors.nombreEmpresa}
              fullWidth
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
              leftIcon={<Lock className="h-5 w-5" />}
              error={formErrors.password}
              helperText="Mínimo 8 caracteres, incluya números, minúsculas y mayúsculas"
              fullWidth
            />
            
            <Input
              label="Confirmar Contraseña"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              leftIcon={<Lock className="h-5 w-5" />}
              error={formErrors.confirmPassword}
              fullWidth
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Acepto los{' '}
              <Link to="/terminos" className="font-medium text-blue-600 hover:text-blue-500">
                términos y condiciones
              </Link>
            </label>
          </div>
          
          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              isLoading={loading}
            >
              Registrarse
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;