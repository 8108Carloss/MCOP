import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, CreditCard, User, Clipboard, MessageSquare } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import Input from '../common/Input';
import { Servicio } from '../../types';

const servicios: Servicio[] = [
  {
    id: '1',
    nombre: 'Consulta General',
    descripcion: 'Consulta médica general para evaluación de salud',
    precio: 50,
    imagen: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categoria: 'consulta'
  },
  {
    id: '2',
    nombre: 'Radiografía',
    descripcion: 'Radiografía para diagnóstico por imagen',
    precio: 80,
    imagen: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categoria: 'radiografia'
  },
  {
    id: '3',
    nombre: 'Terapia Física',
    descripcion: 'Sesión de terapia física para rehabilitación',
    precio: 60,
    imagen: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categoria: 'terapia'
  },
  {
    id: '4',
    nombre: 'Examen de Laboratorio',
    descripcion: 'Análisis clínicos completos',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/8376158/pexels-photo-8376158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categoria: 'examen'
  }
];

const AppointmentBooking: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Servicio | null>(null);
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  
  const handleServiceSelect = (service: Servicio) => {
    setSelectedService(service);
    setCurrentStep(2);
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaymentProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsPaymentProcessing(false);
      setIsPaymentComplete(true);
      setCurrentStep(4);
    }, 2000);
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            1
          </div>
          <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            2
          </div>
          <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            3
          </div>
          <div className={`flex-1 h-1 mx-2 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            4
          </div>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <span className={currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}>Seleccionar servicio</span>
          <span className={currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}>Detalles</span>
          <span className={currentStep >= 3 ? 'text-blue-600' : 'text-gray-500'}>Pago</span>
          <span className={currentStep >= 4 ? 'text-blue-600' : 'text-gray-500'}>Confirmación</span>
        </div>
      </div>
    );
  };
  
  const renderServiceSelection = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Seleccione un servicio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleServiceSelect(servicio)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-2 px-4">
                  <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-blue-600 text-white">
                    {servicio.categoria.charAt(0).toUpperCase() + servicio.categoria.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{servicio.nombre}</h3>
                  <span className="text-lg font-bold text-blue-600">${servicio.precio}</span>
                </div>
                <p className="mt-2 text-gray-600">{servicio.descripcion}</p>
                
                <div className="mt-4 flex justify-between items-center">
                  <Button variant="outline" size="sm" rightIcon={<ChevronRight className="h-4 w-4" />}>
                    Seleccionar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderAppointmentDetails = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Detalles de la cita</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{selectedService?.nombre}</h3>
              <p className="text-gray-600">${selectedService?.precio}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Notas o síntomas (opcional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Describa brevemente sus síntomas o la razón de su cita..."
            ></textarea>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(1)}
          >
            Atrás
          </Button>
          <Button
            variant="primary"
            onClick={() => setCurrentStep(3)}
          >
            Continuar al pago
          </Button>
        </div>
      </div>
    );
  };
  
  const renderPayment = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Realizar pago</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Resumen de la solicitud</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Servicio:</span>
            <span className="font-medium">{selectedService?.nombre}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Precio:</span>
            <span className="font-medium">${selectedService?.precio}</span>
          </div>
          <div className="border-t border-gray-200 my-2 pt-2">
            <div className="flex justify-between font-bold">
              <span>Total a pagar:</span>
              <span className="text-blue-600">${selectedService?.precio}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-4">Método de pago</h3>
          <div className="space-y-4">
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <div className="ml-3 flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                <span className="font-medium text-gray-900">Tarjeta de Crédito/Débito</span>
              </div>
            </label>
            
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="paymentMethod"
                value="transfer"
                checked={paymentMethod === 'transfer'}
                onChange={() => setPaymentMethod('transfer')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <div className="ml-3 flex items-center">
                <Clipboard className="h-5 w-5 text-gray-400 mr-2" />
                <span className="font-medium text-gray-900">Transferencia Bancaria</span>
              </div>
            </label>
          </div>
        </div>
        
        <form onSubmit={handlePaymentSubmit}>
          {paymentMethod === 'card' && (
            <div className="space-y-4 mb-6">
              <Input
                label="Número de tarjeta"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                fullWidth
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Fecha de expiración"
                  id="expiration"
                  name="expiration"
                  placeholder="MM/AA"
                  fullWidth
                  required
                />
                
                <Input
                  label="CVC"
                  id="cvc"
                  name="cvc"
                  placeholder="123"
                  fullWidth
                  required
                />
              </div>
              
              <Input
                label="Nombre en la tarjeta"
                id="cardName"
                name="cardName"
                placeholder="NOMBRE APELLIDO"
                fullWidth
                required
              />
            </div>
          )}
          
          {paymentMethod === 'transfer' && (
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Datos bancarios</h4>
                <p className="text-gray-600 mb-1">Banco: Banco Nacional</p>
                <p className="text-gray-600 mb-1">Cuenta: 1234-5678-9012-3456</p>
                <p className="text-gray-600 mb-1">Titular: MedicalOptional S.A.</p>
                <p className="text-gray-600 mb-1">Referencia: Su número de cédula</p>
                <p className="text-sm text-gray-500 mt-2">
                  Por favor, suba el comprobante de pago a continuación.
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comprobante de pago
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <span>Subir un archivo</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">o arrastre y suelte</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF hasta 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex items-center mb-6">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Acepto los{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                términos y condiciones
              </a>
            </label>
          </div>
          
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(2)}
            >
              Atrás
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isPaymentProcessing}
            >
              Pagar ${selectedService?.precio}
            </Button>
          </div>
        </form>
      </div>
    );
  };
  
  const renderConfirmation = () => {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Pago completado con éxito!</h2>
        <p className="text-gray-600 mb-8">
          Su solicitud de cita ha sido recibida. Recibirá un correo electrónico con los detalles de su cita una vez que sea confirmada por el médico.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8 max-w-md mx-auto text-left">
          <h3 className="font-medium text-gray-900 mb-4">Detalles de la solicitud</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Servicio:</span>
              <span className="font-medium">{selectedService?.nombre}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estado:</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Pendiente
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Referencia de pago:</span>
              <span className="font-medium">REF-{Math.floor(Math.random() * 10000000)}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          Si tiene alguna pregunta, puede contactarnos directamente.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Contactar por WhatsApp
          </a>
          
          <Button
            variant="outline"
            onClick={() => navigate('/dashboard-paciente')}
          >
            Volver al dashboard
          </Button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            {renderStepIndicator()}
            
            {currentStep === 1 && renderServiceSelection()}
            {currentStep === 2 && renderAppointmentDetails()}
            {currentStep === 3 && renderPayment()}
            {currentStep === 4 && renderConfirmation()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;