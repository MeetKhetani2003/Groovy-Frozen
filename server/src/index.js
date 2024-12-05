import cors from 'cors';
import express from 'express';

import { connectDB } from './configs/dbConfig.js';
import { VariablesConfig } from './configs/variablesConfig.js';
import { initPassport } from './middlewares/passport.js';
import apiRouter from './routers/apiRouter.js';

const app = express();

initPassport(app);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(VariablesConfig.PORT, () => {
  console.log(`Server running on port ${VariablesConfig.PORT}`);
  connectDB();
});

export default app;
