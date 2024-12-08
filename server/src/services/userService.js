import { userRepository } from '../repositories/userRepository.js';
import { generateToken } from '../utils/commons/jwt.js';
import { comparePassword } from '../utils/commons/passsordHash.js';
import ValidationError from '../utils/Errors/validationError.js';

export const signupUser = async (data) => {
  try {
    const isUserAlredyExist = await userRepository.getOne({
      email: data.email
    });
    if (isUserAlredyExist) {
      throw new ValidationError('User already exist');
    }
    const newUser = await userRepository.create(data);
    return newUser;
  } catch (error) {
    throw new ValidationError(
      error.message || 'Validation error from signupService'
    );
  }
};

export const signinUser = async (data) => {
  try {
    const user = await userRepository.getOne({
      email: data.email
    });
    if (!user) {
      throw ValidationError('User does not exist');
    }
    const isCorrectPassword = await comparePassword(
      data.password,
      user.password
    );
    if (!isCorrectPassword) {
      throw ValidationError('Invalid password');
    }
    const tokenData = {
      user: user
    };
    const token = await generateToken(tokenData);

    return {
      token: token,
      username: user.username,
      _id: user._id
    };
  } catch (error) {
    throw new ValidationError('Validation error from signinService', error);
  }
};
