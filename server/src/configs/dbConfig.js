import mongoose from 'mongoose';

import { VariablesConfig } from './variablesConfig.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(VariablesConfig.MONGODB_URL_DEV);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
