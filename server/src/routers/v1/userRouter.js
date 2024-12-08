import express from 'express';
import passport from 'passport';

import {
  signinController,
  signupController
} from '../../controllers/UserController.js';

const app = express.Router();

app.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://localhost:5173/');
  }
);

app.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://localhost:5173/');
  }
);

app.post('/signup', signupController);
app.post('/signin', signinController);

export default app;
