import mongoose from 'mongoose';

const medicalHistorySchema = new mongoose.Schema({
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
    required: true,
  },
  diagnostico: {
    type: String,
    required: true,
  },
  tratamiento: {
    type: String,
    required: true,
  },
  notas: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const MedicalHistory = mongoose.model('MedicalHistory', medicalHistorySchema);