import express from 'express';

import userRouter from './userRouter.js';
const app = express.Router();

app.use('/users', userRouter);

export default app;
