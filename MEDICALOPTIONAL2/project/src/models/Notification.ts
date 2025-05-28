import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
  leida: {
    type: Boolean,
    default: false,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  tipo: {
    type: String,
    enum: ['cita', 'sistema', 'pago'],
    required: true,
  },
});

export const Notification = mongoose.model('Notification', notificationSchema);