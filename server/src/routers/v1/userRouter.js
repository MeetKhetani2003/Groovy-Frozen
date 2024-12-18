import express from 'express';
import passport from 'passport';

import {
  forgotPasswordController,
  resetPasswordController,
  signinController,
  signupController,
  verifyOtpController
} from '../../controllers/UserController.js';
import { generateToken } from '../../utils/commons/jwt.js';

const app = express.Router();

app.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`http://localhost:5173/facebook/callback?token=${token}`);
  }
);

app.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`http://localhost:5173/facebook/callback?token=${token}`);
  }
);
app.post('/signup', signupController);
app.post('/signin', signinController);
app.post('/forgot-password', forgotPasswordController);
app.post('/verify-otp', verifyOtpController);
app.post('/reset-password/:token', resetPasswordController);

export default app;
