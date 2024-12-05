import { userRepository } from '../repositories/userRepository';
import { generateToken } from '../utils/commons/jwt';
import { comparePassword } from '../utils/commons/passsordHash';
import ValidationError from '../utils/Errors/validationError';

export const signupUser = async (data) => {
  try {
    const isUserAlredyExist = await userRepository.getOne({
      email: data.email
    });
    if (isUserAlredyExist) {
      throw ValidationError('User already exist');
    }
    return await userRepository.create(data);
  } catch (error) {
    throw ValidationError('Validation error from signupService', error);
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
    throw ValidationError('Validation error from signinService', error);
  }
};
