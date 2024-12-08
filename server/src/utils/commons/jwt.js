import jwt from 'jsonwebtoken';

import { VariablesConfig } from '../../configs/variablesConfig.js';

export const generateToken = (data) => {
  const token = jwt.sign(data, VariablesConfig.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export const verifyToken = (token) => {
  return jwt.verify(token, VariablesConfig.JWT_SECRET);
};
