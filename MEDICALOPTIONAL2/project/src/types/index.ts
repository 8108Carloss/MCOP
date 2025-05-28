export type UserRole = 'paciente' | 'medico' | 'empresa';

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  cedula: string;
  email: string;
  telefono: string;
  role: UserRole;
}

export interface Patient extends User {
  role: 'paciente';
  historialMedico: HistorialMedico[];
}

export interface Doctor extends User {
  role: 'medico';
  especialidad: string;
  disponibilidad?: Disponibilidad[];
}

export interface Company extends User {
  role: 'empresa';
  nombreEmpresa: string;
}

export interface Cita {
  id: string;
  pacienteId: string;
  medicoId: string;
  fecha?: string;
  hora?: string;
  estado: 'pendiente' | 'confirmada' | 'cancelada' | 'completada';
  tipo: string;
  pagado: boolean;
  lugar?: string;
  notas?: string;
}

export interface HistorialMedico {
  id: string;
  pacienteId: string;
  medicoId: string;
  fecha: string;
  diagnostico: string;
  tratamiento: string;
  notas?: string;
}

export interface Disponibilidad {
  id: string;
  medicoId: string;
  dia: string;
  horaInicio: string;
  horaFin: string;
}

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: 'radiografia' | 'terapia' | 'examen' | 'consulta' | 'otro';
}

export interface Notificacion {
  id: string;
  usuarioId: string;
  mensaje: string;
  leida: boolean;
  fecha: string;
  tipo: 'cita' | 'sistema' | 'pago';
}