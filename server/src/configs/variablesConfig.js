import dotenv from "dotenv";

dotenv.config();

export const VariablesConfig = {
  PORT: process.env.PORT,
  MONGODB_URL_PROD: process.env.MONGODB_URL_DEV,
  MONGODB_URL_DEV: process.env.MONGODB_URL_DEV,
  JWT_SECRET: process.env.JWT_SECRET,
};
