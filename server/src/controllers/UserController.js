import { StatusCodes } from 'http-status-codes';

import { signinUser, signupUser } from '../services/userService.js';
import {
  errorResponse,
  successResponse
} from '../utils/customResponses/customResponses.js';
import ValidationError from '../utils/Errors/validationError.js';

export const signupController = async (req, res) => {
  try {
    const data = await signupUser(req.body);
    return successResponse(
      res,
      StatusCodes.OK,
      'User signed up successfully',
      data
    );
  } catch (error) {
    // Check if the error is an instance of ValidationError
    if (error instanceof ValidationError) {
      console.log('Controller', error.message);

      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
        details: error.details
      });
    }
    return errorResponse(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Internal Server Error',
      'Error occurred during user signup',
      error.details || []
    );
  }
};

export const signinController = async (req, res) => {
  try {
    await signinUser(req.body);
    return successResponse(res, StatusCodes.OK, 'User signed in successfully');
  } catch (error) {
    return errorResponse(
      res,
      error,
      500,
      'Internal Server Error',
      'An unexpected error occurred'
    );
  }
};
