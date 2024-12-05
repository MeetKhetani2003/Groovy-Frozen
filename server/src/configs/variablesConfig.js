import dotenv from 'dotenv';

dotenv.config();

export const VariablesConfig = {
  PORT: process.env.PORT,
  MONGODB_URL_PROD: process.env.MONGO_DB_PROD_URI,
  MONGODB_URL_DEV: process.env.MONGO_DB_DEV_URI,
  JWT_SECRET: process.env.JWT_SECRET
};
