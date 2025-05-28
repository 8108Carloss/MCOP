import mongoose from 'mongoose';
import { UserRole } from '../types';

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  cedula: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['paciente', 'medico', 'empresa'],
    required: true,
  },
  nombreEmpresa: {
    type: String,
    required: function() {
      return this.role === 'empresa';
    },
  },
  especialidad: {
    type: String,
    required: function() {
      return this.role === 'medico';
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model('User', userSchema);