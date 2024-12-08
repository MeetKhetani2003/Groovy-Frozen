import { StatusCodes } from 'http-status-codes';
class ValidationError extends Error {
  constructor(message, details = []) {
    super(message);
    this.name = this.constructor.name;
    this.message = message || 'Validation failed';
    this.details = details;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default ValidationError;
