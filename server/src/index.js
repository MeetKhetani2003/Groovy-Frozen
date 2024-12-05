import cors from 'cors';
import express from 'express';

import { VariablesConfig } from './configs/variablesConfig.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(VariablesConfig.PORT, () => {
  console.log('Server running on port 3000');
});

export default app;
