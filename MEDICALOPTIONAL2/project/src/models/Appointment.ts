import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  pacienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  medicoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fecha: {
    type: Date,
  },
  hora: {
    type: String,
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmada', 'cancelada', 'completada'],
    default: 'pendiente',
  },
  tipo: {
    type: String,
    required: true,
  },
  pagado: {
    type: Boolean,
    default: false,
  },
  lugar: String,
  notas: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);