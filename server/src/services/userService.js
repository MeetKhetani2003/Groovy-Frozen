// import crypto from 'crypto';

import { redisClient } from '../configs/redisConfig.js';
import { sendOtpMail } from '../middlewares/mailer.js';
import { userRepository } from '../repositories/userRepository.js';
import {
  generateResetPasswordToken,
  generateToken,
  verifyResetPasswordToken
} from '../utils/commons/jwt.js';
import { generateOtp } from '../utils/commons/otp.js';
import {
  comparePassword,
  hashPassword
} from '../utils/commons/passsordHash.js';
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

export const forgotPassword = async (data) => {
  try {
    const { email } = data;
    const otp = generateOtp();
    const expiry = Date.now() + 10 * 60 * 1000;
    await redisClient.set(email, JSON.stringify({ otp, expiry }));
    console.log('OTP set in Redis:', await redisClient.get(email));

    await redisClient.expire(email, 600);

    await sendOtpMail({ email, otp });

    return { message: 'OTP sent to your email.' };
  } catch (error) {
    throw new ValidationError('Error sending OTP for forgot password', error);
  }
};

export const verifyOtp = async ({ otp }) => {
  try {
    console.log('OTP:', otp);

    const keys = await redisClient.keys('*');

    let email = null;
    let storedOtp = null;
    let expiry = null;

    for (let key of keys) {
      const otpData = await redisClient.get(key);
      const data = JSON.parse(otpData);

      if (data && data.otp === otp) {
        email = key;
        storedOtp = data.otp;
        expiry = data.expiry;
        break;
      }
    }

    if (!email || !storedOtp || !expiry) {
      throw new ValidationError('Invalid OTP or OTP not found.');
    }

    if (expiry < Date.now()) {
      await redisClient.del(email);
      throw new ValidationError('OTP expired.');
    }

    const token = generateResetPasswordToken(email);

    await redisClient.del(email);
    return {
      message:
        'OTP verified successfully. Please proceed to reset your password.',
      token
    };
  } catch (error) {
    throw new ValidationError('Error verifying OTP.', error);
  }
};
export const resetPassword = async ({ token, newPassword }) => {
  try {
    const tokenData = verifyResetPasswordToken(token);
    if (!tokenData || !tokenData.email) {
      throw new Error('Invalid or expired reset password token.');
    }
    const user = await userRepository.getOne({ email: tokenData.email });
    if (!user) {
      throw new Error('User does not exist.');
    }
    user.password = await hashPassword(newPassword);
    await user.save();
    return { message: 'Password reset successfully.' };
  } catch (error) {
    throw new Error('Error resetting password: ' + error.message);
  }
};
