import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import Input from '../common/Input';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/andresserayap17@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Mensaje enviado correctamente');
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctenos
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Estamos aquí para ayudarle. No dude en contactarnos para cualquier consulta o información adicional.
          </p>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="bg-blue-600 text-white p-8">
              <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="mt-1">+123 456 7890</p>
                    <p>+123 456 7891</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="mt-1">info@medicaloptional.com</p>
                    <p>citas@medicaloptional.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="mt-1">Av. Principal 123, Ciudad</p>
                    <p>Código Postal 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="mt-1">+123 456 7890</p>
                    <a 
                      href="https://wa.me/+573008973665" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 px-3 py-1.5 border border-white text-sm font-medium rounded-md hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      Chatear ahora
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4">Horario de atención</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Envíenos un mensaje</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <Input
                    label="Nombre"
                    id="nombre"
                    name="nombre"
                    placeholder="Su nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                  
                  <Input
                    label="Apellido"
                    id="apellido"
                    name="apellido"
                    placeholder="Su apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </div>
                
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="andresserayap17@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                
                <Input
                  label="Teléfono"
                  id="telefono"
                  name="telefono"
                  placeholder="+123 456 7890"
                  value={formData.telefono}
                  onChange={handleChange}
                  fullWidth
                  required
                />
                
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Seleccione un asunto</option>
                    <option value="cita">Información sobre citas</option>
                    <option value="servicio">Consulta sobre servicios</option>
                    <option value="precio">Información sobre precios</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="¿Cómo podemos ayudarle?"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" variant="primary" size="lg">
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="mt-12">
          <div className="bg-gray-200 rounded-lg h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817498583495!2d-78.4963235!3d-0.1806532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1645890482733!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;