import mongoose from 'mongoose';
import { User } from '../models/User';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://andresserayap17:NpZkMDsB69SsQgby@basedto.zz2b4yw.mongodb.net/?retryWrites=true&w=majority&appName=BaseDTO';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export const api = {
  createUser: async (userData: any) => {
    try {
      const user = new User(userData);
      const savedUser = await user.save();
      return {
        id: savedUser._id,
        nombre: savedUser.nombre,
        apellido: savedUser.apellido,
        cedula: savedUser.cedula,
        email: savedUser.email,
        telefono: savedUser.telefono,
        role: savedUser.role,
        ...(savedUser.role === 'empresa' && { nombreEmpresa: savedUser.nombreEmpresa }),
        ...(savedUser.role === 'medico' && { especialidad: savedUser.especialidad })
      };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  findUserByEmail: async (email: string) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return null;
      
      return {
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        cedula: user.cedula,
        email: user.email,
        telefono: user.telefono,
        role: user.role,
        password: user.password,
        ...(user.role === 'empresa' && { nombreEmpresa: user.nombreEmpresa }),
        ...(user.role === 'medico' && { especialidad: user.especialidad })
      };
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  },

  findUserById: async (id: string) => {
    try {
      const user = await User.findById(id);
      if (!user) return null;

      return {
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        cedula: user.cedula,
        email: user.email,
        telefono: user.telefono,
        role: user.role,
        ...(user.role === 'empresa' && { nombreEmpresa: user.nombreEmpresa }),
        ...(user.role === 'medico' && { especialidad: user.especialidad })
      };
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  }
};