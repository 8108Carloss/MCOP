import mongoose from 'mongoose';
import { UserRole } from '../types';

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  cedula: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  telefono: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['paciente', 'medico', 'empresa'],
    required: true
  },
  nombreEmpresa: {
    type: String,
    trim: true,
    required: function() {
      return this.role === 'empresa';
    }
  },
  especialidad: {
    type: String,
    trim: true,
    required: function() {
      return this.role === 'medico';
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', userSchema);