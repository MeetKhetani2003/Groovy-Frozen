import { verifyToken } from '../utils/commons/jwt';
import ValidationError from '../utils/Errors/validationError';

export const isAuthenticated = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return next(new ValidationError('No token provided'));
  }

  try {
    const response = verifyToken(token);
    req.user = response;
    next();
  } catch (error) {
    return next(new ValidationError('Invalid token', error));
  }
};
