import mongoose from 'mongoose';
import { User } from '../models/User';

const MONGODB_URI = 'mongodb+srv://andresserayap17:NpZkMDsB69SsQgby@basedto.zz2b4yw.mongodb.net/?retryWrites=true&w=majority&appName=BaseDTO';

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
  // User operations
  createUser: async (userData: any) => {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  findUserByEmail: async (email: string) => {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  },

  findUserById: async (id: string) => {
    try {
      return await User.findById(id);
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  },

  // Add more API functions as needed
};