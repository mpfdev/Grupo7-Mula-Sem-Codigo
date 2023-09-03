import express from 'express';
import prisma from './database/db';

import jogadorRouter from './routes/jogadorRoutes';

const app = express();

app.use(express.json());

app.use('/',jogadorRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

