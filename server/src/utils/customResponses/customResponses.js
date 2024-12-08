import { StatusCodes } from 'http-status-codes';

/**
 * Success Response function
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code (default: 200)
 * @param {string} message - Success message
 * @param {Object} data - Data to be sent in the response (default: null)
 */
export const successResponse = (
  res,
  statusCode = StatusCodes.OK,
  message = 'Success',
  data = null
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

/**
 * Error Response function
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code (default: 400)
 * @param {string} error - Error type or category (e.g., 'Validation Error')
 * @param {string} message - Error message
 * @param {Object} details - Additional error details (default: null)
 */
export const errorResponse = (
  res,
  statusCode = StatusCodes.BAD_REQUEST,
  error = 'Error',
  message = 'An error occurred',
  details = null
) => {
  return res.status(statusCode).json({
    success: false,
    error,
    message,
    details
  });
};
